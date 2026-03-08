#!/usr/bin/env python3
"""
VWorld 지오코딩 API로 아파트 건물동 좌표 정확화 + 누락 동 추가
Usage: python3 geocode_buildings.py
"""

import json
import re
import time
import sys
import urllib.request
import urllib.parse
from pathlib import Path

VWORLD_KEY = "EF36D0B5-C5A2-3EB0-A5F0-94C19D864C59"
DATA_FILE  = Path(__file__).parent.parent / "data" / "sample-data.js"
DELAY      = 0.1   # API 요청 간격 (초)
SCAN_EXTRA = 15    # 기준 동번호 이후 추가 스캔 범위


def geocode(address: str) -> dict:
    """VWorld 좌표 변환 API → {x, y, actual_dong}"""
    url = (
        "https://api.vworld.kr/req/address"
        "?service=address&request=getcoord&version=2.0&crs=epsg:4326"
        f"&address={urllib.parse.quote(address)}"
        "&format=json&type=road"
        f"&key={VWORLD_KEY}&domain=localhost"
    )
    try:
        with urllib.request.urlopen(url, timeout=5) as r:
            d = json.loads(r.read())
        if d["response"]["status"] != "OK":
            return None
        pt = d["response"]["result"]["point"]
        detail = d["response"]["refined"]["structure"].get("detail", "")
        m = re.search(r"(\d+)동", detail)
        return {
            "x": float(pt["x"]),
            "y": float(pt["y"]),
            "actual_dong": int(m.group(1)) if m else None,
        }
    except Exception:
        return None


def discover_buildings(road_addr: str, expected: int) -> list:
    """
    도로명 주소로 건물동 실제 좌표 전체 탐색
    반환: [{'dong': 401, 'lat': ..., 'lng': ...}, ...]
    """
    # 1. 기준 동번호 찾기
    base = geocode(road_addr)
    time.sleep(DELAY)
    if not base or base["actual_dong"] is None:
        return []

    base_n = base["actual_dong"]
    end_n  = base_n + max(SCAN_EXTRA, expected + 5)

    found = {}
    # base_n 앞 2개도 확인 (간혹 base가 2번째 건물일 수 있음)
    for n in range(base_n - 2, end_n + 1):
        if n < 1:
            continue
        r = geocode(f"{road_addr} {n}동")
        time.sleep(DELAY)
        if r and r["actual_dong"] == n:
            found[n] = {"lat": r["y"], "lng": r["x"]}
        # 충분히 찾았고 마지막 몇 개가 없으면 조기 종료
        if len(found) >= expected and n >= base_n + expected + 3:
            break

    return [{"dong": k, **v} for k, v in sorted(found.items())]


def road_address(apt: dict) -> str:
    """아파트 데이터에서 도로명 주소만 추출 (괄호 제거)"""
    addr = apt.get("address", "")
    return re.sub(r"\s*\(.*\)\s*", "", addr).strip()


def load_data() -> tuple:
    text = DATA_FILE.read_text(encoding="utf-8")
    m = re.search(r"const JINJU_DATA\s*=\s*(\{.*\});?\s*$", text, re.DOTALL)
    if not m:
        raise ValueError("JINJU_DATA not found in " + str(DATA_FILE))
    return text, json.loads(m.group(1))


def save_data(data: dict):
    header = (
        "// 진주시 공동주택 + 단독주택 통합 데이터 (2024~2025 기준)\n"
        "// 아파트 좌표: VWorld 지오코딩 API (건물동 좌표 자동 업데이트)\n\n"
    )
    js = header + "const JINJU_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    DATA_FILE.write_text(js, encoding="utf-8")


def main():
    _, data = load_data()

    all_apts = [
        (d, a)
        for d in data["districts"]
        for a in d["apartments"]
        if "진주시" in a.get("address", "")
    ]
    total = len(all_apts)
    updated = skipped = errors = 0

    print(f"총 {total}개 아파트 처리 시작\n{'─'*55}")

    for idx, (district, apt) in enumerate(all_apts, 1):
        pct = idx / total * 100
        addr = road_address(apt)
        n_expected = len(apt.get("buildings", [])) or 1

        print(f"\n[{pct:5.1f}%] {idx}/{total} {apt['name']} ({n_expected}동 예상)")

        if not addr or "진주시" not in addr:
            print("  ⚠ 주소 없음, 스킵")
            skipped += 1
            continue

        new_bldgs = discover_buildings(addr, n_expected)

        if not new_bldgs:
            print("  ✗ 좌표 조회 실패")
            errors += 1
            continue

        old_bldgs = apt.get("buildings", [])
        n_new = len(new_bldgs)
        n_old = len(old_bldgs)

        # 동 수 무관하게 좌표+이름만 교체, 세대수/가입자 절대 건드리지 않음
        matched = min(n_new, n_old)
        for ob, nb in zip(old_bldgs[:matched], new_bldgs[:matched]):
            ob["lat"]  = nb["lat"]
            ob["lng"]  = nb["lng"]
            ob["name"] = f"{nb['dong']}동"
        if n_new == n_old:
            print(f"  ✓ {matched}동 좌표 갱신")
        else:
            print(f"  ✓ {matched}동 좌표 갱신 (VWorld {n_new}동 / 데이터 {n_old}동, 세대수 유지)")

        updated += 1

        # 50개마다 중간 저장
        if updated % 50 == 0:
            save_data(data)
            print(f"\n  💾 중간 저장 ({updated}개 처리)\n")

    save_data(data)
    print(f"\n{'='*55}")
    print(f"완료: 업데이트 {updated} / 스킵 {skipped} / 오류 {errors} / 전체 {total}")
    print(f"✅ {DATA_FILE} 저장 완료")


if __name__ == "__main__":
    main()
