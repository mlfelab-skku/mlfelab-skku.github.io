---
page_id: research
layout: page
permalink: /research/
title: 연구
description: 고차원 금융을 위한 구조 복원 학습.
nav: true
nav_order: 1
---

우리는 고차원·데이터 기반 환경에서도 금융수학이 작동하도록 하는 **구조 복원 학습(structure-recovering
learning)** 방법을 개발합니다. 연구는 크게 두 축으로 구성됩니다.

## PG-DPO: Pontryagin-Guided Direct Policy Optimization

전통적 HJB(Hamilton–Jacobi–Bellman) 방법은 엄밀한 검증을 제공하지만 차원의 저주에 취약하고,
심층 강화학습은 확장성은 좋지만 구조적 최적성 보장을 잃습니다. **PG-DPO**는 가치함수 전체를
구성하는 대신 정책 *경로*를 학습하고 *공상태(costate)*를 추정함으로써 둘을 잇습니다. 세 단계로
진행됩니다.

1. **Warm-up** — 직접 시뮬레이션으로 실행 가능한 정책 신경망을 학습.
2. **공상태 추정** — continuation rollout에 대한 BPTT(시간 역전파)로 경로별 공상태를 추정하고,
   몬테카를로 평균으로 안정화.
3. **제어 복원** — 추정된 공상태를 해밀토니안 최적성 조건에 대입해 제어를 직접 복원. 제약 문제에서는
   KKT/QP 디코더가 되고, 거래비용 변형에서는 매수/보유/매도 영역과 무거래(no-trade) 경계를 복원.

이 프레임워크는 섬세한 중간 구조를 갖는 문제를 대상으로 합니다: 고차원 포트폴리오 선택, 강한 제약,
파라미터 불확실성, 비(非)마르코프 동역학, 비지수(non-exponential) 할인, 무거래 영역을 동반한
거래비용 등.

## 기계학습 기반 자산가격결정

또한 **자산가격결정(asset pricing)**에 대한 기계학습·계량경제학 접근을 연구합니다. 예측을
블랙박스로 다루지 않고, 무차익과 경제학적 구조를 존중하는 방식으로 가격결정 모형을 추정·검정합니다.

논문은 [Publications]({{ '/publications/' | relative_url }}), 연구비 과제는
[Projects]({{ '/projects/' | relative_url }})를 참고하세요.
