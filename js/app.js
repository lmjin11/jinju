// ===== 진주시 가입자 현황 지도 앱 (Leaflet + VWorld) =====

let map;
let markerLayer;
let currentLevel = 'district'; // district | apartment | building
let currentDistrict = null;
let currentApartment = null;
let dataType    = 'broadcast'; // 'broadcast' | 'internet'
let displayMode = 'percent';  // 'number' | 'percent'

// 줌 임계값
const ZOOM_APT  = 16; // 이 줌 이상: 아파트/오피스텔 마커
const ZOOM_BLDG = 18; // 이 줌 이상: 건물동 마커
const MAX_APT_MARKERS = 30; // 뷰포트 내 최대 아파트 마커 수

// 경상남도 지도 범위 제한
const GN_BOUNDS = L.latLngBounds([[34.5, 127.3], [35.7, 129.4]]);

// 건물동 이름 정규화: "1동" → "101동", "201동" → "201동"
function normalizeBldgName(name) {
  const m = name.match(/^(\d+)동$/);
  if (m) {
    const n = parseInt(m[1]);
    if (n < 100) return `${100 + n}동`;
  }
  return name;
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderHeaderStats();
  renderDistrictList();
  setupSearch();
  setupSort();
});

// ===== 지도 초기화 =====
function initMap() {
  map = L.map('map', {
    center: [35.1798, 128.1076],
    zoom: 12,
    minZoom: 10,
    maxZoom: 19,
    maxBounds: GN_BOUNDS,
    maxBoundsViscosity: 0.9,
    zoomControl: true
  });

  const VWORLD_KEY = 'EF36D0B5-C5A2-3EB0-A5F0-94C19D864C59';
  L.tileLayer('https://api.vworld.kr/req/wmts/1.0.0/' + VWORLD_KEY + '/Base/{z}/{y}/{x}.png', {
    attribution: '&copy; <a href="https://www.vworld.kr">VWorld</a> 국토교통부',
    maxZoom: 19,
    minZoom: 6
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);

  map.on('zoomend moveend', onMapChange);
  onMapChange();
}

// ===== 줌/이동 기반 마커 자동 갱신 =====
function onMapChange() {
  const zoom = map.getZoom();
  const bounds = map.getBounds();

  if (zoom >= ZOOM_BLDG) {
    showBuildingsInView(bounds);
  } else if (zoom >= ZOOM_APT) {
    showApartmentsInView(bounds);
  } else {
    if (currentLevel !== 'district') {
      currentLevel = 'district';
      currentDistrict = null;
      currentApartment = null;
      renderDistrictList();
      updateBreadcrumb();
    }
    renderDistrictMarkersOnly();
  }
}

// 동별 파이 마커 렌더 (setView 없이)
function renderDistrictMarkersOnly() {
  clearMarkers();
  const maxHH = Math.max(...JINJU_DATA.districts.map(d => d.households));
  JINJU_DATA.districts.forEach(district => {
    const size = (district.households / maxHH) * 55 + 30;
    const { bLabel, iLabel } = getLabels(district.broadcast, district.internet, district.households);
    // 아파트/오피스텔 가입자 vs 단독주택 가입자 분리 (동적 계산)
    const aptSub = district.apartments.filter(a => a.type !== 'officetel').reduce((s, a) => s + (dataType === 'broadcast' ? a.broadcast : a.internet), 0);
    const officSub= district.apartments.filter(a => a.type === 'officetel').reduce((s, a) => s + (dataType === 'broadcast' ? a.broadcast : a.internet), 0);
    const totalSub = dataType === 'broadcast' ? district.broadcast : district.internet;
    const singleSub = Math.max(0, totalSub - aptSub - officSub);
    const marker = createPieMarker(district.lat, district.lng, size, district, bLabel, iLabel, district.households, aptSub, singleSub);
    marker.on('click', () => drillDownToApartments(district.id));
  });
}

// 뷰포트 내 아파트/오피스텔 마커 표시
function showApartmentsInView(bounds) {
  clearMarkers();
  currentLevel = 'apartment';
  currentApartment = null;

  const visible = [];
  for (const d of JINJU_DATA.districts) {
    for (const apt of d.apartments) {
      if (bounds.contains([apt.lat, apt.lng])) {
        visible.push({ apt, district: d });
      }
    }
  }

  if (visible.length === 0) return;

  // 방송 가입자 수 기준 상위 MAX_APT_MARKERS개만 표시
  visible.sort((a, b) => b.apt.broadcast - a.apt.broadcast);
  const limited = visible.slice(0, MAX_APT_MARKERS);

  const maxHH = Math.max(...limited.map(v => v.apt.households));
  limited.forEach(({ apt, district }, i) => {
    const size = (apt.households / maxHH) * 45 + 30;
    const { bLabel, iLabel } = getLabels(apt.broadcast, apt.internet, apt.households);
    const aptRate = (dataType === 'broadcast' ? apt.broadcast : apt.internet) / apt.households * 100;
    const marker = createCircleMarker(
      apt.lat, apt.lng, size,
      apt.name,
      bLabel,
      iLabel,
      apt.type === 'officetel',
      apt.households,
      aptRate,
      true   // 라벨 항상 위쪽 (VWorld 건물 아이콘 바로 위)
    );
    marker.on('click', () => {
      currentDistrict = district;
      drillDownToBuildings(apt.id);
    });
  });

  // 사이드바: 단독주택 카드 (currentDistrict가 있을 때)
  const list = document.getElementById('dataList');
  let singleCard = '';
  if (currentDistrict) {
    const aptHH     = currentDistrict.apartments.filter(a => a.type !== 'officetel').reduce((s, a) => s + a.households, 0);
    const offHH     = currentDistrict.apartments.filter(a => a.type === 'officetel').reduce((s, a) => s + a.households, 0);
    const singleHH  = Math.max(0, currentDistrict.households - aptHH - offHH);
    if (singleHH > 0) {
      const aptSub    = currentDistrict.apartments.filter(a => a.type !== 'officetel').reduce((s, a) => s + (dataType === 'broadcast' ? a.broadcast : a.internet), 0);
      const offSub    = currentDistrict.apartments.filter(a => a.type === 'officetel').reduce((s, a) => s + (dataType === 'broadcast' ? a.broadcast : a.internet), 0);
      const totalSub  = dataType === 'broadcast' ? currentDistrict.broadcast : currentDistrict.internet;
      const singleSub = Math.max(0, totalSub - aptSub - offSub);
      const singleRate = ((singleSub / singleHH) * 100).toFixed(1);
      const aptHHtotal = aptHH + offHH;
      const aptSubTotal = aptSub + offSub;
      const aptRate = aptHHtotal > 0 ? ((aptSubTotal / aptHHtotal) * 100).toFixed(1) : 0;
      const label = dataType === 'broadcast' ? '방송' : '인터넷';
      singleCard = `
        <li style="cursor:default;background:#f8fafc;border-left:3px solid #e2e8f0;margin-bottom:4px;">
          <div style="display:flex;gap:6px;">
            <div style="flex:1;background:#fffbeb;border-radius:6px;padding:6px 8px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px;">
                <span style="font-size:11px;font-weight:600;color:#92400e;">
                  <span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span>단독주택
                </span>
                <span style="font-size:12px;font-weight:700;color:#b45309;">${singleRate}%</span>
              </div>
              <div style="font-size:11px;color:#78716c;">${singleHH.toLocaleString()}세대</div>
              <div style="font-size:11px;color:#b45309;">${label} ${singleSub.toLocaleString()}가입</div>
            </div>
            <div style="flex:1;background:#eff6ff;border-radius:6px;padding:6px 8px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px;">
                <span style="font-size:11px;font-weight:600;color:#1e40af;">
                  <span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:#3b82f6;margin-right:4px;vertical-align:middle;"></span>공동주택
                </span>
                <span style="font-size:12px;font-weight:700;color:#1d4ed8;">${aptRate}%</span>
              </div>
              <div style="font-size:11px;color:#64748b;">${aptHHtotal.toLocaleString()}세대</div>
              <div style="font-size:11px;color:#1d4ed8;">${label} ${aptSubTotal.toLocaleString()}가입</div>
            </div>
          </div>
        </li>`;
    }
  }

  list.innerHTML = singleCard + visible.map(({ apt }) => {
    const bRate = (apt.broadcast / apt.households * 100).toFixed(1);
    const iRate = (apt.internet / apt.households * 100).toFixed(1);
    const bStat = displayMode === 'percent' ? `방송 ${bRate}%` : `방송 ${apt.broadcast.toLocaleString()}`;
    const iStat = displayMode === 'percent' ? `인터넷 ${iRate}%` : `인터넷 ${apt.internet.toLocaleString()}`;
    const badge = apt.type === 'officetel'
      ? '<span style="font-size:10px;background:#fef3c7;color:#92400e;padding:1px 5px;border-radius:4px;margin-left:4px;">오피스텔</span>'
      : '';
    return `
      <li data-id="${apt.id}" onclick="onAptListClick('${apt.id}')">
        <div class="list-item-header">
          <span class="list-item-name">${apt.name}${badge}</span>
          <span class="list-item-arrow">&rsaquo;</span>
        </div>
        <div class="list-item-stats">
          <div class="list-stat"><span class="dot broadcast"></span><span class="value">${bStat}</span></div>
          <div class="list-stat"><span class="dot internet"></span><span class="value">${iStat}</span></div>
          <div class="list-stat"><span class="dot household"></span><span class="value">${apt.households}세대</span></div>
        </div>
        <div class="list-item-bar"><div class="bar-broadcast" style="width:${bRate}%"></div></div>
      </li>`;
  }).join('');

  updateBreadcrumb();
}

function onAptListClick(aptId) {
  for (const d of JINJU_DATA.districts) {
    const apt = d.apartments.find(a => a.id === aptId);
    if (apt) {
      currentDistrict = d;
      map.setView([apt.lat, apt.lng], ZOOM_BLDG);
      return;
    }
  }
}

// 세대수 기반 동 목록 생성 (실제 데이터 없을 때)
function getBuildingsForApt(apt) {
  if (apt.buildings && apt.buildings.length > 0) return apt.buildings;
  const n = Math.max(1, Math.round(apt.households / 90));
  const hh = Math.round(apt.households / n);
  const bc = Math.round(apt.broadcast / n);
  const ic = Math.round(apt.internet / n);
  return Array.from({ length: n }, (_, i) => ({
    id: `${apt.id}_b${i}`,
    name: `${101 + i}동`,
    households: hh,
    broadcast: bc,
    internet: ic
  }));
}

// 뷰포트 내 건물동 마커 표시 (가까운 아파트 최대 3개)
function showBuildingsInView(bounds) {
  const center = map.getCenter();

  // 뷰포트 내 or 근처 아파트를 거리순 정렬, 최대 3개
  const nearby = [];
  for (const d of JINJU_DATA.districts) {
    for (const apt of d.apartments) {
      const dist = Math.hypot(apt.lat - center.lat, apt.lng - center.lng);
      if (dist < 0.03) nearby.push({ apt, district: d, dist });
    }
  }
  if (nearby.length === 0) return;
  nearby.sort((a, b) => a.dist - b.dist);
  const selected = nearby.slice(0, 4);

  // 주 아파트(가장 가까운 것)가 바뀌지 않으면 재렌더 생략
  const primary = selected[0].apt;
  if (currentApartment && currentApartment.id === primary.id) return;

  clearMarkers();
  currentLevel = 'building';
  currentDistrict = selected[0].district;
  currentApartment = primary;

  // 전체 건물 중 최대 세대수 (크기 기준)
  let globalMaxHH = 1;
  selected.forEach(({ apt }) => {
    getBuildingsForApt(apt).forEach(b => { if (b.households > globalMaxHH) globalMaxHH = b.households; });
  });

  // 모든 건물 위치 사전 계산
  const bldgMarkerData = [];
  selected.forEach(({ apt }) => {
    const buildings = getBuildingsForApt(apt);
    const n = buildings.length;
    buildings.forEach((bldg, i) => {
      const lat = bldg.lat || apt.lat + (0.0004 + Math.min(n, 10) * 0.00004) * Math.sin((2 * Math.PI * i) / n - Math.PI / 2);
      const lng = bldg.lng || apt.lng + (0.0004 + Math.min(n, 10) * 0.00004) * Math.cos((2 * Math.PI * i) / n - Math.PI / 2);
      bldgMarkerData.push({ bldg, lat, lng });
    });
  });

  const bldgLabelAboves = computeLabelAbove(bldgMarkerData.map(m => ({ lat: m.lat, lng: m.lng })));
  bldgMarkerData.forEach(({ bldg, lat, lng }, idx) => {
    const size = (bldg.households / globalMaxHH) * 20 + 28;
    const { bLabel, iLabel } = getLabels(bldg.broadcast, bldg.internet, bldg.households);
    const bldgRate = (dataType === 'broadcast' ? bldg.broadcast : bldg.internet) / bldg.households * 100;
    const marker = createCircleMarker(lat, lng, size, normalizeBldgName(bldg.name), bLabel, iLabel, false, bldg.households, bldgRate, bldgLabelAboves[idx]);
    marker.on('click', () => showBuildingInfo(bldg, lat, lng));
  });

  renderBuildingList(primary, getBuildingsForApt(primary));
  updateBreadcrumb();
}

// ===== 헤더 통계 =====
function renderHeaderStats() {
  const totalHouseholds = JINJU_DATA.districts.reduce((s, d) => s + d.households, 0);
  const totalBroadcast = JINJU_DATA.districts.reduce((s, d) => s + d.broadcast, 0);
  const totalInternet = JINJU_DATA.districts.reduce((s, d) => s + d.internet, 0);
  document.getElementById('headerStats').innerHTML = `
    <div class="stat-box">
      <div class="stat-label">총 세대수</div>
      <div class="stat-value household">${totalHouseholds.toLocaleString()}</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">방송 가입자</div>
      <div class="stat-value broadcast">${totalBroadcast.toLocaleString()}</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">인터넷 가입자</div>
      <div class="stat-value internet">${totalInternet.toLocaleString()}</div>
    </div>
  `;
}

// 라벨 겹침 방지: 각 마커를 가장 가까운 이웃 기준으로 반대 방향에 라벨 배치
function computeLabelAbove(positions) {
  return positions.map((m, i) => {
    if (positions.length === 1) return false;
    let minDist = Infinity, nearestDy = 0;
    positions.forEach((other, j) => {
      if (i === j) return;
      const dy = m.lat - other.lat;
      const dx = m.lng - other.lng;
      const dist = Math.hypot(dy, dx);
      if (dist < minDist) { minDist = dist; nearestDy = dy; }
    });
    // 거의 수평이면 인덱스 교대, 그 외엔 위쪽 마커는 라벨을 위로
    if (Math.abs(nearestDy) < 0.00005) return i % 2 === 0;
    return nearestDy > 0;
  });
}

// ===== 마커 관리 =====
function clearMarkers() {
  markerLayer.clearLayers();
  map.closePopup();
}

function createCircleMarker(lat, lng, size, label, broadcastCount, internetCount, isOfficetel, households, rate, labelAbove) {
  const minSize = 36;
  const maxSize = 70;
  const adjustedSize = Math.max(minSize, Math.min(maxSize, size));
  const fontSize = Math.max(9, adjustedSize / 5);
  const pct = (rate != null) ? Math.min(100, Math.max(0, rate)).toFixed(1) : 50;
  const gradient = isOfficetel
    ? 'linear-gradient(135deg, #f59e0b 50%, #ef4444 50%)'
    : `conic-gradient(#3b82f6 0% ${pct}%, #cbd5e1 ${pct}% 100%)`;
  const hhText = households ? `<span style="color:#94a3b8;font-size:10px;font-weight:400;margin-left:3px;">${abbreviateNumber(households)}세대</span>` : '';
  const nameTag = `<div style="
      background: ${isOfficetel ? 'rgba(254,243,199,0.97)' : 'rgba(255,255,255,0.95)'};
      padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 600;
      color: #1e293b; white-space: nowrap; box-shadow: 0 1px 4px rgba(0,0,0,0.1);
      ${labelAbove ? 'margin-bottom:4px;' : 'margin-top:4px;'}
    ">${isOfficetel ? '🏢 ' : ''}${label}${hhText}</div>`;
  const circle = `<div style="
      width:${adjustedSize}px; height:${adjustedSize}px; background:${gradient};
      border-radius:50%; opacity:0.85; border:3px solid rgba(255,255,255,0.9);
      box-shadow:0 2px 8px rgba(0,0,0,0.25); display:flex; flex-direction:column;
      align-items:center; justify-content:center; color:#fff;
      font-size:${fontSize}px; font-weight:700; text-shadow:0 1px 2px rgba(0,0,0,0.3); line-height:1.2;
    "><span>${broadcastCount}</span><span style="font-size:${fontSize * 0.85}px;opacity:0.9;">${internetCount}</span></div>`;

  const icon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;">
      ${labelAbove ? nameTag + circle : circle + nameTag}
    </div>`,
    iconSize: [adjustedSize, adjustedSize + 20],
    iconAnchor: [adjustedSize / 2, labelAbove ? adjustedSize / 2 + 20 : adjustedSize / 2]
  });

  const marker = L.marker([lat, lng], { icon: icon });
  markerLayer.addLayer(marker);
  return marker;
}

// ===== 표시 레이블 생성 =====
function getLabels(broadcast, internet, households) {
  const val = dataType === 'broadcast' ? broadcast : internet;
  const bLabel = displayMode === 'percent'
    ? (val / households * 100).toFixed(1) + '%'
    : abbreviateNumber(val);
  return { bLabel, iLabel: '' };
}

// ===== 데이터/표시 모드 선택 =====
function setDataType(type) {
  dataType = type;
  document.querySelectorAll('[data-dtype]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dtype === type);
  });
  _refreshView();
}

function setDisplayMode(mode) {
  displayMode = mode;
  document.querySelectorAll('[data-dmode]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dmode === mode);
  });
  _refreshView();
}

function _refreshView() {
  onMapChange();
  if (map.getZoom() < ZOOM_APT) renderDistrictList();
}

// SVG 파이 조각 경로 생성 헬퍼
function _pieSlice(cx, cy, r, a0, a1) {
  if (Math.abs(a1 - a0) < 0.0001) return '';
  const x1 = (cx + r * Math.cos(a0)).toFixed(2), y1 = (cy + r * Math.sin(a0)).toFixed(2);
  const x2 = (cx + r * Math.cos(a1)).toFixed(2), y2 = (cy + r * Math.sin(a1)).toFixed(2);
  const la = (a1 - a0) > Math.PI ? 1 : 0;
  return `<path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${la} 1 ${x2} ${y2} Z"`;
}

// ===== 동별 파이 마커 (아파트 가입=파랑, 단독 가입=노랑, 미가입=회색) =====
function createPieMarker(lat, lng, size, district, bLabel, iLabel, households, aptSub, singleSub) {
  const minSize = 50, maxSize = 84;
  const s = Math.max(minSize, Math.min(maxSize, size));
  const r = s / 2;
  const ri = r - 3;

  const hh = households || 1;
  const aptPct   = Math.min(1, Math.max(0, aptSub   / hh));
  const singlePct= Math.min(1 - aptPct, Math.max(0, singleSub / hh));
  const totalPct = aptPct + singlePct;

  const a0 = -Math.PI / 2;  // 12시 방향 시작
  const a1 = a0 + aptPct    * 2 * Math.PI;  // 아파트 끝
  const a2 = a1 + singlePct * 2 * Math.PI;  // 단독 끝

  let pieSvg = `<circle cx="${r}" cy="${r}" r="${ri}" fill="#cbd5e1"/>`;  // 미가입(회색)
  if (aptPct >= 0.999) {
    pieSvg = `<circle cx="${r}" cy="${r}" r="${ri}" fill="#3b82f6"/>`;
  } else {
    if (aptPct > 0.001)
      pieSvg += `${_pieSlice(r, r, ri, a0, a1)} fill="#3b82f6"/>`;  // 파랑: 아파트
    if (singlePct > 0.001)
      pieSvg += `${_pieSlice(r, r, ri, a1, a2)} fill="#f59e0b"/>`;  // 노랑: 단독
  }

  // SVG 텍스트로 직접 렌더
  const single = !iLabel;
  const fs1 = Math.max(11, s / (single ? 4.2 : 4.8));
  const fs2 = Math.max(9, s / 6.2);
  const ty1 = single ? r + fs1 * 0.38 : r - 1;
  const text2 = single ? '' : `<text x="${r}" y="${r + fs1}" text-anchor="middle" dominant-baseline="auto"
            font-size="${fs2.toFixed(1)}" font-weight="600" fill="rgba(255,255,255,0.92)"
            style="paint-order:stroke;stroke:rgba(0,0,0,0.3);stroke-width:1.5px;">${iLabel}</text>`;
  const icon = L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;">
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="filter:drop-shadow(0 2px 5px rgba(0,0,0,0.22));">
          ${pieSvg}
          <circle cx="${r}" cy="${r}" r="${ri}" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="2"/>
          <text x="${r}" y="${ty1.toFixed(1)}" text-anchor="middle" dominant-baseline="auto"
            font-size="${fs1.toFixed(1)}" font-weight="700" fill="white"
            style="paint-order:stroke;stroke:rgba(0,0,0,0.35);stroke-width:2px;">${bLabel}</text>
          ${text2}
        </svg>
        <div style="margin-top:2px;background:rgba(255,255,255,0.95);padding:1px 7px;border-radius:8px;font-size:11px;font-weight:600;color:#1e293b;white-space:nowrap;">${district.name}${households ? `<span style="color:#94a3b8;font-size:10px;font-weight:400;margin-left:3px;">${households.toLocaleString()}세대</span>` : ''}</div>
      </div>`,
    iconSize: [s, s + 20],
    iconAnchor: [s / 2, s / 2]
  });

  const marker = L.marker([lat, lng], { icon });
  markerLayer.addLayer(marker);
  return marker;
}

// ===== 팝업 생성 =====
function openInfoPopup(lat, lng, content) {
  L.popup({
    maxWidth: 280,
    className: 'custom-popup'
  })
    .setLatLng([lat, lng])
    .setContent(content)
    .openOn(map);
}

// ===== 동별 뷰 (클릭 네비게이션용) =====
function showDistrictMarkers() {
  map.setView([35.1798, 128.1076], 12);
  // zoomend 이벤트가 onMapChange를 자동 호출
}

function showDistrictInfo(district) {
  map.panTo([district.lat, district.lng]);
  const broadcastRate = ((district.broadcast / district.households) * 100).toFixed(1);
  const internetRate = ((district.internet / district.households) * 100).toFixed(1);

  const content = `
    <div class="info-window">
      <div class="info-title">${district.name}</div>
      <div class="info-row">
        <span class="info-label">총 세대수</span>
        <span class="info-value">${district.households.toLocaleString()}</span>
      </div>
      <div class="info-row">
        <span class="info-label">방송 가입자</span>
        <span class="info-value broadcast">${district.broadcast.toLocaleString()}</span>
      </div>
      <div class="info-row">
        <span class="info-label">인터넷 가입자</span>
        <span class="info-value internet">${district.internet.toLocaleString()}</span>
      </div>
      <div class="info-rate">
        <div class="info-row">
          <span class="info-label">방송 가입률</span>
          <span class="info-value">${broadcastRate}%</span>
        </div>
        <div class="info-bar">
          <div class="info-bar-fill" style="width: ${broadcastRate}%; background: #3b82f6;"></div>
        </div>
      </div>
      <div class="info-rate" style="margin-top:4px;">
        <div class="info-row">
          <span class="info-label">인터넷 가입률</span>
          <span class="info-value">${internetRate}%</span>
        </div>
        <div class="info-bar">
          <div class="info-bar-fill" style="width: ${internetRate}%; background: #10b981;"></div>
        </div>
      </div>
      <button class="info-btn" onclick="drillDownToApartments('${district.id}')">
        아파트별 상세보기 &rarr;
      </button>
    </div>
  `;

  openInfoPopup(district.lat, district.lng, content);
  highlightListItem(district.id);
}

// ===== 아파트별 뷰 (줌 이동으로 자동 트리거) =====
function drillDownToApartments(districtId) {
  const district = JINJU_DATA.districts.find(d => d.id === districtId);
  if (!district) return;
  currentDistrict = district;
  map.setView([district.lat, district.lng], ZOOM_APT);
  // zoomend → onMapChange → showApartmentsInView 자동 호출
}

function showApartmentInfo(apt) {
  map.panTo([apt.lat, apt.lng]);
  const broadcastRate = ((apt.broadcast / apt.households) * 100).toFixed(1);
  const internetRate = ((apt.internet / apt.households) * 100).toFixed(1);

  const content = `
    <div class="info-window">
      <div class="info-title">${apt.name}</div>
      <div class="info-row">
        <span class="info-label">총 세대수</span>
        <span class="info-value">${apt.households.toLocaleString()}</span>
      </div>
      <div class="info-row">
        <span class="info-label">방송 가입자</span>
        <span class="info-value broadcast">${apt.broadcast.toLocaleString()}</span>
      </div>
      <div class="info-row">
        <span class="info-label">인터넷 가입자</span>
        <span class="info-value internet">${apt.internet.toLocaleString()}</span>
      </div>
      <div class="info-rate">
        <div class="info-row">
          <span class="info-label">방송 가입률</span>
          <span class="info-value">${broadcastRate}%</span>
        </div>
        <div class="info-bar">
          <div class="info-bar-fill" style="width: ${broadcastRate}%; background: #3b82f6;"></div>
        </div>
      </div>
      <div class="info-rate" style="margin-top:4px;">
        <div class="info-row">
          <span class="info-label">인터넷 가입률</span>
          <span class="info-value">${internetRate}%</span>
        </div>
        <div class="info-bar">
          <div class="info-bar-fill" style="width: ${internetRate}%; background: #10b981;"></div>
        </div>
      </div>
      <button class="info-btn" onclick="drillDownToBuildings('${apt.id}')">
        동(건물)별 상세보기 &rarr;
      </button>
    </div>
  `;

  openInfoPopup(apt.lat, apt.lng, content);
  highlightListItem(apt.id);
}

// ===== 건물동별 뷰 (줌 이동으로 자동 트리거) =====
function drillDownToBuildings(aptId) {
  for (const d of JINJU_DATA.districts) {
    const apt = d.apartments.find(a => a.id === aptId);
    if (apt) {
      map.setView([apt.lat, apt.lng], ZOOM_BLDG);
      return;
    }
  }
}

function showBuildingInfo(bldg, lat, lng) {
  map.panTo([lat, lng]);
  const broadcastRate = ((bldg.broadcast / bldg.households) * 100).toFixed(1);
  const internetRate = ((bldg.internet / bldg.households) * 100).toFixed(1);

  const content = `
    <div class="info-window">
      <div class="info-title">${normalizeBldgName(bldg.name)}</div>
      <div class="info-row">
        <span class="info-label">세대수</span>
        <span class="info-value">${bldg.households.toLocaleString()}</span>
      </div>
      <div class="info-row">
        <span class="info-label">방송 가입</span>
        <span class="info-value broadcast">${bldg.broadcast.toLocaleString()}</span>
      </div>
      <div class="info-row">
        <span class="info-label">인터넷 가입</span>
        <span class="info-value internet">${bldg.internet.toLocaleString()}</span>
      </div>
      <div class="info-rate">
        <div class="info-row">
          <span class="info-label">방송 가입률</span>
          <span class="info-value">${broadcastRate}%</span>
        </div>
        <div class="info-bar">
          <div class="info-bar-fill" style="width: ${broadcastRate}%; background: #3b82f6;"></div>
        </div>
      </div>
      <div class="info-rate" style="margin-top:4px;">
        <div class="info-row">
          <span class="info-label">인터넷 가입률</span>
          <span class="info-value">${internetRate}%</span>
        </div>
        <div class="info-bar">
          <div class="info-bar-fill" style="width: ${internetRate}%; background: #10b981;"></div>
        </div>
      </div>
    </div>
  `;

  openInfoPopup(lat, lng, content);
}

// ===== 사이드바 리스트 렌더링 =====
function renderDistrictList(sortKey) {
  const list = document.getElementById('dataList');
  let districts = [...JINJU_DATA.districts];
  districts = sortItems(districts, sortKey);

  list.innerHTML = districts.map(d => {
    const bRate = (d.broadcast / d.households * 100).toFixed(1);
    const iRate = (d.internet / d.households * 100).toFixed(1);
    const bStat = displayMode === 'percent' ? `방송 ${bRate}%` : `방송 ${d.broadcast.toLocaleString()}`;
    const iStat = displayMode === 'percent' ? `인터넷 ${iRate}%` : `인터넷 ${d.internet.toLocaleString()}`;
    // 단독주택 = 전체세대 - 아파트세대 - 오피스텔세대 (동적 계산)
    const aptHH      = d.apartments.filter(a => a.type !== 'officetel').reduce((s, a) => s + a.households, 0);
    const officetelHH= d.apartments.filter(a => a.type === 'officetel').reduce((s, a) => s + a.households, 0);
    const singleHH   = Math.max(0, d.households - aptHH - officetelHH);
    const piebar = `
      <div style="display:flex;height:3px;border-radius:2px;overflow:hidden;margin-top:3px;">
        <div style="flex:${aptHH};background:#3b82f6;opacity:0.7;"></div>
        <div style="flex:${officetelHH};background:#ef4444;opacity:0.7;"></div>
        <div style="flex:${singleHH};background:#f59e0b;opacity:0.7;"></div>
      </div>`;
    const row2Parts = [];
    if (singleHH > 0) row2Parts.push(`<span style="color:#b45309;"><span style="display:inline-block;width:7px;height:7px;border-radius:2px;background:#f59e0b;margin-right:3px;vertical-align:middle;"></span>단독 ${singleHH.toLocaleString()}세대</span>`);
    if (aptHH > 0)    row2Parts.push(`<span style="color:#1d4ed8;"><span style="display:inline-block;width:7px;height:7px;border-radius:2px;background:#3b82f6;margin-right:3px;vertical-align:middle;"></span>공동 ${aptHH.toLocaleString()}세대</span>`);
    if (officetelHH > 0) row2Parts.push(`<span style="color:#b91c1c;"><span style="display:inline-block;width:7px;height:7px;border-radius:2px;background:#ef4444;margin-right:3px;vertical-align:middle;"></span>오피스텔 ${officetelHH.toLocaleString()}세대</span>`);
    return `
      <li data-id="${d.id}" onclick="handleListClick('${d.id}')">
        <div class="list-item-header">
          <span class="list-item-name">${d.name}</span>
          <span class="list-item-arrow">&rsaquo;</span>
        </div>
        <div class="list-item-stats">
          <div class="list-stat"><span class="dot broadcast"></span><span class="value">${bStat}</span></div>
          <div class="list-stat"><span class="dot internet"></span><span class="value">${iStat}</span></div>
        </div>
        ${row2Parts.length > 0 ? `<div class="list-item-stats" style="margin-top:2px;font-size:11px;gap:6px;">${row2Parts.join('')}</div>` : ''}
        <div class="list-item-bar"><div class="bar-broadcast" style="width:${bRate}%"></div></div>
        ${piebar}
      </li>
    `;
  }).join('');
}

function renderApartmentList(district, sortKey) {
  const list = document.getElementById('dataList');
  let apartments = [...district.apartments];
  apartments = sortItems(apartments, sortKey, false);

  // 단독주택 계산
  const aptHH      = apartments.filter(a => a.type !== 'officetel').reduce((s, a) => s + a.households, 0);
  const offHH      = apartments.filter(a => a.type === 'officetel').reduce((s, a) => s + a.households, 0);
  const singleHH   = Math.max(0, district.households - aptHH - offHH);
  const aptSub     = apartments.filter(a => a.type !== 'officetel').reduce((s, a) => s + (dataType === 'broadcast' ? a.broadcast : a.internet), 0);
  const offSub     = apartments.filter(a => a.type === 'officetel').reduce((s, a) => s + (dataType === 'broadcast' ? a.broadcast : a.internet), 0);
  const totalSub   = dataType === 'broadcast' ? district.broadcast : district.internet;
  const singleSub  = Math.max(0, totalSub - aptSub - offSub);
  const singleRate = singleHH > 0 ? ((singleSub / singleHH) * 100).toFixed(1) : 0;

  const singleCard = singleHH > 0 ? `
    <li style="cursor:default;background:#fffbeb;border-left:3px solid #f59e0b;margin-bottom:4px;">
      <div class="list-item-header">
        <span class="list-item-name" style="color:#92400e;">
          <span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#f59e0b;margin-right:6px;vertical-align:middle;"></span>
          단독주택
        </span>
        <span style="font-size:13px;font-weight:600;color:#b45309;">${singleRate}%</span>
      </div>
      <div class="list-item-stats">
        <div class="list-stat"><span class="value">${singleHH.toLocaleString()}세대</span></div>
        <div class="list-stat"><span class="value" style="color:#b45309;">${dataType === 'broadcast' ? '방송' : '인터넷'} ${singleSub.toLocaleString()}가입</span></div>
      </div>
      <div class="list-item-bar">
        <div style="height:100%;width:${singleRate}%;background:#f59e0b;border-radius:2px;"></div>
      </div>
    </li>
  ` : '';

  list.innerHTML = singleCard + apartments.map(a => {
    const broadcastRate = ((a.broadcast / a.households) * 100).toFixed(1);
    const badge = a.type === 'officetel'
      ? '<span style="font-size:10px;background:#fef3c7;color:#92400e;padding:1px 5px;border-radius:4px;margin-left:4px;">오피스텔</span>'
      : '';
    return `
      <li data-id="${a.id}" onclick="handleListClick('${a.id}')">
        <div class="list-item-header">
          <span class="list-item-name">${a.name}${badge}</span>
          <span class="list-item-arrow">&rsaquo;</span>
        </div>
        <div class="list-item-stats">
          <div class="list-stat">
            <span class="dot broadcast"></span>
            <span class="value">방송 ${a.broadcast.toLocaleString()}</span>
          </div>
          <div class="list-stat">
            <span class="dot internet"></span>
            <span class="value">인터넷 ${a.internet.toLocaleString()}</span>
          </div>
          <div class="list-stat">
            <span class="dot household"></span>
            <span class="value">${a.households}세대</span>
          </div>
        </div>
        <div class="list-item-bar">
          <div class="bar-broadcast" style="width: ${broadcastRate}%"></div>
        </div>
      </li>
    `;
  }).join('');
}

function renderBuildingList(apt, buildings) {
  const list = document.getElementById('dataList');
  const isEstimated = !apt.buildings || apt.buildings.length === 0;

  list.innerHTML = `
    <li style="cursor:default; background:#f8fafc;">
      ${isEstimated ? '<div style="font-size:11px;color:#94a3b8;padding:6px 12px 2px;">* 동별 세대수 추정값</div>' : ''}
      <table class="building-table">
        <thead>
          <tr><th>건물동</th><th>세대수</th><th>방송</th><th>인터넷</th><th>방송률</th></tr>
        </thead>
        <tbody>
          ${buildings.map(b => {
            const rate = ((b.broadcast / b.households) * 100).toFixed(1);
            return `<tr>
              <td><strong>${normalizeBldgName(b.name)}</strong></td>
              <td>${b.households}</td>
              <td style="color:#2563eb;font-weight:600;">${b.broadcast}</td>
              <td style="color:#059669;font-weight:600;">${b.internet}</td>
              <td>${rate}%</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </li>
    <li style="cursor:default; padding:12px 16px; background:#eff6ff; text-align:center; font-size:13px;">
      <strong>${apt.name}</strong> 합계 &nbsp;|&nbsp;
      방송 ${apt.broadcast.toLocaleString()} · 인터넷 ${apt.internet.toLocaleString()} · ${apt.households}세대
    </li>
  `;
}

// ===== 리스트 클릭 핸들러 =====
function handleListClick(id) {
  if (currentLevel === 'district') {
    const district = JINJU_DATA.districts.find(d => d.id === id);
    if (district) showDistrictInfo(district);
  } else if (currentLevel === 'apartment') {
    const apt = currentDistrict.apartments.find(a => a.id === id);
    if (apt) showApartmentInfo(apt);
  }
}

function highlightListItem(id) {
  document.querySelectorAll('#dataList li').forEach(li => {
    li.classList.toggle('active', li.dataset.id === id);
  });
}

// ===== 빵가루 네비게이션 =====
function updateBreadcrumb() {
  const nav = document.getElementById('breadcrumb');
  let html = '';

  if (currentLevel === 'district') {
    html = '<span class="crumb active">진주시</span>';
  } else if (currentLevel === 'apartment') {
    const dName = currentDistrict ? currentDistrict.name : '해당 동';
    html = `
      <span class="crumb" onclick="goToDistricts()">진주시</span>
      <span class="crumb-sep">&rsaquo;</span>
      <span class="crumb active">${dName}</span>
    `;
  } else if (currentLevel === 'building') {
    const dName = currentDistrict ? currentDistrict.name : '해당 동';
    const aName = currentApartment ? currentApartment.name : '해당 아파트';
    const dId = currentDistrict ? currentDistrict.id : '';
    html = `
      <span class="crumb" onclick="goToDistricts()">진주시</span>
      <span class="crumb-sep">&rsaquo;</span>
      <span class="crumb" onclick="drillDownToApartments('${dId}')">${dName}</span>
      <span class="crumb-sep">&rsaquo;</span>
      <span class="crumb active">${aName}</span>
    `;
  }

  nav.innerHTML = html;
}

function goToDistricts() {
  map.setView([35.1798, 128.1076], 12);
}

// ===== 검색 =====
function setupSearch() {
  const input = document.getElementById('searchInput');
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    const items = document.querySelectorAll('#dataList li');
    items.forEach(li => {
      const name = li.querySelector('.list-item-name');
      if (!name) {
        li.style.display = '';
        return;
      }
      li.style.display = name.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
  });
}

// ===== 정렬 =====
function setupSort() {
  const select = document.getElementById('sortSelect');
  select.addEventListener('change', () => {
    const sortKey = select.value;
    if (currentLevel === 'district') {
      renderDistrictList(sortKey);
    } else if (currentLevel === 'apartment' && currentDistrict) {
      renderApartmentList(currentDistrict, sortKey);
    }
  });
}

function sortItems(items, sortKey, isApartment) {
  if (!sortKey || sortKey === 'name') {
    return items.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  }
  if (sortKey === 'broadcast_desc') {
    return items.sort((a, b) => b.broadcast - a.broadcast);
  }
  if (sortKey === 'internet_desc') {
    return items.sort((a, b) => b.internet - a.internet);
  }
  if (sortKey === 'rate_desc') {
    return items.sort((a, b) => {
      return (b.broadcast / b.households) - (a.broadcast / a.households);
    });
  }
  return items;
}

// ===== 유틸리티 =====
function abbreviateNumber(n) {
  return n.toLocaleString();
}
