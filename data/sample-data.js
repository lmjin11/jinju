// 진주시 공동주택 + 단독주택 통합 데이터 (2024~2025 기준)
// 아파트 좌표: VWorld 지오코딩 API (건물동 좌표 자동 업데이트)

const JINJU_DATA = {
  "districts": [
    {
      "id": "d1",
      "name": "충무공동",
      "lat": 35.174666,
      "lng": 128.145386,
      "households": 12685,
      "broadcast": 7766,
      "internet": 9147,
      "singleHouseholds": 334,
      "apartments": [
        {
          "id": "a1_1",
          "name": "중흥S클래스 더 퍼스트",
          "lat": 35.176173,
          "lng": 128.1503,
          "households": 726,
          "broadcast": 537,
          "internet": 486,
          "address": "경상남도 진주시 충의로 146(충무공동, 중흥에스-클래스 더 퍼스트)",
          "year": "2020",
          "buildings": [
            {
              "id": "b1_1_1",
              "name": "601동",
              "lat": 35.175512855,
              "lng": 128.149698416,
              "households": 73,
              "broadcast": 49,
              "internet": 49
            },
            {
              "id": "b1_1_2",
              "name": "602동",
              "lat": 35.176109805,
              "lng": 128.149472011,
              "households": 73,
              "broadcast": 42,
              "internet": 59
            },
            {
              "id": "b1_1_3",
              "name": "603동",
              "lat": 35.176701759,
              "lng": 128.149289899,
              "households": 73,
              "broadcast": 47,
              "internet": 58
            },
            {
              "id": "b1_1_4",
              "name": "604동",
              "lat": 35.176823782,
              "lng": 128.149845493,
              "households": 73,
              "broadcast": 49,
              "internet": 56
            },
            {
              "id": "b1_1_5",
              "name": "605동",
              "lat": 35.176248642,
              "lng": 128.150026808,
              "households": 73,
              "broadcast": 45,
              "internet": 56
            },
            {
              "id": "b1_1_6",
              "name": "606동",
              "lat": 35.175677477,
              "lng": 128.150214174,
              "households": 73,
              "broadcast": 54,
              "internet": 51
            },
            {
              "id": "b1_1_7",
              "name": "607동",
              "lat": 35.175283072,
              "lng": 128.151370536,
              "households": 72,
              "broadcast": 51,
              "internet": 48
            },
            {
              "id": "b1_1_8",
              "name": "608동",
              "lat": 35.175880744,
              "lng": 128.151202412,
              "households": 72,
              "broadcast": 43,
              "internet": 61
            },
            {
              "id": "b1_1_9",
              "name": "609동",
              "lat": 35.176459054,
              "lng": 128.151030272,
              "households": 72,
              "broadcast": 43,
              "internet": 55
            },
            {
              "id": "b1_1_10",
              "name": "610동",
              "lat": 35.177032745,
              "lng": 128.150849859,
              "households": 72,
              "broadcast": 51,
              "internet": 56
            }
          ]
        },
        {
          "id": "a1_2",
          "name": "중흥센트럴시티 4단지",
          "lat": 35.174447,
          "lng": 128.14588,
          "households": 444,
          "broadcast": 284,
          "internet": 301,
          "address": "경상남도 진주시 에나로 175번길 11(충무공동, 중흥센트럴시티 4단지)",
          "year": "2020",
          "buildings": [
            {
              "id": "b1_2_1",
              "name": "401동",
              "lat": 35.174826453,
              "lng": 128.145663489,
              "households": 89,
              "broadcast": 64,
              "internet": 73
            },
            {
              "id": "b1_2_2",
              "name": "402동",
              "lat": 35.174765646,
              "lng": 128.146365963,
              "households": 89,
              "broadcast": 58,
              "internet": 67
            },
            {
              "id": "b1_2_3",
              "name": "403동",
              "lat": 35.174323842,
              "lng": 128.146100734,
              "households": 89,
              "broadcast": 49,
              "internet": 72
            },
            {
              "id": "b1_2_4",
              "name": "404동",
              "lat": 35.173907442,
              "lng": 128.145950799,
              "households": 89,
              "broadcast": 62,
              "internet": 74
            },
            {
              "id": "b1_2_5",
              "name": "405동",
              "lat": 35.174410352,
              "lng": 128.145320814,
              "households": 88,
              "broadcast": 50,
              "internet": 66
            }
          ]
        },
        {
          "id": "a1_3",
          "name": "중흥센트럴시티 3단지",
          "lat": 35.173382,
          "lng": 128.145031,
          "households": 333,
          "broadcast": 223,
          "internet": 256,
          "address": "경상남도 진주시 에나로 175번길 12(충무공동, 중흥센트럴시티 3단지)",
          "year": "2020",
          "buildings": [
            {
              "id": "b1_3_1",
              "name": "301동",
              "lat": 35.173759641,
              "lng": 128.144868837,
              "households": 84,
              "broadcast": 52,
              "internet": 62
            },
            {
              "id": "b1_3_2",
              "name": "302동",
              "lat": 35.173413576,
              "lng": 128.145533497,
              "households": 83,
              "broadcast": 61,
              "internet": 58
            },
            {
              "id": "b1_3_3",
              "name": "303동",
              "lat": 35.173013538,
              "lng": 128.14501889,
              "households": 83,
              "broadcast": 62,
              "internet": 58
            },
            {
              "id": "b1_3_4",
              "name": "304동",
              "lat": 35.173341802,
              "lng": 128.14470335,
              "households": 83,
              "broadcast": 48,
              "internet": 63
            }
          ]
        },
        {
          "id": "a1_4",
          "name": "중흥센트럴시티 2단지",
          "lat": 35.173388,
          "lng": 128.143356,
          "households": 560,
          "broadcast": 397,
          "internet": 392,
          "address": "경상남도 진주시 에나로 190(충무공동, 중흥센트럴시티 2단지)",
          "year": "2020",
          "buildings": [
            {
              "id": "b1_4_1",
              "name": "201동",
              "lat": 35.174106703,
              "lng": 128.143705288,
              "households": 70,
              "broadcast": 46,
              "internet": 46
            },
            {
              "id": "b1_4_2",
              "name": "202동",
              "lat": 35.173647243,
              "lng": 128.143758156,
              "households": 70,
              "broadcast": 49,
              "internet": 59
            },
            {
              "id": "b1_4_3",
              "name": "203동",
              "lat": 35.173154831,
              "lng": 128.143622402,
              "households": 70,
              "broadcast": 42,
              "internet": 53
            },
            {
              "id": "b1_4_4",
              "name": "204동",
              "lat": 35.172645527,
              "lng": 128.143484537,
              "households": 70,
              "broadcast": 47,
              "internet": 53
            },
            {
              "id": "b1_4_5",
              "name": "205동",
              "lat": 35.172621325,
              "lng": 128.142992021,
              "households": 70,
              "broadcast": 49,
              "internet": 51
            },
            {
              "id": "b1_4_6",
              "name": "206동",
              "lat": 35.1731287,
              "lng": 128.143030953,
              "households": 70,
              "broadcast": 51,
              "internet": 51
            },
            {
              "id": "b1_4_7",
              "name": "207동",
              "lat": 35.173635225,
              "lng": 128.143086878,
              "households": 70,
              "broadcast": 42,
              "internet": 45
            },
            {
              "id": "b1_4_8",
              "name": "208동",
              "lat": 35.174166642,
              "lng": 128.143167305,
              "households": 70,
              "broadcast": 42,
              "internet": 55
            }
          ]
        },
        {
          "id": "a1_5",
          "name": "진주 포레스트 부영",
          "lat": 35.168533,
          "lng": 128.137648,
          "households": 840,
          "broadcast": 462,
          "internet": 672,
          "address": "경상남도 진주시 영천강로 60(충무공동, 진주 포레스트 부영)",
          "year": "2020",
          "buildings": [
            {
              "id": "a1_5_b0",
              "name": "101동",
              "lat": 35.169242648,
              "lng": 128.136954455,
              "households": 77,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b1",
              "name": "102동",
              "lat": 35.169032246,
              "lng": 128.137840368,
              "households": 77,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b2",
              "name": "103동",
              "lat": 35.168635069,
              "lng": 128.136777938,
              "households": 77,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b3",
              "name": "104동",
              "lat": 35.168786514,
              "lng": 128.137532913,
              "households": 77,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b4",
              "name": "105동",
              "lat": 35.168788489,
              "lng": 128.13813583,
              "households": 76,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b5",
              "name": "106동",
              "lat": 35.16879293,
              "lng": 128.138678959,
              "households": 76,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b6",
              "name": "107동",
              "lat": 35.168192252,
              "lng": 128.136699762,
              "households": 76,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b7",
              "name": "108동",
              "lat": 35.168083435,
              "lng": 128.137540844,
              "households": 76,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b8",
              "name": "109동",
              "lat": 35.168176762,
              "lng": 128.138141836,
              "households": 76,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b9",
              "name": "110동",
              "lat": 35.168380915,
              "lng": 128.139009976,
              "households": 76,
              "broadcast": 42,
              "internet": 61
            },
            {
              "id": "a1_5_b10",
              "name": "111동",
              "lat": 35.167753255,
              "lng": 128.136817469,
              "households": 76,
              "broadcast": 42,
              "internet": 61
            }
          ]
        },
        {
          "id": "a1_6",
          "name": "진주혁신도시 중흥에스-클래스 더프라임",
          "lat": 35.16866,
          "lng": 128.134693,
          "households": 1143,
          "broadcast": 685,
          "internet": 834,
          "address": "경상남도 진주시 소호로 19번길 11(충무공동, 중흥에스-클래스 더프라임)",
          "year": "2019",
          "buildings": [
            {
              "id": "b1_6_1",
              "name": "101동",
              "lat": 35.169716282,
              "lng": 128.13345185,
              "households": 72,
              "broadcast": 51,
              "internet": 54
            },
            {
              "id": "b1_6_2",
              "name": "102동",
              "lat": 35.169192674,
              "lng": 128.133672098,
              "households": 72,
              "broadcast": 48,
              "internet": 54
            },
            {
              "id": "b1_6_3",
              "name": "103동",
              "lat": 35.168562389,
              "lng": 128.133775611,
              "households": 72,
              "broadcast": 39,
              "internet": 51
            },
            {
              "id": "b1_6_4",
              "name": "104동",
              "lat": 35.167991808,
              "lng": 128.133942901,
              "households": 72,
              "broadcast": 53,
              "internet": 48
            },
            {
              "id": "b1_6_5",
              "name": "105동",
              "lat": 35.167422113,
              "lng": 128.134197305,
              "households": 72,
              "broadcast": 51,
              "internet": 55
            },
            {
              "id": "b1_6_6",
              "name": "106동",
              "lat": 35.167414584,
              "lng": 128.134870378,
              "households": 72,
              "broadcast": 50,
              "internet": 60
            },
            {
              "id": "b1_6_7",
              "name": "107동",
              "lat": 35.16802677,
              "lng": 128.134785775,
              "households": 72,
              "broadcast": 44,
              "internet": 56
            },
            {
              "id": "b1_6_8",
              "name": "108동",
              "lat": 35.168607239,
              "lng": 128.134781924,
              "households": 71,
              "broadcast": 41,
              "internet": 51
            },
            {
              "id": "b1_6_9",
              "name": "109동",
              "lat": 35.169273132,
              "lng": 128.134398045,
              "households": 71,
              "broadcast": 52,
              "internet": 56
            },
            {
              "id": "b1_6_10",
              "name": "110동",
              "lat": 35.17002672,
              "lng": 128.134394459,
              "households": 71,
              "broadcast": 39,
              "internet": 58
            },
            {
              "id": "b1_6_11",
              "name": "111동",
              "lat": 35.169855741,
              "lng": 128.13496837,
              "households": 71,
              "broadcast": 48,
              "internet": 57
            },
            {
              "id": "b1_6_12",
              "name": "112동",
              "lat": 35.169191378,
              "lng": 128.135096105,
              "households": 71,
              "broadcast": 41,
              "internet": 56
            },
            {
              "id": "b1_6_13",
              "name": "113동",
              "lat": 35.169154932,
              "lng": 128.135956391,
              "households": 71,
              "broadcast": 51,
              "internet": 56
            },
            {
              "id": "b1_6_14",
              "name": "114동",
              "lat": 35.168638983,
              "lng": 128.135844528,
              "households": 71,
              "broadcast": 39,
              "internet": 48
            },
            {
              "id": "b1_6_15",
              "name": "115동",
              "lat": 35.168018516,
              "lng": 128.135487369,
              "households": 71,
              "broadcast": 45,
              "internet": 48
            },
            {
              "id": "b1_6_16",
              "name": "116동",
              "lat": 35.167463554,
              "lng": 128.135463168,
              "households": 71,
              "broadcast": 39,
              "internet": 48
            }
          ]
        },
        {
          "id": "a1_7",
          "name": "휴앤인엘리시움",
          "lat": 35.177042,
          "lng": 128.140009,
          "households": 189,
          "broadcast": 121,
          "internet": 136,
          "address": "경상남도 진주시 에나로 100(충무공동, 휴앤인엘리시움)",
          "year": "2019",
          "buildings": [
            {
              "id": "a1_7_b0",
              "name": "101동",
              "lat": 35.17719213388998,
              "lng": 128.140021032817,
              "households": 63,
              "broadcast": 40,
              "internet": 45
            },
            {
              "id": "a1_7_b1",
              "name": "102동",
              "lat": 35.17719213388998,
              "lng": 128.140021032817,
              "households": 63,
              "broadcast": 40,
              "internet": 45
            },
            {
              "id": "a1_7_b2",
              "name": "103동",
              "lat": 35.176802707729465,
              "lng": 128.1399187347394,
              "households": 63,
              "broadcast": 40,
              "internet": 45
            }
          ]
        },
        {
          "id": "a1_8",
          "name": "진주혁신도시 대방노블랜드 더 캐슬 아파트",
          "lat": 35.173601,
          "lng": 128.147756,
          "households": 742,
          "broadcast": 416,
          "internet": 542,
          "address": "경상남도 진주시 사들로 61(충무공동, 대방노블랜드 더 캐슬)",
          "year": "2018",
          "buildings": [
            {
              "id": "a1_8_b0",
              "name": "101동",
              "lat": 35.172957851,
              "lng": 128.148141017,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b1",
              "name": "102동",
              "lat": 35.172466523,
              "lng": 128.148007984,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b2",
              "name": "103동",
              "lat": 35.17306955,
              "lng": 128.147335264,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b3",
              "name": "104동",
              "lat": 35.173559755,
              "lng": 128.146672641,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b4",
              "name": "105동",
              "lat": 35.174001936,
              "lng": 128.14714114,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b5",
              "name": "106동",
              "lat": 35.174415858,
              "lng": 128.147379844,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b6",
              "name": "107동",
              "lat": 35.174237594,
              "lng": 128.147937028,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b7",
              "name": "108동",
              "lat": 35.174094791,
              "lng": 128.148663419,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b8",
              "name": "109동",
              "lat": 35.173462424,
              "lng": 128.148561932,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b9",
              "name": "110동",
              "lat": 35.173910473,
              "lng": 128.147507412,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b10",
              "name": "111동",
              "lat": 35.173295305,
              "lng": 128.148777107,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b11",
              "name": "112동",
              "lat": 35.172709665,
              "lng": 128.147338525,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b12",
              "name": "113동",
              "lat": 35.17384555,
              "lng": 128.146666806,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "a1_8_b13",
              "name": "114동",
              "lat": 35.174390005,
              "lng": 128.148460519,
              "households": 53,
              "broadcast": 30,
              "internet": 39
            }
          ]
        },
        {
          "id": "a1_9",
          "name": "혁신도시LH아파트3단지",
          "lat": 35.180596,
          "lng": 128.152837,
          "households": 1254,
          "broadcast": 778,
          "internet": 1042,
          "address": "경상남도 진주시 대밭골로 91(충무공동, 경남혁신도시 행복주택)",
          "year": "2018",
          "buildings": [
            {
              "id": "a1_9_b0",
              "name": "301동",
              "lat": 35.180152754,
              "lng": 128.151854939,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b1",
              "name": "302동",
              "lat": 35.180069256,
              "lng": 128.152575599,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b2",
              "name": "303동",
              "lat": 35.179777677,
              "lng": 128.153423117,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b3",
              "name": "304동",
              "lat": 35.179873581,
              "lng": 128.153909276,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b4",
              "name": "305동",
              "lat": 35.180391284,
              "lng": 128.152974545,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b5",
              "name": "306동",
              "lat": 35.18049113,
              "lng": 128.153410749,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b6",
              "name": "307동",
              "lat": 35.180939791,
              "lng": 128.152748143,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b7",
              "name": "308동",
              "lat": 35.181021438,
              "lng": 128.153159164,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b8",
              "name": "309동",
              "lat": 35.181596711,
              "lng": 128.152869615,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b9",
              "name": "310동",
              "lat": 35.18139994,
              "lng": 128.152163388,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            },
            {
              "id": "a1_9_b10",
              "name": "311동",
              "lat": 35.180846958,
              "lng": 128.152120727,
              "households": 114,
              "broadcast": 71,
              "internet": 95
            }
          ]
        },
        {
          "id": "a1_10",
          "name": "혁신도시NHF10단지",
          "lat": 35.170818,
          "lng": 128.14294,
          "households": 404,
          "broadcast": 290,
          "internet": 327,
          "address": "경상남도 진주시  에나로228번길 10(충무공동, 혁신도시LHF10단지)",
          "year": "2018",
          "buildings": [
            {
              "id": "b1_10_1",
              "name": "1001동",
              "lat": 35.170195549,
              "lng": 128.14260029,
              "households": 81,
              "broadcast": 51,
              "internet": 57
            },
            {
              "id": "b1_10_2",
              "name": "1002동",
              "lat": 35.170712931,
              "lng": 128.142725168,
              "households": 81,
              "broadcast": 51,
              "internet": 58
            },
            {
              "id": "b1_10_3",
              "name": "1003동",
              "lat": 35.171220514,
              "lng": 128.142889088,
              "households": 81,
              "broadcast": 46,
              "internet": 68
            },
            {
              "id": "b1_10_4",
              "name": "1004동",
              "lat": 35.171749268,
              "lng": 128.143069827,
              "households": 81,
              "broadcast": 55,
              "internet": 68
            },
            {
              "id": "b1_10_5",
              "name": "1005동",
              "lat": 35.17021315,
              "lng": 128.143413356,
              "households": 80,
              "broadcast": 58,
              "internet": 53
            }
          ]
        },
        {
          "id": "a1_11",
          "name": "진주혁신도시 라온프라이빗 아파트",
          "lat": 35.180848,
          "lng": 128.150477,
          "households": 422,
          "broadcast": 232,
          "internet": 316,
          "address": "경상남도 진주시 대밭골로 92(충무공동, 혁신도시라온프라이빗)",
          "year": "2017",
          "buildings": [
            {
              "id": "b1_11_1",
              "name": "201동",
              "lat": 35.180767716,
              "lng": 128.149395442,
              "households": 71,
              "broadcast": 44,
              "internet": 58
            },
            {
              "id": "b1_11_2",
              "name": "202동",
              "lat": 35.180407427,
              "lng": 128.150900435,
              "households": 71,
              "broadcast": 42,
              "internet": 58
            },
            {
              "id": "b1_11_3",
              "name": "203동",
              "lat": 35.180764789,
              "lng": 128.151102525,
              "households": 70,
              "broadcast": 49,
              "internet": 49
            },
            {
              "id": "b1_11_4",
              "name": "204동",
              "lat": 35.18090884,
              "lng": 128.150231025,
              "households": 70,
              "broadcast": 45,
              "internet": 46
            },
            {
              "id": "b1_11_5",
              "name": "205동",
              "lat": 35.181072043,
              "lng": 128.149876101,
              "households": 70,
              "broadcast": 47,
              "internet": 51
            },
            {
              "id": "b1_11_6",
              "name": "206동",
              "lat": 35.181168128,
              "lng": 128.151353624,
              "households": 70,
              "broadcast": 44,
              "internet": 56
            }
          ]
        },
        {
          "id": "a1_12",
          "name": "혁신도시LH아파트9단지",
          "lat": 35.171139,
          "lng": 128.144992,
          "households": 630,
          "broadcast": 359,
          "internet": 447,
          "address": "경상남도 진주시 사들로 13(충무공동, 혁신도시LH9단지)",
          "year": "2017",
          "buildings": [
            {
              "id": "b1_12_1",
              "name": "901동",
              "lat": 35.170472988,
              "lng": 128.144757834,
              "households": 105,
              "broadcast": 72,
              "internet": 82
            },
            {
              "id": "b1_12_2",
              "name": "902동",
              "lat": 35.171018156,
              "lng": 128.144673878,
              "households": 105,
              "broadcast": 61,
              "internet": 74
            },
            {
              "id": "b1_12_3",
              "name": "903동",
              "lat": 35.171550113,
              "lng": 128.144613791,
              "households": 105,
              "broadcast": 68,
              "internet": 73
            },
            {
              "id": "b1_12_4",
              "name": "904동",
              "lat": 35.172078501,
              "lng": 128.144684741,
              "households": 105,
              "broadcast": 66,
              "internet": 78
            },
            {
              "id": "b1_12_5",
              "name": "905동",
              "lat": 35.1710957,
              "lng": 128.145450209,
              "households": 105,
              "broadcast": 70,
              "internet": 73
            },
            {
              "id": "b1_12_6",
              "name": "906동",
              "lat": 35.170616738,
              "lng": 128.145772839,
              "households": 105,
              "broadcast": 58,
              "internet": 79
            }
          ]
        },
        {
          "id": "a1_13",
          "name": "혁신도시LH아파트8단지",
          "lat": 35.171935,
          "lng": 128.146534,
          "households": 802,
          "broadcast": 569,
          "internet": 529,
          "address": "경상남도 진주시 사들로 35(충무공동, 혁신도시LH아파트8단지)",
          "year": "2015",
          "buildings": [
            {
              "id": "b1_13_1",
              "name": "801동",
              "lat": 35.171149741,
              "lng": 128.146926171,
              "households": 90,
              "broadcast": 56,
              "internet": 66
            },
            {
              "id": "b1_13_2",
              "name": "802동",
              "lat": 35.170897418,
              "lng": 128.146490676,
              "households": 89,
              "broadcast": 63,
              "internet": 75
            },
            {
              "id": "b1_13_3",
              "name": "803동",
              "lat": 35.171474934,
              "lng": 128.146389919,
              "households": 89,
              "broadcast": 63,
              "internet": 67
            },
            {
              "id": "b1_13_4",
              "name": "804동",
              "lat": 35.171991291,
              "lng": 128.145985278,
              "households": 89,
              "broadcast": 56,
              "internet": 71
            },
            {
              "id": "b1_13_5",
              "name": "805동",
              "lat": 35.172542237,
              "lng": 128.145564824,
              "households": 89,
              "broadcast": 54,
              "internet": 57
            },
            {
              "id": "b1_13_6",
              "name": "806동",
              "lat": 35.172961799,
              "lng": 128.146149958,
              "households": 89,
              "broadcast": 54,
              "internet": 71
            },
            {
              "id": "b1_13_7",
              "name": "807동",
              "lat": 35.17250132,
              "lng": 128.146620396,
              "households": 89,
              "broadcast": 59,
              "internet": 61
            },
            {
              "id": "b1_13_8",
              "name": "808동",
              "lat": 35.172129941,
              "lng": 128.147100602,
              "households": 89,
              "broadcast": 61,
              "internet": 64
            },
            {
              "id": "b1_13_9",
              "name": "809동",
              "lat": 35.171770187,
              "lng": 128.147580857,
              "households": 89,
              "broadcast": 64,
              "internet": 67
            }
          ]
        },
        {
          "id": "a1_14",
          "name": "한림풀에버",
          "lat": 35.171597,
          "lng": 128.133223,
          "households": 1421,
          "broadcast": 824,
          "internet": 1065,
          "address": "경상남도 진주시 소호로 39(충무공동, 한림풀에버)",
          "year": "2015",
          "buildings": [
            {
              "id": "b1_14_1",
              "name": "101동",
              "lat": 35.17269726,
              "lng": 128.135204691,
              "households": 75,
              "broadcast": 51,
              "internet": 55
            },
            {
              "id": "b1_14_2",
              "name": "102동",
              "lat": 35.172677796,
              "lng": 128.134571262,
              "households": 75,
              "broadcast": 42,
              "internet": 59
            },
            {
              "id": "b1_14_3",
              "name": "103동",
              "lat": 35.172651416,
              "lng": 128.133947739,
              "households": 75,
              "broadcast": 43,
              "internet": 53
            },
            {
              "id": "b1_14_4",
              "name": "104동",
              "lat": 35.17261498,
              "lng": 128.13308985,
              "households": 75,
              "broadcast": 41,
              "internet": 62
            },
            {
              "id": "b1_14_5",
              "name": "105동",
              "lat": 35.172586981,
              "lng": 128.132428055,
              "households": 75,
              "broadcast": 56,
              "internet": 60
            },
            {
              "id": "b1_14_6",
              "name": "106동",
              "lat": 35.171730177,
              "lng": 128.131665101,
              "households": 75,
              "broadcast": 51,
              "internet": 59
            },
            {
              "id": "b1_14_7",
              "name": "107동",
              "lat": 35.171826758,
              "lng": 128.13231264,
              "households": 75,
              "broadcast": 50,
              "internet": 57
            },
            {
              "id": "b1_14_8",
              "name": "108동",
              "lat": 35.171896622,
              "lng": 128.133055896,
              "households": 75,
              "broadcast": 48,
              "internet": 54
            },
            {
              "id": "b1_14_9",
              "name": "109동",
              "lat": 35.171905635,
              "lng": 128.133817606,
              "households": 75,
              "broadcast": 53,
              "internet": 63
            },
            {
              "id": "b1_14_10",
              "name": "110동",
              "lat": 35.171947863,
              "lng": 128.134465662,
              "households": 75,
              "broadcast": 46,
              "internet": 63
            },
            {
              "id": "b1_14_11",
              "name": "111동",
              "lat": 35.171334617,
              "lng": 128.134100804,
              "households": 75,
              "broadcast": 54,
              "internet": 61
            },
            {
              "id": "b1_14_12",
              "name": "112동",
              "lat": 35.171268718,
              "lng": 128.133705504,
              "households": 75,
              "broadcast": 51,
              "internet": 55
            },
            {
              "id": "b1_14_13",
              "name": "113동",
              "lat": 35.171031002,
              "lng": 128.13260839,
              "households": 75,
              "broadcast": 42,
              "internet": 57
            },
            {
              "id": "b1_14_14",
              "name": "114동",
              "lat": 35.170985858,
              "lng": 128.13194303,
              "households": 75,
              "broadcast": 48,
              "internet": 57
            },
            {
              "id": "b1_14_15",
              "name": "115동",
              "lat": 35.170992355,
              "lng": 128.131508443,
              "households": 75,
              "broadcast": 48,
              "internet": 61
            },
            {
              "id": "b1_14_16",
              "name": "116동",
              "lat": 35.170433576,
              "lng": 128.132204457,
              "households": 74,
              "broadcast": 54,
              "internet": 54
            },
            {
              "id": "b1_14_17",
              "name": "117동",
              "lat": 35.170346422,
              "lng": 128.132888704,
              "households": 74,
              "broadcast": 40,
              "internet": 48
            },
            {
              "id": "b1_14_18",
              "name": "118동",
              "lat": 35.170612732,
              "lng": 128.133558336,
              "households": 74,
              "broadcast": 49,
              "internet": 54
            },
            {
              "id": "b1_14_19",
              "name": "119동",
              "lat": 35.170792992,
              "lng": 128.134162795,
              "households": 74,
              "broadcast": 47,
              "internet": 60
            }
          ]
        },
        {
          "id": "a1_15",
          "name": "한국남동발전 독신자숙소",
          "lat": 35.173075,
          "lng": 128.152726,
          "households": 58,
          "broadcast": 42,
          "internet": 45,
          "address": "경상남도 진주시 사들로42번길 51 (충무공동, 한국남동발전청안재)",
          "year": "2015",
          "buildings": [
            {
              "id": "b1_15_1",
              "name": "101동",
              "lat": 35.173074695,
              "lng": 128.152726167,
              "households": 58,
              "broadcast": 31,
              "internet": 44
            }
          ]
        },
        {
          "id": "a1_16",
          "name": "혁신도시LH아파트5단지",
          "lat": 35.178483,
          "lng": 128.152306,
          "households": 600,
          "broadcast": 396,
          "internet": 432,
          "address": "경상남도 진주시 충의로 67(충무공동, 혁신도시엘에이치아파트5단지)",
          "year": "2014",
          "buildings": [
            {
              "id": "b1_16_1",
              "name": "501동",
              "lat": 35.178148692,
              "lng": 128.153210158,
              "households": 86,
              "broadcast": 53,
              "internet": 72
            },
            {
              "id": "b1_16_2",
              "name": "502동",
              "lat": 35.178733608,
              "lng": 128.153415329,
              "households": 86,
              "broadcast": 54,
              "internet": 61
            },
            {
              "id": "b1_16_3",
              "name": "503동",
              "lat": 35.178893181,
              "lng": 128.152335852,
              "households": 86,
              "broadcast": 49,
              "internet": 65
            },
            {
              "id": "b1_16_4",
              "name": "504동",
              "lat": 35.179117849,
              "lng": 128.151551669,
              "households": 86,
              "broadcast": 51,
              "internet": 66
            },
            {
              "id": "b1_16_5",
              "name": "505동",
              "lat": 35.178418318,
              "lng": 128.151478998,
              "households": 86,
              "broadcast": 62,
              "internet": 63
            },
            {
              "id": "b1_16_6",
              "name": "506동",
              "lat": 35.17798577,
              "lng": 128.151761023,
              "households": 85,
              "broadcast": 50,
              "internet": 55
            },
            {
              "id": "b1_16_7",
              "name": "507동",
              "lat": 35.178080964,
              "lng": 128.152386609,
              "households": 85,
              "broadcast": 62,
              "internet": 60
            }
          ]
        },
        {
          "id": "a1_17",
          "name": "진주혁신코오롱하늘채",
          "lat": 35.178475,
          "lng": 128.149649,
          "households": 1037,
          "broadcast": 580,
          "internet": 694,
          "address": "경상남도 진주시 사들로 126(충무공동, 진주혁신코오롱하늘채)",
          "year": "2014",
          "buildings": [
            {
              "id": "b1_17_1",
              "name": "401동",
              "lat": 35.178450572,
              "lng": 128.148772076,
              "households": 87,
              "broadcast": 58,
              "internet": 56
            },
            {
              "id": "b1_17_2",
              "name": "402동",
              "lat": 35.177849624,
              "lng": 128.14891034,
              "households": 87,
              "broadcast": 49,
              "internet": 70
            },
            {
              "id": "b1_17_3",
              "name": "403동",
              "lat": 35.177276046,
              "lng": 128.149050754,
              "households": 87,
              "broadcast": 60,
              "internet": 69
            },
            {
              "id": "b1_17_4",
              "name": "404동",
              "lat": 35.177527232,
              "lng": 128.149871244,
              "households": 87,
              "broadcast": 64,
              "internet": 56
            },
            {
              "id": "b1_17_5",
              "name": "405동",
              "lat": 35.178107724,
              "lng": 128.149694301,
              "households": 87,
              "broadcast": 56,
              "internet": 66
            },
            {
              "id": "b1_17_6",
              "name": "406동",
              "lat": 35.177643129,
              "lng": 128.150709621,
              "households": 86,
              "broadcast": 50,
              "internet": 73
            },
            {
              "id": "b1_17_7",
              "name": "407동",
              "lat": 35.178192119,
              "lng": 128.150504453,
              "households": 86,
              "broadcast": 53,
              "internet": 72
            },
            {
              "id": "b1_17_8",
              "name": "408동",
              "lat": 35.178995539,
              "lng": 128.149843566,
              "households": 86,
              "broadcast": 64,
              "internet": 55
            },
            {
              "id": "b1_17_9",
              "name": "409동",
              "lat": 35.179248506,
              "lng": 128.150728096,
              "households": 86,
              "broadcast": 49,
              "internet": 64
            },
            {
              "id": "b1_17_10",
              "name": "410동",
              "lat": 35.179498096,
              "lng": 128.149836794,
              "households": 86,
              "broadcast": 50,
              "internet": 67
            },
            {
              "id": "b1_17_11",
              "name": "411동",
              "lat": 35.179777399,
              "lng": 128.149043906,
              "households": 86,
              "broadcast": 49,
              "internet": 69
            },
            {
              "id": "b1_17_12",
              "name": "412동",
              "lat": 35.179137638,
              "lng": 128.148827886,
              "households": 86,
              "broadcast": 58,
              "internet": 72
            }
          ]
        },
        {
          "id": "a1_18",
          "name": "진주혁신도시센텀리버파크",
          "lat": 35.182003,
          "lng": 128.147709,
          "households": 742,
          "broadcast": 452,
          "internet": 504,
          "address": "경상남도 진주시 사들로 157(충무공동, 진주혁신도시센텀리버파크)",
          "year": "2013",
          "buildings": [
            {
              "id": "b1_18_1",
              "name": "101동",
              "lat": 35.181544944,
              "lng": 128.148659122,
              "households": 83,
              "broadcast": 55,
              "internet": 62
            },
            {
              "id": "b1_18_2",
              "name": "102동",
              "lat": 35.181037526,
              "lng": 128.148505109,
              "households": 83,
              "broadcast": 49,
              "internet": 68
            },
            {
              "id": "b1_18_3",
              "name": "103동",
              "lat": 35.181370027,
              "lng": 128.147525497,
              "households": 83,
              "broadcast": 48,
              "internet": 59
            },
            {
              "id": "b1_18_4",
              "name": "104동",
              "lat": 35.181542459,
              "lng": 128.146809379,
              "households": 83,
              "broadcast": 55,
              "internet": 59
            },
            {
              "id": "b1_18_5",
              "name": "105동",
              "lat": 35.18210613,
              "lng": 128.146846042,
              "households": 82,
              "broadcast": 54,
              "internet": 55
            },
            {
              "id": "b1_18_6",
              "name": "106동",
              "lat": 35.182689744,
              "lng": 128.147038673,
              "households": 82,
              "broadcast": 54,
              "internet": 69
            },
            {
              "id": "b1_18_7",
              "name": "107동",
              "lat": 35.183229682,
              "lng": 128.14814451,
              "households": 82,
              "broadcast": 45,
              "internet": 59
            },
            {
              "id": "b1_18_8",
              "name": "108동",
              "lat": 35.182585137,
              "lng": 128.147880562,
              "households": 82,
              "broadcast": 45,
              "internet": 65
            },
            {
              "id": "b1_18_9",
              "name": "109동",
              "lat": 35.181922264,
              "lng": 128.147972406,
              "households": 82,
              "broadcast": 55,
              "internet": 68
            }
          ]
        }
      ]
    },
    {
      "id": "d2",
      "name": "평거동",
      "lat": 35.171238,
      "lng": 128.056444,
      "households": 11440,
      "broadcast": 7774,
      "internet": 8677,
      "singleHouseholds": 0,
      "apartments": [
        {
          "id": "a2_1",
          "name": "진주평거 햇살마을",
          "lat": 35.17222,
          "lng": 128.053433,
          "households": 140,
          "broadcast": 86,
          "internet": 103,
          "address": "경상남도 진주시 순환로573번길 62",
          "year": "2024",
          "buildings": [
            {
              "id": "b2_1_1",
              "name": "101동",
              "lat": 35.172009764,
              "lng": 128.05359041,
              "households": 70,
              "broadcast": 51,
              "internet": 58
            },
            {
              "id": "b2_1_2",
              "name": "102동",
              "lat": 35.172429634,
              "lng": 128.053275278,
              "households": 70,
              "broadcast": 46,
              "internet": 47
            }
          ]
        },
        {
          "id": "a2_2",
          "name": "진주 평거 우방아이유쉘 스카이팰리스",
          "lat": 35.174098,
          "lng": 128.06028,
          "households": 340,
          "broadcast": 216,
          "internet": 271,
          "address": "경상남도 진주시 진양호로 221(평거동, 우방아이유쉘 스카이팰리스)",
          "year": "2019",
          "buildings": [
            {
              "id": "a2_2_b0",
              "name": "101동",
              "lat": 35.17411310072995,
              "lng": 128.0602671003337,
              "households": 170,
              "broadcast": 108,
              "internet": 136
            },
            {
              "id": "a2_2_b1",
              "name": "102동",
              "lat": 35.174325104,
              "lng": 128.060345347,
              "households": 170,
              "broadcast": 108,
              "internet": 136
            }
          ]
        },
        {
          "id": "a2_3",
          "name": "평거동 메이힐스 아파트",
          "lat": 35.176424,
          "lng": 128.06057,
          "households": 42,
          "broadcast": 25,
          "internet": 33,
          "address": "경상남도 진주시 진양호로 239번길 20(평거동, 메이힐스 아파트)",
          "year": "2018",
          "buildings": [
            {
              "id": "b2_3_1",
              "name": "101동",
              "lat": 35.17641370156389,
              "lng": 128.06057753163583,
              "households": 42,
              "broadcast": 28,
              "internet": 31
            }
          ]
        },
        {
          "id": "a2_4",
          "name": "건영 아모리움",
          "lat": 35.174623,
          "lng": 128.059556,
          "households": 236,
          "broadcast": 134,
          "internet": 193,
          "address": "경상남도 진주시 진양호로 225번길 13(평거동, 건영아모리움)",
          "year": "2017",
          "buildings": [
            {
              "id": "b2_4_1",
              "name": "101동",
              "lat": 35.174441134,
              "lng": 128.05962762,
              "households": 118,
              "broadcast": 86,
              "internet": 93
            },
            {
              "id": "b2_4_2",
              "name": "102동",
              "lat": 35.174782401303275,
              "lng": 128.05988130001165,
              "households": 118,
              "broadcast": 66,
              "internet": 96
            }
          ]
        },
        {
          "id": "a2_5",
          "name": "진주평거 엘크루",
          "lat": 35.169252,
          "lng": 128.060327,
          "households": 472,
          "broadcast": 306,
          "internet": 306,
          "address": "경상남도 진주시 새평거로 112(평거동, 엘크루아파트)",
          "year": "2016",
          "buildings": [
            {
              "id": "b2_5_1",
              "name": "101동",
              "lat": 35.169051228,
              "lng": 128.05928859,
              "households": 48,
              "broadcast": 34,
              "internet": 34
            },
            {
              "id": "b2_5_2",
              "name": "102동",
              "lat": 35.16867721,
              "lng": 128.059658956,
              "households": 48,
              "broadcast": 28,
              "internet": 35
            },
            {
              "id": "b2_5_3",
              "name": "103동",
              "lat": 35.16838987,
              "lng": 128.060040493,
              "households": 47,
              "broadcast": 31,
              "internet": 31
            },
            {
              "id": "b2_5_4",
              "name": "104동",
              "lat": 35.169368289,
              "lng": 128.059818496,
              "households": 47,
              "broadcast": 32,
              "internet": 31
            },
            {
              "id": "b2_5_5",
              "name": "105동",
              "lat": 35.169670663,
              "lng": 128.060348598,
              "households": 47,
              "broadcast": 31,
              "internet": 39
            },
            {
              "id": "b2_5_6",
              "name": "106동",
              "lat": 35.169024904,
              "lng": 128.060173354,
              "households": 47,
              "broadcast": 26,
              "internet": 38
            },
            {
              "id": "b2_5_7",
              "name": "107동",
              "lat": 35.169325518,
              "lng": 128.060737349,
              "households": 47,
              "broadcast": 29,
              "internet": 31
            },
            {
              "id": "b2_5_8",
              "name": "108동",
              "lat": 35.170027319,
              "lng": 128.06073278,
              "households": 47,
              "broadcast": 34,
              "internet": 32
            },
            {
              "id": "b2_5_9",
              "name": "109동",
              "lat": 35.169687259,
              "lng": 128.061069816,
              "households": 47,
              "broadcast": 29,
              "internet": 31
            },
            {
              "id": "b2_5_10",
              "name": "110동",
              "lat": 35.169296327,
              "lng": 128.061396691,
              "households": 47,
              "broadcast": 31,
              "internet": 39
            }
          ]
        },
        {
          "id": "a2_6",
          "name": "퀸즈웰가아파트",
          "lat": 35.166706,
          "lng": 128.05188,
          "households": 1308,
          "broadcast": 876,
          "internet": 902,
          "address": "경상남도 진주시 새평거로 25(평거동, 퀸즈웰가아파트)",
          "year": "2015",
          "buildings": [
            {
              "id": "b2_6_1",
              "name": "101동",
              "lat": 35.166558804,
              "lng": 128.049577979,
              "households": 109,
              "broadcast": 62,
              "internet": 81
            },
            {
              "id": "b2_6_2",
              "name": "102동",
              "lat": 35.166656463,
              "lng": 128.050220163,
              "households": 109,
              "broadcast": 61,
              "internet": 83
            },
            {
              "id": "b2_6_3",
              "name": "103동",
              "lat": 35.166726614,
              "lng": 128.050839034,
              "households": 109,
              "broadcast": 67,
              "internet": 91
            },
            {
              "id": "b2_6_4",
              "name": "104동",
              "lat": 35.166884421,
              "lng": 128.051430157,
              "households": 109,
              "broadcast": 80,
              "internet": 71
            },
            {
              "id": "b2_6_5",
              "name": "105동",
              "lat": 35.167001524,
              "lng": 128.052134008,
              "households": 109,
              "broadcast": 63,
              "internet": 73
            },
            {
              "id": "b2_6_6",
              "name": "106동",
              "lat": 35.16721621,
              "lng": 128.052750247,
              "households": 109,
              "broadcast": 66,
              "internet": 75
            },
            {
              "id": "b2_6_7",
              "name": "107동",
              "lat": 35.167380726,
              "lng": 128.053267858,
              "households": 109,
              "broadcast": 80,
              "internet": 90
            },
            {
              "id": "b2_6_8",
              "name": "108동",
              "lat": 35.166225973,
              "lng": 128.051280648,
              "households": 109,
              "broadcast": 78,
              "internet": 89
            },
            {
              "id": "b2_6_9",
              "name": "109동",
              "lat": 35.166174206,
              "lng": 128.051735056,
              "households": 109,
              "broadcast": 77,
              "internet": 76
            },
            {
              "id": "b2_6_10",
              "name": "110동",
              "lat": 35.16637885,
              "lng": 128.052510974,
              "households": 109,
              "broadcast": 81,
              "internet": 78
            },
            {
              "id": "b2_6_11",
              "name": "111동",
              "lat": 35.166549181,
              "lng": 128.053109108,
              "households": 109,
              "broadcast": 64,
              "internet": 78
            },
            {
              "id": "b2_6_12",
              "name": "112동",
              "lat": 35.166721716,
              "lng": 128.053699401,
              "households": 109,
              "broadcast": 68,
              "internet": 81
            }
          ]
        },
        {
          "id": "a2_7",
          "name": "엠코타운더프라하",
          "lat": 35.165018,
          "lng": 128.052156,
          "households": 1813,
          "broadcast": 1214,
          "internet": 1232,
          "address": "경상남도 진주시 새평거로 30(평거동, 엠코타운더프라하)",
          "year": "2014",
          "buildings": [
            {
              "id": "b2_7_1",
              "name": "101동",
              "lat": 35.165594812,
              "lng": 128.049864079,
              "households": 130,
              "broadcast": 91,
              "internet": 94
            },
            {
              "id": "b2_7_2",
              "name": "102동",
              "lat": 35.16553397,
              "lng": 128.050499867,
              "households": 130,
              "broadcast": 88,
              "internet": 98
            },
            {
              "id": "b2_7_3",
              "name": "103동",
              "lat": 35.165401834,
              "lng": 128.051122321,
              "households": 130,
              "broadcast": 93,
              "internet": 98
            },
            {
              "id": "b2_7_4",
              "name": "104동",
              "lat": 35.165316784,
              "lng": 128.051900849,
              "households": 130,
              "broadcast": 92,
              "internet": 97
            },
            {
              "id": "b2_7_5",
              "name": "105동",
              "lat": 35.165424994,
              "lng": 128.052925153,
              "households": 130,
              "broadcast": 84,
              "internet": 85
            },
            {
              "id": "b2_7_6",
              "name": "106동",
              "lat": 35.165520394,
              "lng": 128.053554753,
              "households": 130,
              "broadcast": 89,
              "internet": 105
            },
            {
              "id": "b2_7_7",
              "name": "107동",
              "lat": 35.165645968,
              "lng": 128.054190474,
              "households": 130,
              "broadcast": 76,
              "internet": 85
            },
            {
              "id": "b2_7_8",
              "name": "108동",
              "lat": 35.164750014,
              "lng": 128.049985513,
              "households": 129,
              "broadcast": 86,
              "internet": 87
            },
            {
              "id": "b2_7_9",
              "name": "109동",
              "lat": 35.164591519,
              "lng": 128.050709395,
              "households": 129,
              "broadcast": 92,
              "internet": 101
            },
            {
              "id": "b2_7_10",
              "name": "110동",
              "lat": 35.164504644,
              "lng": 128.051448939,
              "households": 129,
              "broadcast": 82,
              "internet": 86
            },
            {
              "id": "b2_7_11",
              "name": "111동",
              "lat": 35.16448773,
              "lng": 128.0522084,
              "households": 129,
              "broadcast": 94,
              "internet": 105
            },
            {
              "id": "b2_7_12",
              "name": "112동",
              "lat": 35.164481338,
              "lng": 128.053222855,
              "households": 129,
              "broadcast": 79,
              "internet": 101
            },
            {
              "id": "b2_7_13",
              "name": "113동",
              "lat": 35.164496017,
              "lng": 128.053948165,
              "households": 129,
              "broadcast": 87,
              "internet": 87
            },
            {
              "id": "b2_7_14",
              "name": "114동",
              "lat": 35.164498558,
              "lng": 128.054604971,
              "households": 129,
              "broadcast": 94,
              "internet": 86
            }
          ]
        },
        {
          "id": "a2_8",
          "name": "평거 LH 5단지",
          "lat": 35.166657,
          "lng": 128.056344,
          "households": 826,
          "broadcast": 520,
          "internet": 636,
          "address": "경상남도 진주시 새평거로 70(평거동, 평거엘에이치5단지)",
          "year": "2012",
          "buildings": [
            {
              "id": "b2_8_1",
              "name": "501동",
              "lat": 35.167206628,
              "lng": 128.056703652,
              "households": 76,
              "broadcast": 47,
              "internet": 53
            },
            {
              "id": "b2_8_2",
              "name": "502동",
              "lat": 35.167639211,
              "lng": 128.05715036,
              "households": 75,
              "broadcast": 53,
              "internet": 56
            },
            {
              "id": "b2_8_3",
              "name": "503동",
              "lat": 35.167259732,
              "lng": 128.057516842,
              "households": 75,
              "broadcast": 43,
              "internet": 57
            },
            {
              "id": "b2_8_4",
              "name": "504동",
              "lat": 35.166917422,
              "lng": 128.057850763,
              "households": 75,
              "broadcast": 49,
              "internet": 52
            },
            {
              "id": "b2_8_5",
              "name": "505동",
              "lat": 35.166656661,
              "lng": 128.056986523,
              "households": 75,
              "broadcast": 43,
              "internet": 57
            },
            {
              "id": "b2_8_6",
              "name": "506동",
              "lat": 35.16622027,
              "lng": 128.056437578,
              "households": 75,
              "broadcast": 48,
              "internet": 48
            },
            {
              "id": "b2_8_7",
              "name": "507동",
              "lat": 35.165890783,
              "lng": 128.055762475,
              "households": 75,
              "broadcast": 48,
              "internet": 61
            },
            {
              "id": "b2_8_8",
              "name": "508동",
              "lat": 35.165744803,
              "lng": 128.055197729,
              "households": 75,
              "broadcast": 48,
              "internet": 61
            },
            {
              "id": "b2_8_9",
              "name": "509동",
              "lat": 35.166326773,
              "lng": 128.05488449,
              "households": 75,
              "broadcast": 45,
              "internet": 52
            },
            {
              "id": "b2_8_10",
              "name": "510동",
              "lat": 35.166533373,
              "lng": 128.055373281,
              "households": 75,
              "broadcast": 49,
              "internet": 54
            },
            {
              "id": "b2_8_11",
              "name": "511동",
              "lat": 35.166835763,
              "lng": 128.055918708,
              "households": 75,
              "broadcast": 47,
              "internet": 53
            }
          ]
        },
        {
          "id": "a2_9",
          "name": "평거휴먼시아3단지",
          "lat": 35.170405,
          "lng": 128.059128,
          "households": 585,
          "broadcast": 370,
          "internet": 470,
          "address": "경상남도 진주시 새평거로 111 (평거동, 평거휴먼시아3단지)",
          "year": "2011",
          "buildings": [
            {
              "id": "a2_9_b0",
              "name": "301동",
              "lat": 35.169538315,
              "lng": 128.05909989,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b1",
              "name": "302동",
              "lat": 35.169679124,
              "lng": 128.05842443,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b2",
              "name": "303동",
              "lat": 35.170026006,
              "lng": 128.058748688,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b3",
              "name": "304동",
              "lat": 35.169951322,
              "lng": 128.058112973,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b4",
              "name": "305동",
              "lat": 35.170344942,
              "lng": 128.058016068,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b5",
              "name": "306동",
              "lat": 35.170498391,
              "lng": 128.058624515,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b6",
              "name": "307동",
              "lat": 35.170959107,
              "lng": 128.058961837,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b7",
              "name": "308동",
              "lat": 35.171447639,
              "lng": 128.059253664,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b8",
              "name": "309동",
              "lat": 35.1710613,
              "lng": 128.059632925,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b9",
              "name": "310동",
              "lat": 35.170544554,
              "lng": 128.059520946,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b10",
              "name": "311동",
              "lat": 35.170811664,
              "lng": 128.060147646,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b11",
              "name": "312동",
              "lat": 35.17001767,
              "lng": 128.059761866,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            },
            {
              "id": "a2_9_b12",
              "name": "313동",
              "lat": 35.170381375,
              "lng": 128.060362657,
              "households": 45,
              "broadcast": 28,
              "internet": 36
            }
          ]
        },
        {
          "id": "a2_10",
          "name": "평거휴먼시아4단지",
          "lat": 35.168017,
          "lng": 128.055372,
          "households": 702,
          "broadcast": 522,
          "internet": 571,
          "address": "경상남도 진주시 새평거로 75 (평거동, 평거휴먼시아4단지)",
          "year": "2011",
          "buildings": [
            {
              "id": "a2_10_b0",
              "name": "401동",
              "lat": 35.167747215,
              "lng": 128.056186558,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b1",
              "name": "402동",
              "lat": 35.167972463,
              "lng": 128.056710529,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b2",
              "name": "403동",
              "lat": 35.168300801,
              "lng": 128.056378256,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b3",
              "name": "404동",
              "lat": 35.168631149,
              "lng": 128.056048647,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b4",
              "name": "405동",
              "lat": 35.168971965,
              "lng": 128.055728874,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b5",
              "name": "406동",
              "lat": 35.168627975,
              "lng": 128.055333867,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b6",
              "name": "407동",
              "lat": 35.168289556,
              "lng": 128.054761455,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b7",
              "name": "408동",
              "lat": 35.167937789,
              "lng": 128.054098154,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b8",
              "name": "409동",
              "lat": 35.167550764,
              "lng": 128.054323645,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b9",
              "name": "410동",
              "lat": 35.167188261,
              "lng": 128.054510296,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b10",
              "name": "411동",
              "lat": 35.167228062,
              "lng": 128.055166807,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b11",
              "name": "412동",
              "lat": 35.167682976,
              "lng": 128.054942641,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "a2_10_b12",
              "name": "413동",
              "lat": 35.168089124,
              "lng": 128.05565042,
              "households": 54,
              "broadcast": 40,
              "internet": 44
            }
          ]
        },
        {
          "id": "a2_11",
          "name": "평거남광하우스토리",
          "lat": 35.175479,
          "lng": 128.060124,
          "households": 115,
          "broadcast": 82,
          "internet": 92,
          "address": "경상남도 진주시 진양호로239번길 13 (평거동, 평거하우스토리아파트)",
          "year": "2009",
          "buildings": [
            {
              "id": "b2_11_1",
              "name": "201동",
              "lat": 35.175617162,
              "lng": 128.060472873,
              "households": 29,
              "broadcast": 20,
              "internet": 22
            },
            {
              "id": "b2_11_2",
              "name": "202동",
              "lat": 35.175197894,
              "lng": 128.060181031,
              "households": 29,
              "broadcast": 20,
              "internet": 23
            },
            {
              "id": "b2_11_3",
              "name": "203동",
              "lat": 35.175353288,
              "lng": 128.059768184,
              "households": 29,
              "broadcast": 15,
              "internet": 24
            },
            {
              "id": "b2_11_4",
              "name": "204동",
              "lat": 35.175748036,
              "lng": 128.060072112,
              "households": 28,
              "broadcast": 19,
              "internet": 23
            }
          ]
        },
        {
          "id": "a2_12",
          "name": "평거로얄팰리스",
          "lat": 35.174849,
          "lng": 128.061282,
          "households": 100,
          "broadcast": 61,
          "internet": 73,
          "address": "경상남도 진주시 진양호로225번길 8 (평거동, 원정로얄팰리스)",
          "year": "2005",
          "buildings": [
            {
              "id": "b2_12_1",
              "name": "1동",
              "lat": 35.174849,
              "lng": 128.061149,
              "households": 34,
              "broadcast": 19,
              "internet": 26
            },
            {
              "id": "b2_12_2",
              "name": "2동",
              "lat": 35.175149,
              "lng": 128.061149,
              "households": 33,
              "broadcast": 20,
              "internet": 28
            },
            {
              "id": "b2_12_3",
              "name": "3동",
              "lat": 35.174549,
              "lng": 128.061549,
              "households": 33,
              "broadcast": 20,
              "internet": 27
            }
          ]
        },
        {
          "id": "a2_13",
          "name": "순화천사의마을",
          "lat": 35.172665,
          "lng": 128.057966,
          "households": 53,
          "broadcast": 39,
          "internet": 35,
          "address": "경상남도 진주시 순환로559번길 19 (평거동, 순화천사의마을아파트)",
          "year": "2004",
          "buildings": [
            {
              "id": "b2_13_1",
              "name": "1동",
              "lat": 35.172665,
              "lng": 128.057966,
              "households": 53,
              "broadcast": 38,
              "internet": 42
            }
          ]
        },
        {
          "id": "a2_14",
          "name": "한솔빌라",
          "lat": 35.17045,
          "lng": 128.050628,
          "households": 20,
          "broadcast": 11,
          "internet": 15,
          "address": "경상남도 진주시 진양호로125번길 41 (평거동, 한솔빌라)",
          "year": "1999",
          "buildings": [
            {
              "id": "b2_14_1",
              "name": "1동",
              "lat": 35.1696698880173,
              "lng": 128.05202440643112,
              "households": 20,
              "broadcast": 12,
              "internet": 17
            }
          ]
        },
        {
          "id": "a2_15",
          "name": "들말대경아파트",
          "lat": 35.176314,
          "lng": 128.0635,
          "households": 750,
          "broadcast": 547,
          "internet": 525,
          "address": "경상남도 진주시 석갑로53번길 10 (평거동, 들말대경아파트)",
          "year": "1998",
          "buildings": [
            {
              "id": "a2_15_b0",
              "name": "101동",
              "lat": 35.1753078,
              "lng": 128.062666569,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            },
            {
              "id": "a2_15_b1",
              "name": "102동",
              "lat": 35.175763733,
              "lng": 128.062913351,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            },
            {
              "id": "a2_15_b2",
              "name": "103동",
              "lat": 35.175708243,
              "lng": 128.063494319,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            },
            {
              "id": "a2_15_b3",
              "name": "104동",
              "lat": 35.176181238,
              "lng": 128.063334567,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            },
            {
              "id": "a2_15_b4",
              "name": "105동",
              "lat": 35.176226586,
              "lng": 128.063922908,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            },
            {
              "id": "a2_15_b5",
              "name": "106동",
              "lat": 35.176604371,
              "lng": 128.063168178,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            },
            {
              "id": "a2_15_b6",
              "name": "107동",
              "lat": 35.176597576,
              "lng": 128.063664117,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            },
            {
              "id": "a2_15_b7",
              "name": "108동",
              "lat": 35.17705446,
              "lng": 128.063463653,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            },
            {
              "id": "a2_15_b8",
              "name": "109동",
              "lat": 35.177032965,
              "lng": 128.064094612,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            },
            {
              "id": "a2_15_b9",
              "name": "110동",
              "lat": 35.176665071,
              "lng": 128.064278384,
              "households": 75,
              "broadcast": 55,
              "internet": 52
            }
          ]
        },
        {
          "id": "a2_16",
          "name": "들말흥한타운",
          "lat": 35.175172,
          "lng": 128.063804,
          "households": 960,
          "broadcast": 604,
          "internet": 681,
          "address": "경상남도 진주시 석갑로 45 (평거동, 들말흥한아파트)",
          "year": "1998",
          "buildings": [
            {
              "id": "b2_16_1",
              "name": "1동",
              "lat": 35.17545263014132,
              "lng": 128.06481285970366,
              "households": 74,
              "broadcast": 51,
              "internet": 61
            },
            {
              "id": "b2_16_2",
              "name": "2동",
              "lat": 35.175743369567364,
              "lng": 128.0642617352063,
              "households": 74,
              "broadcast": 40,
              "internet": 51
            },
            {
              "id": "b2_16_3",
              "name": "3동",
              "lat": 35.17627804754372,
              "lng": 128.06469426885965,
              "households": 74,
              "broadcast": 52,
              "internet": 51
            },
            {
              "id": "b2_16_4",
              "name": "4동",
              "lat": 35.17536752209171,
              "lng": 128.0643655746281,
              "households": 74,
              "broadcast": 54,
              "internet": 51
            },
            {
              "id": "b2_16_5",
              "name": "5동",
              "lat": 35.17651943392701,
              "lng": 128.06518155067073,
              "households": 74,
              "broadcast": 44,
              "internet": 58
            },
            {
              "id": "b2_16_6",
              "name": "6동",
              "lat": 35.17478125725096,
              "lng": 128.06425349586144,
              "households": 74,
              "broadcast": 48,
              "internet": 58
            },
            {
              "id": "b2_16_7",
              "name": "7동",
              "lat": 35.175530647013126,
              "lng": 128.06490612059332,
              "households": 74,
              "broadcast": 45,
              "internet": 56
            },
            {
              "id": "b2_16_8",
              "name": "8동",
              "lat": 35.17616111848051,
              "lng": 128.0652764940417,
              "households": 74,
              "broadcast": 45,
              "internet": 49
            },
            {
              "id": "b2_16_9",
              "name": "9동",
              "lat": 35.17496332628052,
              "lng": 128.06487184297958,
              "households": 74,
              "broadcast": 46,
              "internet": 53
            },
            {
              "id": "b2_16_10",
              "name": "10동",
              "lat": 35.17446534847559,
              "lng": 128.06488586175337,
              "households": 74,
              "broadcast": 44,
              "internet": 55
            },
            {
              "id": "b2_16_11",
              "name": "11동",
              "lat": 35.17499567942259,
              "lng": 128.06529609438468,
              "households": 74,
              "broadcast": 55,
              "internet": 56
            },
            {
              "id": "b2_16_12",
              "name": "12동",
              "lat": 35.1757397867207,
              "lng": 128.0655931255537,
              "households": 73,
              "broadcast": 49,
              "internet": 56
            },
            {
              "id": "b2_16_13",
              "name": "13동",
              "lat": 35.17615316559702,
              "lng": 128.06592182144485,
              "households": 73,
              "broadcast": 45,
              "internet": 52
            }
          ]
        },
        {
          "id": "a2_17",
          "name": "들말한보타운",
          "lat": 35.173542,
          "lng": 128.063352,
          "households": 791,
          "broadcast": 529,
          "internet": 664,
          "address": "경상남도 진주시 평거로39번길 9 (평거동, 들말한보타운)",
          "year": "1997",
          "buildings": [
            {
              "id": "b2_17_1",
              "name": "101동",
              "lat": 35.174352205,
              "lng": 128.063410126,
              "households": 99,
              "broadcast": 69,
              "internet": 83
            },
            {
              "id": "b2_17_2",
              "name": "102동",
              "lat": 35.173939437,
              "lng": 128.064179526,
              "households": 99,
              "broadcast": 64,
              "internet": 65
            },
            {
              "id": "b2_17_3",
              "name": "103동",
              "lat": 35.173942947,
              "lng": 128.06313427,
              "households": 99,
              "broadcast": 73,
              "internet": 76
            },
            {
              "id": "b2_17_4",
              "name": "104동",
              "lat": 35.173545484,
              "lng": 128.063879243,
              "households": 99,
              "broadcast": 57,
              "internet": 82
            },
            {
              "id": "b2_17_5",
              "name": "105동",
              "lat": 35.173537613,
              "lng": 128.062840569,
              "households": 99,
              "broadcast": 60,
              "internet": 83
            },
            {
              "id": "b2_17_6",
              "name": "106동",
              "lat": 35.173153763,
              "lng": 128.063559045,
              "households": 99,
              "broadcast": 65,
              "internet": 69
            },
            {
              "id": "b2_17_7",
              "name": "107동",
              "lat": 35.173154934,
              "lng": 128.062503732,
              "households": 99,
              "broadcast": 56,
              "internet": 73
            },
            {
              "id": "b2_17_8",
              "name": "108동",
              "lat": 35.172712152,
              "lng": 128.063309233,
              "households": 98,
              "broadcast": 64,
              "internet": 81
            }
          ]
        },
        {
          "id": "a2_18",
          "name": "한보하이타운",
          "lat": 35.172625,
          "lng": 128.059187,
          "households": 198,
          "broadcast": 142,
          "internet": 138,
          "address": "경상남도 진주시 순환로553번길 7 (평거동, 한보하이타운)",
          "year": "1995",
          "buildings": [
            {
              "id": "b2_18_1",
              "name": "1동",
              "lat": 35.17265106503637,
              "lng": 128.05925668185688,
              "households": 198,
              "broadcast": 118,
              "internet": 156
            }
          ]
        },
        {
          "id": "a2_19",
          "name": "평거대경그린아파트",
          "lat": 35.172964,
          "lng": 128.057486,
          "households": 121,
          "broadcast": 73,
          "internet": 93,
          "address": "경상남도 진주시 순환로573번길 21 (평거동, 대경그린파크)",
          "year": "1994",
          "buildings": [
            {
              "id": "b2_19_1",
              "name": "1동",
              "lat": 35.172964,
              "lng": 128.057486,
              "households": 121,
              "broadcast": 87,
              "internet": 100
            }
          ]
        },
        {
          "id": "a2_20",
          "name": "평거하영무지개아파트",
          "lat": 35.169665,
          "lng": 128.055823,
          "households": 190,
          "broadcast": 127,
          "internet": 125,
          "address": "경상남도 진주시 진양호로 153 (평거동, 하영무지개맨션)",
          "year": "1993",
          "buildings": [
            {
              "id": "b2_20_1",
              "name": "1동",
              "lat": 35.169665,
              "lng": 128.055823,
              "households": 190,
              "broadcast": 119,
              "internet": 138
            }
          ]
        },
        {
          "id": "a2_21",
          "name": "평거한보타운",
          "lat": 35.169537,
          "lng": 128.049641,
          "households": 485,
          "broadcast": 329,
          "internet": 392,
          "address": "경상남도 진주시 진양호로97번길 19-6 (평거동, 한보아파트)",
          "year": "1993",
          "buildings": [
            {
              "id": "b2_21_1",
              "name": "101동",
              "lat": 35.169791445,
              "lng": 128.049627806,
              "households": 162,
              "broadcast": 105,
              "internet": 106
            },
            {
              "id": "b2_21_2",
              "name": "102동",
              "lat": 35.169389479,
              "lng": 128.049130297,
              "households": 162,
              "broadcast": 119,
              "internet": 106
            },
            {
              "id": "b2_21_3",
              "name": "103동",
              "lat": 35.169430919,
              "lng": 128.050165996,
              "households": 161,
              "broadcast": 114,
              "internet": 104
            }
          ]
        },
        {
          "id": "a2_22",
          "name": "벽산동신아파트",
          "lat": 35.17052,
          "lng": 128.053,
          "households": 286,
          "broadcast": 208,
          "internet": 243,
          "address": "경상남도 진주시 진양호로125번길 22-12 (평거동, 벽산동신아파트)",
          "year": "1993",
          "buildings": [
            {
              "id": "b2_22_1",
              "name": "1동",
              "lat": 35.17052,
              "lng": 128.052867,
              "households": 96,
              "broadcast": 61,
              "internet": 71
            },
            {
              "id": "b2_22_2",
              "name": "2동",
              "lat": 35.17082,
              "lng": 128.052867,
              "households": 95,
              "broadcast": 61,
              "internet": 63
            },
            {
              "id": "b2_22_3",
              "name": "3동",
              "lat": 35.17022,
              "lng": 128.053267,
              "households": 95,
              "broadcast": 61,
              "internet": 70
            }
          ]
        },
        {
          "id": "a2_23",
          "name": "하영그린맨션",
          "lat": 35.168313,
          "lng": 128.05069,
          "households": 198,
          "broadcast": 146,
          "internet": 166,
          "address": "경상남도 진주시 진양호로97번길 8-3 (평거동, 하영그린맨션)",
          "year": "1992",
          "buildings": [
            {
              "id": "b2_23_1",
              "name": "1동",
              "lat": 35.16824470114477,
              "lng": 128.05107500022208,
              "households": 99,
              "broadcast": 68,
              "internet": 68
            },
            {
              "id": "b2_23_2",
              "name": "2동",
              "lat": 35.168463,
              "lng": 128.05069,
              "households": 99,
              "broadcast": 59,
              "internet": 69
            }
          ]
        },
        {
          "id": "a2_24",
          "name": "평거시영국민주택",
          "lat": 35.168988,
          "lng": 128.050742,
          "households": 100,
          "broadcast": 56,
          "internet": 65,
          "address": "경상남도 진주시 진양호로97번길 20 (평거동, 국민주택아파트)",
          "year": "1992",
          "buildings": [
            {
              "id": "b2_24_1",
              "name": "1동",
              "lat": 35.168987544,
              "lng": 128.050742433,
              "households": 100,
              "broadcast": 55,
              "internet": 68
            }
          ]
        },
        {
          "id": "a2_25",
          "name": "평거주공2차아파트",
          "lat": 35.168772,
          "lng": 128.053429,
          "households": 480,
          "broadcast": 312,
          "internet": 336,
          "address": "경상남도 진주시 진양호로125번길 6 (평거동, 평거주공2아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b2_25_1",
              "name": "1동",
              "lat": 35.168772,
              "lng": 128.053029,
              "households": 60,
              "broadcast": 40,
              "internet": 40
            },
            {
              "id": "b2_25_2",
              "name": "2동",
              "lat": 35.169072,
              "lng": 128.053029,
              "households": 60,
              "broadcast": 39,
              "internet": 49
            },
            {
              "id": "b2_25_3",
              "name": "3동",
              "lat": 35.168472,
              "lng": 128.053429,
              "households": 60,
              "broadcast": 45,
              "internet": 48
            },
            {
              "id": "b2_25_4",
              "name": "4동",
              "lat": 35.168772,
              "lng": 128.053429,
              "households": 60,
              "broadcast": 40,
              "internet": 39
            },
            {
              "id": "b2_25_5",
              "name": "5동",
              "lat": 35.169072,
              "lng": 128.053429,
              "households": 60,
              "broadcast": 43,
              "internet": 44
            },
            {
              "id": "b2_25_6",
              "name": "6동",
              "lat": 35.168472,
              "lng": 128.053829,
              "households": 60,
              "broadcast": 43,
              "internet": 48
            },
            {
              "id": "b2_25_7",
              "name": "7동",
              "lat": 35.168772,
              "lng": 128.053829,
              "households": 60,
              "broadcast": 44,
              "internet": 39
            },
            {
              "id": "b2_25_8",
              "name": "8동",
              "lat": 35.169072,
              "lng": 128.053829,
              "households": 60,
              "broadcast": 43,
              "internet": 46
            }
          ]
        },
        {
          "id": "a2_26",
          "name": "평거동신아파트",
          "lat": 35.169981,
          "lng": 128.051238,
          "households": 50,
          "broadcast": 28,
          "internet": 38,
          "address": "경상남도 진주시 진양호로125번길 35-8 (평거동, 평거동신아파트)",
          "year": "1990",
          "buildings": [
            {
              "id": "b2_26_1",
              "name": "1동",
              "lat": 35.169831,
              "lng": 128.051238,
              "households": 25,
              "broadcast": 16,
              "internet": 20
            },
            {
              "id": "b2_26_2",
              "name": "2동",
              "lat": 35.16975619810881,
              "lng": 128.05132532426896,
              "households": 25,
              "broadcast": 14,
              "internet": 19
            }
          ]
        },
        {
          "id": "a2_27",
          "name": "평거주공1차아파트",
          "lat": 35.171246,
          "lng": 128.058081,
          "households": 340,
          "broadcast": 190,
          "internet": 255,
          "address": "경상남도 진주시 진양호로185번길 7 (평거동, 주공1차아파트)",
          "year": "1988",
          "buildings": [
            {
              "id": "b2_27_1",
              "name": "1동",
              "lat": 35.171246,
              "lng": 128.057681,
              "households": 49,
              "broadcast": 35,
              "internet": 38
            },
            {
              "id": "b2_27_2",
              "name": "2동",
              "lat": 35.171546,
              "lng": 128.057681,
              "households": 49,
              "broadcast": 32,
              "internet": 36
            },
            {
              "id": "b2_27_3",
              "name": "3동",
              "lat": 35.170946,
              "lng": 128.058081,
              "households": 49,
              "broadcast": 32,
              "internet": 37
            },
            {
              "id": "b2_27_4",
              "name": "4동",
              "lat": 35.171246,
              "lng": 128.058081,
              "households": 49,
              "broadcast": 27,
              "internet": 33
            },
            {
              "id": "b2_27_5",
              "name": "5동",
              "lat": 35.171546,
              "lng": 128.058081,
              "households": 48,
              "broadcast": 29,
              "internet": 39
            },
            {
              "id": "b2_27_6",
              "name": "6동",
              "lat": 35.170946,
              "lng": 128.058481,
              "households": 48,
              "broadcast": 28,
              "internet": 32
            },
            {
              "id": "b2_27_7",
              "name": "7동",
              "lat": 35.171246,
              "lng": 128.058481,
              "households": 48,
              "broadcast": 32,
              "internet": 37
            }
          ]
        }
      ]
    },
    {
      "id": "d5",
      "name": "신안동",
      "lat": 35.183171,
      "lng": 128.068956,
      "households": 5366,
      "broadcast": 4124,
      "internet": 4725,
      "singleHouseholds": 0,
      "apartments": [
        {
          "id": "a5_1",
          "name": "신안원정그린빌",
          "lat": 35.190467,
          "lng": 128.068407,
          "households": 83,
          "broadcast": 49,
          "internet": 69,
          "address": "경상남도 진주시 촉석로50번길 8 (신안동, 신안원정그린빌)",
          "year": "2002",
          "buildings": [
            {
              "id": "b5_1_1",
              "name": "1동",
              "lat": 35.190467,
              "lng": 128.068407,
              "households": 83,
              "broadcast": 54,
              "internet": 58
            }
          ]
        },
        {
          "id": "a5_2",
          "name": "대화르네르빌",
          "lat": 35.185945,
          "lng": 128.073327,
          "households": 38,
          "broadcast": 24,
          "internet": 25,
          "address": "경상남도 진주시 천수로298번길 10 (신안동, 대화리네르빌)",
          "year": "2001",
          "buildings": [
            {
              "id": "b5_2_1",
              "name": "1동",
              "lat": 35.185945,
              "lng": 128.073327,
              "households": 38,
              "broadcast": 26,
              "internet": 28
            }
          ]
        },
        {
          "id": "a5_3",
          "name": "신안주공1차아파트",
          "lat": 35.177527,
          "lng": 128.06899,
          "households": 787,
          "broadcast": 511,
          "internet": 519,
          "address": "경상남도 진주시 신안들말길 17 (신안동, 주공1차아파트)",
          "year": "1998",
          "buildings": [
            {
              "id": "b5_3_1",
              "name": "101동",
              "lat": 35.17774073,
              "lng": 128.069722009,
              "households": 61,
              "broadcast": 42,
              "internet": 46
            },
            {
              "id": "b5_3_2",
              "name": "102동",
              "lat": 35.177510213,
              "lng": 128.070241088,
              "households": 61,
              "broadcast": 34,
              "internet": 51
            },
            {
              "id": "b5_3_3",
              "name": "103동",
              "lat": 35.177088709,
              "lng": 128.07006391,
              "households": 61,
              "broadcast": 36,
              "internet": 40
            },
            {
              "id": "b5_3_4",
              "name": "104동",
              "lat": 35.177328784,
              "lng": 128.069355059,
              "households": 61,
              "broadcast": 40,
              "internet": 48
            },
            {
              "id": "b5_3_5",
              "name": "105동",
              "lat": 35.176801493,
              "lng": 128.069451671,
              "households": 61,
              "broadcast": 41,
              "internet": 50
            },
            {
              "id": "b5_3_6",
              "name": "106동",
              "lat": 35.17694819,
              "lng": 128.068886091,
              "households": 61,
              "broadcast": 35,
              "internet": 39
            },
            {
              "id": "b5_3_7",
              "name": "107동",
              "lat": 35.177351597,
              "lng": 128.068450527,
              "households": 61,
              "broadcast": 35,
              "internet": 49
            },
            {
              "id": "b5_3_8",
              "name": "108동",
              "lat": 35.177272277,
              "lng": 128.068064389,
              "households": 60,
              "broadcast": 34,
              "internet": 43
            },
            {
              "id": "b5_3_9",
              "name": "109동",
              "lat": 35.177646483,
              "lng": 128.067906134,
              "households": 60,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "b5_3_10",
              "name": "110동",
              "lat": 35.177806287,
              "lng": 128.068452709,
              "households": 60,
              "broadcast": 37,
              "internet": 49
            },
            {
              "id": "b5_3_11",
              "name": "111동",
              "lat": 35.178176954,
              "lng": 128.068299697,
              "households": 60,
              "broadcast": 36,
              "internet": 46
            },
            {
              "id": "b5_3_12",
              "name": "112동",
              "lat": 35.178294008,
              "lng": 128.068798119,
              "households": 60,
              "broadcast": 39,
              "internet": 43
            },
            {
              "id": "b5_3_13",
              "name": "113동",
              "lat": 35.17788098,
              "lng": 128.069175846,
              "households": 60,
              "broadcast": 34,
              "internet": 42
            }
          ]
        },
        {
          "id": "a5_4",
          "name": "흥한스위트",
          "lat": 35.186602,
          "lng": 128.071036,
          "households": 92,
          "broadcast": 51,
          "internet": 76,
          "address": "경상남도 진주시 신안로 94 (신안동, 흥한스위트)",
          "year": "1998",
          "buildings": [
            {
              "id": "b5_4_1",
              "name": "1동",
              "lat": 35.18622535834336,
              "lng": 128.07130135380595,
              "households": 92,
              "broadcast": 61,
              "internet": 69
            }
          ]
        },
        {
          "id": "a5_5",
          "name": "신안주공3차아파트",
          "lat": 35.177302,
          "lng": 128.064702,
          "households": 1046,
          "broadcast": 627,
          "internet": 732,
          "address": "경상남도 진주시 석갑로 58 (신안동, 주공3차아파트)",
          "year": "1997",
          "buildings": [
            {
              "id": "b5_5_1",
              "name": "1동",
              "lat": 35.17706880150427,
              "lng": 128.06648800104384,
              "households": 75,
              "broadcast": 44,
              "internet": 60
            },
            {
              "id": "b5_5_2",
              "name": "2동",
              "lat": 35.177622105315415,
              "lng": 128.0656234026585,
              "households": 75,
              "broadcast": 51,
              "internet": 60
            },
            {
              "id": "b5_5_3",
              "name": "3동",
              "lat": 35.177002,
              "lng": 128.064302,
              "households": 75,
              "broadcast": 46,
              "internet": 54
            },
            {
              "id": "b5_5_4",
              "name": "4동",
              "lat": 35.177302,
              "lng": 128.064302,
              "households": 75,
              "broadcast": 54,
              "internet": 61
            },
            {
              "id": "b5_5_5",
              "name": "5동",
              "lat": 35.177602,
              "lng": 128.064302,
              "households": 75,
              "broadcast": 46,
              "internet": 60
            },
            {
              "id": "b5_5_6",
              "name": "6동",
              "lat": 35.177002,
              "lng": 128.064702,
              "households": 75,
              "broadcast": 54,
              "internet": 61
            },
            {
              "id": "b5_5_7",
              "name": "7동",
              "lat": 35.177302,
              "lng": 128.064702,
              "households": 75,
              "broadcast": 47,
              "internet": 51
            },
            {
              "id": "b5_5_8",
              "name": "8동",
              "lat": 35.177602,
              "lng": 128.064702,
              "households": 75,
              "broadcast": 51,
              "internet": 63
            },
            {
              "id": "b5_5_9",
              "name": "9동",
              "lat": 35.177002,
              "lng": 128.065102,
              "households": 75,
              "broadcast": 44,
              "internet": 48
            },
            {
              "id": "b5_5_10",
              "name": "10동",
              "lat": 35.177302,
              "lng": 128.065102,
              "households": 75,
              "broadcast": 49,
              "internet": 57
            },
            {
              "id": "b5_5_11",
              "name": "11동",
              "lat": 35.177602,
              "lng": 128.065102,
              "households": 74,
              "broadcast": 47,
              "internet": 58
            },
            {
              "id": "b5_5_12",
              "name": "12동",
              "lat": 35.177002,
              "lng": 128.065502,
              "households": 74,
              "broadcast": 52,
              "internet": 59
            },
            {
              "id": "b5_5_13",
              "name": "13동",
              "lat": 35.177302,
              "lng": 128.065502,
              "households": 74,
              "broadcast": 54,
              "internet": 59
            },
            {
              "id": "b5_5_14",
              "name": "14동",
              "lat": 35.177602,
              "lng": 128.065502,
              "households": 74,
              "broadcast": 51,
              "internet": 58
            }
          ]
        },
        {
          "id": "a5_6",
          "name": "신안주공2단지아파트",
          "lat": 35.179698,
          "lng": 128.066386,
          "households": 519,
          "broadcast": 306,
          "internet": 394,
          "address": "경상남도 진주시 신안들말길 47 (신안동, 신안주공2단지)",
          "year": "1996",
          "buildings": [
            {
              "id": "b5_6_1",
              "name": "1동",
              "lat": 35.17908470492456,
              "lng": 128.06621549770506,
              "households": 104,
              "broadcast": 65,
              "internet": 78
            },
            {
              "id": "b5_6_2",
              "name": "2동",
              "lat": 35.179938,
              "lng": 128.066146,
              "households": 104,
              "broadcast": 62,
              "internet": 71
            },
            {
              "id": "b5_6_3",
              "name": "3동",
              "lat": 35.17888418211024,
              "lng": 128.06640303870194,
              "households": 104,
              "broadcast": 61,
              "internet": 87
            },
            {
              "id": "b5_6_4",
              "name": "4동",
              "lat": 35.179638,
              "lng": 128.066546,
              "households": 104,
              "broadcast": 73,
              "internet": 67
            },
            {
              "id": "b5_6_5",
              "name": "5동",
              "lat": 35.17767179567032,
              "lng": 128.06717812888022,
              "households": 103,
              "broadcast": 62,
              "internet": 78
            }
          ]
        },
        {
          "id": "a5_7",
          "name": "신안주공2차아파트",
          "lat": 35.179638,
          "lng": 128.066146,
          "households": 660,
          "broadcast": 429,
          "internet": 475,
          "address": "경상남도 진주시 신안들말길 47 (신안동, 신안주공2차)",
          "year": "1996",
          "buildings": [
            {
              "id": "b5_7_1",
              "name": "1동",
              "lat": 35.179638,
              "lng": 128.065746,
              "households": 83,
              "broadcast": 45,
              "internet": 70
            },
            {
              "id": "b5_7_2",
              "name": "2동",
              "lat": 35.177622100819754,
              "lng": 128.06562340043314,
              "households": 83,
              "broadcast": 61,
              "internet": 66
            },
            {
              "id": "b5_7_3",
              "name": "3동",
              "lat": 35.179052800627,
              "lng": 128.0665504997344,
              "households": 83,
              "broadcast": 52,
              "internet": 68
            },
            {
              "id": "b5_7_4",
              "name": "4동",
              "lat": 35.179638,
              "lng": 128.066146,
              "households": 83,
              "broadcast": 62,
              "internet": 66
            },
            {
              "id": "b5_7_5",
              "name": "5동",
              "lat": 35.179938,
              "lng": 128.066146,
              "households": 82,
              "broadcast": 52,
              "internet": 66
            },
            {
              "id": "b5_7_6",
              "name": "6동",
              "lat": 35.179338,
              "lng": 128.066546,
              "households": 82,
              "broadcast": 61,
              "internet": 64
            },
            {
              "id": "b5_7_7",
              "name": "7동",
              "lat": 35.179638,
              "lng": 128.066546,
              "households": 82,
              "broadcast": 59,
              "internet": 68
            },
            {
              "id": "b5_7_8",
              "name": "8동",
              "lat": 35.179938,
              "lng": 128.066546,
              "households": 82,
              "broadcast": 53,
              "internet": 54
            }
          ]
        },
        {
          "id": "a5_8",
          "name": "신안흥한2차아파트",
          "lat": 35.180912,
          "lng": 128.068343,
          "households": 345,
          "broadcast": 251,
          "internet": 241,
          "address": "경상남도 진주시 평거로139번길 11-3 (신안동, 신안흥한타운2차아파트)",
          "year": "1995",
          "buildings": [
            {
              "id": "b5_8_1",
              "name": "1동",
              "lat": 35.180904246641376,
              "lng": 128.06822793350503,
              "households": 115,
              "broadcast": 63,
              "internet": 94
            },
            {
              "id": "b5_8_2",
              "name": "2동",
              "lat": 35.180684864928104,
              "lng": 128.06876436328898,
              "households": 115,
              "broadcast": 72,
              "internet": 92
            },
            {
              "id": "b5_8_3",
              "name": "3동",
              "lat": 35.1812956297527,
              "lng": 128.06863770542247,
              "households": 115,
              "broadcast": 86,
              "internet": 78
            }
          ]
        },
        {
          "id": "a5_9",
          "name": "평거2차현대아파트",
          "lat": 35.180152,
          "lng": 128.066649,
          "households": 402,
          "broadcast": 281,
          "internet": 297,
          "address": "경상남도 진주시 신안들말길 58 (신안동, 평거2차현대아파트)",
          "year": "1994",
          "buildings": [
            {
              "id": "b5_9_1",
              "name": "1동",
              "lat": 35.18008548176269,
              "lng": 128.0664251677363,
              "households": 81,
              "broadcast": 49,
              "internet": 56
            },
            {
              "id": "b5_9_2",
              "name": "2동",
              "lat": 35.180137957554024,
              "lng": 128.06666066917225,
              "households": 81,
              "broadcast": 45,
              "internet": 63
            },
            {
              "id": "b5_9_3",
              "name": "3동",
              "lat": 35.180198801738506,
              "lng": 128.06810490419682,
              "households": 80,
              "broadcast": 57,
              "internet": 61
            },
            {
              "id": "b5_9_4",
              "name": "4동",
              "lat": 35.18108629767225,
              "lng": 128.06678670766325,
              "households": 80,
              "broadcast": 56,
              "internet": 64
            },
            {
              "id": "b5_9_5",
              "name": "5동",
              "lat": 35.180943798580415,
              "lng": 128.06627111259544,
              "households": 80,
              "broadcast": 48,
              "internet": 56
            }
          ]
        },
        {
          "id": "a5_10",
          "name": "신안흥한1차아파트",
          "lat": 35.181445,
          "lng": 128.067434,
          "households": 225,
          "broadcast": 166,
          "internet": 166,
          "address": "경상남도 진주시 진양호로328번길 4 (신안동, 신안1차흥한타운)",
          "year": "1993",
          "buildings": [
            {
              "id": "b5_10_1",
              "name": "101동",
              "lat": 35.181499169,
              "lng": 128.066980126,
              "households": 75,
              "broadcast": 56,
              "internet": 49
            },
            {
              "id": "b5_10_2",
              "name": "102동",
              "lat": 35.181212508,
              "lng": 128.067559942,
              "households": 75,
              "broadcast": 47,
              "internet": 59
            },
            {
              "id": "b5_10_3",
              "name": "103동",
              "lat": 35.181622786,
              "lng": 128.067761258,
              "households": 75,
              "broadcast": 46,
              "internet": 58
            }
          ]
        },
        {
          "id": "a5_11",
          "name": "평거1차현대아파트",
          "lat": 35.179566,
          "lng": 128.067724,
          "households": 441,
          "broadcast": 277,
          "internet": 357,
          "address": "경상남도 진주시 평거로115번길 5 (신안동, 평거1차현대아파트)",
          "year": "1993",
          "buildings": [
            {
              "id": "b5_11_1",
              "name": "1동",
              "lat": 35.17950424332539,
              "lng": 128.06769673791584,
              "households": 147,
              "broadcast": 102,
              "internet": 114
            },
            {
              "id": "b5_11_2",
              "name": "2동",
              "lat": 35.18064081756069,
              "lng": 128.06670721157323,
              "households": 147,
              "broadcast": 97,
              "internet": 117
            },
            {
              "id": "b5_11_3",
              "name": "3동",
              "lat": 35.180236923255244,
              "lng": 128.06785545672844,
              "households": 147,
              "broadcast": 105,
              "internet": 117
            }
          ]
        },
        {
          "id": "a5_12",
          "name": "그린타운(구.삼진빌라)",
          "lat": 35.182972,
          "lng": 128.064389,
          "households": 112,
          "broadcast": 66,
          "internet": 85,
          "address": "경상남도 진주시 석갑로156번길 19 (신안동, 그린타운)",
          "year": "1992",
          "buildings": [
            {
              "id": "b5_12_1",
              "name": "1동",
              "lat": 35.182971615,
              "lng": 128.064388596,
              "households": 112,
              "broadcast": 78,
              "internet": 77
            }
          ]
        },
        {
          "id": "a5_13",
          "name": "신안빌라",
          "lat": 35.17814,
          "lng": 128.061003,
          "households": 48,
          "broadcast": 32,
          "internet": 33,
          "address": "경상남도 진주시 석갑로89번길 5-5 (신안동, 신안빌라)",
          "year": "1992",
          "buildings": [
            {
              "id": "b5_13_1",
              "name": "1동",
              "lat": 35.1809378738057,
              "lng": 128.07218100177982,
              "households": 48,
              "broadcast": 32,
              "internet": 33
            }
          ]
        },
        {
          "id": "a5_14",
          "name": "대경강변맨션아파트",
          "lat": 35.182995,
          "lng": 128.073377,
          "households": 66,
          "broadcast": 44,
          "internet": 46,
          "address": "경상남도 진주시 남강로503번길 7 (신안동, 대경강변맨션)",
          "year": "1991",
          "buildings": [
            {
              "id": "b5_14_1",
              "name": "1동",
              "lat": 35.182995,
              "lng": 128.073377,
              "households": 66,
              "broadcast": 37,
              "internet": 50
            }
          ]
        },
        {
          "id": "a5_15",
          "name": "신안한보타워맨션",
          "lat": 35.182609,
          "lng": 128.072629,
          "households": 132,
          "broadcast": 76,
          "internet": 89,
          "address": "경상남도 진주시 남강로491번길 12 (신안동, 한보타워맨션)",
          "year": "1991",
          "buildings": [
            {
              "id": "b5_15_1",
              "name": "1동",
              "lat": 35.182609253,
              "lng": 128.072628551,
              "households": 132,
              "broadcast": 95,
              "internet": 87
            }
          ]
        },
        {
          "id": "a5_16",
          "name": "신안진주아파트",
          "lat": 35.182436,
          "lng": 128.064188,
          "households": 60,
          "broadcast": 43,
          "internet": 43,
          "address": "경상남도 진주시 석갑로142번길 6 (신안동, 신안진주아파트)",
          "year": "1990",
          "buildings": [
            {
              "id": "b5_16_1",
              "name": "1동",
              "lat": 35.17812108286639,
              "lng": 128.069628902571,
              "households": 60,
              "broadcast": 43,
              "internet": 41
            }
          ]
        },
        {
          "id": "a5_17",
          "name": "한주파크맨션",
          "lat": 35.181268,
          "lng": 128.072343,
          "households": 195,
          "broadcast": 140,
          "internet": 165,
          "address": "경상남도 진주시 남강로 479 (신안동, 한주파크맨션)",
          "year": "1990",
          "buildings": [
            {
              "id": "b5_17_1",
              "name": "1동",
              "lat": 35.181267845,
              "lng": 128.072342544,
              "households": 195,
              "broadcast": 138,
              "internet": 138
            }
          ]
        },
        {
          "id": "a5_18",
          "name": "신안현대아파트",
          "lat": 35.184172,
          "lng": 128.071826,
          "households": 694,
          "broadcast": 464,
          "internet": 582,
          "address": "경상남도 진주시 천수로 315 (신안동, 현대아파트)",
          "year": "1989",
          "buildings": [
            {
              "id": "b5_18_1",
              "name": "101동",
              "lat": 35.184679397,
              "lng": 128.071384011,
              "households": 100,
              "broadcast": 75,
              "internet": 74
            },
            {
              "id": "b5_18_2",
              "name": "102동",
              "lat": 35.184789402,
              "lng": 128.072336659,
              "households": 99,
              "broadcast": 58,
              "internet": 83
            },
            {
              "id": "b5_18_3",
              "name": "103동",
              "lat": 35.184240379,
              "lng": 128.071310678,
              "households": 99,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "b5_18_4",
              "name": "104동",
              "lat": 35.184365327,
              "lng": 128.072406014,
              "households": 99,
              "broadcast": 74,
              "internet": 75
            },
            {
              "id": "b5_18_5",
              "name": "105동",
              "lat": 35.183811654,
              "lng": 128.071364921,
              "households": 99,
              "broadcast": 73,
              "internet": 74
            },
            {
              "id": "b5_18_6",
              "name": "106동",
              "lat": 35.18391835,
              "lng": 128.072355436,
              "households": 99,
              "broadcast": 69,
              "internet": 75
            },
            {
              "id": "b5_18_7",
              "name": "107동",
              "lat": 35.18339838,
              "lng": 128.07162361,
              "households": 99,
              "broadcast": 68,
              "internet": 79
            }
          ]
        },
        {
          "id": "a5_19",
          "name": "신안삼우빌라",
          "lat": 35.186002,
          "lng": 128.073795,
          "households": 20,
          "broadcast": 15,
          "internet": 16,
          "address": "경상남도 진주시 남강로539번길 11 (신안동, 신안삼우빌라)",
          "year": "1989",
          "buildings": [
            {
              "id": "b5_19_1",
              "name": "1동",
              "lat": 35.186002,
              "lng": 128.073795,
              "households": 20,
              "broadcast": 11,
              "internet": 14
            }
          ]
        },
        {
          "id": "a5_20",
          "name": "영남스타맨션",
          "lat": 35.183045,
          "lng": 128.071382,
          "households": 30,
          "broadcast": 19,
          "internet": 19,
          "address": "경상남도 진주시 신안로 54 (신안동, 영남스타맨션)",
          "year": "1989",
          "buildings": [
            {
              "id": "b5_20_1",
              "name": "1동",
              "lat": 35.183045063,
              "lng": 128.071381706,
              "households": 30,
              "broadcast": 18,
              "internet": 19
            }
          ]
        },
        {
          "id": "a5_21",
          "name": "국제2차아파트",
          "lat": 35.181987,
          "lng": 128.063745,
          "households": 31,
          "broadcast": 21,
          "internet": 22,
          "address": "경상남도 진주시 석갑로 138 (신안동, 신안국제맨션)",
          "year": "1988",
          "buildings": [
            {
              "id": "b5_21_1",
              "name": "1동",
              "lat": 35.181837,
              "lng": 128.063745,
              "households": 16,
              "broadcast": 11,
              "internet": 12
            },
            {
              "id": "b5_21_2",
              "name": "2동",
              "lat": 35.182137,
              "lng": 128.063745,
              "households": 15,
              "broadcast": 9,
              "internet": 11
            }
          ]
        },
        {
          "id": "a5_22",
          "name": "신안대림맨션",
          "lat": 35.185924,
          "lng": 128.072395,
          "households": 30,
          "broadcast": 22,
          "internet": 22,
          "address": "경상남도 진주시 천수로298번길 16 (신안동, 신안대림맨션)",
          "year": "1988",
          "buildings": [
            {
              "id": "b5_22_1",
              "name": "1동",
              "lat": 35.185923922,
              "lng": 128.072394658,
              "households": 30,
              "broadcast": 17,
              "internet": 25
            }
          ]
        },
        {
          "id": "a5_23",
          "name": "국제1차아파트",
          "lat": 35.182198,
          "lng": 128.063387,
          "households": 120,
          "broadcast": 67,
          "internet": 78,
          "address": "경상남도 진주시 석갑로 138 (신안동, 국제1차아파트)",
          "year": "1987",
          "buildings": [
            {
              "id": "b5_23_1",
              "name": "1동",
              "lat": 35.182048,
              "lng": 128.063387,
              "households": 60,
              "broadcast": 36,
              "internet": 49
            },
            {
              "id": "b5_23_2",
              "name": "2동",
              "lat": 35.182348,
              "lng": 128.063387,
              "households": 60,
              "broadcast": 45,
              "internet": 45
            }
          ]
        },
        {
          "id": "a5_24",
          "name": "흥진아파트",
          "lat": 35.190637,
          "lng": 128.069446,
          "households": 48,
          "broadcast": 27,
          "internet": 33,
          "address": "경상남도 진주시 신안로126번길 44 (신안동, 흥진아파트)",
          "year": "1986",
          "buildings": [
            {
              "id": "b5_24_1",
              "name": "1동",
              "lat": 35.190487,
              "lng": 128.069446,
              "households": 24,
              "broadcast": 14,
              "internet": 16
            },
            {
              "id": "b5_24_2",
              "name": "2동",
              "lat": 35.19018899719934,
              "lng": 128.06992986521277,
              "households": 24,
              "broadcast": 17,
              "internet": 16
            }
          ]
        },
        {
          "id": "a5_25",
          "name": "명신아파트",
          "lat": 35.188883,
          "lng": 128.070479,
          "households": 24,
          "broadcast": 17,
          "internet": 19,
          "address": "경상남도 진주시 신안로126번길 21 (신안동, 명신아파트)",
          "year": "1986",
          "buildings": [
            {
              "id": "b5_25_1",
              "name": "1동",
              "lat": 35.188882828,
              "lng": 128.070478953,
              "households": 24,
              "broadcast": 14,
              "internet": 20
            }
          ]
        },
        {
          "id": "a5_26",
          "name": "일신조합주택",
          "lat": 35.187081,
          "lng": 128.068804,
          "households": 24,
          "broadcast": 14,
          "internet": 18,
          "address": "경상남도 진주시 숙호산로 130 (신안동, 일신조합주택)",
          "year": "1985",
          "buildings": [
            {
              "id": "b5_26_1",
              "name": "1동",
              "lat": 35.187081,
              "lng": 128.068804,
              "households": 24,
              "broadcast": 15,
              "internet": 15
            }
          ]
        },
        {
          "id": "a5_27",
          "name": "목화주택조합",
          "lat": 35.182136,
          "lng": 128.072091,
          "households": 44,
          "broadcast": 25,
          "internet": 37,
          "address": "경상남도 진주시 신안로34번길 12 (신안동, 목화조합주택)",
          "year": "1984",
          "buildings": [
            {
              "id": "b5_27_1",
              "name": "1동",
              "lat": 35.181986,
              "lng": 128.072091,
              "households": 22,
              "broadcast": 13,
              "internet": 14
            },
            {
              "id": "b5_27_2",
              "name": "2동",
              "lat": 35.182286,
              "lng": 128.072091,
              "households": 22,
              "broadcast": 13,
              "internet": 15
            }
          ]
        },
        {
          "id": "a5_28",
          "name": "신안화신주택",
          "lat": 35.18537,
          "lng": 128.07121,
          "households": 21,
          "broadcast": 13,
          "internet": 15,
          "address": "경상남도 진주시 신안로88번길 14 (신안동, 화신주택)",
          "year": "1984",
          "buildings": [
            {
              "id": "b5_28_1",
              "name": "1동",
              "lat": 35.18537,
              "lng": 128.07121,
              "households": 21,
              "broadcast": 14,
              "internet": 14
            }
          ]
        },
        {
          "id": "a5_29",
          "name": "남강국민주택조합",
          "lat": 35.185755,
          "lng": 128.07174,
          "households": 24,
          "broadcast": 13,
          "internet": 15,
          "address": "경상남도 진주시 신안로88번길 13 (신안동, 남강국민조합주택)",
          "year": "1984",
          "buildings": [
            {
              "id": "b5_29_1",
              "name": "1동",
              "lat": 35.185755,
              "lng": 128.07174,
              "households": 24,
              "broadcast": 13,
              "internet": 17
            }
          ]
        },
        {
          "id": "a5_30",
          "name": "진원목련주택",
          "lat": 35.182218,
          "lng": 128.072206,
          "households": 24,
          "broadcast": 17,
          "internet": 16,
          "address": "경상남도 진주시 신안로34번길 16 (신안동, 진원목련주택)",
          "year": "1983",
          "buildings": [
            {
              "id": "b5_30_1",
              "name": "1동",
              "lat": 35.182214881745296,
              "lng": 128.07220930920883,
              "households": 24,
              "broadcast": 14,
              "internet": 17
            }
          ]
        }
      ]
    },
    {
      "id": "d6",
      "name": "하대동",
      "lat": 35.191137,
      "lng": 128.121447,
      "households": 11275,
      "broadcast": 6017,
      "internet": 6867,
      "singleHouseholds": 4361,
      "apartments": [
        {
          "id": "a6_1",
          "name": "미르젠 3단지",
          "lat": 35.195108,
          "lng": 128.114255,
          "households": 46,
          "broadcast": 29,
          "internet": 34,
          "address": "경상남도 진주시 하대로26번길 20",
          "year": "2017",
          "buildings": [
            {
              "id": "b6_1_1",
              "name": "1동",
              "lat": 35.195108,
              "lng": 128.114255,
              "households": 46,
              "broadcast": 26,
              "internet": 32
            }
          ]
        },
        {
          "id": "a6_2",
          "name": "미르젠 1단지",
          "lat": 35.195108,
          "lng": 128.114255,
          "households": 37,
          "broadcast": 25,
          "internet": 25,
          "address": "경상남도 진주시 하대로26번길 20",
          "year": "2017",
          "buildings": [
            {
              "id": "b6_2_1",
              "name": "1동",
              "lat": 35.195108,
              "lng": 128.114255,
              "households": 37,
              "broadcast": 24,
              "internet": 29
            }
          ]
        },
        {
          "id": "a6_3",
          "name": "미르젠 2단지",
          "lat": 35.195108,
          "lng": 128.114255,
          "households": 44,
          "broadcast": 29,
          "internet": 30,
          "address": "경상남도 진주시 하대로26번길 20",
          "year": "2017",
          "buildings": [
            {
              "id": "b6_3_1",
              "name": "1동",
              "lat": 35.195108,
              "lng": 128.114255,
              "households": 44,
              "broadcast": 28,
              "internet": 31
            }
          ]
        },
        {
          "id": "a6_4",
          "name": "하대원정자우림아파트",
          "lat": 35.195431,
          "lng": 128.111994,
          "households": 46,
          "broadcast": 34,
          "internet": 31,
          "address": "경상남도 진주시 말티고개로108번길 19 (하대동, 원정자우림아파트)",
          "year": "2005",
          "buildings": [
            {
              "id": "b6_4_1",
              "name": "101동",
              "lat": 35.195305432,
              "lng": 128.112017683,
              "households": 23,
              "broadcast": 13,
              "internet": 18
            },
            {
              "id": "b6_4_2",
              "name": "102동",
              "lat": 35.19555604,
              "lng": 128.111969325,
              "households": 23,
              "broadcast": 13,
              "internet": 17
            }
          ]
        },
        {
          "id": "a6_5",
          "name": "하대한양아파트",
          "lat": 35.191442,
          "lng": 128.115566,
          "households": 48,
          "broadcast": 28,
          "internet": 32,
          "address": "경상남도 진주시 하대로40번길 24 (하대동, 하대한양아파트)",
          "year": "2000",
          "buildings": [
            {
              "id": "b6_5_1",
              "name": "101동",
              "lat": 35.191442157,
              "lng": 128.11556605,
              "households": 48,
              "broadcast": 28,
              "internet": 35
            }
          ]
        },
        {
          "id": "a6_6",
          "name": "대화강변마을",
          "lat": 35.194313,
          "lng": 128.126625,
          "households": 90,
          "broadcast": 56,
          "internet": 63,
          "address": "경상남도 진주시 도동천로 311 (하대동, 대화강변마을아파트)",
          "year": "1998",
          "buildings": [
            {
              "id": "b6_6_1",
              "name": "1동",
              "lat": 35.194313,
              "lng": 128.126625,
              "households": 90,
              "broadcast": 63,
              "internet": 75
            }
          ]
        },
        {
          "id": "a6_7",
          "name": "하대현대아파트",
          "lat": 35.192261,
          "lng": 128.125642,
          "households": 1108,
          "broadcast": 808,
          "internet": 897,
          "address": "경상남도 진주시 하대로 142 (하대동, 현대아파트)",
          "year": "1996",
          "buildings": [
            {
              "id": "b6_7_1",
              "name": "1동",
              "lat": 35.19139729289908,
              "lng": 128.12560469086569,
              "households": 159,
              "broadcast": 98,
              "internet": 133
            },
            {
              "id": "b6_7_2",
              "name": "2동",
              "lat": 35.19143325695825,
              "lng": 128.1267656065025,
              "households": 159,
              "broadcast": 109,
              "internet": 122
            },
            {
              "id": "b6_7_3",
              "name": "3동",
              "lat": 35.19196588140743,
              "lng": 128.1267340797497,
              "households": 158,
              "broadcast": 109,
              "internet": 115
            },
            {
              "id": "b6_7_4",
              "name": "4동",
              "lat": 35.19202423656174,
              "lng": 128.1257630275872,
              "households": 158,
              "broadcast": 116,
              "internet": 112
            },
            {
              "id": "b6_7_5",
              "name": "5동",
              "lat": 35.19254579859202,
              "lng": 128.12692682370115,
              "households": 158,
              "broadcast": 105,
              "internet": 115
            },
            {
              "id": "b6_7_6",
              "name": "6동",
              "lat": 35.19259921854885,
              "lng": 128.12627196117242,
              "households": 158,
              "broadcast": 102,
              "internet": 121
            },
            {
              "id": "b6_7_7",
              "name": "7동",
              "lat": 35.193141111108716,
              "lng": 128.12679977159365,
              "households": 158,
              "broadcast": 96,
              "internet": 134
            }
          ]
        },
        {
          "id": "a6_8",
          "name": "하대쌍용아파트",
          "lat": 35.196219,
          "lng": 128.113671,
          "households": 156,
          "broadcast": 117,
          "internet": 107,
          "address": "경상남도 진주시 말티고개로108번길 5 (하대동, 진주쌍용아파트)",
          "year": "1996",
          "buildings": [
            {
              "id": "b6_8_1",
              "name": "101동",
              "lat": 35.196349086,
              "lng": 128.113492709,
              "households": 78,
              "broadcast": 55,
              "internet": 60
            },
            {
              "id": "b6_8_2",
              "name": "102동",
              "lat": 35.196089546,
              "lng": 128.113849148,
              "households": 78,
              "broadcast": 53,
              "internet": 56
            }
          ]
        },
        {
          "id": "a6_9",
          "name": "삼전프라자",
          "lat": 35.192763,
          "lng": 128.12127,
          "households": 176,
          "broadcast": 117,
          "internet": 135,
          "address": "경상남도 진주시 도동로 251 (하대동,삼전아파트)",
          "year": "1996",
          "buildings": [
            {
              "id": "b6_9_1",
              "name": "1동",
              "lat": 35.192959936312626,
              "lng": 128.12126228238623,
              "households": 176,
              "broadcast": 119,
              "internet": 133
            }
          ]
        },
        {
          "id": "a6_10",
          "name": "하대한보(3차)아파트",
          "lat": 35.186131,
          "lng": 128.128249,
          "households": 288,
          "broadcast": 192,
          "internet": 210,
          "address": "경상남도 진주시 남강로 1399 (하대동, 하대한보아파트)",
          "year": "1993",
          "buildings": [
            {
              "id": "b6_10_1",
              "name": "1동",
              "lat": 35.18525865713466,
              "lng": 128.1283202162107,
              "households": 144,
              "broadcast": 84,
              "internet": 103
            },
            {
              "id": "b6_10_2",
              "name": "2동",
              "lat": 35.185756588053735,
              "lng": 128.12829055741128,
              "households": 144,
              "broadcast": 79,
              "internet": 106
            }
          ]
        },
        {
          "id": "a6_11",
          "name": "하대도동대림아파트",
          "lat": 35.193211,
          "lng": 128.115429,
          "households": 283,
          "broadcast": 186,
          "internet": 186,
          "address": "경상남도 진주시 하대로40번길 4 (하대동, 도동대림아파트)",
          "year": "1992",
          "buildings": [
            {
              "id": "b6_11_1",
              "name": "1동",
              "lat": 35.19241637129362,
              "lng": 128.11522600353948,
              "households": 142,
              "broadcast": 105,
              "internet": 115
            },
            {
              "id": "b6_11_2",
              "name": "2동",
              "lat": 35.19241637129362,
              "lng": 128.11522600353948,
              "households": 141,
              "broadcast": 98,
              "internet": 98
            }
          ]
        },
        {
          "id": "a6_12",
          "name": "하대대영아파트",
          "lat": 35.196362,
          "lng": 128.112233,
          "households": 210,
          "broadcast": 149,
          "internet": 159,
          "address": "경상남도 진주시 말티고개로 102-5 (하대동, 하대대영아파트)",
          "year": "1992",
          "buildings": [
            {
              "id": "b6_12_1",
              "name": "1동",
              "lat": 35.19642527197888,
              "lng": 128.1129085044382,
              "households": 105,
              "broadcast": 72,
              "internet": 71
            },
            {
              "id": "b6_12_2",
              "name": "2동",
              "lat": 35.19616677841424,
              "lng": 128.11231842369898,
              "households": 105,
              "broadcast": 59,
              "internet": 82
            }
          ]
        },
        {
          "id": "a6_13",
          "name": "한보힐타워맨션",
          "lat": 35.186091,
          "lng": 128.127204,
          "households": 152,
          "broadcast": 92,
          "internet": 114,
          "address": "경상남도 진주시 상대로143번길 11-2 (하대동, 한보힐타워맨션)",
          "year": "1992",
          "buildings": [
            {
              "id": "b6_13_1",
              "name": "1동",
              "lat": 35.186091352,
              "lng": 128.127204162,
              "households": 152,
              "broadcast": 83,
              "internet": 110
            }
          ]
        },
        {
          "id": "a6_14",
          "name": "대경하대아파트",
          "lat": 35.194106,
          "lng": 128.125047,
          "households": 150,
          "broadcast": 91,
          "internet": 118,
          "address": "경상남도 진주시 도동로264번길 31 (하대동, 대경하대아파트)",
          "year": "1992",
          "buildings": [
            {
              "id": "b6_14_1",
              "name": "1동",
              "lat": 35.194106,
              "lng": 128.125047,
              "households": 150,
              "broadcast": 93,
              "internet": 121
            }
          ]
        },
        {
          "id": "a6_15",
          "name": "하대한보타워아파트",
          "lat": 35.188806,
          "lng": 128.126732,
          "households": 155,
          "broadcast": 94,
          "internet": 124,
          "address": "경상남도 진주시 모덕로306번길 2 (하대동, 한보타워맨션)",
          "year": "1992",
          "buildings": [
            {
              "id": "b6_15_1",
              "name": "1동",
              "lat": 35.188873871786335,
              "lng": 128.127355197882,
              "households": 155,
              "broadcast": 97,
              "internet": 130
            }
          ]
        },
        {
          "id": "a6_16",
          "name": "하대대림아파트",
          "lat": 35.194379,
          "lng": 128.127528,
          "households": 239,
          "broadcast": 131,
          "internet": 169,
          "address": "경상남도 진주시 도동천로 310 (하대동, 하대대림아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b6_16_1",
              "name": "1동",
              "lat": 35.19241637129362,
              "lng": 128.11522600353948,
              "households": 239,
              "broadcast": 162,
              "internet": 191
            }
          ]
        },
        {
          "id": "a6_17",
          "name": "하영파크아파트",
          "lat": 35.196455,
          "lng": 128.111687,
          "households": 50,
          "broadcast": 37,
          "internet": 41,
          "address": "경상남도 진주시 말티고개로100번길 16-6 (하대동, 하영파크아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b6_17_1",
              "name": "1동",
              "lat": 35.196455,
              "lng": 128.111687,
              "households": 50,
              "broadcast": 31,
              "internet": 33
            }
          ]
        },
        {
          "id": "a6_18",
          "name": "대화아파트",
          "lat": 35.193725,
          "lng": 128.123295,
          "households": 72,
          "broadcast": 40,
          "internet": 48,
          "address": "경상남도 진주시 하대로105번길 4 (하대동, 대화파크맨션)",
          "year": "1991",
          "buildings": [
            {
              "id": "b6_18_1",
              "name": "1동",
              "lat": 35.19370287919735,
              "lng": 128.12352757957214,
              "households": 72,
              "broadcast": 49,
              "internet": 58
            }
          ]
        },
        {
          "id": "a6_19",
          "name": "일신아파트",
          "lat": 35.193218,
          "lng": 128.114504,
          "households": 258,
          "broadcast": 190,
          "internet": 193,
          "address": "경상남도 진주시 하대로34번길 10 (하대동, 일신아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b6_19_1",
              "name": "1동",
              "lat": 35.1934359600026,
              "lng": 128.1143840894321,
              "households": 86,
              "broadcast": 59,
              "internet": 55
            },
            {
              "id": "b6_19_2",
              "name": "2동",
              "lat": 35.19343082635776,
              "lng": 128.114762596404,
              "households": 86,
              "broadcast": 64,
              "internet": 60
            },
            {
              "id": "b6_19_3",
              "name": "3동",
              "lat": 35.19325631771045,
              "lng": 128.1149777333581,
              "households": 86,
              "broadcast": 54,
              "internet": 69
            }
          ]
        },
        {
          "id": "a6_20",
          "name": "럭키강변아파트",
          "lat": 35.186316,
          "lng": 128.128542,
          "households": 150,
          "broadcast": 93,
          "internet": 102,
          "address": "경상남도 진주시 남강로 1407 (하대동, 럭키강변아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b6_20_1",
              "name": "1동",
              "lat": 35.18636410861175,
              "lng": 128.12855249988345,
              "households": 150,
              "broadcast": 105,
              "internet": 114
            }
          ]
        },
        {
          "id": "a6_21",
          "name": "하대흥한아파트",
          "lat": 35.188389,
          "lng": 128.113555,
          "households": 72,
          "broadcast": 39,
          "internet": 56,
          "address": "경상남도 진주시 선학산길 97-1 (하대동, 흥한하대아파트)",
          "year": "1990",
          "buildings": [
            {
              "id": "b6_21_1",
              "name": "1동",
              "lat": 35.18857266333861,
              "lng": 128.11397930469917,
              "households": 36,
              "broadcast": 21,
              "internet": 23
            },
            {
              "id": "b6_21_2",
              "name": "2동",
              "lat": 35.188539,
              "lng": 128.113555,
              "households": 36,
              "broadcast": 24,
              "internet": 29
            }
          ]
        },
        {
          "id": "a6_22",
          "name": "하대삼호맨션",
          "lat": 35.19242,
          "lng": 128.123707,
          "households": 90,
          "broadcast": 65,
          "internet": 74,
          "address": "경상남도 진주시 하대로106번길 13 (하대동, 하대삼호맨션)",
          "year": "1990",
          "buildings": [
            {
              "id": "b6_22_1",
              "name": "1동",
              "lat": 35.19209027817474,
              "lng": 128.12330969960087,
              "households": 30,
              "broadcast": 17,
              "internet": 24
            },
            {
              "id": "b6_22_2",
              "name": "2동",
              "lat": 35.19272,
              "lng": 128.123574,
              "households": 30,
              "broadcast": 19,
              "internet": 20
            },
            {
              "id": "b6_22_3",
              "name": "3동",
              "lat": 35.19212,
              "lng": 128.123974,
              "households": 30,
              "broadcast": 18,
              "internet": 23
            }
          ]
        },
        {
          "id": "a6_23",
          "name": "임광아파트",
          "lat": 35.18941,
          "lng": 128.125593,
          "households": 143,
          "broadcast": 105,
          "internet": 104,
          "address": "경상남도 진주시 모덕로 293 (하대동, 임광아파트)",
          "year": "1989",
          "buildings": [
            {
              "id": "b6_23_1",
              "name": "1동",
              "lat": 35.189600225536324,
              "lng": 128.12575781785029,
              "households": 72,
              "broadcast": 46,
              "internet": 48
            },
            {
              "id": "b6_23_2",
              "name": "2동",
              "lat": 35.189218025181255,
              "lng": 128.1258934836474,
              "households": 71,
              "broadcast": 48,
              "internet": 51
            }
          ]
        },
        {
          "id": "a6_24",
          "name": "삼전3차아파트",
          "lat": 35.192391,
          "lng": 128.123059,
          "households": 90,
          "broadcast": 53,
          "internet": 65,
          "address": "경상남도 진주시 하대로106번길 14 (하대동, 삼전3차아파트)",
          "year": "1989",
          "buildings": [
            {
              "id": "b6_24_1",
              "name": "1동",
              "lat": 35.19206221331299,
              "lng": 128.12319660048504,
              "households": 30,
              "broadcast": 19,
              "internet": 22
            },
            {
              "id": "b6_24_2",
              "name": "2동",
              "lat": 35.19219941208951,
              "lng": 128.12260650977618,
              "households": 30,
              "broadcast": 18,
              "internet": 24
            },
            {
              "id": "b6_24_3",
              "name": "3동",
              "lat": 35.19206221331299,
              "lng": 128.12319660048504,
              "households": 30,
              "broadcast": 18,
              "internet": 21
            }
          ]
        },
        {
          "id": "a6_25",
          "name": "올림피아골든맨션",
          "lat": 35.188388,
          "lng": 128.123113,
          "households": 60,
          "broadcast": 33,
          "internet": 48,
          "address": "경상남도 진주시 모덕로270번길 12 (하대동, 올림피아골든맨션)",
          "year": "1989",
          "buildings": [
            {
              "id": "b6_25_1",
              "name": "1동",
              "lat": 35.188238,
              "lng": 128.123113,
              "households": 30,
              "broadcast": 17,
              "internet": 23
            },
            {
              "id": "b6_25_2",
              "name": "2동",
              "lat": 35.188538,
              "lng": 128.123113,
              "households": 30,
              "broadcast": 22,
              "internet": 20
            }
          ]
        },
        {
          "id": "a6_26",
          "name": "삼전2차아파트",
          "lat": 35.187497,
          "lng": 128.127774,
          "households": 60,
          "broadcast": 45,
          "internet": 40,
          "address": "경상남도 진주시 모덕로306번길 17 (하대동, 삼전2차아파트)",
          "year": "1989",
          "buildings": [
            {
              "id": "b6_26_1",
              "name": "1동",
              "lat": 35.18772490857585,
              "lng": 128.1277538712685,
              "households": 20,
              "broadcast": 13,
              "internet": 15
            },
            {
              "id": "b6_26_2",
              "name": "2동",
              "lat": 35.18749826086478,
              "lng": 128.12778111273477,
              "households": 20,
              "broadcast": 11,
              "internet": 13
            },
            {
              "id": "b6_26_3",
              "name": "3동",
              "lat": 35.18726613217555,
              "lng": 128.12778356482812,
              "households": 20,
              "broadcast": 14,
              "internet": 14
            }
          ]
        },
        {
          "id": "a6_27",
          "name": "하대삼전아파트",
          "lat": 35.189765,
          "lng": 128.119524,
          "households": 100,
          "broadcast": 68,
          "internet": 66,
          "address": "경상남도 진주시 남강로1463번길 8 (하대동, 하대삼전아파트)",
          "year": "1988",
          "buildings": [
            {
              "id": "b6_27_1",
              "name": "1동",
              "lat": 35.18759689483328,
              "lng": 128.1275800036041,
              "households": 34,
              "broadcast": 21,
              "internet": 26
            },
            {
              "id": "b6_27_2",
              "name": "2동",
              "lat": 35.19166335282104,
              "lng": 128.12806696086858,
              "households": 33,
              "broadcast": 19,
              "internet": 26
            },
            {
              "id": "b6_27_3",
              "name": "3동",
              "lat": 35.19206221331299,
              "lng": 128.12319660048504,
              "households": 33,
              "broadcast": 20,
              "internet": 24
            }
          ]
        },
        {
          "id": "a6_28",
          "name": "건일아파트",
          "lat": 35.18657,
          "lng": 128.12557,
          "households": 120,
          "broadcast": 84,
          "internet": 98,
          "address": "경상남도 진주시 상대로119번길 20 (하대동, 건일아파트)",
          "year": "1987",
          "buildings": [
            {
              "id": "b6_28_1",
              "name": "1동",
              "lat": 35.186413583879684,
              "lng": 128.1255291006906,
              "households": 60,
              "broadcast": 35,
              "internet": 43
            },
            {
              "id": "b6_28_2",
              "name": "2동",
              "lat": 35.186555906551305,
              "lng": 128.1255686445021,
              "households": 60,
              "broadcast": 37,
              "internet": 46
            }
          ]
        },
        {
          "id": "a6_29",
          "name": "도운아파트",
          "lat": 35.188448,
          "lng": 128.128072,
          "households": 115,
          "broadcast": 79,
          "internet": 83,
          "address": "경상남도 진주시 남강로 1435 (하대동, 도운아파트)",
          "year": "1986",
          "buildings": [
            {
              "id": "b6_29_1",
              "name": "1동",
              "lat": 35.188298,
              "lng": 128.128072,
              "households": 58,
              "broadcast": 41,
              "internet": 47
            },
            {
              "id": "b6_29_2",
              "name": "2동",
              "lat": 35.188598,
              "lng": 128.128072,
              "households": 57,
              "broadcast": 40,
              "internet": 41
            }
          ]
        },
        {
          "id": "a6_30",
          "name": "성창아파트",
          "lat": 35.189085,
          "lng": 128.124904,
          "households": 65,
          "broadcast": 37,
          "internet": 48,
          "address": "경상남도 진주시 모덕로 283 (하대동, 성창조합주택)",
          "year": "1985",
          "buildings": [
            {
              "id": "b6_30_1",
              "name": "1동",
              "lat": 35.18965096576184,
              "lng": 128.12508247373745,
              "households": 65,
              "broadcast": 46,
              "internet": 46
            }
          ]
        },
        {
          "id": "a6_31",
          "name": "대성주택조합",
          "lat": 35.188943,
          "lng": 128.124459,
          "households": 50,
          "broadcast": 31,
          "internet": 40,
          "address": "경상남도 진주시 모덕로 280(하대동, 대성조합주택)",
          "year": "1985",
          "buildings": [
            {
              "id": "b6_31_1",
              "name": "1동",
              "lat": 35.188793,
              "lng": 128.124459,
              "households": 25,
              "broadcast": 15,
              "internet": 17
            },
            {
              "id": "b6_31_2",
              "name": "2동",
              "lat": 35.189093,
              "lng": 128.124459,
              "households": 25,
              "broadcast": 16,
              "internet": 20
            }
          ]
        },
        {
          "id": "a6_32",
          "name": "하대연립조합주택",
          "lat": 35.186719,
          "lng": 128.126419,
          "households": 50,
          "broadcast": 31,
          "internet": 37,
          "address": "경상남도 진주시 말띠고개로108번길 13(하대동, 하대연립조합주택)",
          "year": "1983",
          "buildings": [
            {
              "id": "b6_32_1",
              "name": "1동",
              "lat": 35.186719,
              "lng": 128.126286,
              "households": 17,
              "broadcast": 9,
              "internet": 13
            },
            {
              "id": "b6_32_2",
              "name": "2동",
              "lat": 35.187019,
              "lng": 128.126286,
              "households": 17,
              "broadcast": 11,
              "internet": 12
            },
            {
              "id": "b6_32_3",
              "name": "3동",
              "lat": 35.186419,
              "lng": 128.126686,
              "households": 16,
              "broadcast": 9,
              "internet": 12
            }
          ]
        },
        {
          "id": "a6_33",
          "name": "하대주공아파트",
          "lat": 35.184868,
          "lng": 128.125653,
          "households": 500,
          "broadcast": 335,
          "internet": 365,
          "address": "경상남도 진주시 상대로 125 (하대동, 주공아파트)",
          "year": "1982",
          "buildings": [
            {
              "id": "b6_33_1",
              "name": "1동",
              "lat": 35.18562252750902,
              "lng": 128.12755047942352,
              "households": 50,
              "broadcast": 32,
              "internet": 35
            },
            {
              "id": "b6_33_2",
              "name": "2동",
              "lat": 35.184906751179916,
              "lng": 128.12611650643453,
              "households": 50,
              "broadcast": 36,
              "internet": 36
            },
            {
              "id": "b6_33_3",
              "name": "3동",
              "lat": 35.185518562825415,
              "lng": 128.12634140400488,
              "households": 50,
              "broadcast": 33,
              "internet": 35
            },
            {
              "id": "b6_33_4",
              "name": "4동",
              "lat": 35.18562861100122,
              "lng": 128.12540660575678,
              "households": 50,
              "broadcast": 30,
              "internet": 37
            },
            {
              "id": "b6_33_5",
              "name": "5동",
              "lat": 35.185663539646455,
              "lng": 128.12617906331553,
              "households": 50,
              "broadcast": 37,
              "internet": 32
            },
            {
              "id": "b6_33_6",
              "name": "6동",
              "lat": 35.18540388842042,
              "lng": 128.12622876447,
              "households": 50,
              "broadcast": 37,
              "internet": 39
            },
            {
              "id": "b6_33_7",
              "name": "7동",
              "lat": 35.18570438862272,
              "lng": 128.12703700099237,
              "households": 50,
              "broadcast": 34,
              "internet": 33
            },
            {
              "id": "b6_33_8",
              "name": "8동",
              "lat": 35.185446938201636,
              "lng": 128.12716974695695,
              "households": 50,
              "broadcast": 29,
              "internet": 35
            },
            {
              "id": "b6_33_9",
              "name": "9동",
              "lat": 35.18520587046582,
              "lng": 128.1271870847878,
              "households": 50,
              "broadcast": 34,
              "internet": 38
            },
            {
              "id": "b6_33_10",
              "name": "10동",
              "lat": 35.18494672053641,
              "lng": 128.12720311168,
              "households": 50,
              "broadcast": 32,
              "internet": 38
            }
          ]
        },
        {
          "id": "a6_34",
          "name": "상대주공아파트",
          "lat": 35.185206,
          "lng": 128.123862,
          "households": 510,
          "broadcast": 341,
          "internet": 336,
          "address": "경상남도 진주시 상대로 101 (하대동, 상대아파트)",
          "year": "1980",
          "buildings": [
            {
              "id": "b6_34_1",
              "name": "1동",
              "lat": 35.184784935,
              "lng": 128.123654118,
              "households": 47,
              "broadcast": 31,
              "internet": 33
            },
            {
              "id": "b6_34_2",
              "name": "2동",
              "lat": 35.185027961,
              "lng": 128.123429652,
              "households": 47,
              "broadcast": 35,
              "internet": 34
            },
            {
              "id": "b6_34_3",
              "name": "3동",
              "lat": 35.184820888,
              "lng": 128.124452213,
              "households": 47,
              "broadcast": 28,
              "internet": 30
            },
            {
              "id": "b6_34_4",
              "name": "5동",
              "lat": 35.185207252,
              "lng": 128.124854431,
              "households": 47,
              "broadcast": 31,
              "internet": 34
            },
            {
              "id": "b6_34_5",
              "name": "6동",
              "lat": 35.185070317,
              "lng": 128.124358525,
              "households": 46,
              "broadcast": 31,
              "internet": 38
            },
            {
              "id": "b6_34_6",
              "name": "7동",
              "lat": 35.185307605,
              "lng": 128.124343733,
              "households": 46,
              "broadcast": 30,
              "internet": 36
            },
            {
              "id": "b6_34_7",
              "name": "8동",
              "lat": 35.185577056,
              "lng": 128.124463064,
              "households": 46,
              "broadcast": 28,
              "internet": 31
            },
            {
              "id": "b6_34_8",
              "name": "9동",
              "lat": 35.185549097,
              "lng": 128.12385285,
              "households": 46,
              "broadcast": 27,
              "internet": 35
            },
            {
              "id": "b6_34_9",
              "name": "10동",
              "lat": 35.185517933,
              "lng": 128.123120714,
              "households": 46,
              "broadcast": 29,
              "internet": 38
            },
            {
              "id": "b6_34_10",
              "name": "11동",
              "lat": 35.185259954,
              "lng": 128.123291698,
              "households": 46,
              "broadcast": 33,
              "internet": 35
            },
            {
              "id": "b6_34_11",
              "name": "12동",
              "lat": 35.185145998,
              "lng": 128.122660769,
              "households": 46,
              "broadcast": 27,
              "internet": 31
            }
          ]
        },
        {
          "id": "a16_1",
          "name": "호탄대동황토방",
          "lat": 35.163389,
          "lng": 128.111991,
          "households": 496,
          "broadcast": 362,
          "internet": 362,
          "address": "경상남도 진주시 가호로44번길 7 (호탄동, 대동아파트)",
          "year": "2003",
          "buildings": [
            {
              "id": "b16_1_1",
              "name": "1동",
              "lat": 35.163389,
              "lng": 128.111591,
              "households": 71,
              "broadcast": 44,
              "internet": 60
            },
            {
              "id": "b16_1_2",
              "name": "2동",
              "lat": 35.163689,
              "lng": 128.111591,
              "households": 71,
              "broadcast": 51,
              "internet": 46
            },
            {
              "id": "b16_1_3",
              "name": "3동",
              "lat": 35.163089,
              "lng": 128.111991,
              "households": 71,
              "broadcast": 46,
              "internet": 53
            },
            {
              "id": "b16_1_4",
              "name": "4동",
              "lat": 35.163389,
              "lng": 128.111991,
              "households": 71,
              "broadcast": 47,
              "internet": 60
            },
            {
              "id": "b16_1_5",
              "name": "5동",
              "lat": 35.163689,
              "lng": 128.111991,
              "households": 71,
              "broadcast": 51,
              "internet": 46
            },
            {
              "id": "b16_1_6",
              "name": "6동",
              "lat": 35.163089,
              "lng": 128.112391,
              "households": 71,
              "broadcast": 49,
              "internet": 48
            },
            {
              "id": "b16_1_7",
              "name": "7동",
              "lat": 35.163389,
              "lng": 128.112391,
              "households": 70,
              "broadcast": 49,
              "internet": 54
            }
          ]
        },
        {
          "id": "a16_2",
          "name": "호탄대경아르떼빌",
          "lat": 35.162059,
          "lng": 128.114411,
          "households": 131,
          "broadcast": 93,
          "internet": 94,
          "address": "경상남도 진주시 동부로67번길 10 (호탄동, 대경아르떼빌)",
          "year": "2002",
          "buildings": [
            {
              "id": "b16_2_1",
              "name": "1동",
              "lat": 35.162059,
              "lng": 128.114411,
              "households": 131,
              "broadcast": 93,
              "internet": 91
            }
          ]
        },
        {
          "id": "a16_3",
          "name": "호탄대경아파트(대경빌라트)",
          "lat": 35.164824,
          "lng": 128.115197,
          "households": 304,
          "broadcast": 191,
          "internet": 224,
          "address": "경상남도 진주시 가호로 79 (호탄동, 대경빌라트)",
          "year": "2000",
          "buildings": [
            {
              "id": "b16_3_1",
              "name": "1동",
              "lat": 35.164824,
              "lng": 128.114997,
              "households": 76,
              "broadcast": 48,
              "internet": 64
            },
            {
              "id": "b16_3_2",
              "name": "2동",
              "lat": 35.165124,
              "lng": 128.114997,
              "households": 76,
              "broadcast": 42,
              "internet": 57
            },
            {
              "id": "b16_3_3",
              "name": "3동",
              "lat": 35.164524,
              "lng": 128.115397,
              "households": 76,
              "broadcast": 42,
              "internet": 62
            },
            {
              "id": "b16_3_4",
              "name": "4동",
              "lat": 35.164824,
              "lng": 128.115397,
              "households": 76,
              "broadcast": 54,
              "internet": 58
            }
          ]
        },
        {
          "id": "a16_4",
          "name": "호탄삼성아파트",
          "lat": 35.163076,
          "lng": 128.113274,
          "households": 200,
          "broadcast": 122,
          "internet": 136,
          "address": "경상남도 진주시 동부로43번길 10-13 (호탄동, 삼성아파트)",
          "year": "1996",
          "buildings": [
            {
              "id": "b16_4_1",
              "name": "1동",
              "lat": 35.162926,
              "lng": 128.113274,
              "households": 100,
              "broadcast": 60,
              "internet": 79
            },
            {
              "id": "b16_4_2",
              "name": "2동",
              "lat": 35.163226,
              "lng": 128.113274,
              "households": 100,
              "broadcast": 63,
              "internet": 68
            }
          ]
        }
      ]
    },
    {
      "id": "d10",
      "name": "상대동",
      "lat": 35.182787,
      "lng": 128.111549,
      "households": 9957,
      "broadcast": 4564,
      "internet": 5505,
      "singleHouseholds": 6234,
      "apartments": [
        {
          "id": "a10_1",
          "name": "동명아파트",
          "lat": 35.183129,
          "lng": 128.111433,
          "households": 72,
          "broadcast": 54,
          "internet": 50,
          "address": "경상남도 진주시 돗골로 165 (상대동, 동명아파트)",
          "year": "2007",
          "buildings": [
            {
              "id": "b10_1_1",
              "name": "101동",
              "lat": 35.183129003,
              "lng": 128.111432582,
              "households": 72,
              "broadcast": 48,
              "internet": 47
            }
          ]
        },
        {
          "id": "a10_2",
          "name": "상대월드아파트",
          "lat": 35.177787,
          "lng": 128.112732,
          "households": 38,
          "broadcast": 20,
          "internet": 27,
          "address": "경상남도 진주시 돗골로106번길 5 (상대동, 월드트레비앙)",
          "year": "2005",
          "buildings": [
            {
              "id": "b10_2_1",
              "name": "1동",
              "lat": 35.177787,
              "lng": 128.112732,
              "households": 38,
              "broadcast": 22,
              "internet": 30
            }
          ]
        },
        {
          "id": "a10_3",
          "name": "상대한보아파트",
          "lat": 35.181232,
          "lng": 128.113756,
          "households": 805,
          "broadcast": 483,
          "internet": 547,
          "address": "경상남도 진주시 도동천로 120 (상대동, 상대한보아파트)",
          "year": "2002",
          "buildings": [
            {
              "id": "b10_3_1",
              "name": "101동",
              "lat": 35.181711598,
              "lng": 128.113470057,
              "households": 135,
              "broadcast": 79,
              "internet": 91
            },
            {
              "id": "b10_3_2",
              "name": "102동",
              "lat": 35.181484885,
              "lng": 128.114440719,
              "households": 134,
              "broadcast": 89,
              "internet": 91
            },
            {
              "id": "b10_3_3",
              "name": "103동",
              "lat": 35.181199693,
              "lng": 128.113024501,
              "households": 134,
              "broadcast": 92,
              "internet": 105
            },
            {
              "id": "b10_3_4",
              "name": "104동",
              "lat": 35.181232791,
              "lng": 128.113904232,
              "households": 134,
              "broadcast": 76,
              "internet": 89
            },
            {
              "id": "b10_3_5",
              "name": "105동",
              "lat": 35.180727475,
              "lng": 128.11323308,
              "households": 134,
              "broadcast": 77,
              "internet": 107
            },
            {
              "id": "b10_3_6",
              "name": "106동",
              "lat": 35.181033304,
              "lng": 128.114461437,
              "households": 134,
              "broadcast": 93,
              "internet": 100
            }
          ]
        },
        {
          "id": "a10_4",
          "name": "상대한주그린",
          "lat": 35.186218,
          "lng": 128.110742,
          "households": 110,
          "broadcast": 73,
          "internet": 77,
          "address": "경상남도 진주시 선학산길 46 (상대동, 상대한주그린아파트)",
          "year": "1999",
          "buildings": [
            {
              "id": "b10_4_1",
              "name": "1동",
              "lat": 35.186218,
              "lng": 128.110742,
              "households": 110,
              "broadcast": 66,
              "internet": 86
            }
          ]
        },
        {
          "id": "a10_5",
          "name": "상대흥한아파트",
          "lat": 35.182195,
          "lng": 128.116389,
          "households": 108,
          "broadcast": 66,
          "internet": 87,
          "address": "경상남도 진주시 대신로243번길 8 (상대동, 상대흥한아파트)",
          "year": "1995",
          "buildings": [
            {
              "id": "b10_5_1",
              "name": "1동",
              "lat": 35.182195,
              "lng": 128.116389,
              "households": 108,
              "broadcast": 62,
              "internet": 81
            }
          ]
        },
        {
          "id": "a10_6",
          "name": "동서훼밀리타운",
          "lat": 35.184225,
          "lng": 128.109035,
          "households": 162,
          "broadcast": 95,
          "internet": 113,
          "address": "경상남도 진주시 선학산길 24 (상대동, 동서훼밀리아파트)",
          "year": "1992",
          "buildings": [
            {
              "id": "b10_6_1",
              "name": "1동",
              "lat": 35.184225,
              "lng": 128.109035,
              "households": 162,
              "broadcast": 102,
              "internet": 110
            }
          ]
        },
        {
          "id": "a10_7",
          "name": "상대현대아파트",
          "lat": 35.186645,
          "lng": 128.113671,
          "households": 684,
          "broadcast": 376,
          "internet": 458,
          "address": "경상남도 진주시 모덕로181번길 7 (상대동, 상대현대아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b10_7_1",
              "name": "1동",
              "lat": 35.18664516409999,
              "lng": 128.11200383514438,
              "households": 76,
              "broadcast": 45,
              "internet": 56
            },
            {
              "id": "b10_7_2",
              "name": "2동",
              "lat": 35.18654772382745,
              "lng": 128.11295292286007,
              "households": 76,
              "broadcast": 44,
              "internet": 60
            },
            {
              "id": "b10_7_3",
              "name": "3동",
              "lat": 35.18704972463975,
              "lng": 128.11259867294282,
              "households": 76,
              "broadcast": 54,
              "internet": 64
            },
            {
              "id": "b10_7_4",
              "name": "4동",
              "lat": 35.18695212176959,
              "lng": 128.1130073516121,
              "households": 76,
              "broadcast": 41,
              "internet": 63
            },
            {
              "id": "b10_7_5",
              "name": "5동",
              "lat": 35.16943005258324,
              "lng": 128.1084366215911,
              "households": 76,
              "broadcast": 43,
              "internet": 59
            },
            {
              "id": "b10_7_6",
              "name": "6동",
              "lat": 35.186617320693976,
              "lng": 128.1148342468482,
              "households": 76,
              "broadcast": 51,
              "internet": 57
            },
            {
              "id": "b10_7_7",
              "name": "7동",
              "lat": 35.187255650432675,
              "lng": 128.11389054671127,
              "households": 76,
              "broadcast": 50,
              "internet": 58
            },
            {
              "id": "b10_7_8",
              "name": "8동",
              "lat": 35.18769813869651,
              "lng": 128.11341942572176,
              "households": 76,
              "broadcast": 47,
              "internet": 58
            },
            {
              "id": "b10_7_9",
              "name": "9동",
              "lat": 35.187702679157006,
              "lng": 128.1143132639847,
              "households": 76,
              "broadcast": 48,
              "internet": 53
            }
          ]
        },
        {
          "id": "a10_8",
          "name": "진주빌라맨션",
          "lat": 35.180284,
          "lng": 128.102637,
          "households": 24,
          "broadcast": 17,
          "internet": 19,
          "address": "경상남도 진주시 동진로107번길 11 (상대동, 진주빌라맨션)",
          "year": "1990",
          "buildings": [
            {
              "id": "b10_8_1",
              "name": "1동",
              "lat": 35.192019203742035,
              "lng": 128.0569517028274,
              "households": 24,
              "broadcast": 14,
              "internet": 16
            }
          ]
        },
        {
          "id": "a10_9",
          "name": "상대진주아파트",
          "lat": 35.188106,
          "lng": 128.11421,
          "households": 30,
          "broadcast": 17,
          "internet": 24,
          "address": "경상남도 진주시 모덕로181번길 17 (상대동, 상대진주아파트)",
          "year": "1989",
          "buildings": [
            {
              "id": "b10_9_1",
              "name": "1동",
              "lat": 35.188106,
              "lng": 128.11421,
              "households": 30,
              "broadcast": 20,
              "internet": 24
            }
          ]
        },
        {
          "id": "a10_10",
          "name": "상대대림맨션",
          "lat": 35.178958,
          "lng": 128.112507,
          "households": 40,
          "broadcast": 28,
          "internet": 29,
          "address": "경상남도 진주시 돗골로 120 (상대동, 상대대림맨션)",
          "year": "1989",
          "buildings": [
            {
              "id": "b10_10_1",
              "name": "1동",
              "lat": 35.178808,
              "lng": 128.112507,
              "households": 20,
              "broadcast": 11,
              "internet": 14
            },
            {
              "id": "b10_10_2",
              "name": "2동",
              "lat": 35.179108,
              "lng": 128.112507,
              "households": 20,
              "broadcast": 14,
              "internet": 13
            }
          ]
        },
        {
          "id": "a10_11",
          "name": "진주아파트",
          "lat": 35.188305,
          "lng": 128.114564,
          "households": 20,
          "broadcast": 13,
          "internet": 16,
          "address": "경상남도 진주시 모덕로181번길 18 (상대동, 진주주택)",
          "year": "1988",
          "buildings": [
            {
              "id": "b10_11_1",
              "name": "1동",
              "lat": 35.17547137944801,
              "lng": 128.1148495580931,
              "households": 20,
              "broadcast": 13,
              "internet": 13
            }
          ]
        },
        {
          "id": "a10_12",
          "name": "새진주아파트",
          "lat": 35.181433,
          "lng": 128.103748,
          "households": 48,
          "broadcast": 33,
          "internet": 37,
          "address": "경상남도 진주시 모덕로64번길 12 (상대동, 새진주아파트)",
          "year": "1986",
          "buildings": [
            {
              "id": "b10_12_1",
              "name": "1동",
              "lat": 35.18121074690443,
              "lng": 128.1041112609404,
              "households": 24,
              "broadcast": 14,
              "internet": 16
            },
            {
              "id": "b10_12_2",
              "name": "2동",
              "lat": 35.181583,
              "lng": 128.103748,
              "households": 24,
              "broadcast": 16,
              "internet": 18
            }
          ]
        },
        {
          "id": "a10_13",
          "name": "상대한주맨션",
          "lat": 35.181826,
          "lng": 128.116557,
          "households": 40,
          "broadcast": 26,
          "internet": 28,
          "address": "경상남도 진주시 대신로243번길 7 (상대동, 상대한주맨션)",
          "year": "1986",
          "buildings": [
            {
              "id": "b10_13_1",
              "name": "1동",
              "lat": 35.181676,
              "lng": 128.116557,
              "households": 20,
              "broadcast": 11,
              "internet": 13
            },
            {
              "id": "b10_13_2",
              "name": "2동",
              "lat": 35.181976,
              "lng": 128.116557,
              "households": 20,
              "broadcast": 11,
              "internet": 14
            }
          ]
        },
        {
          "id": "a10_14",
          "name": "동진주아파트",
          "lat": 35.17972,
          "lng": 128.115748,
          "households": 40,
          "broadcast": 26,
          "internet": 32,
          "address": "경상남도 진주시 동진로 224 (상대동, 동진주맨션)",
          "year": "1985",
          "buildings": [
            {
              "id": "b10_14_1",
              "name": "1동",
              "lat": 35.17095511220112,
              "lng": 128.10784857804845,
              "households": 20,
              "broadcast": 14,
              "internet": 15
            },
            {
              "id": "b10_14_2",
              "name": "2동",
              "lat": 35.19206221331299,
              "lng": 128.12319660048504,
              "households": 20,
              "broadcast": 11,
              "internet": 13
            }
          ]
        },
        {
          "id": "a10_15",
          "name": "송학아파트",
          "lat": 35.180394,
          "lng": 128.103842,
          "households": 60,
          "broadcast": 33,
          "internet": 49,
          "address": "경상남도 진주시 동진로119번길 11 (상대동, 송학맨션)",
          "year": "1984",
          "buildings": [
            {
              "id": "b10_15_1",
              "name": "1동",
              "lat": 35.180244,
              "lng": 128.103842,
              "households": 30,
              "broadcast": 22,
              "internet": 21
            },
            {
              "id": "b10_15_2",
              "name": "2동",
              "lat": 35.180544,
              "lng": 128.103842,
              "households": 30,
              "broadcast": 22,
              "internet": 24
            }
          ]
        },
        {
          "id": "a10_16",
          "name": "모란아파트",
          "lat": 35.181519,
          "lng": 128.106576,
          "households": 30,
          "broadcast": 21,
          "internet": 23,
          "address": "경상남도 진주시 솔밭로 137 (상대동, 모란아파트)",
          "year": "1982",
          "buildings": [
            {
              "id": "b10_16_1",
              "name": "1동",
              "lat": 35.181369,
              "lng": 128.106576,
              "households": 15,
              "broadcast": 10,
              "internet": 10
            },
            {
              "id": "b10_16_2",
              "name": "2동",
              "lat": 35.181669,
              "lng": 128.106576,
              "households": 15,
              "broadcast": 10,
              "internet": 10
            }
          ]
        },
        {
          "id": "a10_17",
          "name": "대동아파트",
          "lat": 35.185877,
          "lng": 128.118839,
          "households": 160,
          "broadcast": 99,
          "internet": 123,
          "address": "경상남도 진주시 도동천로184번길 7 (상대동, 대동아파트)",
          "year": "1979",
          "buildings": [
            {
              "id": "b10_17_1",
              "name": "1동",
              "lat": 35.185991374078014,
              "lng": 128.1191857464635,
              "households": 32,
              "broadcast": 23,
              "internet": 27
            },
            {
              "id": "b10_17_2",
              "name": "2동",
              "lat": 35.18176891751137,
              "lng": 128.11424484407064,
              "households": 32,
              "broadcast": 20,
              "internet": 22
            },
            {
              "id": "b10_17_3",
              "name": "3동",
              "lat": 35.181201551319226,
              "lng": 128.1129862784163,
              "households": 32,
              "broadcast": 19,
              "internet": 24
            },
            {
              "id": "b10_17_4",
              "name": "4동",
              "lat": 35.18123922399985,
              "lng": 128.11388363342127,
              "households": 32,
              "broadcast": 23,
              "internet": 21
            },
            {
              "id": "b10_17_5",
              "name": "5동",
              "lat": 35.188873871786335,
              "lng": 128.127355197882,
              "households": 32,
              "broadcast": 20,
              "internet": 21
            }
          ]
        },
        {
          "id": "a14_1",
          "name": "망경한보아파트",
          "lat": 35.181945,
          "lng": 128.080092,
          "households": 886,
          "broadcast": 540,
          "internet": 637,
          "address": "경상남도 진주시 망경로 234-5(망경동, 망경한보아파트)",
          "year": "1997",
          "buildings": [
            {
              "id": "b14_1_1",
              "name": "1동",
              "lat": 35.181945,
              "lng": 128.079692,
              "households": 148,
              "broadcast": 90,
              "internet": 124
            },
            {
              "id": "b14_1_2",
              "name": "2동",
              "lat": 35.18290000363977,
              "lng": 128.07906999895704,
              "households": 148,
              "broadcast": 85,
              "internet": 125
            },
            {
              "id": "b14_1_3",
              "name": "3동",
              "lat": 35.181645,
              "lng": 128.080092,
              "households": 148,
              "broadcast": 82,
              "internet": 116
            },
            {
              "id": "b14_1_4",
              "name": "4동",
              "lat": 35.181945,
              "lng": 128.080092,
              "households": 148,
              "broadcast": 97,
              "internet": 111
            },
            {
              "id": "b14_1_5",
              "name": "5동",
              "lat": 35.182245,
              "lng": 128.080092,
              "households": 147,
              "broadcast": 85,
              "internet": 111
            },
            {
              "id": "b14_1_6",
              "name": "6동",
              "lat": 35.181645,
              "lng": 128.080492,
              "households": 147,
              "broadcast": 97,
              "internet": 110
            }
          ]
        },
        {
          "id": "a14_2",
          "name": "망경삼호그린맨션",
          "lat": 35.184156,
          "lng": 128.085583,
          "households": 65,
          "broadcast": 44,
          "internet": 47,
          "address": "경상남도 진주시 망경로296번길 16(망경동, 삼호그린맨션)",
          "year": "1992",
          "buildings": [
            {
              "id": "b14_2_1",
              "name": "1동",
              "lat": 35.18415644,
              "lng": 128.085583095,
              "households": 65,
              "broadcast": 38,
              "internet": 46
            }
          ]
        },
        {
          "id": "a14_3",
          "name": "동신아파트",
          "lat": 35.180126,
          "lng": 128.081543,
          "households": 95,
          "broadcast": 66,
          "internet": 67,
          "address": "경상남도 진주시 망진산길 32(망경동, 망경동신아파트)",
          "year": "1990",
          "buildings": [
            {
              "id": "b14_3_1",
              "name": "1동",
              "lat": 35.17997130478019,
              "lng": 128.08154546622268,
              "households": 48,
              "broadcast": 34,
              "internet": 35
            },
            {
              "id": "b14_3_2",
              "name": "2동",
              "lat": 35.16987013283217,
              "lng": 128.05158206687594,
              "households": 47,
              "broadcast": 33,
              "internet": 34
            }
          ]
        },
        {
          "id": "a14_4",
          "name": "망경이화맨션",
          "lat": 35.182317,
          "lng": 128.08353,
          "households": 90,
          "broadcast": 65,
          "internet": 59,
          "address": "경상남도 진주시 망경남길 51(망경동, 망경이화맨션)",
          "year": "1989",
          "buildings": [
            {
              "id": "b14_4_1",
              "name": "1동",
              "lat": 35.182317,
              "lng": 128.083397,
              "households": 30,
              "broadcast": 17,
              "internet": 22
            },
            {
              "id": "b14_4_2",
              "name": "2동",
              "lat": 35.182617,
              "lng": 128.083397,
              "households": 30,
              "broadcast": 22,
              "internet": 24
            },
            {
              "id": "b14_4_3",
              "name": "3동",
              "lat": 35.182017,
              "lng": 128.083797,
              "households": 30,
              "broadcast": 17,
              "internet": 25
            }
          ]
        },
        {
          "id": "a14_5",
          "name": "한주맨션",
          "lat": 35.186416,
          "lng": 128.084312,
          "households": 50,
          "broadcast": 32,
          "internet": 34,
          "address": "경상남도 진주시 망경북길 53(망경동, 망경한주맨션)",
          "year": "1985",
          "buildings": [
            {
              "id": "b14_5_1",
              "name": "1동",
              "lat": 35.18625894769677,
              "lng": 128.08432299758545,
              "households": 25,
              "broadcast": 16,
              "internet": 18
            },
            {
              "id": "b14_5_2",
              "name": "2동",
              "lat": 35.186566,
              "lng": 128.084312,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            }
          ]
        },
        {
          "id": "a14_6",
          "name": "망경국민주택",
          "lat": 35.183858,
          "lng": 128.082477,
          "households": 44,
          "broadcast": 26,
          "internet": 32,
          "address": "경상남도 진주시 망경남길 66(망경동, 망경국민조합주택)",
          "year": "1984",
          "buildings": [
            {
              "id": "b14_6_1",
              "name": "1동",
              "lat": 35.183858,
              "lng": 128.082344,
              "households": 15,
              "broadcast": 8,
              "internet": 12
            },
            {
              "id": "b14_6_2",
              "name": "2동",
              "lat": 35.184158,
              "lng": 128.082344,
              "households": 15,
              "broadcast": 10,
              "internet": 11
            },
            {
              "id": "b14_6_3",
              "name": "3동",
              "lat": 35.183558,
              "lng": 128.082744,
              "households": 14,
              "broadcast": 8,
              "internet": 9
            }
          ]
        },
        {
          "id": "a46_1",
          "name": "영남연립",
          "lat": 35.197651,
          "lng": 128.079607,
          "households": 22,
          "broadcast": 15,
          "internet": 15,
          "address": "경상남도 진주시 비봉로 80(계동, 영남연립)",
          "year": "1979",
          "buildings": [
            {
              "id": "b46_1_1",
              "name": "1동",
              "lat": 35.197651,
              "lng": 128.079607,
              "households": 22,
              "broadcast": 14,
              "internet": 17
            }
          ]
        }
      ]
    },
    {
      "id": "d11",
      "name": "이현동",
      "lat": 35.189563,
      "lng": 128.061543,
      "households": 5098,
      "broadcast": 2554,
      "internet": 2986,
      "singleHouseholds": 2703,
      "apartments": [
        {
          "id": "a11_1",
          "name": "이현하이클래스웰가",
          "lat": 35.193964,
          "lng": 128.057253,
          "households": 1268,
          "broadcast": 811,
          "internet": 1065,
          "address": "경상남도 진주시 진주대로 1317 (이현동, 이현하이클래스웰가)",
          "year": "2008",
          "buildings": [
            {
              "id": "b11_1_1",
              "name": "101동",
              "lat": 35.194312993,
              "lng": 128.058916595,
              "households": 91,
              "broadcast": 62,
              "internet": 68
            },
            {
              "id": "b11_1_2",
              "name": "102동",
              "lat": 35.193600253,
              "lng": 128.058939958,
              "households": 91,
              "broadcast": 65,
              "internet": 60
            },
            {
              "id": "b11_1_3",
              "name": "103동",
              "lat": 35.194664217,
              "lng": 128.058194576,
              "households": 91,
              "broadcast": 55,
              "internet": 76
            },
            {
              "id": "b11_1_4",
              "name": "104동",
              "lat": 35.194344028,
              "lng": 128.057948477,
              "households": 91,
              "broadcast": 60,
              "internet": 63
            },
            {
              "id": "b11_1_5",
              "name": "105동",
              "lat": 35.193752978,
              "lng": 128.058064952,
              "households": 91,
              "broadcast": 59,
              "internet": 76
            },
            {
              "id": "b11_1_6",
              "name": "106동",
              "lat": 35.19340553,
              "lng": 128.05741994,
              "households": 91,
              "broadcast": 58,
              "internet": 70
            },
            {
              "id": "b11_1_7",
              "name": "107동",
              "lat": 35.194734408,
              "lng": 128.057424957,
              "households": 91,
              "broadcast": 60,
              "internet": 59
            },
            {
              "id": "b11_1_8",
              "name": "108동",
              "lat": 35.194447428,
              "lng": 128.057130676,
              "households": 91,
              "broadcast": 56,
              "internet": 76
            },
            {
              "id": "b11_1_9",
              "name": "109동",
              "lat": 35.194102338,
              "lng": 128.056745555,
              "households": 90,
              "broadcast": 53,
              "internet": 74
            },
            {
              "id": "b11_1_10",
              "name": "110동",
              "lat": 35.193615202,
              "lng": 128.056642267,
              "households": 90,
              "broadcast": 50,
              "internet": 58
            },
            {
              "id": "b11_1_11",
              "name": "111동",
              "lat": 35.193025639,
              "lng": 128.056360143,
              "households": 90,
              "broadcast": 63,
              "internet": 70
            },
            {
              "id": "b11_1_12",
              "name": "112동",
              "lat": 35.194384953,
              "lng": 128.056057811,
              "households": 90,
              "broadcast": 55,
              "internet": 69
            },
            {
              "id": "b11_1_13",
              "name": "113동",
              "lat": 35.193865123,
              "lng": 128.055892314,
              "households": 90,
              "broadcast": 65,
              "internet": 63
            },
            {
              "id": "b11_1_14",
              "name": "114동",
              "lat": 35.19323988,
              "lng": 128.055806091,
              "households": 90,
              "broadcast": 62,
              "internet": 60
            }
          ]
        },
        {
          "id": "a11_2",
          "name": "진주그린빌라",
          "lat": 35.18704,
          "lng": 128.05922,
          "households": 60,
          "broadcast": 43,
          "internet": 49,
          "address": "경상남도 진주시 숙호산로 42-3 (이현동, 진주그린빌라)",
          "year": "1996",
          "buildings": [
            {
              "id": "b11_2_1",
              "name": "1동",
              "lat": 35.18704,
              "lng": 128.05922,
              "households": 60,
              "broadcast": 38,
              "internet": 46
            }
          ]
        },
        {
          "id": "a11_3",
          "name": "이현덕산아파트",
          "lat": 35.18757,
          "lng": 128.059094,
          "households": 231,
          "broadcast": 127,
          "internet": 191,
          "address": "경상남도 진주시 서장대로178번길 17 (이현동, 진주덕산아파트)",
          "year": "1995",
          "buildings": [
            {
              "id": "b11_3_1",
              "name": "1동",
              "lat": 35.18757,
              "lng": 128.059094,
              "households": 231,
              "broadcast": 161,
              "internet": 175
            }
          ]
        },
        {
          "id": "a11_4",
          "name": "우신파크맨션",
          "lat": 35.190154,
          "lng": 128.058431,
          "households": 104,
          "broadcast": 63,
          "internet": 74,
          "address": "경상남도 진주시 숙호산로 8 (이현동, 우신파크맨션)",
          "year": "1992",
          "buildings": [
            {
              "id": "b11_4_1",
              "name": "1동",
              "lat": 35.190154,
              "lng": 128.058431,
              "households": 104,
              "broadcast": 64,
              "internet": 73
            }
          ]
        },
        {
          "id": "a11_5",
          "name": "고려가든아파트",
          "lat": 35.186709,
          "lng": 128.058482,
          "households": 54,
          "broadcast": 32,
          "internet": 43,
          "address": "경상남도 진주시 서장대로178번길 18 (이현동, 고려가든아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b11_5_1",
              "name": "1동",
              "lat": 35.186709333,
              "lng": 128.058482417,
              "households": 54,
              "broadcast": 36,
              "internet": 41
            }
          ]
        },
        {
          "id": "a11_6",
          "name": "경남아파트",
          "lat": 35.186687,
          "lng": 128.060938,
          "households": 60,
          "broadcast": 44,
          "internet": 43,
          "address": "경상남도 진주시 숙호산로 54 (이현동, 경남빌라)",
          "year": "1991",
          "buildings": [
            {
              "id": "b11_6_1",
              "name": "1동",
              "lat": 35.19534969602499,
              "lng": 128.1125074457487,
              "households": 60,
              "broadcast": 42,
              "internet": 42
            }
          ]
        },
        {
          "id": "a11_7",
          "name": "경남빌라2차",
          "lat": 35.187003,
          "lng": 128.060502,
          "households": 50,
          "broadcast": 37,
          "internet": 40,
          "address": "경상남도 진주시 숙호산로 50 (이현동, 경남빌라)",
          "year": "1990",
          "buildings": [
            {
              "id": "b11_7_1",
              "name": "1동",
              "lat": 35.187003,
              "lng": 128.060502,
              "households": 50,
              "broadcast": 30,
              "internet": 33
            }
          ]
        },
        {
          "id": "a11_8",
          "name": "경남빌라1차",
          "lat": 35.186937,
          "lng": 128.060851,
          "households": 30,
          "broadcast": 17,
          "internet": 24,
          "address": "경상남도 진주시 숙호산로 52-1 (이현동, 경남빌라)",
          "year": "1989",
          "buildings": [
            {
              "id": "b11_8_1",
              "name": "1동",
              "lat": 35.186937,
              "lng": 128.060851,
              "households": 30,
              "broadcast": 19,
              "internet": 25
            }
          ]
        },
        {
          "id": "a11_9",
          "name": "동신이현아파트",
          "lat": 35.187269,
          "lng": 128.059875,
          "households": 20,
          "broadcast": 11,
          "internet": 13,
          "address": "경상남도 진주시 숙호산로 46 (이현동, 동신이현아파트)",
          "year": "1989",
          "buildings": [
            {
              "id": "b11_9_1",
              "name": "1동",
              "lat": 35.187268795,
              "lng": 128.059874664,
              "households": 20,
              "broadcast": 12,
              "internet": 13
            }
          ]
        },
        {
          "id": "a11_10",
          "name": "이현진주빌라",
          "lat": 35.192069,
          "lng": 128.056729,
          "households": 26,
          "broadcast": 18,
          "internet": 20,
          "address": "경상남도 진주시 서장대로213번길 22 (이현동, 진주빌라맨션)",
          "year": "1989",
          "buildings": [
            {
              "id": "b11_10_1",
              "name": "1동",
              "lat": 35.192142392,
              "lng": 128.056628476,
              "households": 13,
              "broadcast": 8,
              "internet": 10
            },
            {
              "id": "b11_10_2",
              "name": "2동",
              "lat": 35.191996056,
              "lng": 128.056829253,
              "households": 13,
              "broadcast": 7,
              "internet": 11
            }
          ]
        },
        {
          "id": "a11_11",
          "name": "경남맨션",
          "lat": 35.193339,
          "lng": 128.061654,
          "households": 50,
          "broadcast": 33,
          "internet": 36,
          "address": "경상남도 진주시 평거로 293 (이현동, 경남맨션)",
          "year": "1988",
          "buildings": [
            {
              "id": "b11_11_1",
              "name": "1동",
              "lat": 35.193189,
              "lng": 128.061654,
              "households": 25,
              "broadcast": 18,
              "internet": 19
            },
            {
              "id": "b11_11_2",
              "name": "2동",
              "lat": 35.193489,
              "lng": 128.061654,
              "households": 25,
              "broadcast": 15,
              "internet": 16
            }
          ]
        },
        {
          "id": "a11_12",
          "name": "이현대흥빌라",
          "lat": 35.193092,
          "lng": 128.062585,
          "households": 20,
          "broadcast": 12,
          "internet": 17,
          "address": "경상남도 진주시 평거로284번길 9-19 (이현동, 대흥빌라)",
          "year": "1988",
          "buildings": [
            {
              "id": "b11_12_1",
              "name": "1동",
              "lat": 35.193092053,
              "lng": 128.062584912,
              "households": 20,
              "broadcast": 14,
              "internet": 14
            }
          ]
        },
        {
          "id": "a11_13",
          "name": "삼호가든맨션",
          "lat": 35.191846,
          "lng": 128.06775,
          "households": 50,
          "broadcast": 30,
          "internet": 34,
          "address": "경상남도 진주시 신안로164번길 7 (이현동, 삼호가든맨션)",
          "year": "1988",
          "buildings": [
            {
              "id": "b11_13_1",
              "name": "1동",
              "lat": 35.191790415651624,
              "lng": 128.0675013339794,
              "households": 50,
              "broadcast": 27,
              "internet": 38
            }
          ]
        },
        {
          "id": "a11_14",
          "name": "이현한주아파트",
          "lat": 35.191358,
          "lng": 128.064417,
          "households": 60,
          "broadcast": 40,
          "internet": 45,
          "address": "경상남도 진주시 서장대로278번길 9 (이현동, 이현한주아파트)",
          "year": "1987",
          "buildings": [
            {
              "id": "b11_14_1",
              "name": "1동",
              "lat": 35.19134213609025,
              "lng": 128.06432538420745,
              "households": 30,
              "broadcast": 21,
              "internet": 22
            },
            {
              "id": "b11_14_2",
              "name": "2동",
              "lat": 35.191508,
              "lng": 128.064417,
              "households": 30,
              "broadcast": 17,
              "internet": 25
            }
          ]
        },
        {
          "id": "a11_15",
          "name": "신익무지개아파트",
          "lat": 35.186541,
          "lng": 128.06211,
          "households": 168,
          "broadcast": 94,
          "internet": 137,
          "address": "경상남도 진주시 숙호산로 64-5 (이현동, 신익무지개아파트)",
          "year": "1987",
          "buildings": [
            {
              "id": "b11_15_1",
              "name": "1동",
              "lat": 35.186541,
              "lng": 128.061977,
              "households": 56,
              "broadcast": 31,
              "internet": 40
            },
            {
              "id": "b11_15_2",
              "name": "2동",
              "lat": 35.186841,
              "lng": 128.061977,
              "households": 56,
              "broadcast": 37,
              "internet": 45
            },
            {
              "id": "b11_15_3",
              "name": "3동",
              "lat": 35.186241,
              "lng": 128.062377,
              "households": 56,
              "broadcast": 30,
              "internet": 38
            }
          ]
        },
        {
          "id": "a11_16",
          "name": "유신맨션아파트",
          "lat": 35.192313,
          "lng": 128.063017,
          "households": 40,
          "broadcast": 27,
          "internet": 29,
          "address": "경상남도 진주시 서장대로 275 (이현동, 유신아파트)",
          "year": "1986",
          "buildings": [
            {
              "id": "b11_16_1",
              "name": "1동",
              "lat": 35.192313302,
              "lng": 128.063016573,
              "households": 40,
              "broadcast": 23,
              "internet": 30
            }
          ]
        },
        {
          "id": "a11_17",
          "name": "건우아파트",
          "lat": 35.191598,
          "lng": 128.065495,
          "households": 50,
          "broadcast": 34,
          "internet": 36,
          "address": "경상남도 진주시 평거로264번길 25 (이현동, 건우아파트)",
          "year": "1986",
          "buildings": [
            {
              "id": "b11_17_1",
              "name": "1동",
              "lat": 35.191598,
              "lng": 128.065495,
              "households": 50,
              "broadcast": 34,
              "internet": 35
            }
          ]
        },
        {
          "id": "a11_18",
          "name": "화신조합주택",
          "lat": 35.185106,
          "lng": 128.063215,
          "households": 30,
          "broadcast": 20,
          "internet": 19,
          "address": "경상남도 진주시 석갑로173번길 5-8 (이현동, 화신조합주택)",
          "year": "1985",
          "buildings": [
            {
              "id": "b11_18_1",
              "name": "1동",
              "lat": 35.185106,
              "lng": 128.063215,
              "households": 30,
              "broadcast": 16,
              "internet": 21
            }
          ]
        },
        {
          "id": "a11_19",
          "name": "서부연립",
          "lat": 35.190971,
          "lng": 128.066265,
          "households": 24,
          "broadcast": 15,
          "internet": 16,
          "address": "경상남도 진주시 촉석로27번길 6 (이현동, 서부공동조합주택)",
          "year": "1983",
          "buildings": [
            {
              "id": "b11_19_1",
              "name": "1동",
              "lat": 35.190971,
              "lng": 128.066265,
              "households": 24,
              "broadcast": 14,
              "internet": 16
            }
          ]
        }
      ]
    },
    {
      "id": "d12",
      "name": "상평동",
      "lat": 35.173587,
      "lng": 128.109337,
      "households": 5418,
      "broadcast": 2596,
      "internet": 3107,
      "singleHouseholds": 2742,
      "apartments": [
        {
          "id": "a12_1",
          "name": "진주센트럴자이",
          "lat": 35.177753,
          "lng": 128.10564,
          "households": 401,
          "broadcast": 220,
          "internet": 328,
          "address": "경상남도 진주시 도동천로 48(상평동, 진주센트럴자이)",
          "year": "2013",
          "buildings": [
            {
              "id": "b12_1_1",
              "name": "101동",
              "lat": 35.177933716,
              "lng": 128.105044557,
              "households": 67,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "b12_1_2",
              "name": "102동",
              "lat": 35.177984878,
              "lng": 128.105758659,
              "households": 67,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "b12_1_3",
              "name": "103동",
              "lat": 35.178024156,
              "lng": 128.106566288,
              "households": 67,
              "broadcast": 50,
              "internet": 52
            },
            {
              "id": "b12_1_4",
              "name": "104동",
              "lat": 35.177584491,
              "lng": 128.106214662,
              "households": 67,
              "broadcast": 39,
              "internet": 46
            },
            {
              "id": "b12_1_5",
              "name": "105동",
              "lat": 35.177497145,
              "lng": 128.105475993,
              "households": 67,
              "broadcast": 46,
              "internet": 54
            },
            {
              "id": "b12_1_6",
              "name": "106동",
              "lat": 35.177495658,
              "lng": 128.104777004,
              "households": 66,
              "broadcast": 46,
              "internet": 44
            }
          ]
        },
        {
          "id": "a12_2",
          "name": "상평동 동일스위트 ",
          "lat": 35.173938,
          "lng": 128.102986,
          "households": 652,
          "broadcast": 436,
          "internet": 554,
          "address": "경상남도 진주시 공단로 30 (상평동, 동일스위트아파트)",
          "year": "2008",
          "buildings": [
            {
              "id": "b12_2_1",
              "name": "101동",
              "lat": 35.174668084,
              "lng": 128.102412853,
              "households": 60,
              "broadcast": 37,
              "internet": 42
            },
            {
              "id": "b12_2_2",
              "name": "102동",
              "lat": 35.174711916,
              "lng": 128.103223405,
              "households": 60,
              "broadcast": 42,
              "internet": 51
            },
            {
              "id": "b12_2_3",
              "name": "103동",
              "lat": 35.174413084,
              "lng": 128.103171596,
              "households": 60,
              "broadcast": 41,
              "internet": 49
            },
            {
              "id": "b12_2_4",
              "name": "104동",
              "lat": 35.174038988,
              "lng": 128.102452822,
              "households": 59,
              "broadcast": 39,
              "internet": 38
            },
            {
              "id": "b12_2_5",
              "name": "105동",
              "lat": 35.174037955,
              "lng": 128.10284805,
              "households": 59,
              "broadcast": 40,
              "internet": 47
            },
            {
              "id": "b12_2_6",
              "name": "106동",
              "lat": 35.174099051,
              "lng": 128.103239242,
              "households": 59,
              "broadcast": 42,
              "internet": 44
            },
            {
              "id": "b12_2_7",
              "name": "107동",
              "lat": 35.173750555,
              "lng": 128.103221851,
              "households": 59,
              "broadcast": 36,
              "internet": 40
            },
            {
              "id": "b12_2_8",
              "name": "108동",
              "lat": 35.173380007,
              "lng": 128.102429025,
              "households": 59,
              "broadcast": 43,
              "internet": 38
            },
            {
              "id": "b12_2_9",
              "name": "109동",
              "lat": 35.173378195,
              "lng": 128.102885517,
              "households": 59,
              "broadcast": 41,
              "internet": 38
            },
            {
              "id": "b12_2_10",
              "name": "110동",
              "lat": 35.173424366,
              "lng": 128.103302801,
              "households": 59,
              "broadcast": 33,
              "internet": 47
            },
            {
              "id": "b12_2_11",
              "name": "111동",
              "lat": 35.173420835,
              "lng": 128.103659315,
              "households": 59,
              "broadcast": 33,
              "internet": 48
            }
          ]
        },
        {
          "id": "a12_3",
          "name": "상평한솔빌리지",
          "lat": 35.17067,
          "lng": 128.112371,
          "households": 20,
          "broadcast": 11,
          "internet": 14,
          "address": "경상남도 진주시 돗골로25번길 4 (상평동, 상평동한솔빌리지)",
          "year": "2001",
          "buildings": [
            {
              "id": "b12_3_1",
              "name": "101동",
              "lat": 35.170669531,
              "lng": 128.112370597,
              "households": 10,
              "broadcast": 7,
              "internet": 7
            },
            {
              "id": "b12_3_2",
              "name": "102동",
              "lat": 35.170533932,
              "lng": 128.112378653,
              "households": 10,
              "broadcast": 5,
              "internet": 6
            }
          ]
        },
        {
          "id": "a12_4",
          "name": "상평동신아파트",
          "lat": 35.178516,
          "lng": 128.110709,
          "households": 107,
          "broadcast": 63,
          "internet": 73,
          "address": "경상남도 진주시 돗골로117번길 15 (상평동, 상평동신아파트)",
          "year": "1997",
          "buildings": [
            {
              "id": "b12_4_1",
              "name": "1동",
              "lat": 35.178516,
              "lng": 128.110709,
              "households": 107,
              "broadcast": 69,
              "internet": 73
            }
          ]
        },
        {
          "id": "a12_5",
          "name": "동국강변2타워",
          "lat": 35.170138,
          "lng": 128.112086,
          "households": 162,
          "broadcast": 95,
          "internet": 127,
          "address": "경상남도 진주시 돗골로19번길 10 (상평동, 2차동국강변타워)",
          "year": "1992",
          "buildings": [
            {
              "id": "b12_5_1",
              "name": "1동",
              "lat": 35.170138143,
              "lng": 128.112085595,
              "households": 162,
              "broadcast": 116,
              "internet": 118
            }
          ]
        },
        {
          "id": "a12_6",
          "name": "동국강변1차아파트",
          "lat": 35.170106,
          "lng": 128.109561,
          "households": 126,
          "broadcast": 83,
          "internet": 88,
          "address": "경상남도 진주시 큰들로66번길 12 (상평동, 동국강변1차아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b12_6_1",
              "name": "1동",
              "lat": 35.170105866,
              "lng": 128.109561065,
              "households": 126,
              "broadcast": 86,
              "internet": 97
            }
          ]
        },
        {
          "id": "a12_7",
          "name": "상평국민2차아파트",
          "lat": 35.174136,
          "lng": 128.125526,
          "households": 72,
          "broadcast": 47,
          "internet": 49,
          "address": "경상남도 진주시 공단로236번길 24 (상평동, 국민주택2차)",
          "year": "1990",
          "buildings": [
            {
              "id": "b12_7_1",
              "name": "1동",
              "lat": 35.17390429187975,
              "lng": 128.1251577042142,
              "households": 36,
              "broadcast": 21,
              "internet": 29
            },
            {
              "id": "b12_7_2",
              "name": "2동",
              "lat": 35.17390429187975,
              "lng": 128.1251577042142,
              "households": 36,
              "broadcast": 23,
              "internet": 30
            }
          ]
        },
        {
          "id": "a12_8",
          "name": "상평국민3차아파트",
          "lat": 35.169083,
          "lng": 128.109594,
          "households": 50,
          "broadcast": 37,
          "internet": 42,
          "address": "경상남도 진주시 남강로1069번길 4-1 (상평동, 국민주택3차)",
          "year": "1990",
          "buildings": [
            {
              "id": "b12_8_1",
              "name": "1동",
              "lat": 35.169082879,
              "lng": 128.109594131,
              "households": 50,
              "broadcast": 36,
              "internet": 42
            }
          ]
        },
        {
          "id": "a12_9",
          "name": "상평국민4차아파트",
          "lat": 35.169632,
          "lng": 128.111611,
          "households": 30,
          "broadcast": 18,
          "internet": 25,
          "address": "경상남도 진주시 남강로1093번길 14 (상평동, 상평국민4차)",
          "year": "1990",
          "buildings": [
            {
              "id": "b12_9_1",
              "name": "1동",
              "lat": 35.169632,
              "lng": 128.111611,
              "households": 30,
              "broadcast": 21,
              "internet": 24
            }
          ]
        },
        {
          "id": "a12_10",
          "name": "상평국민1차아파트",
          "lat": 35.169632,
          "lng": 128.111611,
          "households": 50,
          "broadcast": 35,
          "internet": 37,
          "address": "경상남도 진주시 남강로1093번길 14 (상평동, 국민1차아파트)",
          "year": "1990",
          "buildings": [
            {
              "id": "b12_10_1",
              "name": "1동",
              "lat": 35.169632,
              "lng": 128.111611,
              "households": 50,
              "broadcast": 32,
              "internet": 37
            }
          ]
        },
        {
          "id": "a12_11",
          "name": "상평대림아파트",
          "lat": 35.174262,
          "lng": 128.100251,
          "households": 158,
          "broadcast": 109,
          "internet": 134,
          "address": "경상남도 진주시 남강로 951 (상평동, 대림아파트)",
          "year": "1989",
          "buildings": [
            {
              "id": "b12_11_1",
              "name": "1동",
              "lat": 35.17433460061037,
              "lng": 128.10041249983044,
              "households": 53,
              "broadcast": 32,
              "internet": 39
            },
            {
              "id": "b12_11_2",
              "name": "2동",
              "lat": 35.174319188,
              "lng": 128.10016491,
              "households": 53,
              "broadcast": 32,
              "internet": 34
            },
            {
              "id": "b12_11_3",
              "name": "3동",
              "lat": 35.173933711,
              "lng": 128.100159307,
              "households": 52,
              "broadcast": 33,
              "internet": 43
            }
          ]
        },
        {
          "id": "a12_12",
          "name": "송림한주아파트",
          "lat": 35.175764,
          "lng": 128.109526,
          "households": 30,
          "broadcast": 20,
          "internet": 19,
          "address": "경상남도 진주시 공단로91번길 7 (상평동, 송림한주아파트)",
          "year": "1989",
          "buildings": [
            {
              "id": "b12_12_1",
              "name": "1동",
              "lat": 35.175764,
              "lng": 128.109526,
              "households": 30,
              "broadcast": 20,
              "internet": 22
            }
          ]
        },
        {
          "id": "a12_13",
          "name": "석류아파트",
          "lat": 35.17445,
          "lng": 128.103976,
          "households": 100,
          "broadcast": 75,
          "internet": 74,
          "address": "경상남도 진주시 공단로44번길 12 (상평동, 석류아파트)",
          "year": "1987",
          "buildings": [
            {
              "id": "b12_13_1",
              "name": "1동",
              "lat": 35.17208057083333,
              "lng": 128.09463513059205,
              "households": 50,
              "broadcast": 34,
              "internet": 36
            },
            {
              "id": "b12_13_2",
              "name": "2동",
              "lat": 35.1746,
              "lng": 128.103976,
              "households": 50,
              "broadcast": 35,
              "internet": 35
            }
          ]
        },
        {
          "id": "a12_14",
          "name": "진주주택조합",
          "lat": 35.175634,
          "lng": 128.114439,
          "households": 90,
          "broadcast": 56,
          "internet": 60,
          "address": "경상남도 진주시 공단로139번길 3(상평동, 진주조합주택)",
          "year": "1984",
          "buildings": [
            {
              "id": "b12_14_1",
              "name": "1동",
              "lat": 35.175634,
              "lng": 128.114439,
              "households": 90,
              "broadcast": 49,
              "internet": 69
            }
          ]
        },
        {
          "id": "a12_15",
          "name": "상평촉석아파트",
          "lat": 35.17748,
          "lng": 128.107852,
          "households": 175,
          "broadcast": 119,
          "internet": 115,
          "address": "경상남도 진주시 솔밭로92번길 5 (상평동, 촉석맨션)",
          "year": "1980",
          "buildings": [
            {
              "id": "b12_15_1",
              "name": "1동",
              "lat": 35.17748,
              "lng": 128.107452,
              "households": 30,
              "broadcast": 16,
              "internet": 19
            },
            {
              "id": "b12_15_2",
              "name": "2동",
              "lat": 35.17778,
              "lng": 128.107452,
              "households": 29,
              "broadcast": 17,
              "internet": 20
            },
            {
              "id": "b12_15_3",
              "name": "3동",
              "lat": 35.17718,
              "lng": 128.107852,
              "households": 29,
              "broadcast": 19,
              "internet": 20
            },
            {
              "id": "b12_15_4",
              "name": "4동",
              "lat": 35.17748,
              "lng": 128.107852,
              "households": 29,
              "broadcast": 16,
              "internet": 21
            },
            {
              "id": "b12_15_5",
              "name": "5동",
              "lat": 35.17778,
              "lng": 128.107852,
              "households": 29,
              "broadcast": 19,
              "internet": 24
            },
            {
              "id": "b12_15_6",
              "name": "6동",
              "lat": 35.17718,
              "lng": 128.108252,
              "households": 29,
              "broadcast": 18,
              "internet": 21
            }
          ]
        },
        {
          "id": "a12_16",
          "name": "상평태화연립",
          "lat": 35.175317,
          "lng": 128.102637,
          "households": 20,
          "broadcast": 11,
          "internet": 13,
          "address": "경상남도 진주시 공단로 27 (상평동, 태화연립)",
          "year": "1980",
          "buildings": [
            {
              "id": "b12_16_1",
              "name": "1동",
              "lat": 35.175317,
              "lng": 128.102637,
              "households": 20,
              "broadcast": 13,
              "internet": 13
            }
          ]
        },
        {
          "id": "ao_코아루 ",
          "name": "코아루 웰가",
          "lat": 35.17041,
          "lng": 128.16154,
          "households": 229,
          "broadcast": 109,
          "internet": 162,
          "address": "경상남도 진주시 상평동 (오피스텔)",
          "year": "",
          "type": "officetel",
          "buildings": [
            {
              "id": "ao_코아루 _b0",
              "name": "3동",
              "lat": 35.17284301,
              "lng": 128.100362803,
              "households": 229,
              "broadcast": 109,
              "internet": 162
            }
          ]
        },
        {
          "id": "a26_1",
          "name": "유곡한보아파트",
          "lat": 35.194412,
          "lng": 128.063475,
          "households": 204,
          "broadcast": 146,
          "internet": 142,
          "address": "경상남도 진주시 진주대로 1278 (유곡동, 유곡한보아파트)",
          "year": "1994",
          "buildings": [
            {
              "id": "b26_1_1",
              "name": "101동",
              "lat": 35.194412134,
              "lng": 128.063474641,
              "households": 204,
              "broadcast": 128,
              "internet": 153
            }
          ]
        }
      ]
    },
    {
      "id": "d13",
      "name": "상봉동",
      "lat": 35.200573,
      "lng": 128.070047,
      "households": 7238,
      "broadcast": 2868,
      "internet": 3877,
      "singleHouseholds": 5100,
      "apartments": [
        {
          "id": "a13_1",
          "name": "에스디푸른마을",
          "lat": 35.202834,
          "lng": 128.067276,
          "households": 116,
          "broadcast": 82,
          "internet": 83,
          "address": "경상남도 진주시 상봉대룡길 37 (상봉동, 에스디푸른마을아파트)",
          "year": "2010",
          "buildings": [
            {
              "id": "b13_1_1",
              "name": "101동",
              "lat": 35.20263259102331,
              "lng": 128.06744037398332,
              "households": 39,
              "broadcast": 27,
              "internet": 31
            },
            {
              "id": "b13_1_2",
              "name": "102동",
              "lat": 35.202571729159516,
              "lng": 128.06713528954387,
              "households": 39,
              "broadcast": 28,
              "internet": 31
            },
            {
              "id": "b13_1_3",
              "name": "103동",
              "lat": 35.202989942550495,
              "lng": 128.06718958057638,
              "households": 38,
              "broadcast": 21,
              "internet": 28
            }
          ]
        },
        {
          "id": "a13_2",
          "name": "상봉화인아파트",
          "lat": 35.202261,
          "lng": 128.068671,
          "households": 459,
          "broadcast": 266,
          "internet": 385,
          "address": "경상남도 진주시 상봉대룡길 18 (상봉동, 화인아파트)",
          "year": "1994",
          "buildings": [
            {
              "id": "b13_2_1",
              "name": "1동",
              "lat": 35.2017261645936,
              "lng": 128.068540454804,
              "households": 115,
              "broadcast": 65,
              "internet": 88
            },
            {
              "id": "b13_2_2",
              "name": "2동",
              "lat": 35.2014304605189,
              "lng": 128.06917441997714,
              "households": 115,
              "broadcast": 75,
              "internet": 79
            },
            {
              "id": "b13_2_3",
              "name": "3동",
              "lat": 35.201793383893765,
              "lng": 128.06951072303954,
              "households": 115,
              "broadcast": 66,
              "internet": 94
            },
            {
              "id": "b13_2_4",
              "name": "4동",
              "lat": 35.202057139600775,
              "lng": 128.06900902858422,
              "households": 114,
              "broadcast": 68,
              "internet": 95
            }
          ]
        },
        {
          "id": "a13_3",
          "name": "상봉한주아파트",
          "lat": 35.195643,
          "lng": 128.071138,
          "households": 467,
          "broadcast": 303,
          "internet": 303,
          "address": "경상남도 진주시 진주대로1208번길 16 (상봉동, 상봉한주아파트)",
          "year": "1992",
          "buildings": [
            {
              "id": "b13_3_1",
              "name": "1동",
              "lat": 35.195583,
              "lng": 128.070898,
              "households": 94,
              "broadcast": 67,
              "internet": 61
            },
            {
              "id": "b13_3_2",
              "name": "2동",
              "lat": 35.195883,
              "lng": 128.070898,
              "households": 94,
              "broadcast": 58,
              "internet": 74
            },
            {
              "id": "b13_3_3",
              "name": "3동",
              "lat": 35.195283,
              "lng": 128.071298,
              "households": 93,
              "broadcast": 68,
              "internet": 62
            },
            {
              "id": "b13_3_4",
              "name": "4동",
              "lat": 35.195583,
              "lng": 128.071298,
              "households": 93,
              "broadcast": 66,
              "internet": 73
            },
            {
              "id": "b13_3_5",
              "name": "5동",
              "lat": 35.195883,
              "lng": 128.071298,
              "households": 93,
              "broadcast": 66,
              "internet": 64
            }
          ]
        },
        {
          "id": "a13_4",
          "name": "진풍아파트",
          "lat": 35.205901,
          "lng": 128.075098,
          "households": 24,
          "broadcast": 15,
          "internet": 17,
          "address": "경상남도 진주시 진주성로178번길 8-5 (상봉동, 진풍아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b13_4_1",
              "name": "1동",
              "lat": 35.205901425,
              "lng": 128.075098371,
              "households": 24,
              "broadcast": 14,
              "internet": 15
            }
          ]
        },
        {
          "id": "a13_5",
          "name": "삼영아파트",
          "lat": 35.200895,
          "lng": 128.068862,
          "households": 50,
          "broadcast": 29,
          "internet": 42,
          "address": "경상남도 진주시 상봉대룡길 14 (상봉동, 삼영아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b13_5_1",
              "name": "1동",
              "lat": 35.20109644164542,
              "lng": 128.068696891271,
              "households": 25,
              "broadcast": 18,
              "internet": 17
            },
            {
              "id": "b13_5_2",
              "name": "2동",
              "lat": 35.20068015631226,
              "lng": 128.06902446021914,
              "households": 25,
              "broadcast": 18,
              "internet": 19
            }
          ]
        },
        {
          "id": "a13_6",
          "name": "화진그린맨션",
          "lat": 35.201509,
          "lng": 128.067834,
          "households": 30,
          "broadcast": 20,
          "internet": 22,
          "address": "경상남도 진주시 상봉대룡길 19 (상봉동, 화진그린맨션)",
          "year": "1989",
          "buildings": [
            {
              "id": "b13_6_1",
              "name": "1동",
              "lat": 35.201508876,
              "lng": 128.067833605,
              "households": 30,
              "broadcast": 21,
              "internet": 24
            }
          ]
        },
        {
          "id": "a13_7",
          "name": "상봉(2)주공아파트",
          "lat": 35.203341,
          "lng": 128.073233,
          "households": 260,
          "broadcast": 169,
          "internet": 205,
          "address": "경상남도 진주시 진주성로147번길 10 (상봉동, 상봉2주공아파트)",
          "year": "1986",
          "buildings": [
            {
              "id": "b13_7_1",
              "name": "201동",
              "lat": 35.202882866,
              "lng": 128.072527944,
              "households": 29,
              "broadcast": 18,
              "internet": 20
            },
            {
              "id": "b13_7_2",
              "name": "202동",
              "lat": 35.202885136,
              "lng": 128.07332588,
              "households": 29,
              "broadcast": 17,
              "internet": 18
            },
            {
              "id": "b13_7_3",
              "name": "203동",
              "lat": 35.203114516,
              "lng": 128.072839963,
              "households": 29,
              "broadcast": 15,
              "internet": 19
            },
            {
              "id": "b13_7_4",
              "name": "204동",
              "lat": 35.203172389,
              "lng": 128.073522211,
              "households": 29,
              "broadcast": 17,
              "internet": 24
            },
            {
              "id": "b13_7_5",
              "name": "205동",
              "lat": 35.203368767,
              "lng": 128.072964847,
              "households": 29,
              "broadcast": 16,
              "internet": 19
            },
            {
              "id": "b13_7_6",
              "name": "206동",
              "lat": 35.203466417,
              "lng": 128.073724937,
              "households": 29,
              "broadcast": 16,
              "internet": 24
            },
            {
              "id": "b13_7_7",
              "name": "207동",
              "lat": 35.203596012,
              "lng": 128.07314007,
              "households": 29,
              "broadcast": 19,
              "internet": 21
            },
            {
              "id": "b13_7_8",
              "name": "208동",
              "lat": 35.20372192,
              "lng": 128.073814215,
              "households": 29,
              "broadcast": 18,
              "internet": 21
            },
            {
              "id": "b13_7_9",
              "name": "209동",
              "lat": 35.203858075,
              "lng": 128.073232467,
              "households": 28,
              "broadcast": 16,
              "internet": 20
            }
          ]
        },
        {
          "id": "a13_8",
          "name": "상봉현대로얄아파트",
          "lat": 35.196246,
          "lng": 128.069769,
          "households": 40,
          "broadcast": 28,
          "internet": 32,
          "address": "경상남도 진주시 진주대로1208번길 25 (상봉동, 현대로얄아파트)",
          "year": "1985",
          "buildings": [
            {
              "id": "b13_8_1",
              "name": "1동",
              "lat": 35.196245929,
              "lng": 128.069769289,
              "households": 40,
              "broadcast": 30,
              "internet": 34
            }
          ]
        },
        {
          "id": "a13_9",
          "name": "새한조합주택",
          "lat": 35.196972,
          "lng": 128.070358,
          "households": 21,
          "broadcast": 13,
          "internet": 15,
          "address": "경상남도 진주시 창렬로114번길 13 (상봉동, 새한조합주택)",
          "year": "1984",
          "buildings": [
            {
              "id": "b13_9_1",
              "name": "1동",
              "lat": 35.196972,
              "lng": 128.070358,
              "households": 21,
              "broadcast": 12,
              "internet": 13
            }
          ]
        },
        {
          "id": "a13_10",
          "name": "상봉한주조합주택",
          "lat": 35.202334,
          "lng": 128.067445,
          "households": 21,
          "broadcast": 12,
          "internet": 13,
          "address": "경상남도 진주시 상봉대룡길 29 (상봉동, 상봉연립조합주택)",
          "year": "1983",
          "buildings": [
            {
              "id": "b13_10_1",
              "name": "1동",
              "lat": 35.202334,
              "lng": 128.067445,
              "households": 21,
              "broadcast": 15,
              "internet": 14
            }
          ]
        },
        {
          "id": "a13_11",
          "name": "상봉(1)주공아파트",
          "lat": 35.198717,
          "lng": 128.071903,
          "households": 650,
          "broadcast": 370,
          "internet": 513,
          "address": "경상남도 진주시 창렬로 129 (상봉동, 상봉주공아파트)",
          "year": "1979",
          "buildings": [
            {
              "id": "b13_11_1",
              "name": "1동",
              "lat": 35.198717,
              "lng": 128.071103,
              "households": 50,
              "broadcast": 36,
              "internet": 34
            },
            {
              "id": "b13_11_2",
              "name": "2동",
              "lat": 35.199017,
              "lng": 128.071103,
              "households": 50,
              "broadcast": 30,
              "internet": 41
            },
            {
              "id": "b13_11_3",
              "name": "3동",
              "lat": 35.198417,
              "lng": 128.071503,
              "households": 50,
              "broadcast": 29,
              "internet": 37
            },
            {
              "id": "b13_11_4",
              "name": "4동",
              "lat": 35.198717,
              "lng": 128.071503,
              "households": 50,
              "broadcast": 29,
              "internet": 36
            },
            {
              "id": "b13_11_5",
              "name": "5동",
              "lat": 35.199017,
              "lng": 128.071503,
              "households": 50,
              "broadcast": 29,
              "internet": 37
            },
            {
              "id": "b13_11_6",
              "name": "6동",
              "lat": 35.198417,
              "lng": 128.071903,
              "households": 50,
              "broadcast": 32,
              "internet": 37
            },
            {
              "id": "b13_11_7",
              "name": "7동",
              "lat": 35.198717,
              "lng": 128.071903,
              "households": 50,
              "broadcast": 30,
              "internet": 33
            },
            {
              "id": "b13_11_8",
              "name": "8동",
              "lat": 35.199017,
              "lng": 128.071903,
              "households": 50,
              "broadcast": 37,
              "internet": 37
            },
            {
              "id": "b13_11_9",
              "name": "9동",
              "lat": 35.198417,
              "lng": 128.072303,
              "households": 50,
              "broadcast": 31,
              "internet": 40
            },
            {
              "id": "b13_11_10",
              "name": "10동",
              "lat": 35.198717,
              "lng": 128.072303,
              "households": 50,
              "broadcast": 27,
              "internet": 35
            },
            {
              "id": "b13_11_11",
              "name": "11동",
              "lat": 35.199017,
              "lng": 128.072303,
              "households": 50,
              "broadcast": 35,
              "internet": 39
            },
            {
              "id": "b13_11_12",
              "name": "12동",
              "lat": 35.198417,
              "lng": 128.072703,
              "households": 50,
              "broadcast": 32,
              "internet": 38
            },
            {
              "id": "b13_11_13",
              "name": "13동",
              "lat": 35.198717,
              "lng": 128.072703,
              "households": 50,
              "broadcast": 27,
              "internet": 34
            }
          ]
        }
      ]
    },
    {
      "id": "d25",
      "name": "판문동",
      "lat": 35.168327,
      "lng": 128.046166,
      "households": 7989,
      "broadcast": 4798,
      "internet": 5705,
      "singleHouseholds": 621,
      "apartments": [
        {
          "id": "a25_1",
          "name": "판문현대아파트",
          "lat": 35.168327,
          "lng": 128.046299,
          "households": 294,
          "broadcast": 179,
          "internet": 241,
          "address": "경상남도 진주시 진양호로51번길 6-7 (판문동, 현대아파트)",
          "year": "1992",
          "buildings": [
            {
              "id": "b25_1_1",
              "name": "1동",
              "lat": 35.16800890050378,
              "lng": 128.04610840051998,
              "households": 98,
              "broadcast": 64,
              "internet": 77
            },
            {
              "id": "b25_1_2",
              "name": "2동",
              "lat": 35.16786165923108,
              "lng": 128.04582650651722,
              "households": 98,
              "broadcast": 73,
              "internet": 68
            },
            {
              "id": "b25_1_3",
              "name": "3동",
              "lat": 35.16788227448918,
              "lng": 128.04651078875628,
              "households": 98,
              "broadcast": 66,
              "internet": 80
            }
          ]
        },
        {
          "id": "a8_1",
          "name": "삼환 나우빌",
          "lat": 35.173956,
          "lng": 128.091458,
          "households": 219,
          "broadcast": 156,
          "internet": 167,
          "address": "경상남도 진주시 진주대로829번길 21 (주약동, 삼환나우빌)",
          "year": "2009",
          "buildings": [
            {
              "id": "a8_1_b0",
              "name": "101동",
              "lat": 35.17336848088173,
              "lng": 128.09157315309108,
              "households": 73,
              "broadcast": 52,
              "internet": 56
            },
            {
              "id": "a8_1_b1",
              "name": "102동",
              "lat": 35.17392296216089,
              "lng": 128.09154556413466,
              "households": 73,
              "broadcast": 52,
              "internet": 56
            },
            {
              "id": "a8_1_b2",
              "name": "103동",
              "lat": 35.174383005384044,
              "lng": 128.09139019776825,
              "households": 73,
              "broadcast": 52,
              "internet": 56
            }
          ]
        },
        {
          "id": "a8_2",
          "name": "주약 성우트리팰리스",
          "lat": 35.178038,
          "lng": 128.089767,
          "households": 160,
          "broadcast": 99,
          "internet": 126,
          "address": "경상남도 진주시 진주대로879번길 19 (주약동, 현대성우트리팰리스)",
          "year": "2006",
          "buildings": [
            {
              "id": "b8_2_1",
              "name": "1동",
              "lat": 35.178021297018134,
              "lng": 128.08990509078657,
              "households": 160,
              "broadcast": 107,
              "internet": 112
            }
          ]
        },
        {
          "id": "a8_3",
          "name": "주약한보은빛마을",
          "lat": 35.17093,
          "lng": 128.09364,
          "households": 516,
          "broadcast": 381,
          "internet": 417,
          "address": "경상남도 진주시 천수로 30 (주약동, 한보은빛마을아파트)",
          "year": "2002",
          "buildings": [
            {
              "id": "b8_3_1",
              "name": "101동",
              "lat": 35.170867351,
              "lng": 128.092436315,
              "households": 74,
              "broadcast": 54,
              "internet": 55
            },
            {
              "id": "b8_3_2",
              "name": "102동",
              "lat": 35.171149623,
              "lng": 128.093298014,
              "households": 74,
              "broadcast": 42,
              "internet": 57
            },
            {
              "id": "b8_3_3",
              "name": "103동",
              "lat": 35.171445878,
              "lng": 128.094168637,
              "households": 74,
              "broadcast": 47,
              "internet": 52
            },
            {
              "id": "b8_3_4",
              "name": "104동",
              "lat": 35.170606147,
              "lng": 128.092900452,
              "households": 74,
              "broadcast": 45,
              "internet": 58
            },
            {
              "id": "b8_3_5",
              "name": "105동",
              "lat": 35.170761674,
              "lng": 128.093701591,
              "households": 74,
              "broadcast": 42,
              "internet": 62
            },
            {
              "id": "b8_3_6",
              "name": "106동",
              "lat": 35.170994156,
              "lng": 128.094371655,
              "households": 73,
              "broadcast": 43,
              "internet": 51
            },
            {
              "id": "b8_3_7",
              "name": "107동",
              "lat": 35.170686145,
              "lng": 128.094605706,
              "households": 73,
              "broadcast": 40,
              "internet": 52
            }
          ]
        },
        {
          "id": "a8_4",
          "name": "주약현대2차아파트",
          "lat": 35.172237,
          "lng": 128.093015,
          "households": 592,
          "broadcast": 427,
          "internet": 427,
          "address": "경상남도 진주시 진주대로815번길 11 (주약동, 주약현대아파트)",
          "year": "2001",
          "buildings": [
            {
              "id": "a8_4_b0",
              "name": "101동",
              "lat": 35.173183624,
              "lng": 128.093063367,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b1",
              "name": "102동",
              "lat": 35.172983137,
              "lng": 128.0924592,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b2",
              "name": "103동",
              "lat": 35.17280328,
              "lng": 128.092830761,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b3",
              "name": "104동",
              "lat": 35.172668623,
              "lng": 128.09332077,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b4",
              "name": "105동",
              "lat": 35.172452193,
              "lng": 128.092687767,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b5",
              "name": "106동",
              "lat": 35.172360805,
              "lng": 128.092998804,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b6",
              "name": "107동",
              "lat": 35.172532024,
              "lng": 128.093864345,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b7",
              "name": "108동",
              "lat": 35.17221113,
              "lng": 128.093270966,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b8",
              "name": "109동",
              "lat": 35.172026033,
              "lng": 128.09268919,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b9",
              "name": "110동",
              "lat": 35.171791426,
              "lng": 128.092026047,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b10",
              "name": "111동",
              "lat": 35.17139307,
              "lng": 128.091796129,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b11",
              "name": "112동",
              "lat": 35.171633117,
              "lng": 128.09250704,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b12",
              "name": "113동",
              "lat": 35.171866097,
              "lng": 128.093204231,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b13",
              "name": "114동",
              "lat": 35.172157936,
              "lng": 128.093803097,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b14",
              "name": "115동",
              "lat": 35.171948246,
              "lng": 128.094114427,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            },
            {
              "id": "a8_4_b15",
              "name": "116동",
              "lat": 35.17178815,
              "lng": 128.093604912,
              "households": 37,
              "broadcast": 27,
              "internet": 27
            }
          ]
        },
        {
          "id": "a8_5",
          "name": "주약현대1차아파트",
          "lat": 35.172501,
          "lng": 128.092921,
          "households": 250,
          "broadcast": 139,
          "internet": 174,
          "address": "경상남도 진주시 진주대로815번길 11 (주약동, 주약현대아파트)",
          "year": "2000",
          "buildings": [
            {
              "id": "a8_5_b0",
              "name": "101동",
              "lat": 35.173183624,
              "lng": 128.093063367,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            },
            {
              "id": "a8_5_b1",
              "name": "102동",
              "lat": 35.172983137,
              "lng": 128.0924592,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            },
            {
              "id": "a8_5_b2",
              "name": "103동",
              "lat": 35.17280328,
              "lng": 128.092830761,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            },
            {
              "id": "a8_5_b3",
              "name": "104동",
              "lat": 35.172668623,
              "lng": 128.09332077,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            },
            {
              "id": "a8_5_b4",
              "name": "105동",
              "lat": 35.172452193,
              "lng": 128.092687767,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            },
            {
              "id": "a8_5_b5",
              "name": "106동",
              "lat": 35.172360805,
              "lng": 128.092998804,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            },
            {
              "id": "a8_5_b6",
              "name": "107동",
              "lat": 35.172532024,
              "lng": 128.093864345,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            },
            {
              "id": "a8_5_b7",
              "name": "108동",
              "lat": 35.17221113,
              "lng": 128.093270966,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            },
            {
              "id": "a8_5_b8",
              "name": "109동",
              "lat": 35.172026033,
              "lng": 128.09268919,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            },
            {
              "id": "a8_5_b9",
              "name": "110동",
              "lat": 35.171791426,
              "lng": 128.092026047,
              "households": 25,
              "broadcast": 14,
              "internet": 17
            }
          ]
        },
        {
          "id": "a8_6",
          "name": "금호석류마을",
          "lat": 35.17262,
          "lng": 128.095251,
          "households": 782,
          "broadcast": 437,
          "internet": 617,
          "address": "경상남도 진주시 강남로 45 (주약동, 금호석류마을아파트)",
          "year": "1999",
          "buildings": [
            {
              "id": "b8_6_1",
              "name": "101동",
              "lat": 35.173518447,
              "lng": 128.09565184,
              "households": 53,
              "broadcast": 32,
              "internet": 38
            },
            {
              "id": "b8_6_2",
              "name": "102동",
              "lat": 35.172937195,
              "lng": 128.095777752,
              "households": 53,
              "broadcast": 29,
              "internet": 37
            },
            {
              "id": "b8_6_3",
              "name": "103동",
              "lat": 35.172427596,
              "lng": 128.095966799,
              "households": 52,
              "broadcast": 33,
              "internet": 36
            },
            {
              "id": "b8_6_4",
              "name": "104동",
              "lat": 35.172164153,
              "lng": 128.095859922,
              "households": 52,
              "broadcast": 31,
              "internet": 35
            },
            {
              "id": "b8_6_5",
              "name": "105동",
              "lat": 35.172535742,
              "lng": 128.095674811,
              "households": 52,
              "broadcast": 33,
              "internet": 35
            },
            {
              "id": "b8_6_6",
              "name": "106동",
              "lat": 35.173087892,
              "lng": 128.095428041,
              "households": 52,
              "broadcast": 28,
              "internet": 37
            },
            {
              "id": "b8_6_7",
              "name": "107동",
              "lat": 35.173307852,
              "lng": 128.094997254,
              "households": 52,
              "broadcast": 32,
              "internet": 43
            },
            {
              "id": "b8_6_8",
              "name": "108동",
              "lat": 35.172724315,
              "lng": 128.095139891,
              "households": 52,
              "broadcast": 35,
              "internet": 44
            },
            {
              "id": "b8_6_9",
              "name": "109동",
              "lat": 35.172180295,
              "lng": 128.095407903,
              "households": 52,
              "broadcast": 36,
              "internet": 42
            },
            {
              "id": "b8_6_10",
              "name": "110동",
              "lat": 35.172324303,
              "lng": 128.095024263,
              "households": 52,
              "broadcast": 34,
              "internet": 42
            },
            {
              "id": "b8_6_11",
              "name": "111동",
              "lat": 35.172867622,
              "lng": 128.094759425,
              "households": 52,
              "broadcast": 30,
              "internet": 44
            },
            {
              "id": "b8_6_12",
              "name": "112동",
              "lat": 35.172940238,
              "lng": 128.094394317,
              "households": 52,
              "broadcast": 31,
              "internet": 35
            },
            {
              "id": "b8_6_13",
              "name": "113동",
              "lat": 35.172500252,
              "lng": 128.094610472,
              "households": 52,
              "broadcast": 36,
              "internet": 44
            },
            {
              "id": "b8_6_14",
              "name": "114동",
              "lat": 35.172033208,
              "lng": 128.094835876,
              "households": 52,
              "broadcast": 31,
              "internet": 41
            },
            {
              "id": "b8_6_15",
              "name": "115동",
              "lat": 35.171758192,
              "lng": 128.095237036,
              "households": 52,
              "broadcast": 31,
              "internet": 41
            }
          ]
        },
        {
          "id": "a8_7",
          "name": "동성빌라",
          "lat": 35.175677,
          "lng": 128.087965,
          "households": 20,
          "broadcast": 12,
          "internet": 13,
          "address": "경상남도 진주시 천수로 115 (주약동, 동성빌라)",
          "year": "1991",
          "buildings": [
            {
              "id": "b8_7_1",
              "name": "1동",
              "lat": 35.1756895134245,
              "lng": 128.08782598626848,
              "households": 7,
              "broadcast": 5,
              "internet": 5
            },
            {
              "id": "b8_7_2",
              "name": "2동",
              "lat": 35.175977,
              "lng": 128.087832,
              "households": 7,
              "broadcast": 4,
              "internet": 5
            },
            {
              "id": "b8_7_3",
              "name": "3동",
              "lat": 35.175377,
              "lng": 128.088232,
              "households": 6,
              "broadcast": 3,
              "internet": 3
            }
          ]
        },
        {
          "id": "a8_8",
          "name": "한주럭키타운",
          "lat": 35.176355,
          "lng": 128.090798,
          "households": 936,
          "broadcast": 645,
          "internet": 655,
          "address": "경상남도 진주시 진주대로 859 (주약동, 한주럭키아파트)",
          "year": "1990",
          "buildings": [
            {
              "id": "b8_8_1",
              "name": "1동",
              "lat": 35.177651778,
              "lng": 128.090557202,
              "households": 72,
              "broadcast": 42,
              "internet": 55
            },
            {
              "id": "b8_8_2",
              "name": "2동",
              "lat": 35.177351029,
              "lng": 128.089878284,
              "households": 72,
              "broadcast": 39,
              "internet": 54
            },
            {
              "id": "b8_8_3",
              "name": "3동",
              "lat": 35.177270325,
              "lng": 128.090732268,
              "households": 72,
              "broadcast": 46,
              "internet": 57
            },
            {
              "id": "b8_8_4",
              "name": "5동",
              "lat": 35.176907711,
              "lng": 128.090087003,
              "households": 72,
              "broadcast": 51,
              "internet": 51
            },
            {
              "id": "b8_8_5",
              "name": "6동",
              "lat": 35.176848832,
              "lng": 128.090784014,
              "households": 72,
              "broadcast": 48,
              "internet": 56
            },
            {
              "id": "b8_8_6",
              "name": "7동",
              "lat": 35.176471822,
              "lng": 128.090333457,
              "households": 72,
              "broadcast": 39,
              "internet": 61
            },
            {
              "id": "b8_8_7",
              "name": "8동",
              "lat": 35.176406121,
              "lng": 128.091075824,
              "households": 72,
              "broadcast": 47,
              "internet": 48
            },
            {
              "id": "b8_8_8",
              "name": "9동",
              "lat": 35.176049259,
              "lng": 128.091332052,
              "households": 72,
              "broadcast": 39,
              "internet": 51
            },
            {
              "id": "b8_8_9",
              "name": "10동",
              "lat": 35.176006639,
              "lng": 128.090557469,
              "households": 72,
              "broadcast": 41,
              "internet": 57
            },
            {
              "id": "b8_8_10",
              "name": "11동",
              "lat": 35.175673008,
              "lng": 128.091521474,
              "households": 72,
              "broadcast": 48,
              "internet": 54
            },
            {
              "id": "b8_8_11",
              "name": "12동",
              "lat": 35.175557385,
              "lng": 128.090772582,
              "households": 72,
              "broadcast": 51,
              "internet": 58
            },
            {
              "id": "b8_8_12",
              "name": "13동",
              "lat": 35.17529478,
              "lng": 128.091700377,
              "households": 72,
              "broadcast": 51,
              "internet": 49
            },
            {
              "id": "b8_8_13",
              "name": "15동",
              "lat": 35.175128325,
              "lng": 128.091036405,
              "households": 72,
              "broadcast": 54,
              "internet": 46
            }
          ]
        },
        {
          "id": "a9_1",
          "name": "정촌올리움 국민임대아파트",
          "lat": 35.123385,
          "lng": 128.098534,
          "households": 794,
          "broadcast": 555,
          "internet": 579,
          "address": "경상남도 진주시 정촌면 삼일로 12(진주정촌 올리움)",
          "year": "2020",
          "buildings": [
            {
              "id": "b9_1_1",
              "name": "101동",
              "lat": 35.12311095,
              "lng": 128.097751883,
              "households": 133,
              "broadcast": 93,
              "internet": 93
            },
            {
              "id": "b9_1_2",
              "name": "102동",
              "lat": 35.123609287,
              "lng": 128.098023936,
              "households": 133,
              "broadcast": 99,
              "internet": 106
            },
            {
              "id": "b9_1_3",
              "name": "103동",
              "lat": 35.124107874,
              "lng": 128.098281412,
              "households": 132,
              "broadcast": 92,
              "internet": 105
            },
            {
              "id": "b9_1_4",
              "name": "104동",
              "lat": 35.123718155,
              "lng": 128.099198827,
              "households": 132,
              "broadcast": 85,
              "internet": 85
            },
            {
              "id": "b9_1_5",
              "name": "105동",
              "lat": 35.123135037,
              "lng": 128.099161533,
              "households": 132,
              "broadcast": 81,
              "internet": 99
            },
            {
              "id": "b9_1_6",
              "name": "106동",
              "lat": 35.122629126,
              "lng": 128.098785609,
              "households": 132,
              "broadcast": 88,
              "internet": 95
            }
          ]
        },
        {
          "id": "a9_2",
          "name": "대경파미르",
          "lat": 35.127392,
          "lng": 128.100085,
          "households": 1474,
          "broadcast": 820,
          "internet": 1025,
          "address": "경상남도 진주시 삼일로 106번길 8(진주정촌대경파미르아파트)",
          "year": "2019",
          "buildings": [
            {
              "id": "a9_2_b0",
              "name": "101동",
              "lat": 35.128818482,
              "lng": 128.099285321,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b1",
              "name": "102동",
              "lat": 35.128432439,
              "lng": 128.099886221,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b2",
              "name": "103동",
              "lat": 35.128075707,
              "lng": 128.10043778,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b3",
              "name": "104동",
              "lat": 35.127784249,
              "lng": 128.100993881,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b4",
              "name": "105동",
              "lat": 35.127455614,
              "lng": 128.101574639,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b5",
              "name": "106동",
              "lat": 35.126978181,
              "lng": 128.101555311,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b6",
              "name": "107동",
              "lat": 35.127348889,
              "lng": 128.100910684,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b7",
              "name": "108동",
              "lat": 35.127946048,
              "lng": 128.099750096,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b8",
              "name": "109동",
              "lat": 35.12838821,
              "lng": 128.099160649,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b9",
              "name": "110동",
              "lat": 35.128121494,
              "lng": 128.098780102,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b10",
              "name": "111동",
              "lat": 35.127779758,
              "lng": 128.099386526,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b11",
              "name": "112동",
              "lat": 35.127477277,
              "lng": 128.099976788,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b12",
              "name": "113동",
              "lat": 35.127162241,
              "lng": 128.100583416,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b13",
              "name": "114동",
              "lat": 35.126804348,
              "lng": 128.101248245,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b14",
              "name": "115동",
              "lat": 35.12622459,
              "lng": 128.101111528,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b15",
              "name": "116동",
              "lat": 35.126671371,
              "lng": 128.100394446,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b16",
              "name": "117동",
              "lat": 35.127251543,
              "lng": 128.099231382,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b17",
              "name": "118동",
              "lat": 35.127671008,
              "lng": 128.098639254,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b18",
              "name": "119동",
              "lat": 35.127069594,
              "lng": 128.098781231,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b19",
              "name": "120동",
              "lat": 35.126726283,
              "lng": 128.099403594,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b20",
              "name": "121동",
              "lat": 35.126413595,
              "lng": 128.100014752,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            },
            {
              "id": "a9_2_b21",
              "name": "122동",
              "lat": 35.126031499,
              "lng": 128.100758493,
              "households": 67,
              "broadcast": 37,
              "internet": 47
            }
          ]
        },
        {
          "id": "a9_3",
          "name": "진주정촌 우방아이유쉘 아파트",
          "lat": 35.121932,
          "lng": 128.097603,
          "households": 430,
          "broadcast": 270,
          "internet": 318,
          "address": "경상남도 진주시 정촌면 삼일로 13(예하리, 진주우방아이유쉘)",
          "year": "2017",
          "buildings": [
            {
              "id": "b9_3_1",
              "name": "101동",
              "lat": 35.121888339,
              "lng": 128.098424349,
              "households": 86,
              "broadcast": 49,
              "internet": 73
            },
            {
              "id": "b9_3_2",
              "name": "102동",
              "lat": 35.122196149,
              "lng": 128.097577913,
              "households": 86,
              "broadcast": 64,
              "internet": 71
            },
            {
              "id": "b9_3_3",
              "name": "103동",
              "lat": 35.122608766,
              "lng": 128.097012941,
              "households": 86,
              "broadcast": 61,
              "internet": 61
            },
            {
              "id": "b9_3_4",
              "name": "104동",
              "lat": 35.121634289,
              "lng": 128.097181539,
              "households": 86,
              "broadcast": 51,
              "internet": 66
            },
            {
              "id": "b9_3_5",
              "name": "105동",
              "lat": 35.121332114,
              "lng": 128.09781644,
              "households": 86,
              "broadcast": 64,
              "internet": 63
            }
          ]
        },
        {
          "id": "a17_1",
          "name": "남강휴먼빌",
          "lat": 35.162716,
          "lng": 128.066073,
          "households": 916,
          "broadcast": 503,
          "internet": 696,
          "address": "경상남도 진주시 내동면 순환로 425-61(독산리, 남강휴먼빌아파트)",
          "year": "2010",
          "buildings": [
            {
              "id": "b17_1_1",
              "name": "101동",
              "lat": 35.161227603,
              "lng": 128.066871442,
              "households": 84,
              "broadcast": 55,
              "internet": 62
            },
            {
              "id": "b17_1_2",
              "name": "102동",
              "lat": 35.162030366,
              "lng": 128.066815231,
              "households": 84,
              "broadcast": 57,
              "internet": 59
            },
            {
              "id": "b17_1_3",
              "name": "103동",
              "lat": 35.162020228,
              "lng": 128.066421359,
              "households": 84,
              "broadcast": 61,
              "internet": 59
            },
            {
              "id": "b17_1_4",
              "name": "104동",
              "lat": 35.162385587,
              "lng": 128.066255794,
              "households": 83,
              "broadcast": 58,
              "internet": 68
            },
            {
              "id": "b17_1_5",
              "name": "105동",
              "lat": 35.16291561,
              "lng": 128.066611838,
              "households": 83,
              "broadcast": 58,
              "internet": 53
            },
            {
              "id": "b17_1_6",
              "name": "106동",
              "lat": 35.162901505,
              "lng": 128.066117499,
              "households": 83,
              "broadcast": 49,
              "internet": 55
            },
            {
              "id": "b17_1_7",
              "name": "107동",
              "lat": 35.162630382,
              "lng": 128.065451831,
              "households": 83,
              "broadcast": 60,
              "internet": 63
            },
            {
              "id": "b17_1_8",
              "name": "108동",
              "lat": 35.16327019,
              "lng": 128.066048603,
              "households": 83,
              "broadcast": 56,
              "internet": 53
            },
            {
              "id": "b17_1_9",
              "name": "109동",
              "lat": 35.163778151,
              "lng": 128.066042829,
              "households": 83,
              "broadcast": 59,
              "internet": 69
            },
            {
              "id": "b17_1_10",
              "name": "110동",
              "lat": 35.16348296,
              "lng": 128.065305887,
              "households": 83,
              "broadcast": 56,
              "internet": 68
            },
            {
              "id": "b17_1_11",
              "name": "111동",
              "lat": 35.163235195,
              "lng": 128.064860621,
              "households": 83,
              "broadcast": 46,
              "internet": 58
            }
          ]
        }
      ]
    },
    {
      "id": "d31",
      "name": "금산면",
      "lat": 35.207659,
      "lng": 128.146772,
      "households": 7934,
      "broadcast": 5038,
      "internet": 6254,
      "singleHouseholds": 0,
      "apartments": [
        {
          "id": "a7_1",
          "name": "금산두산위브",
          "lat": 35.220489,
          "lng": 128.148898,
          "households": 970,
          "broadcast": 611,
          "internet": 795,
          "address": "경상남도 진주시 금산면 중장로154번길 49 (장사리, 진주금산두산위브)",
          "year": "2009",
          "buildings": [
            {
              "id": "b7_1_1",
              "name": "101동",
              "lat": 35.219810803,
              "lng": 128.148225242,
              "households": 75,
              "broadcast": 45,
              "internet": 48
            },
            {
              "id": "b7_1_2",
              "name": "102동",
              "lat": 35.2202227,
              "lng": 128.148627808,
              "households": 75,
              "broadcast": 47,
              "internet": 56
            },
            {
              "id": "b7_1_3",
              "name": "103동",
              "lat": 35.220439961,
              "lng": 128.148978776,
              "households": 75,
              "broadcast": 50,
              "internet": 52
            },
            {
              "id": "b7_1_4",
              "name": "104동",
              "lat": 35.220674892,
              "lng": 128.14933958,
              "households": 75,
              "broadcast": 46,
              "internet": 52
            },
            {
              "id": "b7_1_5",
              "name": "105동",
              "lat": 35.220793466,
              "lng": 128.14976571,
              "households": 75,
              "broadcast": 52,
              "internet": 59
            },
            {
              "id": "b7_1_6",
              "name": "106동",
              "lat": 35.220881912,
              "lng": 128.15025274,
              "households": 75,
              "broadcast": 51,
              "internet": 49
            },
            {
              "id": "b7_1_7",
              "name": "107동",
              "lat": 35.221240785,
              "lng": 128.149773719,
              "households": 75,
              "broadcast": 54,
              "internet": 62
            },
            {
              "id": "b7_1_8",
              "name": "108동",
              "lat": 35.221608592,
              "lng": 128.149516795,
              "households": 75,
              "broadcast": 51,
              "internet": 63
            },
            {
              "id": "b7_1_9",
              "name": "109동",
              "lat": 35.2212483,
              "lng": 128.148979816,
              "households": 74,
              "broadcast": 54,
              "internet": 52
            },
            {
              "id": "b7_1_10",
              "name": "110동",
              "lat": 35.220811072,
              "lng": 128.148324628,
              "households": 74,
              "broadcast": 41,
              "internet": 50
            },
            {
              "id": "b7_1_11",
              "name": "111동",
              "lat": 35.220397536,
              "lng": 128.147850364,
              "households": 74,
              "broadcast": 43,
              "internet": 60
            },
            {
              "id": "b7_1_12",
              "name": "112동",
              "lat": 35.218893126,
              "lng": 128.147924724,
              "households": 74,
              "broadcast": 55,
              "internet": 54
            },
            {
              "id": "b7_1_13",
              "name": "113동",
              "lat": 35.219335691,
              "lng": 128.148118096,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            }
          ]
        },
        {
          "id": "a7_2",
          "name": "금산 e-편한세상",
          "lat": 35.219888,
          "lng": 128.15208,
          "households": 400,
          "broadcast": 264,
          "internet": 324,
          "address": "경상남도 진주시 금산면 금산순환로80번길 16 (장사리, 금산e편한세상)",
          "year": "2008",
          "buildings": [
            {
              "id": "b7_2_1",
              "name": "1동",
              "lat": 35.22011913847813,
              "lng": 128.1519055570089,
              "households": 100,
              "broadcast": 68,
              "internet": 81
            },
            {
              "id": "b7_2_2",
              "name": "2동",
              "lat": 35.21987927344679,
              "lng": 128.15262880337727,
              "households": 100,
              "broadcast": 55,
              "internet": 71
            },
            {
              "id": "b7_2_3",
              "name": "3동",
              "lat": 35.22025399808603,
              "lng": 128.15335320210093,
              "households": 100,
              "broadcast": 58,
              "internet": 67
            },
            {
              "id": "b7_2_4",
              "name": "4동",
              "lat": 35.22037670440576,
              "lng": 128.15425184184602,
              "households": 100,
              "broadcast": 74,
              "internet": 84
            }
          ]
        },
        {
          "id": "a7_3",
          "name": "진주푸르지오1단지",
          "lat": 35.218786,
          "lng": 128.145911,
          "households": 475,
          "broadcast": 304,
          "internet": 365,
          "address": "경상남도 진주시 금산면 덕의길 15 (장사리, 진주푸르지오1단지아파트)",
          "year": "2007",
          "buildings": [
            {
              "id": "b7_3_1",
              "name": "101동",
              "lat": 35.218699045,
              "lng": 128.146711816,
              "households": 60,
              "broadcast": 40,
              "internet": 46
            },
            {
              "id": "b7_3_2",
              "name": "102동",
              "lat": 35.219067522,
              "lng": 128.146264508,
              "households": 60,
              "broadcast": 35,
              "internet": 46
            },
            {
              "id": "b7_3_3",
              "name": "103동",
              "lat": 35.219434859,
              "lng": 128.145828442,
              "households": 60,
              "broadcast": 43,
              "internet": 50
            },
            {
              "id": "b7_3_4",
              "name": "104동",
              "lat": 35.219120763,
              "lng": 128.145343512,
              "households": 59,
              "broadcast": 33,
              "internet": 44
            },
            {
              "id": "b7_3_5",
              "name": "105동",
              "lat": 35.218650854,
              "lng": 128.145259664,
              "households": 59,
              "broadcast": 43,
              "internet": 50
            },
            {
              "id": "b7_3_6",
              "name": "106동",
              "lat": 35.218707069,
              "lng": 128.145826882,
              "households": 59,
              "broadcast": 33,
              "internet": 47
            },
            {
              "id": "b7_3_7",
              "name": "107동",
              "lat": 35.218290466,
              "lng": 128.145751666,
              "households": 59,
              "broadcast": 41,
              "internet": 40
            },
            {
              "id": "b7_3_8",
              "name": "108동",
              "lat": 35.218314748,
              "lng": 128.146298977,
              "households": 59,
              "broadcast": 43,
              "internet": 43
            }
          ]
        },
        {
          "id": "a7_4",
          "name": "진주푸르지오 2단지",
          "lat": 35.217828,
          "lng": 128.147252,
          "households": 337,
          "broadcast": 229,
          "internet": 259,
          "address": "경상남도 진주시 금산면 덕의길 11 (장사리, 진주푸르지오2단지아파트)",
          "year": "2007",
          "buildings": [
            {
              "id": "b7_4_1",
              "name": "201동",
              "lat": 35.21834546,
              "lng": 128.147373705,
              "households": 68,
              "broadcast": 46,
              "internet": 55
            },
            {
              "id": "b7_4_2",
              "name": "202동",
              "lat": 35.217910366,
              "lng": 128.147823688,
              "households": 68,
              "broadcast": 45,
              "internet": 44
            },
            {
              "id": "b7_4_3",
              "name": "203동",
              "lat": 35.217494982,
              "lng": 128.147429464,
              "households": 67,
              "broadcast": 40,
              "internet": 52
            },
            {
              "id": "b7_4_4",
              "name": "204동",
              "lat": 35.217449929,
              "lng": 128.146728991,
              "households": 67,
              "broadcast": 44,
              "internet": 47
            },
            {
              "id": "b7_4_5",
              "name": "205동",
              "lat": 35.217939882,
              "lng": 128.14690623,
              "households": 67,
              "broadcast": 42,
              "internet": 54
            }
          ]
        },
        {
          "id": "a7_5",
          "name": "화광비발디",
          "lat": 35.218828,
          "lng": 128.144271,
          "households": 76,
          "broadcast": 44,
          "internet": 56,
          "address": "경상남도 진주시 금산면 중천로67번길 5 (장사리, 화광비발디아파트)",
          "year": "2007",
          "buildings": [
            {
              "id": "b7_5_1",
              "name": "1동",
              "lat": 35.18433440771837,
              "lng": 128.0938388844338,
              "households": 76,
              "broadcast": 50,
              "internet": 53
            }
          ]
        },
        {
          "id": "a7_6",
          "name": "금산현대I-PARK",
          "lat": 35.216486,
          "lng": 128.145648,
          "households": 735,
          "broadcast": 514,
          "internet": 610,
          "address": "경상남도 진주시 금산면 중천로 82(장사리, 금산아이파크아파트)",
          "year": "2004",
          "buildings": [
            {
              "id": "b7_6_1",
              "name": "101동",
              "lat": 35.216639617,
              "lng": 128.144333234,
              "households": 67,
              "broadcast": 43,
              "internet": 46
            },
            {
              "id": "b7_6_2",
              "name": "102동",
              "lat": 35.216782289,
              "lng": 128.144944431,
              "households": 67,
              "broadcast": 40,
              "internet": 50
            },
            {
              "id": "b7_6_3",
              "name": "103동",
              "lat": 35.216234713,
              "lng": 128.144485825,
              "households": 67,
              "broadcast": 38,
              "internet": 43
            },
            {
              "id": "b7_6_4",
              "name": "104동",
              "lat": 35.216308794,
              "lng": 128.145254376,
              "households": 67,
              "broadcast": 45,
              "internet": 56
            },
            {
              "id": "b7_6_5",
              "name": "105동",
              "lat": 35.215802902,
              "lng": 128.145290128,
              "households": 67,
              "broadcast": 40,
              "internet": 52
            },
            {
              "id": "b7_6_6",
              "name": "106동",
              "lat": 35.215932388,
              "lng": 128.146222122,
              "households": 67,
              "broadcast": 42,
              "internet": 50
            },
            {
              "id": "b7_6_7",
              "name": "107동",
              "lat": 35.216244655,
              "lng": 128.146572988,
              "households": 67,
              "broadcast": 46,
              "internet": 52
            },
            {
              "id": "b7_6_8",
              "name": "108동",
              "lat": 35.21671658,
              "lng": 128.146761246,
              "households": 67,
              "broadcast": 40,
              "internet": 52
            },
            {
              "id": "b7_6_9",
              "name": "109동",
              "lat": 35.216630272,
              "lng": 128.146192873,
              "households": 67,
              "broadcast": 44,
              "internet": 46
            },
            {
              "id": "b7_6_10",
              "name": "110동",
              "lat": 35.217059654,
              "lng": 128.146345522,
              "households": 66,
              "broadcast": 37,
              "internet": 56
            },
            {
              "id": "b7_6_11",
              "name": "111동",
              "lat": 35.216997123,
              "lng": 128.145723272,
              "households": 66,
              "broadcast": 36,
              "internet": 44
            }
          ]
        },
        {
          "id": "a7_7",
          "name": "금산느티나무",
          "lat": 35.217763,
          "lng": 128.144813,
          "households": 448,
          "broadcast": 247,
          "internet": 373,
          "address": "경상남도 진주시 금산면 중천로 74 (장사리, 느티나무아파트)",
          "year": "2003",
          "buildings": [
            {
              "id": "a7_7_b0",
              "name": "101동",
              "lat": 35.217871226,
              "lng": 128.144127481,
              "households": 56,
              "broadcast": 31,
              "internet": 47
            },
            {
              "id": "a7_7_b1",
              "name": "102동",
              "lat": 35.217275735,
              "lng": 128.144303366,
              "households": 56,
              "broadcast": 31,
              "internet": 47
            },
            {
              "id": "a7_7_b2",
              "name": "103동",
              "lat": 35.218114436,
              "lng": 128.144466913,
              "households": 56,
              "broadcast": 31,
              "internet": 47
            },
            {
              "id": "a7_7_b3",
              "name": "104동",
              "lat": 35.217647259,
              "lng": 128.144598105,
              "households": 56,
              "broadcast": 31,
              "internet": 47
            },
            {
              "id": "a7_7_b4",
              "name": "105동",
              "lat": 35.218068792,
              "lng": 128.144946469,
              "households": 56,
              "broadcast": 31,
              "internet": 47
            },
            {
              "id": "a7_7_b5",
              "name": "106동",
              "lat": 35.217471571,
              "lng": 128.145125175,
              "households": 56,
              "broadcast": 31,
              "internet": 47
            },
            {
              "id": "a7_7_b6",
              "name": "107동",
              "lat": 35.217886897,
              "lng": 128.145555811,
              "households": 56,
              "broadcast": 31,
              "internet": 47
            },
            {
              "id": "a7_7_b7",
              "name": "108동",
              "lat": 35.217765878,
              "lng": 128.145382278,
              "households": 56,
              "broadcast": 31,
              "internet": 47
            }
          ]
        },
        {
          "id": "a7_8",
          "name": "금산흥한골든빌",
          "lat": 35.215446,
          "lng": 128.150665,
          "households": 1709,
          "broadcast": 957,
          "internet": 1162,
          "address": "경상남도 진주시 금산면 금산로 123 (장사리, 금산흥한골든빌)",
          "year": "2002",
          "buildings": [
            {
              "id": "b7_8_1",
              "name": "1동",
              "lat": 35.214428271946126,
              "lng": 128.15005190237977,
              "households": 95,
              "broadcast": 56,
              "internet": 77
            },
            {
              "id": "b7_8_2",
              "name": "2동",
              "lat": 35.215760823658655,
              "lng": 128.1497126140602,
              "households": 95,
              "broadcast": 59,
              "internet": 76
            },
            {
              "id": "b7_8_3",
              "name": "3동",
              "lat": 35.215536513305004,
              "lng": 128.15026901292637,
              "households": 95,
              "broadcast": 66,
              "internet": 75
            },
            {
              "id": "b7_8_4",
              "name": "4동",
              "lat": 35.21568810141423,
              "lng": 128.15101527912742,
              "households": 95,
              "broadcast": 66,
              "internet": 65
            },
            {
              "id": "b7_8_5",
              "name": "5동",
              "lat": 35.215523588395484,
              "lng": 128.15167229484547,
              "households": 95,
              "broadcast": 56,
              "internet": 61
            },
            {
              "id": "b7_8_6",
              "name": "6동",
              "lat": 35.214667928331444,
              "lng": 128.14879470391168,
              "households": 95,
              "broadcast": 54,
              "internet": 67
            },
            {
              "id": "b7_8_7",
              "name": "7동",
              "lat": 35.215044142554596,
              "lng": 128.1490929368856,
              "households": 95,
              "broadcast": 60,
              "internet": 66
            },
            {
              "id": "b7_8_8",
              "name": "8동",
              "lat": 35.214367355838526,
              "lng": 128.14923800366753,
              "households": 95,
              "broadcast": 65,
              "internet": 63
            },
            {
              "id": "b7_8_9",
              "name": "9동",
              "lat": 35.21480199425322,
              "lng": 128.14957487159177,
              "households": 95,
              "broadcast": 59,
              "internet": 80
            },
            {
              "id": "b7_8_10",
              "name": "10동",
              "lat": 35.215131645976165,
              "lng": 128.14994849498765,
              "households": 95,
              "broadcast": 57,
              "internet": 78
            },
            {
              "id": "b7_8_11",
              "name": "11동",
              "lat": 35.214428271946126,
              "lng": 128.15005190237977,
              "households": 95,
              "broadcast": 56,
              "internet": 77
            },
            {
              "id": "b7_8_12",
              "name": "12동",
              "lat": 35.21485348783042,
              "lng": 128.1504103017849,
              "households": 95,
              "broadcast": 69,
              "internet": 64
            },
            {
              "id": "b7_8_13",
              "name": "13동",
              "lat": 35.21519319951534,
              "lng": 128.15081199814082,
              "households": 95,
              "broadcast": 53,
              "internet": 76
            },
            {
              "id": "b7_8_14",
              "name": "14동",
              "lat": 35.21461527688462,
              "lng": 128.1509558954035,
              "households": 95,
              "broadcast": 57,
              "internet": 66
            },
            {
              "id": "b7_8_15",
              "name": "15동",
              "lat": 35.21484782784722,
              "lng": 128.1516405992964,
              "households": 95,
              "broadcast": 61,
              "internet": 71
            },
            {
              "id": "b7_8_16",
              "name": "16동",
              "lat": 35.215218081827615,
              "lng": 128.1519108993823,
              "households": 95,
              "broadcast": 71,
              "internet": 72
            },
            {
              "id": "b7_8_17",
              "name": "17동",
              "lat": 35.213924961594834,
              "lng": 128.14959007455317,
              "households": 95,
              "broadcast": 66,
              "internet": 65
            },
            {
              "id": "b7_8_18",
              "name": "18동",
              "lat": 35.213802958637494,
              "lng": 128.15009360163913,
              "households": 94,
              "broadcast": 62,
              "internet": 62
            }
          ]
        },
        {
          "id": "a7_9",
          "name": "금산경남빌라",
          "lat": 35.219355,
          "lng": 128.150287,
          "households": 66,
          "broadcast": 44,
          "internet": 46,
          "address": "경상남도 진주시 금산면 금산순환로 72 (장사리, 경남빌라)",
          "year": "1993",
          "buildings": [
            {
              "id": "b7_9_1",
              "name": "1동",
              "lat": 35.219355,
              "lng": 128.150287,
              "households": 66,
              "broadcast": 46,
              "internet": 55
            }
          ]
        },
        {
          "id": "a19_1",
          "name": "남문산역 행복주택",
          "lat": 35.165529,
          "lng": 128.162912,
          "households": 210,
          "broadcast": 147,
          "internet": 176,
          "address": "경상남도 진주시 문산읍 월아산로 1047-14(삼곡리, 남문산역 행복주택)",
          "year": "2018",
          "buildings": [
            {
              "id": "a19_1_b0",
              "name": "101동",
              "lat": 35.165393843,
              "lng": 128.16285538,
              "households": 105,
              "broadcast": 74,
              "internet": 88
            },
            {
              "id": "a19_1_b1",
              "name": "102동",
              "lat": 35.165663789,
              "lng": 128.162968812,
              "households": 105,
              "broadcast": 74,
              "internet": 88
            }
          ]
        },
        {
          "id": "a19_2",
          "name": "진주문산파란채아파트",
          "lat": 35.165385,
          "lng": 128.16571,
          "households": 350,
          "broadcast": 200,
          "internet": 252,
          "address": "경상남도 진주시 문산읍 월아산로1048번길 15(삼곡리, 진주문산파란채아파트)",
          "year": "2010",
          "buildings": [
            {
              "id": "a19_2_b0",
              "name": "101동",
              "lat": 35.164888485,
              "lng": 128.165837549,
              "households": 50,
              "broadcast": 29,
              "internet": 36
            },
            {
              "id": "a19_2_b1",
              "name": "102동",
              "lat": 35.165043114,
              "lng": 128.165290331,
              "households": 50,
              "broadcast": 29,
              "internet": 36
            },
            {
              "id": "a19_2_b2",
              "name": "103동",
              "lat": 35.165440177,
              "lng": 128.165745197,
              "households": 50,
              "broadcast": 29,
              "internet": 36
            },
            {
              "id": "a19_2_b3",
              "name": "104동",
              "lat": 35.165534346,
              "lng": 128.16538308,
              "households": 50,
              "broadcast": 29,
              "internet": 36
            },
            {
              "id": "a19_2_b4",
              "name": "105동",
              "lat": 35.16586729,
              "lng": 128.165872651,
              "households": 50,
              "broadcast": 29,
              "internet": 36
            },
            {
              "id": "a19_2_b5",
              "name": "106동",
              "lat": 35.165949107,
              "lng": 128.16542066,
              "households": 50,
              "broadcast": 29,
              "internet": 36
            },
            {
              "id": "a19_2_b6",
              "name": "110동",
              "lat": 35.164972061,
              "lng": 128.166420174,
              "households": 50,
              "broadcast": 29,
              "internet": 36
            }
          ]
        },
        {
          "id": "a19_3",
          "name": "문산한양하이빌",
          "lat": 35.167072,
          "lng": 128.161981,
          "households": 59,
          "broadcast": 33,
          "internet": 47,
          "address": "경상남도 진주시 문산읍 월아산로 1083-10 (삼곡리, 문산한양하이빌)",
          "year": "2001",
          "buildings": [
            {
              "id": "b19_3_1",
              "name": "101동",
              "lat": 35.16697370313966,
              "lng": 128.16185903817188,
              "households": 30,
              "broadcast": 20,
              "internet": 21
            },
            {
              "id": "b19_3_2",
              "name": "102동",
              "lat": 35.16718409542556,
              "lng": 128.16198086011462,
              "households": 29,
              "broadcast": 17,
              "internet": 19
            }
          ]
        },
        {
          "id": "a19_4",
          "name": "문산한양아파트",
          "lat": 35.165417,
          "lng": 128.163574,
          "households": 60,
          "broadcast": 40,
          "internet": 51,
          "address": "경상남도 진주시 문산읍 월아산로 1059 (삼곡리, 문산한양아파트)",
          "year": "1996",
          "buildings": [
            {
              "id": "b19_4_1",
              "name": "1동",
              "lat": 35.165417,
              "lng": 128.163574,
              "households": 60,
              "broadcast": 39,
              "internet": 43
            }
          ]
        },
        {
          "id": "a19_5",
          "name": "문산고려아파트",
          "lat": 35.163509,
          "lng": 128.160966,
          "households": 75,
          "broadcast": 43,
          "internet": 59,
          "address": "경상남도 진주시 문산읍 동부로 538-8 (삼곡리, 문산고려아파트)",
          "year": "1994",
          "buildings": [
            {
              "id": "b19_5_1",
              "name": "1동",
              "lat": 35.163509,
              "lng": 128.160966,
              "households": 75,
              "broadcast": 49,
              "internet": 57
            }
          ]
        },
        {
          "id": "a20_1",
          "name": "집현현대금빛마을",
          "lat": 35.238157,
          "lng": 128.091369,
          "households": 667,
          "broadcast": 473,
          "internet": 526,
          "address": "경상남도 진주시 집현면 진산로 675(봉강리, 현대아파트)",
          "year": "2000",
          "buildings": [
            {
              "id": "b20_1_1",
              "name": "1동",
              "lat": 35.238157,
              "lng": 128.090836,
              "households": 75,
              "broadcast": 53,
              "internet": 58
            },
            {
              "id": "b20_1_2",
              "name": "2동",
              "lat": 35.238457,
              "lng": 128.090836,
              "households": 74,
              "broadcast": 49,
              "internet": 61
            },
            {
              "id": "b20_1_3",
              "name": "3동",
              "lat": 35.237857,
              "lng": 128.091236,
              "households": 74,
              "broadcast": 41,
              "internet": 62
            },
            {
              "id": "b20_1_4",
              "name": "4동",
              "lat": 35.238157,
              "lng": 128.091236,
              "households": 74,
              "broadcast": 42,
              "internet": 55
            },
            {
              "id": "b20_1_5",
              "name": "5동",
              "lat": 35.238457,
              "lng": 128.091236,
              "households": 74,
              "broadcast": 42,
              "internet": 55
            },
            {
              "id": "b20_1_6",
              "name": "6동",
              "lat": 35.237857,
              "lng": 128.091636,
              "households": 74,
              "broadcast": 54,
              "internet": 58
            },
            {
              "id": "b20_1_7",
              "name": "7동",
              "lat": 35.238157,
              "lng": 128.091636,
              "households": 74,
              "broadcast": 47,
              "internet": 57
            },
            {
              "id": "b20_1_8",
              "name": "8동",
              "lat": 35.238457,
              "lng": 128.091636,
              "households": 74,
              "broadcast": 54,
              "internet": 52
            },
            {
              "id": "b20_1_9",
              "name": "9동",
              "lat": 35.237857,
              "lng": 128.092036,
              "households": 74,
              "broadcast": 46,
              "internet": 59
            }
          ]
        },
        {
          "id": "a22_1",
          "name": "진주문산코아루아파트",
          "lat": 35.169737,
          "lng": 128.161101,
          "households": 520,
          "broadcast": 306,
          "internet": 431,
          "address": "경상남도 진주시 문산읍 월아산로1117번길 5(소문리, 진주문산코아루아파트)",
          "year": "2010",
          "buildings": [
            {
              "id": "b22_1_1",
              "name": "101동",
              "lat": 35.170413685,
              "lng": 128.161535699,
              "households": 58,
              "broadcast": 37,
              "internet": 44
            },
            {
              "id": "b22_1_2",
              "name": "102동",
              "lat": 35.170291282,
              "lng": 128.161030308,
              "households": 58,
              "broadcast": 41,
              "internet": 41
            },
            {
              "id": "b22_1_3",
              "name": "103동",
              "lat": 35.17048128,
              "lng": 128.160625831,
              "households": 58,
              "broadcast": 43,
              "internet": 42
            },
            {
              "id": "b22_1_4",
              "name": "104동",
              "lat": 35.170060646,
              "lng": 128.160552251,
              "households": 58,
              "broadcast": 43,
              "internet": 46
            },
            {
              "id": "b22_1_5",
              "name": "105동",
              "lat": 35.169841197,
              "lng": 128.161141854,
              "households": 58,
              "broadcast": 37,
              "internet": 48
            },
            {
              "id": "b22_1_6",
              "name": "106동",
              "lat": 35.169463214,
              "lng": 128.161308749,
              "households": 58,
              "broadcast": 39,
              "internet": 42
            },
            {
              "id": "b22_1_7",
              "name": "107동",
              "lat": 35.169276627,
              "lng": 128.160782578,
              "households": 58,
              "broadcast": 31,
              "internet": 42
            },
            {
              "id": "b22_1_8",
              "name": "108동",
              "lat": 35.169081613,
              "lng": 128.161384436,
              "households": 57,
              "broadcast": 31,
              "internet": 41
            },
            {
              "id": "b22_1_9",
              "name": "109동",
              "lat": 35.168720788,
              "lng": 128.16154666,
              "households": 57,
              "broadcast": 41,
              "internet": 41
            }
          ]
        },
        {
          "id": "a22_2",
          "name": "문산동국한양빌라",
          "lat": 35.168556,
          "lng": 128.162632,
          "households": 86,
          "broadcast": 62,
          "internet": 59,
          "address": "경상남도 진주시 문산읍 월아산로 1094(소문리, 한양빌라)",
          "year": "1992",
          "buildings": [
            {
              "id": "b22_2_1",
              "name": "1동",
              "lat": 35.168556,
              "lng": 128.162632,
              "households": 86,
              "broadcast": 47,
              "internet": 61
            }
          ]
        },
        {
          "id": "a23_1",
          "name": "명석 블리시움아파트",
          "lat": 35.218561,
          "lng": 128.041293,
          "households": 36,
          "broadcast": 20,
          "internet": 27,
          "address": "경상남도 진주시 광제산로26번길 5(명석면, 명석 블리시움아파트)",
          "year": "2020",
          "buildings": [
            {
              "id": "b23_1_1",
              "name": "1동",
              "lat": 35.218560903,
              "lng": 128.041292644,
              "households": 36,
              "broadcast": 21,
              "internet": 28
            }
          ]
        },
        {
          "id": "a23_2",
          "name": "명석동신아파트",
          "lat": 35.216469,
          "lng": 128.038843,
          "households": 490,
          "broadcast": 269,
          "internet": 372,
          "address": "경상남도 진주시 명석면 광제산로 11-21(우수리, 동신아파트)",
          "year": "1992",
          "buildings": [
            {
              "id": "b23_2_1",
              "name": "1동",
              "lat": 35.216469,
              "lng": 128.038643,
              "households": 123,
              "broadcast": 92,
              "internet": 97
            },
            {
              "id": "b23_2_2",
              "name": "2동",
              "lat": 35.216769,
              "lng": 128.038643,
              "households": 123,
              "broadcast": 82,
              "internet": 103
            },
            {
              "id": "b23_2_3",
              "name": "3동",
              "lat": 35.216169,
              "lng": 128.039043,
              "households": 122,
              "broadcast": 87,
              "internet": 93
            },
            {
              "id": "b23_2_4",
              "name": "4동",
              "lat": 35.216469,
              "lng": 128.039043,
              "households": 122,
              "broadcast": 80,
              "internet": 90
            }
          ]
        },
        {
          "id": "a27_1",
          "name": "일반성 태완아파트",
          "lat": 35.172882,
          "lng": 128.285984,
          "households": 110,
          "broadcast": 77,
          "internet": 78,
          "address": "경상남도 진주시 일반성면 공치고개길 34(창촌리, 태완노블리안아파트)",
          "year": "2007",
          "buildings": [
            {
              "id": "b27_1_1",
              "name": "1동",
              "lat": 35.172732,
              "lng": 128.285984,
              "households": 55,
              "broadcast": 36,
              "internet": 38
            },
            {
              "id": "b27_1_2",
              "name": "2동",
              "lat": 35.173032,
              "lng": 128.285984,
              "households": 55,
              "broadcast": 40,
              "internet": 44
            }
          ]
        },
        {
          "id": "a27_2",
          "name": "일반성월산아크로빌",
          "lat": 35.171997,
          "lng": 128.284962,
          "households": 38,
          "broadcast": 20,
          "internet": 29,
          "address": "경상남도 진주시 일반성면 공치고개길 19 (창촌리, 월산아크로빌)",
          "year": "2005",
          "buildings": [
            {
              "id": "b27_2_1",
              "name": "101동",
              "lat": 35.171997447,
              "lng": 128.284962329,
              "households": 38,
              "broadcast": 21,
              "internet": 30
            }
          ]
        },
        {
          "id": "a43_1",
          "name": "대곡한양아파트",
          "lat": 35.262343,
          "lng": 128.168094,
          "households": 33,
          "broadcast": 20,
          "internet": 27,
          "address": "경상남도 진주시 대곡면 진의로1079번길 13 (광석리, 대곡한양아파트)",
          "year": "1994",
          "buildings": [
            {
              "id": "b43_1_1",
              "name": "1동",
              "lat": 35.262343,
              "lng": 128.168094,
              "households": 33,
              "broadcast": 18,
              "internet": 27
            }
          ]
        },
        {
          "id": "a37_1",
          "name": "일반성 에이원아파트",
          "lat": 35.169148,
          "lng": 128.28729,
          "households": 48,
          "broadcast": 35,
          "internet": 32,
          "address": "경상남도 진주시 일반성면 동부로 2062(일반성면, 에이원아파트)",
          "year": "2016",
          "buildings": [
            {
              "id": "b37_1_1",
              "name": "101동",
              "lat": 35.169147608,
              "lng": 128.287289523,
              "households": 48,
              "broadcast": 26,
              "internet": 40
            }
          ]
        }
      ]
    },
    {
      "id": "d32",
      "name": "명석면",
      "lat": 35.14,
      "lng": 128.03,
      "households": 2148,
      "broadcast": 526,
      "internet": 589,
      "singleHouseholds": 2148,
      "apartments": []
    },
    {
      "id": "d33",
      "name": "집현면",
      "lat": 35.11,
      "lng": 128.09,
      "households": 2130,
      "broadcast": 430,
      "internet": 594,
      "singleHouseholds": 2130,
      "apartments": []
    },
    {
      "id": "d34",
      "name": "정촌면",
      "lat": 35.09,
      "lng": 128.15,
      "households": 4010,
      "broadcast": 1046,
      "internet": 884,
      "singleHouseholds": 4010,
      "apartments": []
    },
    {
      "id": "d36",
      "name": "진성면",
      "lat": 35.22,
      "lng": 128.22,
      "households": 1064,
      "broadcast": 277,
      "internet": 308,
      "singleHouseholds": 1064,
      "apartments": []
    },
    {
      "id": "d38",
      "name": "내동면",
      "lat": 35.17,
      "lng": 128.02,
      "households": 1649,
      "broadcast": 352,
      "internet": 388,
      "singleHouseholds": 1649,
      "apartments": []
    },
    {
      "id": "d39",
      "name": "금곡면",
      "lat": 35.26,
      "lng": 128.18,
      "households": 1227,
      "broadcast": 338,
      "internet": 311,
      "singleHouseholds": 1227,
      "apartments": []
    },
    {
      "id": "d40",
      "name": "수곡면",
      "lat": 35.13,
      "lng": 127.9,
      "households": 1248,
      "broadcast": 236,
      "internet": 286,
      "singleHouseholds": 1248,
      "apartments": []
    },
    {
      "id": "d41",
      "name": "이반성면",
      "lat": 35.1,
      "lng": 128.28,
      "households": 986,
      "broadcast": 261,
      "internet": 276,
      "singleHouseholds": 986,
      "apartments": []
    },
    {
      "id": "d42",
      "name": "대곡면",
      "lat": 35.23,
      "lng": 128.0,
      "households": 1762,
      "broadcast": 459,
      "internet": 516,
      "singleHouseholds": 1762,
      "apartments": []
    },
    {
      "id": "d44",
      "name": "지수면",
      "lat": 35.25,
      "lng": 128.3,
      "households": 818,
      "broadcast": 191,
      "internet": 259,
      "singleHouseholds": 818,
      "apartments": []
    },
    {
      "id": "d45",
      "name": "사봉면",
      "lat": 35.2,
      "lng": 128.26,
      "households": 893,
      "broadcast": 194,
      "internet": 245,
      "singleHouseholds": 893,
      "apartments": []
    },
    {
      "id": "d_new_천전동",
      "name": "천전동",
      "lat": 35.18376236363636,
      "lng": 128.0897939090909,
      "households": 13791,
      "broadcast": 5735,
      "internet": 6805,
      "singleHouseholds": 11949,
      "apartments": [
        {
          "id": "a15_1",
          "name": "일진스위트포레강남",
          "lat": 35.185514,
          "lng": 128.08688,
          "households": 115,
          "broadcast": 73,
          "internet": 90,
          "address": "경상남도 진주시 망경로 308",
          "year": "2021",
          "buildings": [
            {
              "id": "b15_1_1",
              "name": "1동",
              "lat": 35.18551370049747,
              "lng": 128.0868581003237,
              "households": 115,
              "broadcast": 77,
              "internet": 75
            }
          ]
        },
        {
          "id": "a15_2",
          "name": "일동미라주",
          "lat": 35.183544,
          "lng": 128.088114,
          "households": 392,
          "broadcast": 260,
          "internet": 263,
          "address": "경상남도 진주시 진주대로 891번길 56(강남동, 일동미라주)",
          "year": "2021",
          "buildings": [
            {
              "id": "a15_2_b0",
              "name": "101동",
              "lat": 35.18384272,
              "lng": 128.088311543,
              "households": 98,
              "broadcast": 65,
              "internet": 66
            },
            {
              "id": "a15_2_b1",
              "name": "102동",
              "lat": 35.183333301,
              "lng": 128.088548989,
              "households": 98,
              "broadcast": 65,
              "internet": 66
            },
            {
              "id": "a15_2_b2",
              "name": "103동",
              "lat": 35.183308753,
              "lng": 128.087875861,
              "households": 98,
              "broadcast": 65,
              "internet": 66
            },
            {
              "id": "a15_2_b3",
              "name": "104동",
              "lat": 35.183691678,
              "lng": 128.087720508,
              "households": 98,
              "broadcast": 65,
              "internet": 66
            }
          ]
        },
        {
          "id": "a15_3",
          "name": "대경강남타운",
          "lat": 35.180269,
          "lng": 128.089487,
          "households": 179,
          "broadcast": 103,
          "internet": 132,
          "address": "경상남도 진주시 진주대로891번길 16 (강남동, 대경강남타운)",
          "year": "1997",
          "buildings": [
            {
              "id": "b15_3_1",
              "name": "1동",
              "lat": 35.180269,
              "lng": 128.089487,
              "households": 179,
              "broadcast": 128,
              "internet": 136
            }
          ]
        },
        {
          "id": "a15_4",
          "name": "강남한주한보",
          "lat": 35.184095,
          "lng": 128.08628,
          "households": 279,
          "broadcast": 209,
          "internet": 220,
          "address": "경상남도 진주시 망경로296번길 17 (강남동, 강남한주한보타운)",
          "year": "1995",
          "buildings": [
            {
              "id": "a15_4_b0",
              "name": "101동",
              "lat": 35.18390911171261,
              "lng": 128.08692916679763,
              "households": 279,
              "broadcast": 209,
              "internet": 220
            }
          ]
        },
        {
          "id": "a15_5",
          "name": "동성가든타워",
          "lat": 35.180954,
          "lng": 128.089085,
          "households": 195,
          "broadcast": 136,
          "internet": 152,
          "address": "경상남도 진주시 진주대로 901 (강남동, 동성가든타워)",
          "year": "1994",
          "buildings": [
            {
              "id": "b15_5_1",
              "name": "1동",
              "lat": 35.180954,
              "lng": 128.089085,
              "households": 195,
              "broadcast": 109,
              "internet": 152
            }
          ]
        },
        {
          "id": "a15_6",
          "name": "서성파라토피아",
          "lat": 35.186719,
          "lng": 128.088325,
          "households": 66,
          "broadcast": 36,
          "internet": 52,
          "address": "경상남도 진주시 진주대로986번길 22 (강남동, 서성파라토피아)",
          "year": "1989",
          "buildings": [
            {
              "id": "b15_6_1",
              "name": "1동",
              "lat": 35.186718814,
              "lng": 128.088324607,
              "households": 66,
              "broadcast": 45,
              "internet": 46
            }
          ]
        },
        {
          "id": "a21_1",
          "name": "칠암 순화주택",
          "lat": 35.185617,
          "lng": 128.08883,
          "households": 27,
          "broadcast": 16,
          "internet": 20,
          "address": "경상남도 진주시 진주대로954번길 11-1 (칠암동, 순화스타씨티)",
          "year": "2007",
          "buildings": [
            {
              "id": "b21_1_1",
              "name": "1동",
              "lat": 35.185617,
              "lng": 128.08883,
              "households": 27,
              "broadcast": 16,
              "internet": 19
            }
          ]
        },
        {
          "id": "a21_2",
          "name": "칠암대덕아파트",
          "lat": 35.184396,
          "lng": 128.089922,
          "households": 159,
          "broadcast": 92,
          "internet": 122,
          "address": "경상남도 진주시 진주대로942번길 16 (칠암동, 칠암대덕아파트)",
          "year": "2004",
          "buildings": [
            {
              "id": "b21_2_1",
              "name": "1동",
              "lat": 35.18438940236114,
              "lng": 128.0901116394352,
              "households": 159,
              "broadcast": 106,
              "internet": 106
            }
          ]
        },
        {
          "id": "a21_3",
          "name": "칠암한주아파트",
          "lat": 35.177455,
          "lng": 128.097394,
          "households": 190,
          "broadcast": 123,
          "internet": 131,
          "address": "경상남도 진주시 강남로 101 (칠암동, 칠암한주아파트)",
          "year": "1995",
          "buildings": [
            {
              "id": "b21_3_1",
              "name": "1동",
              "lat": 35.1776563380093,
              "lng": 128.09775569574492,
              "households": 190,
              "broadcast": 115,
              "internet": 153
            }
          ]
        },
        {
          "id": "a21_4",
          "name": "칠암현대아파트",
          "lat": 35.186928,
          "lng": 128.089504,
          "households": 190,
          "broadcast": 125,
          "internet": 157,
          "address": "경상남도 진주시 강남로255번길 18 (칠암동, 현대아파트)",
          "year": "1985",
          "buildings": [
            {
              "id": "b21_4_1",
              "name": "1동",
              "lat": 35.186928,
              "lng": 128.089371,
              "households": 64,
              "broadcast": 35,
              "internet": 53
            },
            {
              "id": "b21_4_2",
              "name": "2동",
              "lat": 35.187228,
              "lng": 128.089371,
              "households": 63,
              "broadcast": 40,
              "internet": 49
            },
            {
              "id": "b21_4_3",
              "name": "3동",
              "lat": 35.186628,
              "lng": 128.089771,
              "households": 63,
              "broadcast": 44,
              "internet": 51
            }
          ]
        },
        {
          "id": "a21_5",
          "name": "강변맨션",
          "lat": 35.185746,
          "lng": 128.093847,
          "households": 48,
          "broadcast": 28,
          "internet": 39,
          "address": "경상남도 진주시 강남로189번길 12-10 (칠암동, 칠암강변맨션)",
          "year": "1983",
          "buildings": [
            {
              "id": "b21_5_1",
              "name": "1동",
              "lat": 35.18316713190147,
              "lng": 128.07327959882414,
              "households": 24,
              "broadcast": 17,
              "internet": 17
            },
            {
              "id": "b21_5_2",
              "name": "2동",
              "lat": 35.185896,
              "lng": 128.093847,
              "households": 24,
              "broadcast": 17,
              "internet": 17
            }
          ]
        }
      ]
    },
    {
      "id": "d_new_중앙동",
      "name": "중앙동",
      "lat": 35.19370733333333,
      "lng": 128.08530366666665,
      "households": 6236,
      "broadcast": 2708,
      "internet": 3166,
      "singleHouseholds": 5121,
      "apartments": [
        {
          "id": "a18_1",
          "name": "진주옥봉엘에이치아파트",
          "lat": 35.19355,
          "lng": 128.094354,
          "households": 500,
          "broadcast": 370,
          "internet": 405,
          "address": "경상남도 진주시 진산로 20",
          "year": "2021",
          "buildings": [
            {
              "id": "b18_1_1",
              "name": "101동",
              "lat": 35.193447452,
              "lng": 128.093553608,
              "households": 167,
              "broadcast": 96,
              "internet": 108
            },
            {
              "id": "b18_1_2",
              "name": "102동",
              "lat": 35.193639868,
              "lng": 128.094470818,
              "households": 167,
              "broadcast": 106,
              "internet": 110
            },
            {
              "id": "b18_1_3",
              "name": "103동",
              "lat": 35.193562633,
              "lng": 128.095036825,
              "households": 166,
              "broadcast": 94,
              "internet": 136
            }
          ]
        },
        {
          "id": "a18_2",
          "name": "남강한주아파트",
          "lat": 35.190699,
          "lng": 128.091447,
          "households": 97,
          "broadcast": 68,
          "internet": 75,
          "address": "경상남도 진주시 남강로736번길 6-3 (옥봉동, 남강한주타운)",
          "year": "2000",
          "buildings": [
            {
              "id": "b18_2_1",
              "name": "1동",
              "lat": 35.19087003564159,
              "lng": 128.0918063007134,
              "households": 97,
              "broadcast": 65,
              "internet": 81
            }
          ]
        },
        {
          "id": "a18_3",
          "name": "옥봉대림아파트",
          "lat": 35.195887,
          "lng": 128.093387,
          "households": 145,
          "broadcast": 92,
          "internet": 123,
          "address": "경상남도 진주시 향교로115번길 10 (옥봉동, 대림아파트)",
          "year": "1993",
          "buildings": [
            {
              "id": "b18_3_1",
              "name": "1동",
              "lat": 35.19596280048979,
              "lng": 128.09427040022632,
              "households": 145,
              "broadcast": 82,
              "internet": 117
            }
          ]
        },
        {
          "id": "a18_4",
          "name": "옥봉국화조합아파트",
          "lat": 35.196825,
          "lng": 128.092653,
          "households": 65,
          "broadcast": 37,
          "internet": 48,
          "address": "경상남도 진주시 향교로 107 (옥봉동, 옥봉국화조합아파트)",
          "year": "1991",
          "buildings": [
            {
              "id": "b18_4_1",
              "name": "1동",
              "lat": 35.19658695288142,
              "lng": 128.0927405677441,
              "households": 33,
              "broadcast": 24,
              "internet": 26
            },
            {
              "id": "b18_4_2",
              "name": "2동",
              "lat": 35.196975,
              "lng": 128.092653,
              "households": 32,
              "broadcast": 19,
              "internet": 22
            }
          ]
        },
        {
          "id": "a18_5",
          "name": "옥봉시영아파트",
          "lat": 35.197291,
          "lng": 128.090795,
          "households": 50,
          "broadcast": 34,
          "internet": 42,
          "address": "경상남도 진주시 향교로 92-1 (옥봉동, 시영아파트)",
          "year": "1986",
          "buildings": [
            {
              "id": "b18_5_1",
              "name": "1동",
              "lat": 35.197141,
              "lng": 128.090795,
              "households": 25,
              "broadcast": 17,
              "internet": 17
            },
            {
              "id": "b18_5_2",
              "name": "2동",
              "lat": 35.197441,
              "lng": 128.090795,
              "households": 25,
              "broadcast": 18,
              "internet": 16
            }
          ]
        },
        {
          "id": "a29_1",
          "name": "진주한보맨션",
          "lat": 35.191922,
          "lng": 128.073309,
          "households": 25,
          "broadcast": 14,
          "internet": 20,
          "address": "경상남도 진주시 북장대로25번길 13 (인사동, 진주한보맨션)",
          "year": "1989",
          "buildings": [
            {
              "id": "b29_1_1",
              "name": "1동",
              "lat": 35.191921958,
              "lng": 128.073308817,
              "households": 25,
              "broadcast": 18,
              "internet": 16
            }
          ]
        },
        {
          "id": "a29_2",
          "name": "남성한주아파트",
          "lat": 35.191813,
          "lng": 128.076312,
          "households": 50,
          "broadcast": 27,
          "internet": 32,
          "address": "경상남도 진주시 북장대로6번길 13 (인사동, 남성한주아파트)",
          "year": "1987",
          "buildings": [
            {
              "id": "b29_2_1",
              "name": "1동",
              "lat": 35.191663,
              "lng": 128.076312,
              "households": 25,
              "broadcast": 15,
              "internet": 17
            },
            {
              "id": "b29_2_2",
              "name": "2동",
              "lat": 35.191963,
              "lng": 128.076312,
              "households": 25,
              "broadcast": 16,
              "internet": 19
            }
          ]
        },
        {
          "id": "a29_3",
          "name": "대림한신아파트",
          "lat": 35.188083,
          "lng": 128.073064,
          "households": 40,
          "broadcast": 23,
          "internet": 26,
          "address": "경상남도 진주시 서장대로393번길 7 (인사동, 대림한신맨션)",
          "year": "1987",
          "buildings": [
            {
              "id": "b29_3_1",
              "name": "1동",
              "lat": 35.188082723,
              "lng": 128.073064421,
              "households": 40,
              "broadcast": 22,
              "internet": 33
            }
          ]
        },
        {
          "id": "a28_1",
          "name": "진주롯데인벤스",
          "lat": 35.197849,
          "lng": 128.083212,
          "households": 143,
          "broadcast": 80,
          "internet": 95,
          "address": "경상남도 진주시 향교로 3 (평안동, 롯데인벤스)",
          "year": "2008",
          "buildings": [
            {
              "id": "b28_1_1",
              "name": "1동",
              "lat": 35.19764584849466,
              "lng": 128.0830671989121,
              "households": 143,
              "broadcast": 97,
              "internet": 117
            }
          ]
        }
      ]
    },
    {
      "id": "d_new_성북동",
      "name": "성북동",
      "lat": 35.19573225,
      "lng": 128.07603125,
      "households": 5887,
      "broadcast": 2183,
      "internet": 2318,
      "singleHouseholds": 5741,
      "apartments": [
        {
          "id": "a30_1",
          "name": "견성스타뷰",
          "lat": 35.195755,
          "lng": 128.074231,
          "households": 46,
          "broadcast": 26,
          "internet": 32,
          "address": "경상남도 진주시 진주대로1178번길 8 (봉곡동, 견성스타뷰아파트)",
          "year": "2005",
          "buildings": [
            {
              "id": "b30_1_1",
              "name": "1동",
              "lat": 35.19570643267161,
              "lng": 128.07416860138318,
              "households": 46,
              "broadcast": 25,
              "internet": 34
            }
          ]
        },
        {
          "id": "a30_2",
          "name": "순화몽페레씨티빌",
          "lat": 35.193091,
          "lng": 128.072712,
          "households": 25,
          "broadcast": 16,
          "internet": 16,
          "address": "경상남도 진주시 북장대로35번길 14 (봉곡동, 순화몽페레씨티빌)",
          "year": "2004",
          "buildings": [
            {
              "id": "b30_2_1",
              "name": "1동",
              "lat": 35.193091,
              "lng": 128.072712,
              "households": 25,
              "broadcast": 16,
              "internet": 17
            }
          ]
        },
        {
          "id": "a30_3",
          "name": "현대봉곡아파트",
          "lat": 35.193751,
          "lng": 128.072588,
          "households": 25,
          "broadcast": 18,
          "internet": 17,
          "address": "경상남도 진주시 진주대로1195번길 8 (봉곡동, 현대봉곡아파트)",
          "year": "1986",
          "buildings": [
            {
              "id": "b30_3_1",
              "name": "1동",
              "lat": 35.193751457,
              "lng": 128.072587841,
              "households": 25,
              "broadcast": 18,
              "internet": 19
            }
          ]
        },
        {
          "id": "a35_1",
          "name": "봉래삼전아파트",
          "lat": 35.200332,
          "lng": 128.084594,
          "households": 50,
          "broadcast": 31,
          "internet": 40,
          "address": "경상남도 진주시 의병로243번길 4 (봉래동, 삼전빌라)",
          "year": "1993",
          "buildings": [
            {
              "id": "b35_1_1",
              "name": "1동",
              "lat": 35.200332,
              "lng": 128.084594,
              "households": 50,
              "broadcast": 29,
              "internet": 39
            }
          ]
        }
      ]
    },
    {
      "id": "d_new_가호동",
      "name": "가호동",
      "lat": 35.160143913043484,
      "lng": 128.11482973913047,
      "households": 15595,
      "broadcast": 9038,
      "internet": 10702,
      "singleHouseholds": 2639,
      "apartments": [
        {
          "id": "a3_1",
          "name": "덕진 진주의봄 프리미엄 아파트",
          "lat": 35.149339,
          "lng": 128.111107,
          "households": 773,
          "broadcast": 448,
          "internet": 533,
          "address": "경상남도 진주시 진주역로 50",
          "year": "2025",
          "buildings": [
            {
              "id": "b3_1_1",
              "name": "101동",
              "lat": 35.149228758,
              "lng": 128.10978698,
              "households": 65,
              "broadcast": 38,
              "internet": 50
            },
            {
              "id": "b3_1_2",
              "name": "102동",
              "lat": 35.149504747,
              "lng": 128.110351664,
              "households": 65,
              "broadcast": 46,
              "internet": 50
            },
            {
              "id": "b3_1_3",
              "name": "103동",
              "lat": 35.149846588,
              "lng": 128.110990414,
              "households": 65,
              "broadcast": 40,
              "internet": 55
            },
            {
              "id": "b3_1_4",
              "name": "104동",
              "lat": 35.150040101,
              "lng": 128.111754285,
              "households": 65,
              "broadcast": 44,
              "internet": 48
            },
            {
              "id": "b3_1_5",
              "name": "105동",
              "lat": 35.149622715,
              "lng": 128.111716646,
              "households": 65,
              "broadcast": 44,
              "internet": 53
            },
            {
              "id": "b3_1_6",
              "name": "106동",
              "lat": 35.149446706,
              "lng": 128.110902193,
              "households": 64,
              "broadcast": 48,
              "internet": 42
            },
            {
              "id": "b3_1_7",
              "name": "107동",
              "lat": 35.148991215,
              "lng": 128.110114765,
              "households": 64,
              "broadcast": 44,
              "internet": 43
            },
            {
              "id": "b3_1_8",
              "name": "108동",
              "lat": 35.148826572,
              "lng": 128.110654244,
              "households": 64,
              "broadcast": 37,
              "internet": 50
            },
            {
              "id": "b3_1_9",
              "name": "109동",
              "lat": 35.149299457,
              "lng": 128.111513396,
              "households": 64,
              "broadcast": 42,
              "internet": 44
            },
            {
              "id": "b3_1_10",
              "name": "110동",
              "lat": 35.149398831,
              "lng": 128.112139819,
              "households": 64,
              "broadcast": 37,
              "internet": 51
            },
            {
              "id": "b3_1_11",
              "name": "111동",
              "lat": 35.149063573,
              "lng": 128.112144882,
              "households": 64,
              "broadcast": 42,
              "internet": 44
            },
            {
              "id": "b3_1_12",
              "name": "112동",
              "lat": 35.1488,
              "lng": 128.111212208,
              "households": 64,
              "broadcast": 46,
              "internet": 44
            }
          ]
        },
        {
          "id": "a3_2",
          "name": "신진주역세권 우미린 더 시그니처",
          "lat": 35.151084,
          "lng": 128.109382,
          "households": 828,
          "broadcast": 455,
          "internet": 554,
          "address": "경상남도 진주시 진주역로 55",
          "year": "2024",
          "buildings": [
            {
              "id": "a3_2_b0",
              "name": "101동",
              "lat": 35.15166366,
              "lng": 128.109327718,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b1",
              "name": "102동",
              "lat": 35.152060296,
              "lng": 128.109689702,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b2",
              "name": "103동",
              "lat": 35.15206447,
              "lng": 128.11014244,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b3",
              "name": "104동",
              "lat": 35.151607759,
              "lng": 128.109717836,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b4",
              "name": "105동",
              "lat": 35.150679949,
              "lng": 128.110240948,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b5",
              "name": "106동",
              "lat": 35.149946073,
              "lng": 128.109108456,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b6",
              "name": "107동",
              "lat": 35.150308305,
              "lng": 128.109940038,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b7",
              "name": "109동",
              "lat": 35.150403741,
              "lng": 128.10901268,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b8",
              "name": "110동",
              "lat": 35.150810741,
              "lng": 128.108836542,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b9",
              "name": "111동",
              "lat": 35.150956264,
              "lng": 128.108389469,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b10",
              "name": "112동",
              "lat": 35.151320539,
              "lng": 128.10881744,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            },
            {
              "id": "a3_2_b11",
              "name": "113동",
              "lat": 35.151185132,
              "lng": 128.109366035,
              "households": 69,
              "broadcast": 38,
              "internet": 46
            }
          ]
        },
        {
          "id": "a3_3",
          "name": "신진주역세권 파밀리에피아체(27BL)",
          "lat": 35.152843,
          "lng": 128.112686,
          "households": 51,
          "broadcast": 32,
          "internet": 41,
          "address": "경상남도 진주시 진주역로 73번길 38",
          "year": "2024",
          "buildings": [
            {
              "id": "b3_3_1",
              "name": "101동",
              "lat": 35.152567341,
              "lng": 128.112050481,
              "households": 6,
              "broadcast": 3,
              "internet": 4
            },
            {
              "id": "b3_3_2",
              "name": "102동",
              "lat": 35.152818515,
              "lng": 128.112355413,
              "households": 5,
              "broadcast": 3,
              "internet": 3
            },
            {
              "id": "b3_3_3",
              "name": "103동",
              "lat": 35.15309802,
              "lng": 128.112730286,
              "households": 5,
              "broadcast": 3,
              "internet": 3
            },
            {
              "id": "b3_3_4",
              "name": "104동",
              "lat": 35.153344586,
              "lng": 128.113032166,
              "households": 5,
              "broadcast": 3,
              "internet": 3
            },
            {
              "id": "b3_3_5",
              "name": "105동",
              "lat": 35.152725827,
              "lng": 128.11252577,
              "households": 5,
              "broadcast": 3,
              "internet": 4
            },
            {
              "id": "b3_3_6",
              "name": "106동",
              "lat": 35.152937742,
              "lng": 128.112853424,
              "households": 5,
              "broadcast": 3,
              "internet": 3
            },
            {
              "id": "b3_3_7",
              "name": "107동",
              "lat": 35.152452344,
              "lng": 128.112322615,
              "households": 5,
              "broadcast": 3,
              "internet": 3
            },
            {
              "id": "b3_3_8",
              "name": "108동",
              "lat": 35.152548346,
              "lng": 128.112755693,
              "households": 5,
              "broadcast": 2,
              "internet": 4
            },
            {
              "id": "b3_3_9",
              "name": "109동",
              "lat": 35.152793816,
              "lng": 128.113056638,
              "households": 5,
              "broadcast": 3,
              "internet": 3
            },
            {
              "id": "b3_3_10",
              "name": "110동",
              "lat": 35.153142066,
              "lng": 128.113180994,
              "households": 5,
              "broadcast": 3,
              "internet": 3
            }
          ]
        },
        {
          "id": "a3_4",
          "name": "신진주역세권 파밀리에피아체(28BL)",
          "lat": 35.153923,
          "lng": 128.113979,
          "households": 53,
          "broadcast": 35,
          "internet": 42,
          "address": "경상남도 진주시 진주역로 73번길 40",
          "year": "2024",
          "buildings": [
            {
              "id": "b3_4_1",
              "name": "201동",
              "lat": 35.153809548,
              "lng": 128.113495265,
              "households": 7,
              "broadcast": 4,
              "internet": 5
            },
            {
              "id": "b3_4_2",
              "name": "202동",
              "lat": 35.154223321,
              "lng": 128.113823502,
              "households": 7,
              "broadcast": 4,
              "internet": 5
            },
            {
              "id": "b3_4_3",
              "name": "203동",
              "lat": 35.153568599,
              "lng": 128.113761066,
              "households": 7,
              "broadcast": 3,
              "internet": 4
            },
            {
              "id": "b3_4_4",
              "name": "204동",
              "lat": 35.153773463,
              "lng": 128.113849871,
              "households": 7,
              "broadcast": 4,
              "internet": 5
            },
            {
              "id": "b3_4_5",
              "name": "205동",
              "lat": 35.154113242,
              "lng": 128.114087944,
              "households": 7,
              "broadcast": 4,
              "internet": 5
            },
            {
              "id": "b3_4_6",
              "name": "206동",
              "lat": 35.154276849,
              "lng": 128.114287254,
              "households": 6,
              "broadcast": 3,
              "internet": 4
            },
            {
              "id": "b3_4_7",
              "name": "207동",
              "lat": 35.153680342,
              "lng": 128.114185122,
              "households": 6,
              "broadcast": 4,
              "internet": 4
            },
            {
              "id": "b3_4_8",
              "name": "208동",
              "lat": 35.153937421,
              "lng": 128.114339358,
              "households": 6,
              "broadcast": 4,
              "internet": 3
            }
          ]
        },
        {
          "id": "a3_5",
          "name": "신진주 라비에 데시앙",
          "lat": 35.153064,
          "lng": 128.122424,
          "households": 810,
          "broadcast": 591,
          "internet": 672,
          "address": "경상남도 진주시 개양로 145",
          "year": "2024",
          "buildings": [
            {
              "id": "a3_5_b0",
              "name": "101동",
              "lat": 35.153006623,
              "lng": 128.121020479,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "a3_5_b1",
              "name": "102동",
              "lat": 35.15259063,
              "lng": 128.121900626,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "a3_5_b2",
              "name": "103동",
              "lat": 35.152348785,
              "lng": 128.122851264,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "a3_5_b3",
              "name": "104동",
              "lat": 35.152729044,
              "lng": 128.123142376,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "a3_5_b4",
              "name": "105동",
              "lat": 35.153139902,
              "lng": 128.122939889,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "a3_5_b5",
              "name": "107동",
              "lat": 35.153025991,
              "lng": 128.122358476,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "a3_5_b6",
              "name": "108동",
              "lat": 35.15348539,
              "lng": 128.122170555,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "a3_5_b7",
              "name": "109동",
              "lat": 35.153261668,
              "lng": 128.123496904,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "a3_5_b8",
              "name": "110동",
              "lat": 35.153470977,
              "lng": 128.121483765,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            },
            {
              "id": "a3_5_b9",
              "name": "111동",
              "lat": 35.153582706,
              "lng": 128.122873589,
              "households": 81,
              "broadcast": 59,
              "internet": 67
            }
          ]
        },
        {
          "id": "a3_6",
          "name": "프리미어웰가",
          "lat": 35.155375,
          "lng": 128.113651,
          "households": 702,
          "broadcast": 435,
          "internet": 477,
          "address": "경상남도 진주시 개양로 67",
          "year": "2021",
          "buildings": [
            {
              "id": "b3_6_1",
              "name": "1동",
              "lat": 35.155354786992106,
              "lng": 128.11351410461975,
              "households": 78,
              "broadcast": 48,
              "internet": 64
            },
            {
              "id": "b3_6_2",
              "name": "2동",
              "lat": 35.1555241493994,
              "lng": 128.1130286854227,
              "households": 78,
              "broadcast": 58,
              "internet": 52
            },
            {
              "id": "b3_6_3",
              "name": "3동",
              "lat": 35.15569309455038,
              "lng": 128.11254337087192,
              "households": 78,
              "broadcast": 54,
              "internet": 57
            },
            {
              "id": "b3_6_4",
              "name": "4동",
              "lat": 35.15587001399872,
              "lng": 128.11211593130537,
              "households": 78,
              "broadcast": 46,
              "internet": 63
            },
            {
              "id": "b3_6_5",
              "name": "5동",
              "lat": 35.15634370357443,
              "lng": 128.11262838651786,
              "households": 78,
              "broadcast": 46,
              "internet": 63
            },
            {
              "id": "b3_6_6",
              "name": "6동",
              "lat": 35.15620724737944,
              "lng": 128.11314024415304,
              "households": 78,
              "broadcast": 53,
              "internet": 63
            },
            {
              "id": "b3_6_7",
              "name": "7동",
              "lat": 35.156041627122285,
              "lng": 128.11361843788197,
              "households": 78,
              "broadcast": 44,
              "internet": 54
            },
            {
              "id": "b3_6_8",
              "name": "8동",
              "lat": 35.15594937941581,
              "lng": 128.1142045811787,
              "households": 78,
              "broadcast": 57,
              "internet": 51
            },
            {
              "id": "b3_6_9",
              "name": "9동",
              "lat": 35.155075,
              "lng": 128.114318,
              "households": 78,
              "broadcast": 50,
              "internet": 50
            }
          ]
        },
        {
          "id": "a3_7",
          "name": "시티프라디움 2차",
          "lat": 35.151196,
          "lng": 128.116019,
          "households": 407,
          "broadcast": 227,
          "internet": 325,
          "address": "경상남도 진주시 진주역로 114(가좌동, 시티프라디움)",
          "year": "2020",
          "buildings": [
            {
              "id": "b3_7_1",
              "name": "201동",
              "lat": 35.151683387,
              "lng": 128.115801191,
              "households": 136,
              "broadcast": 95,
              "internet": 99
            },
            {
              "id": "b3_7_2",
              "name": "202동",
              "lat": 35.151209279,
              "lng": 128.116219514,
              "households": 136,
              "broadcast": 81,
              "internet": 100
            },
            {
              "id": "b3_7_3",
              "name": "203동",
              "lat": 35.150694555,
              "lng": 128.116036501,
              "households": 135,
              "broadcast": 79,
              "internet": 93
            }
          ]
        },
        {
          "id": "a3_8",
          "name": "포레나 신진주",
          "lat": 35.150934,
          "lng": 128.114931,
          "households": 424,
          "broadcast": 292,
          "internet": 279,
          "address": "경상남도 진주시 진주역로 96번길 15(가좌동, 포레나 신진주)",
          "year": "2019",
          "buildings": [
            {
              "id": "b3_8_1",
              "name": "101동",
              "lat": 35.151084383,
              "lng": 128.114934624,
              "households": 85,
              "broadcast": 50,
              "internet": 69
            },
            {
              "id": "b3_8_2",
              "name": "102동",
              "lat": 35.150694115,
              "lng": 128.115170007,
              "households": 85,
              "broadcast": 48,
              "internet": 67
            },
            {
              "id": "b3_8_3",
              "name": "103동",
              "lat": 35.15030299,
              "lng": 128.115407408,
              "households": 85,
              "broadcast": 58,
              "internet": 59
            },
            {
              "id": "b3_8_4",
              "name": "108동",
              "lat": 35.151222261,
              "lng": 128.114398863,
              "households": 85,
              "broadcast": 58,
              "internet": 70
            },
            {
              "id": "b3_8_5",
              "name": "109동",
              "lat": 35.151366966,
              "lng": 128.114744082,
              "households": 84,
              "broadcast": 49,
              "internet": 55
            }
          ]
        },
        {
          "id": "a3_9",
          "name": "스카이시티프라디움",
          "lat": 35.154372,
          "lng": 128.116725,
          "households": 869,
          "broadcast": 582,
          "internet": 695,
          "address": "경상남도 진주시 개양로 100(가좌동, SKY시티프라디움)",
          "year": "2019",
          "buildings": [
            {
              "id": "b3_9_1",
              "name": "101동",
              "lat": 35.154152461,
              "lng": 128.115964206,
              "households": 125,
              "broadcast": 68,
              "internet": 83
            },
            {
              "id": "b3_9_2",
              "name": "102동",
              "lat": 35.154613428,
              "lng": 128.116260087,
              "households": 124,
              "broadcast": 69,
              "internet": 93
            },
            {
              "id": "b3_9_3",
              "name": "103동",
              "lat": 35.15506032,
              "lng": 128.116563215,
              "households": 124,
              "broadcast": 68,
              "internet": 84
            },
            {
              "id": "b3_9_4",
              "name": "104동",
              "lat": 35.154784006,
              "lng": 128.117308743,
              "households": 124,
              "broadcast": 75,
              "internet": 85
            },
            {
              "id": "b3_9_5",
              "name": "105동",
              "lat": 35.154394752,
              "lng": 128.117174217,
              "households": 124,
              "broadcast": 89,
              "internet": 94
            },
            {
              "id": "b3_9_6",
              "name": "106동",
              "lat": 35.154003988,
              "lng": 128.117003871,
              "households": 124,
              "broadcast": 88,
              "internet": 95
            },
            {
              "id": "b3_9_7",
              "name": "107동",
              "lat": 35.153596758,
              "lng": 128.116801595,
              "households": 124,
              "broadcast": 90,
              "internet": 81
            }
          ]
        },
        {
          "id": "a3_10",
          "name": "센트럴웰가",
          "lat": 35.153902,
          "lng": 128.111912,
          "households": 1152,
          "broadcast": 817,
          "internet": 979,
          "address": "경상남도 진주시 진주역로73번길 33 (가좌동, 센트럴웰가)",
          "year": "2019",
          "buildings": [
            {
              "id": "b3_10_1",
              "name": "101동",
              "lat": 35.1526936,
              "lng": 128.111431463,
              "households": 116,
              "broadcast": 67,
              "internet": 96
            },
            {
              "id": "b3_10_2",
              "name": "102동",
              "lat": 35.153210953,
              "lng": 128.111867753,
              "households": 116,
              "broadcast": 87,
              "internet": 76
            },
            {
              "id": "b3_10_3",
              "name": "103동",
              "lat": 35.153704201,
              "lng": 128.112424493,
              "households": 115,
              "broadcast": 81,
              "internet": 88
            },
            {
              "id": "b3_10_4",
              "name": "104동",
              "lat": 35.154113282,
              "lng": 128.112715774,
              "households": 115,
              "broadcast": 75,
              "internet": 81
            },
            {
              "id": "b3_10_5",
              "name": "105동",
              "lat": 35.154648729,
              "lng": 128.113183561,
              "households": 115,
              "broadcast": 69,
              "internet": 95
            },
            {
              "id": "b3_10_6",
              "name": "106동",
              "lat": 35.15499311,
              "lng": 128.112128525,
              "households": 115,
              "broadcast": 85,
              "internet": 86
            },
            {
              "id": "b3_10_7",
              "name": "107동",
              "lat": 35.154661835,
              "lng": 128.111936349,
              "households": 115,
              "broadcast": 72,
              "internet": 88
            },
            {
              "id": "b3_10_8",
              "name": "108동",
              "lat": 35.154166443,
              "lng": 128.111547002,
              "households": 115,
              "broadcast": 81,
              "internet": 89
            },
            {
              "id": "b3_10_9",
              "name": "109동",
              "lat": 35.153631936,
              "lng": 128.111216765,
              "households": 115,
              "broadcast": 73,
              "internet": 86
            },
            {
              "id": "b3_10_10",
              "name": "110동",
              "lat": 35.153199712,
              "lng": 128.110669008,
              "households": 115,
              "broadcast": 66,
              "internet": 93
            }
          ]
        },
        {
          "id": "a3_11",
          "name": "가호 에일린의 뜰",
          "lat": 35.165387,
          "lng": 128.109068,
          "households": 369,
          "broadcast": 232,
          "internet": 265,
          "address": "경상남도 진주시 강변길 31(가좌동, 가호에일린의뜰아파트)",
          "year": "2012",
          "buildings": [
            {
              "id": "b3_11_1",
              "name": "101동",
              "lat": 35.165251823,
              "lng": 128.109928421,
              "households": 74,
              "broadcast": 50,
              "internet": 51
            },
            {
              "id": "b3_11_2",
              "name": "102동",
              "lat": 35.16549482,
              "lng": 128.109334375,
              "households": 74,
              "broadcast": 42,
              "internet": 51
            },
            {
              "id": "b3_11_3",
              "name": "103동",
              "lat": 35.165742907,
              "lng": 128.108550048,
              "households": 74,
              "broadcast": 44,
              "internet": 51
            },
            {
              "id": "b3_11_4",
              "name": "104동",
              "lat": 35.165069445,
              "lng": 128.10911735,
              "households": 74,
              "broadcast": 52,
              "internet": 57
            },
            {
              "id": "b3_11_5",
              "name": "105동",
              "lat": 35.165377648,
              "lng": 128.108411508,
              "households": 73,
              "broadcast": 40,
              "internet": 52
            }
          ]
        },
        {
          "id": "a3_12",
          "name": "제일풍경채아파트",
          "lat": 35.153624,
          "lng": 128.108926,
          "households": 218,
          "broadcast": 135,
          "internet": 154,
          "address": "경상남도 진주시 가좌안골길21번길 5 (가좌동, 가좌제일풍경채)",
          "year": "2007",
          "buildings": [
            {
              "id": "b3_12_1",
              "name": "1동",
              "lat": 35.15399487745519,
              "lng": 128.10765893177182,
              "households": 55,
              "broadcast": 33,
              "internet": 46
            },
            {
              "id": "b3_12_2",
              "name": "2동",
              "lat": 35.15367440065852,
              "lng": 128.10831290353644,
              "households": 55,
              "broadcast": 30,
              "internet": 44
            },
            {
              "id": "b3_12_3",
              "name": "3동",
              "lat": 35.154432939797545,
              "lng": 128.10800938750353,
              "households": 54,
              "broadcast": 30,
              "internet": 39
            },
            {
              "id": "b3_12_4",
              "name": "4동",
              "lat": 35.154136124203916,
              "lng": 128.1086171156504,
              "households": 54,
              "broadcast": 33,
              "internet": 38
            }
          ]
        },
        {
          "id": "a3_13",
          "name": "가좌대화리네르빌",
          "lat": 35.164968,
          "lng": 128.106963,
          "households": 137,
          "broadcast": 80,
          "internet": 105,
          "address": "경상남도 진주시 진주대로 652-15 (가좌동, 가좌대화리네르빌)",
          "year": "2007",
          "buildings": [
            {
              "id": "b3_13_1",
              "name": "101동",
              "lat": 35.16470475724789,
              "lng": 128.10701338379658,
              "households": 46,
              "broadcast": 30,
              "internet": 34
            },
            {
              "id": "b3_13_2",
              "name": "102동",
              "lat": 35.16508725018192,
              "lng": 128.10669482391023,
              "households": 46,
              "broadcast": 31,
              "internet": 35
            },
            {
              "id": "b3_13_3",
              "name": "103동",
              "lat": 35.16509997316502,
              "lng": 128.10720415460403,
              "households": 45,
              "broadcast": 28,
              "internet": 32
            }
          ]
        },
        {
          "id": "a3_14",
          "name": "가좌주공그린빌아파트",
          "lat": 35.149229,
          "lng": 128.100289,
          "households": 1372,
          "broadcast": 823,
          "internet": 1056,
          "address": "경상남도 진주시 내동로348번길 10 (가좌동, 가좌그린아파트)",
          "year": "2005",
          "buildings": [
            {
              "id": "b3_14_1",
              "name": "1동",
              "lat": 35.14975231279347,
              "lng": 128.10190495779062,
              "households": 86,
              "broadcast": 58,
              "internet": 68
            },
            {
              "id": "b3_14_2",
              "name": "2동",
              "lat": 35.14917731895388,
              "lng": 128.1018971556409,
              "households": 86,
              "broadcast": 53,
              "internet": 64
            },
            {
              "id": "b3_14_3",
              "name": "3동",
              "lat": 35.14978008886912,
              "lng": 128.101333645744,
              "households": 86,
              "broadcast": 53,
              "internet": 64
            },
            {
              "id": "b3_14_4",
              "name": "4동",
              "lat": 35.14929137380619,
              "lng": 128.10124187889267,
              "households": 86,
              "broadcast": 55,
              "internet": 60
            },
            {
              "id": "b3_14_5",
              "name": "5동",
              "lat": 35.14938835734605,
              "lng": 128.10066160725913,
              "households": 86,
              "broadcast": 47,
              "internet": 71
            },
            {
              "id": "b3_14_6",
              "name": "6동",
              "lat": 35.14891154922885,
              "lng": 128.1007589106304,
              "households": 86,
              "broadcast": 60,
              "internet": 60
            },
            {
              "id": "b3_14_7",
              "name": "7동",
              "lat": 35.14890080556595,
              "lng": 128.10011072910189,
              "households": 86,
              "broadcast": 49,
              "internet": 67
            },
            {
              "id": "b3_14_8",
              "name": "8동",
              "lat": 35.148410213430424,
              "lng": 128.10026956425526,
              "households": 86,
              "broadcast": 48,
              "internet": 69
            },
            {
              "id": "b3_14_9",
              "name": "9동",
              "lat": 35.14831192225249,
              "lng": 128.10089225443204,
              "households": 86,
              "broadcast": 55,
              "internet": 64
            },
            {
              "id": "b3_14_10",
              "name": "10동",
              "lat": 35.147792680996446,
              "lng": 128.10086673780236,
              "households": 86,
              "broadcast": 64,
              "internet": 60
            },
            {
              "id": "b3_14_11",
              "name": "11동",
              "lat": 35.147289284931055,
              "lng": 128.100944403634,
              "households": 86,
              "broadcast": 49,
              "internet": 66
            },
            {
              "id": "b3_14_12",
              "name": "12동",
              "lat": 35.147710198866726,
              "lng": 128.1015172600854,
              "households": 86,
              "broadcast": 58,
              "internet": 69
            },
            {
              "id": "b3_14_13",
              "name": "13동",
              "lat": 35.14822265151252,
              "lng": 128.10154504179187,
              "households": 85,
              "broadcast": 62,
              "internet": 72
            },
            {
              "id": "b3_14_14",
              "name": "14동",
              "lat": 35.14811438418977,
              "lng": 128.10211409334903,
              "households": 85,
              "broadcast": 59,
              "internet": 60
            },
            {
              "id": "b3_14_15",
              "name": "15동",
              "lat": 35.14861398693539,
              "lng": 128.10203888610002,
              "households": 85,
              "broadcast": 58,
              "internet": 71
            },
            {
              "id": "b3_14_16",
              "name": "16동",
              "lat": 35.14856751116731,
              "lng": 128.10265361957727,
              "households": 85,
              "broadcast": 58,
              "internet": 60
            }
          ]
        },
        {
          "id": "a3_15",
          "name": "가좌주공3차아파트",
          "lat": 35.157003,
          "lng": 128.109818,
          "households": 758,
          "broadcast": 500,
          "internet": 568,
          "address": "경상남도 진주시 진주대로568번길 12 (가좌동, 주공3차아파트)",
          "year": "2005",
          "buildings": [
            {
              "id": "b3_15_1",
              "name": "301동",
              "lat": 35.157739302,
              "lng": 128.109597805,
              "households": 85,
              "broadcast": 61,
              "internet": 62
            },
            {
              "id": "b3_15_2",
              "name": "302동",
              "lat": 35.15769866,
              "lng": 128.110186448,
              "households": 85,
              "broadcast": 51,
              "internet": 64
            },
            {
              "id": "b3_15_3",
              "name": "303동",
              "lat": 35.157550171,
              "lng": 128.110610279,
              "households": 84,
              "broadcast": 53,
              "internet": 70
            },
            {
              "id": "b3_15_4",
              "name": "304동",
              "lat": 35.157132527,
              "lng": 128.110076444,
              "households": 84,
              "broadcast": 59,
              "internet": 60
            },
            {
              "id": "b3_15_5",
              "name": "305동",
              "lat": 35.156635221,
              "lng": 128.110197737,
              "households": 84,
              "broadcast": 55,
              "internet": 58
            },
            {
              "id": "b3_15_6",
              "name": "306동",
              "lat": 35.156228714,
              "lng": 128.109948805,
              "households": 84,
              "broadcast": 50,
              "internet": 67
            },
            {
              "id": "b3_15_7",
              "name": "307동",
              "lat": 35.156215016,
              "lng": 128.109249919,
              "households": 84,
              "broadcast": 49,
              "internet": 69
            },
            {
              "id": "b3_15_8",
              "name": "308동",
              "lat": 35.156679885,
              "lng": 128.109265124,
              "households": 84,
              "broadcast": 50,
              "internet": 60
            },
            {
              "id": "b3_15_9",
              "name": "309동",
              "lat": 35.157146192,
              "lng": 128.109229174,
              "households": 84,
              "broadcast": 55,
              "internet": 59
            }
          ]
        },
        {
          "id": "a3_16",
          "name": "가좌주공2차아파트",
          "lat": 35.161209,
          "lng": 128.10916,
          "households": 1530,
          "broadcast": 1086,
          "internet": 1132,
          "address": "경상남도 진주시 가호로 26 (가좌동, 가좌주공2차)",
          "year": "1993",
          "buildings": [
            {
              "id": "b3_16_1",
              "name": "1동",
              "lat": 35.161209,
              "lng": 128.10836,
              "households": 118,
              "broadcast": 80,
              "internet": 83
            },
            {
              "id": "b3_16_2",
              "name": "2동",
              "lat": 35.162152601003555,
              "lng": 128.10984199991861,
              "households": 118,
              "broadcast": 71,
              "internet": 76
            },
            {
              "id": "b3_16_3",
              "name": "3동",
              "lat": 35.162152601003555,
              "lng": 128.10984199991861,
              "households": 118,
              "broadcast": 82,
              "internet": 96
            },
            {
              "id": "b3_16_4",
              "name": "4동",
              "lat": 35.161209,
              "lng": 128.10876,
              "households": 118,
              "broadcast": 81,
              "internet": 77
            },
            {
              "id": "b3_16_5",
              "name": "5동",
              "lat": 35.162152601003555,
              "lng": 128.10984199991861,
              "households": 118,
              "broadcast": 81,
              "internet": 81
            },
            {
              "id": "b3_16_6",
              "name": "6동",
              "lat": 35.160909,
              "lng": 128.10916,
              "households": 118,
              "broadcast": 71,
              "internet": 100
            },
            {
              "id": "b3_16_7",
              "name": "7동",
              "lat": 35.161209,
              "lng": 128.10916,
              "households": 118,
              "broadcast": 73,
              "internet": 99
            },
            {
              "id": "b3_16_8",
              "name": "8동",
              "lat": 35.161509,
              "lng": 128.10916,
              "households": 118,
              "broadcast": 67,
              "internet": 97
            },
            {
              "id": "b3_16_9",
              "name": "9동",
              "lat": 35.162152601003555,
              "lng": 128.10984199991861,
              "households": 118,
              "broadcast": 80,
              "internet": 79
            },
            {
              "id": "b3_16_10",
              "name": "10동",
              "lat": 35.162152601003555,
              "lng": 128.10984199991861,
              "households": 117,
              "broadcast": 87,
              "internet": 92
            },
            {
              "id": "b3_16_11",
              "name": "11동",
              "lat": 35.161509,
              "lng": 128.10956,
              "households": 117,
              "broadcast": 77,
              "internet": 83
            },
            {
              "id": "b3_16_12",
              "name": "12동",
              "lat": 35.160909,
              "lng": 128.10996,
              "households": 117,
              "broadcast": 83,
              "internet": 90
            },
            {
              "id": "b3_16_13",
              "name": "13동",
              "lat": 35.162152601003555,
              "lng": 128.10984199991861,
              "households": 117,
              "broadcast": 72,
              "internet": 76
            }
          ]
        },
        {
          "id": "a3_17",
          "name": "가좌주공1차아파트",
          "lat": 35.161209,
          "lng": 128.109293,
          "households": 627,
          "broadcast": 438,
          "internet": 457,
          "address": "경상남도 진주시 가호로 26 (가좌동, 가좌주공1차)",
          "year": "1993",
          "buildings": [
            {
              "id": "b3_17_1",
              "name": "1동",
              "lat": 35.161209,
              "lng": 128.10916,
              "households": 209,
              "broadcast": 137,
              "internet": 169
            },
            {
              "id": "b3_17_2",
              "name": "2동",
              "lat": 35.161509,
              "lng": 128.10916,
              "households": 209,
              "broadcast": 114,
              "internet": 158
            },
            {
              "id": "b3_17_3",
              "name": "3동",
              "lat": 35.160909,
              "lng": 128.10956,
              "households": 209,
              "broadcast": 121,
              "internet": 158
            }
          ]
        },
        {
          "id": "a3_18",
          "name": "하이로드빌라",
          "lat": 35.15804,
          "lng": 128.108028,
          "households": 56,
          "broadcast": 38,
          "internet": 36,
          "address": "경상남도 진주시 진주대로 580 (가좌동, 하이로드빌라)",
          "year": "1993",
          "buildings": [
            {
              "id": "b3_18_1",
              "name": "1동",
              "lat": 35.15816427180624,
              "lng": 128.1084859874477,
              "households": 8,
              "broadcast": 5,
              "internet": 6
            },
            {
              "id": "b3_18_2",
              "name": "2동",
              "lat": 35.15813092360576,
              "lng": 128.10871136124624,
              "households": 8,
              "broadcast": 4,
              "internet": 5
            },
            {
              "id": "b3_18_3",
              "name": "3동",
              "lat": 35.15807954054595,
              "lng": 128.10896623124043,
              "households": 8,
              "broadcast": 4,
              "internet": 6
            },
            {
              "id": "b3_18_4",
              "name": "4동",
              "lat": 35.15804,
              "lng": 128.108028,
              "households": 8,
              "broadcast": 5,
              "internet": 5
            },
            {
              "id": "b3_18_5",
              "name": "5동",
              "lat": 35.158019656213,
              "lng": 128.10918477395512,
              "households": 8,
              "broadcast": 5,
              "internet": 5
            },
            {
              "id": "b3_18_6",
              "name": "6동",
              "lat": 35.15791862012436,
              "lng": 128.1084853966496,
              "households": 8,
              "broadcast": 4,
              "internet": 5
            },
            {
              "id": "b3_18_7",
              "name": "7동",
              "lat": 35.157884694808,
              "lng": 128.10871041741748,
              "households": 8,
              "broadcast": 5,
              "internet": 5
            }
          ]
        },
        {
          "id": "ao_퍼스트웰가",
          "name": "더퍼스트웰가시티",
          "lat": 35.15191,
          "lng": 128.11644,
          "households": 492,
          "broadcast": 221,
          "internet": 324,
          "address": "경상남도 진주시 가좌동 (오피스텔)",
          "year": "",
          "type": "officetel",
          "buildings": [
            {
              "id": "b_ao_퍼스트웰가_1",
              "name": "1동",
              "lat": 35.15191,
              "lng": 128.11644,
              "households": 492,
              "broadcast": 221,
              "internet": 324
            }
          ]
        },
        {
          "id": "ao_줌테라스",
          "name": "신진주역세권 줌테라스",
          "lat": 35.1544,
          "lng": 128.1182,
          "households": 416,
          "broadcast": 216,
          "internet": 287,
          "address": "경상남도 진주시 가좌동 (오피스텔)",
          "year": "",
          "type": "officetel",
          "buildings": [
            {
              "id": "b_ao_줌테라스_1",
              "name": "1동",
              "lat": 35.1544,
              "lng": 128.1182,
              "households": 416,
              "broadcast": 216,
              "internet": 287
            }
          ]
        },
        {
          "id": "ao_줌시티",
          "name": "신진주역세권 줌시티",
          "lat": 35.1541,
          "lng": 128.1192,
          "households": 448,
          "broadcast": 259,
          "internet": 313,
          "address": "경상남도 진주시 가좌동 (오피스텔)",
          "year": "",
          "type": "officetel",
          "buildings": [
            {
              "id": "b_줌시티_1",
              "name": "1동",
              "lat": 35.1541,
              "lng": 128.1192,
              "households": 448,
              "broadcast": 259,
              "internet": 313
            }
          ]
        },
        {
          "id": "a24_1",
          "name": "진주금산 진흥 더 루벤스",
          "lat": 35.213251,
          "lng": 128.140194,
          "households": 404,
          "broadcast": 246,
          "internet": 274,
          "address": "경상남도 진주시 금산면 금산로 22(중천리, 진주금산진흥더루벤스)",
          "year": "2009",
          "buildings": [
            {
              "id": "b24_1_1",
              "name": "101동",
              "lat": 35.213612608,
              "lng": 128.139241028,
              "households": 58,
              "broadcast": 40,
              "internet": 44
            },
            {
              "id": "b24_1_2",
              "name": "102동",
              "lat": 35.213143491,
              "lng": 128.139291498,
              "households": 58,
              "broadcast": 37,
              "internet": 40
            },
            {
              "id": "b24_1_3",
              "name": "103동",
              "lat": 35.213126008,
              "lng": 128.139786772,
              "households": 58,
              "broadcast": 43,
              "internet": 43
            },
            {
              "id": "b24_1_4",
              "name": "104동",
              "lat": 35.213042402,
              "lng": 128.140470318,
              "households": 58,
              "broadcast": 42,
              "internet": 40
            },
            {
              "id": "b24_1_5",
              "name": "105동",
              "lat": 35.213058594,
              "lng": 128.141030965,
              "households": 58,
              "broadcast": 34,
              "internet": 43
            },
            {
              "id": "b24_1_6",
              "name": "106동",
              "lat": 35.213250503,
              "lng": 128.141622116,
              "households": 57,
              "broadcast": 34,
              "internet": 39
            },
            {
              "id": "b24_1_7",
              "name": "107동",
              "lat": 35.213525627,
              "lng": 128.1399162,
              "households": 57,
              "broadcast": 37,
              "internet": 43
            }
          ]
        },
        {
          "id": "a24_2",
          "name": "금산금호아파트",
          "lat": 35.212744,
          "lng": 128.14943,
          "households": 60,
          "broadcast": 39,
          "internet": 40,
          "address": "경상남도 진주시 금산면 금산로 130 (중천리, 금호맨션)",
          "year": "1990",
          "buildings": [
            {
              "id": "b24_2_1",
              "name": "1동",
              "lat": 35.212744132,
              "lng": 128.149430117,
              "households": 60,
              "broadcast": 44,
              "internet": 50
            }
          ]
        }
      ]
    },
    {
      "id": "d_new_초장동",
      "name": "초장동",
      "lat": 35.2064174,
      "lng": 128.1110732,
      "households": 9467,
      "broadcast": 5304,
      "internet": 6569,
      "singleHouseholds": 1267,
      "apartments": [
        {
          "id": "a4_1",
          "name": "더샵 진주피에르테",
          "lat": 35.210879,
          "lng": 128.107922,
          "households": 798,
          "broadcast": 438,
          "internet": 542,
          "address": "경상남도 진주시 초장로 123",
          "year": "2024",
          "buildings": [
            {
              "id": "b4_1_1",
              "name": "1동",
              "lat": 35.210879,
              "lng": 128.107522,
              "households": 114,
              "broadcast": 77,
              "internet": 74
            },
            {
              "id": "b4_1_2",
              "name": "2동",
              "lat": 35.211179,
              "lng": 128.107522,
              "households": 114,
              "broadcast": 69,
              "internet": 94
            },
            {
              "id": "b4_1_3",
              "name": "3동",
              "lat": 35.210579,
              "lng": 128.107922,
              "households": 114,
              "broadcast": 63,
              "internet": 86
            },
            {
              "id": "b4_1_4",
              "name": "4동",
              "lat": 35.210879,
              "lng": 128.107922,
              "households": 114,
              "broadcast": 85,
              "internet": 78
            },
            {
              "id": "b4_1_5",
              "name": "5동",
              "lat": 35.211179,
              "lng": 128.107922,
              "households": 114,
              "broadcast": 83,
              "internet": 82
            },
            {
              "id": "b4_1_6",
              "name": "6동",
              "lat": 35.210579,
              "lng": 128.108322,
              "households": 114,
              "broadcast": 72,
              "internet": 75
            },
            {
              "id": "b4_1_7",
              "name": "7동",
              "lat": 35.210879,
              "lng": 128.108322,
              "households": 114,
              "broadcast": 79,
              "internet": 74
            }
          ]
        },
        {
          "id": "a4_2",
          "name": "힐스테이트 초전",
          "lat": 35.213468,
          "lng": 128.105405,
          "households": 1071,
          "broadcast": 599,
          "internet": 695,
          "address": "경상남도 진주시 초북로 95(초전동, 초전 힐스테이트)",
          "year": "2019",
          "buildings": [
            {
              "id": "a4_2_b0",
              "name": "101동",
              "lat": 35.212842902,
              "lng": 128.106246004,
              "households": 119,
              "broadcast": 67,
              "internet": 77
            },
            {
              "id": "a4_2_b1",
              "name": "102동",
              "lat": 35.213442505,
              "lng": 128.106084186,
              "households": 119,
              "broadcast": 67,
              "internet": 77
            },
            {
              "id": "a4_2_b2",
              "name": "103동",
              "lat": 35.21405757,
              "lng": 128.10581287,
              "households": 119,
              "broadcast": 67,
              "internet": 77
            },
            {
              "id": "a4_2_b3",
              "name": "104동",
              "lat": 35.214652728,
              "lng": 128.105915863,
              "households": 119,
              "broadcast": 67,
              "internet": 77
            },
            {
              "id": "a4_2_b4",
              "name": "105동",
              "lat": 35.214410852,
              "lng": 128.104828126,
              "households": 119,
              "broadcast": 67,
              "internet": 77
            },
            {
              "id": "a4_2_b5",
              "name": "106동",
              "lat": 35.213816411,
              "lng": 128.104624629,
              "households": 119,
              "broadcast": 67,
              "internet": 77
            },
            {
              "id": "a4_2_b6",
              "name": "107동",
              "lat": 35.213248448,
              "lng": 128.104868941,
              "households": 119,
              "broadcast": 67,
              "internet": 77
            },
            {
              "id": "a4_2_b7",
              "name": "108동",
              "lat": 35.21268962,
              "lng": 128.105075006,
              "households": 119,
              "broadcast": 67,
              "internet": 77
            },
            {
              "id": "a4_2_b8",
              "name": "109동",
              "lat": 35.212047549,
              "lng": 128.105189744,
              "households": 119,
              "broadcast": 67,
              "internet": 77
            }
          ]
        },
        {
          "id": "a4_3",
          "name": "이지더원 아파트",
          "lat": 35.210372,
          "lng": 128.109917,
          "households": 546,
          "broadcast": 336,
          "internet": 434,
          "address": "경상남도 진주시 초장로 120(초전동, 이지더원)",
          "year": "2018",
          "buildings": [
            {
              "id": "a4_3_b0",
              "name": "501동",
              "lat": 35.21067607,
              "lng": 128.109177633,
              "households": 78,
              "broadcast": 48,
              "internet": 62
            },
            {
              "id": "a4_3_b1",
              "name": "502동",
              "lat": 35.210815161,
              "lng": 128.109875602,
              "households": 78,
              "broadcast": 48,
              "internet": 62
            },
            {
              "id": "a4_3_b2",
              "name": "503동",
              "lat": 35.210973138,
              "lng": 128.110592531,
              "households": 78,
              "broadcast": 48,
              "internet": 62
            },
            {
              "id": "a4_3_b3",
              "name": "504동",
              "lat": 35.210296344,
              "lng": 128.110803571,
              "households": 78,
              "broadcast": 48,
              "internet": 62
            },
            {
              "id": "a4_3_b4",
              "name": "505동",
              "lat": 35.210142206,
              "lng": 128.110108888,
              "households": 78,
              "broadcast": 48,
              "internet": 62
            },
            {
              "id": "a4_3_b5",
              "name": "506동",
              "lat": 35.210000071,
              "lng": 128.109458429,
              "households": 78,
              "broadcast": 48,
              "internet": 62
            },
            {
              "id": "a4_3_b6",
              "name": "510동",
              "lat": 35.209698133,
              "lng": 128.109404002,
              "households": 78,
              "broadcast": 48,
              "internet": 62
            }
          ]
        },
        {
          "id": "a4_4",
          "name": "초전 해모로 루비채 2단지",
          "lat": 35.215024,
          "lng": 128.109103,
          "households": 564,
          "broadcast": 389,
          "internet": 383,
          "address": "경상남도 진주시 초북로 88(초전동, 초전해모로루비채2단지)",
          "year": "2014",
          "buildings": [
            {
              "id": "b4_4_1",
              "name": "1동",
              "lat": 35.21433004511187,
              "lng": 128.1080290901865,
              "households": 71,
              "broadcast": 39,
              "internet": 50
            },
            {
              "id": "b4_4_2",
              "name": "2동",
              "lat": 35.2149504937693,
              "lng": 128.1074712732341,
              "households": 71,
              "broadcast": 44,
              "internet": 56
            },
            {
              "id": "b4_4_3",
              "name": "3동",
              "lat": 35.215093992193076,
              "lng": 128.10812038690653,
              "households": 71,
              "broadcast": 53,
              "internet": 59
            },
            {
              "id": "b4_4_4",
              "name": "4동",
              "lat": 35.21480529688849,
              "lng": 128.10787019799915,
              "households": 71,
              "broadcast": 50,
              "internet": 48
            },
            {
              "id": "b4_4_5",
              "name": "5동",
              "lat": 35.214770712760945,
              "lng": 128.10898954315135,
              "households": 70,
              "broadcast": 46,
              "internet": 58
            },
            {
              "id": "b4_4_6",
              "name": "6동",
              "lat": 35.214652965013855,
              "lng": 128.10862372828507,
              "households": 70,
              "broadcast": 44,
              "internet": 56
            },
            {
              "id": "b4_4_7",
              "name": "7동",
              "lat": 35.21446135191153,
              "lng": 128.10775231955,
              "households": 70,
              "broadcast": 40,
              "internet": 56
            },
            {
              "id": "b4_4_8",
              "name": "8동",
              "lat": 35.21480529688849,
              "lng": 128.10787019799915,
              "households": 70,
              "broadcast": 42,
              "internet": 51
            }
          ]
        },
        {
          "id": "a4_5",
          "name": "초전 해모로 루비채 4단지",
          "lat": 35.212095,
          "lng": 128.108683,
          "households": 774,
          "broadcast": 433,
          "internet": 580,
          "address": "경상남도 진주시 초북로 55(초전동, 초전해모로루비채4단지)",
          "year": "2014",
          "buildings": [
            {
              "id": "b4_5_1",
              "name": "1동",
              "lat": 35.212725171665284,
              "lng": 128.1099830615488,
              "households": 97,
              "broadcast": 53,
              "internet": 66
            },
            {
              "id": "b4_5_2",
              "name": "2동",
              "lat": 35.21213426801301,
              "lng": 128.10914852318848,
              "households": 97,
              "broadcast": 64,
              "internet": 79
            },
            {
              "id": "b4_5_3",
              "name": "3동",
              "lat": 35.21227369549676,
              "lng": 128.10979476865316,
              "households": 97,
              "broadcast": 56,
              "internet": 64
            },
            {
              "id": "b4_5_4",
              "name": "4동",
              "lat": 35.212489676480324,
              "lng": 128.11052624620018,
              "households": 97,
              "broadcast": 64,
              "internet": 71
            },
            {
              "id": "b4_5_5",
              "name": "5동",
              "lat": 35.212014297073395,
              "lng": 128.1097818035672,
              "households": 97,
              "broadcast": 60,
              "internet": 70
            },
            {
              "id": "b4_5_6",
              "name": "6동",
              "lat": 35.21160152667893,
              "lng": 128.1101239218384,
              "households": 97,
              "broadcast": 57,
              "internet": 71
            },
            {
              "id": "b4_5_7",
              "name": "7동",
              "lat": 35.2114654652315,
              "lng": 128.10950201909222,
              "households": 96,
              "broadcast": 71,
              "internet": 76
            },
            {
              "id": "b4_5_8",
              "name": "8동",
              "lat": 35.212014297073395,
              "lng": 128.1097818035672,
              "households": 96,
              "broadcast": 69,
              "internet": 71
            }
          ]
        },
        {
          "id": "a4_6",
          "name": "엠코타운더이스턴파크",
          "lat": 35.213349,
          "lng": 128.108625,
          "households": 888,
          "broadcast": 485,
          "internet": 750,
          "address": "경상남도 진주시 초북로 77(초전동, 진주초장엠코타운더이스턴파크)",
          "year": "2014",
          "buildings": [
            {
              "id": "a4_6_b0",
              "name": "301동",
              "lat": 35.212663463,
              "lng": 128.107602928,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b1",
              "name": "302동",
              "lat": 35.2128258,
              "lng": 128.108386477,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b2",
              "name": "303동",
              "lat": 35.212946891,
              "lng": 128.108986487,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b3",
              "name": "304동",
              "lat": 35.213080995,
              "lng": 128.109563824,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b4",
              "name": "305동",
              "lat": 35.213362038,
              "lng": 128.110111061,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b5",
              "name": "306동",
              "lat": 35.213783145,
              "lng": 128.109403604,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b6",
              "name": "307동",
              "lat": 35.213895216,
              "lng": 128.109076989,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b7",
              "name": "308동",
              "lat": 35.213859642,
              "lng": 128.108791276,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b8",
              "name": "309동",
              "lat": 35.213703708,
              "lng": 128.108137277,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b9",
              "name": "310동",
              "lat": 35.21352762,
              "lng": 128.107365005,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b10",
              "name": "311동",
              "lat": 35.213481295,
              "lng": 128.108866178,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            },
            {
              "id": "a4_6_b11",
              "name": "313동",
              "lat": 35.213054929,
              "lng": 128.107214475,
              "households": 74,
              "broadcast": 40,
              "internet": 62
            }
          ]
        },
        {
          "id": "a4_7",
          "name": "진주초전푸르지오2단지",
          "lat": 35.206678,
          "lng": 128.111871,
          "households": 830,
          "broadcast": 481,
          "internet": 630,
          "address": "경상남도 진주시 초장로14번길 29 (초전동, 진주초전푸르지오2단지)",
          "year": "2010",
          "buildings": [
            {
              "id": "b4_7_1",
              "name": "201동",
              "lat": 35.206003946,
              "lng": 128.112761059,
              "households": 76,
              "broadcast": 43,
              "internet": 53
            },
            {
              "id": "b4_7_2",
              "name": "202동",
              "lat": 35.20659361,
              "lng": 128.112384821,
              "households": 76,
              "broadcast": 53,
              "internet": 51
            },
            {
              "id": "b4_7_3",
              "name": "203동",
              "lat": 35.20715402,
              "lng": 128.112093943,
              "households": 76,
              "broadcast": 53,
              "internet": 56
            },
            {
              "id": "b4_7_4",
              "name": "204동",
              "lat": 35.207846122,
              "lng": 128.111922416,
              "households": 76,
              "broadcast": 43,
              "internet": 54
            },
            {
              "id": "b4_7_5",
              "name": "205동",
              "lat": 35.207767183,
              "lng": 128.111383946,
              "households": 76,
              "broadcast": 48,
              "internet": 53
            },
            {
              "id": "b4_7_6",
              "name": "206동",
              "lat": 35.207636876,
              "lng": 128.110905613,
              "households": 75,
              "broadcast": 48,
              "internet": 60
            },
            {
              "id": "b4_7_7",
              "name": "207동",
              "lat": 35.206973993,
              "lng": 128.111421585,
              "households": 75,
              "broadcast": 47,
              "internet": 63
            },
            {
              "id": "b4_7_8",
              "name": "208동",
              "lat": 35.206239526,
              "lng": 128.111586775,
              "households": 75,
              "broadcast": 42,
              "internet": 57
            },
            {
              "id": "b4_7_9",
              "name": "209동",
              "lat": 35.205572081,
              "lng": 128.111792911,
              "households": 75,
              "broadcast": 42,
              "internet": 60
            },
            {
              "id": "b4_7_10",
              "name": "210동",
              "lat": 35.205671211,
              "lng": 128.112322262,
              "households": 75,
              "broadcast": 54,
              "internet": 60
            },
            {
              "id": "b4_7_11",
              "name": "211동",
              "lat": 35.205994207,
              "lng": 128.112010144,
              "households": 75,
              "broadcast": 42,
              "internet": 59
            }
          ]
        },
        {
          "id": "a4_8",
          "name": "진주초전푸르지오1단지",
          "lat": 35.204451,
          "lng": 128.112944,
          "households": 814,
          "broadcast": 454,
          "internet": 592,
          "address": "경상남도 진주시 초장로14번길 27 (초전동, 진주초전푸르지오1단지)",
          "year": "2009",
          "buildings": [
            {
              "id": "a4_8_b0",
              "name": "101동",
              "lat": 35.203764393,
              "lng": 128.113636744,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b1",
              "name": "102동",
              "lat": 35.204454528,
              "lng": 128.113541288,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b2",
              "name": "103동",
              "lat": 35.205122562,
              "lng": 128.113366236,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b3",
              "name": "104동",
              "lat": 35.204955519,
              "lng": 128.112713556,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b4",
              "name": "105동",
              "lat": 35.20429828,
              "lng": 128.112907589,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b5",
              "name": "106동",
              "lat": 35.203626581,
              "lng": 128.113092508,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b6",
              "name": "107동",
              "lat": 35.203667222,
              "lng": 128.112474718,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b7",
              "name": "108동",
              "lat": 35.20422792,
              "lng": 128.112305281,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b8",
              "name": "109동",
              "lat": 35.204719052,
              "lng": 128.112074131,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b9",
              "name": "110동",
              "lat": 35.204657254,
              "lng": 128.113094972,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            },
            {
              "id": "a4_8_b10",
              "name": "114동",
              "lat": 35.205469511,
              "lng": 128.113172375,
              "households": 74,
              "broadcast": 41,
              "internet": 54
            }
          ]
        },
        {
          "id": "a4_9",
          "name": "초전흥한황토방아파트",
          "lat": 35.199156,
          "lng": 128.11481,
          "households": 456,
          "broadcast": 342,
          "internet": 305,
          "address": "경상남도 진주시 초전남로 30 (초전동, 초전흥한황토아파트)",
          "year": "2001",
          "buildings": [
            {
              "id": "b4_9_1",
              "name": "101동",
              "lat": 35.198701184,
              "lng": 128.114487222,
              "households": 57,
              "broadcast": 38,
              "internet": 37
            },
            {
              "id": "b4_9_2",
              "name": "102동",
              "lat": 35.198727081,
              "lng": 128.115200294,
              "households": 57,
              "broadcast": 40,
              "internet": 43
            },
            {
              "id": "b4_9_3",
              "name": "103동",
              "lat": 35.198928338,
              "lng": 128.114816644,
              "households": 57,
              "broadcast": 39,
              "internet": 40
            },
            {
              "id": "b4_9_4",
              "name": "104동",
              "lat": 35.199123923,
              "lng": 128.114428139,
              "households": 57,
              "broadcast": 33,
              "internet": 45
            },
            {
              "id": "b4_9_5",
              "name": "105동",
              "lat": 35.199157681,
              "lng": 128.115178125,
              "households": 57,
              "broadcast": 33,
              "internet": 40
            },
            {
              "id": "b4_9_6",
              "name": "106동",
              "lat": 35.199356215,
              "lng": 128.11479471,
              "households": 57,
              "broadcast": 34,
              "internet": 43
            },
            {
              "id": "b4_9_7",
              "name": "107동",
              "lat": 35.199624917,
              "lng": 128.114464907,
              "households": 57,
              "broadcast": 36,
              "internet": 43
            },
            {
              "id": "b4_9_8",
              "name": "108동",
              "lat": 35.199628768,
              "lng": 128.115113247,
              "households": 57,
              "broadcast": 39,
              "internet": 44
            }
          ]
        },
        {
          "id": "a4_10",
          "name": "초전청구아파트A,B",
          "lat": 35.202714,
          "lng": 128.113096,
          "households": 264,
          "broadcast": 200,
          "internet": 216,
          "address": "경상남도 진주시 대신로475번길 16-5 (초전동, 청구아파트)",
          "year": "1997",
          "buildings": [
            {
              "id": "a4_10_b0",
              "name": "101동",
              "lat": 35.203061797,
              "lng": 128.112501859,
              "households": 44,
              "broadcast": 33,
              "internet": 36
            },
            {
              "id": "a4_10_b1",
              "name": "102동",
              "lat": 35.202668192,
              "lng": 128.112489118,
              "households": 44,
              "broadcast": 33,
              "internet": 36
            },
            {
              "id": "a4_10_b2",
              "name": "103동",
              "lat": 35.20228737,
              "lng": 128.112623739,
              "households": 44,
              "broadcast": 33,
              "internet": 36
            },
            {
              "id": "a4_10_b3",
              "name": "105동",
              "lat": 35.202429934,
              "lng": 128.113663154,
              "households": 44,
              "broadcast": 33,
              "internet": 36
            },
            {
              "id": "a4_10_b4",
              "name": "106동",
              "lat": 35.2027506,
              "lng": 128.113649122,
              "households": 44,
              "broadcast": 33,
              "internet": 36
            },
            {
              "id": "a4_10_b5",
              "name": "107동",
              "lat": 35.203089063,
              "lng": 128.113646188,
              "households": 44,
              "broadcast": 33,
              "internet": 36
            }
          ]
        },
        {
          "id": "a4_11",
          "name": "초전청구아파트B",
          "lat": 35.202714,
          "lng": 128.113096,
          "households": 228,
          "broadcast": 140,
          "internet": 147,
          "address": "경상남도 진주시 대신로475번길 16-5 (초전동, 청구아파트)",
          "year": "1997",
          "buildings": [
            {
              "id": "a4_11_b0",
              "name": "101동",
              "lat": 35.203061797,
              "lng": 128.112501859,
              "households": 38,
              "broadcast": 23,
              "internet": 24
            },
            {
              "id": "a4_11_b1",
              "name": "102동",
              "lat": 35.202668192,
              "lng": 128.112489118,
              "households": 38,
              "broadcast": 23,
              "internet": 24
            },
            {
              "id": "a4_11_b2",
              "name": "103동",
              "lat": 35.20228737,
              "lng": 128.112623739,
              "households": 38,
              "broadcast": 23,
              "internet": 24
            },
            {
              "id": "a4_11_b3",
              "name": "105동",
              "lat": 35.202429934,
              "lng": 128.113663154,
              "households": 38,
              "broadcast": 23,
              "internet": 24
            },
            {
              "id": "a4_11_b4",
              "name": "106동",
              "lat": 35.2027506,
              "lng": 128.113649122,
              "households": 38,
              "broadcast": 23,
              "internet": 24
            },
            {
              "id": "a4_11_b5",
              "name": "107동",
              "lat": 35.203089063,
              "lng": 128.113646188,
              "households": 38,
              "broadcast": 23,
              "internet": 24
            }
          ]
        },
        {
          "id": "a4_12",
          "name": "초전현대아파트A,B",
          "lat": 35.202085,
          "lng": 128.113852,
          "households": 217,
          "broadcast": 149,
          "internet": 158,
          "address": "경상남도 진주시 초전남로 60 (초전동, 현대아파트)",
          "year": "1997",
          "buildings": [
            {
              "id": "b4_12_1",
              "name": "1동",
              "lat": 35.201935,
              "lng": 128.113852,
              "households": 109,
              "broadcast": 62,
              "internet": 79
            },
            {
              "id": "b4_12_2",
              "name": "2동",
              "lat": 35.202235,
              "lng": 128.113852,
              "households": 108,
              "broadcast": 63,
              "internet": 74
            }
          ]
        },
        {
          "id": "a4_13",
          "name": "초전현대아파트B",
          "lat": 35.201007,
          "lng": 128.114429,
          "households": 274,
          "broadcast": 156,
          "internet": 232,
          "address": "경상남도 진주시 초전남로 46 (초전동, 현대아파트)",
          "year": "1997",
          "buildings": [
            {
              "id": "b4_13_1",
              "name": "1동",
              "lat": 35.201007,
              "lng": 128.114296,
              "households": 92,
              "broadcast": 64,
              "internet": 60
            },
            {
              "id": "b4_13_2",
              "name": "2동",
              "lat": 35.201307,
              "lng": 128.114296,
              "households": 91,
              "broadcast": 51,
              "internet": 77
            },
            {
              "id": "b4_13_3",
              "name": "3동",
              "lat": 35.200707,
              "lng": 128.114696,
              "households": 91,
              "broadcast": 63,
              "internet": 59
            }
          ]
        },
        {
          "id": "a4_14",
          "name": "초전대림아파트",
          "lat": 35.197223,
          "lng": 128.113835,
          "households": 305,
          "broadcast": 201,
          "internet": 253,
          "address": "경상남도 진주시 말티고개로 113 (초전동, 초전대림아파트)",
          "year": "1995",
          "buildings": [
            {
              "id": "b4_14_1",
              "name": "101동",
              "lat": 35.19727705312484,
              "lng": 128.1142094187698,
              "households": 102,
              "broadcast": 71,
              "internet": 80
            },
            {
              "id": "b4_14_2",
              "name": "102동",
              "lat": 35.19710478752531,
              "lng": 128.11355645275898,
              "households": 102,
              "broadcast": 59,
              "internet": 66
            },
            {
              "id": "b4_14_3",
              "name": "103동",
              "lat": 35.19774662946817,
              "lng": 128.11383305882367,
              "households": 101,
              "broadcast": 73,
              "internet": 72
            }
          ]
        },
        {
          "id": "a4_15",
          "name": "초전일동아파트",
          "lat": 35.207656,
          "lng": 128.109252,
          "households": 180,
          "broadcast": 135,
          "internet": 136,
          "address": "경상남도 진주시 초전북로 20 (초전동, 초전일동아파트)",
          "year": "1994",
          "buildings": [
            {
              "id": "b4_15_1",
              "name": "1동",
              "lat": 35.207656,
              "lng": 128.109252,
              "households": 180,
              "broadcast": 127,
              "internet": 131
            }
          ]
        }
      ]
    }
  ]
};
