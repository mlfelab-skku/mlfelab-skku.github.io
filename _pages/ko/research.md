---
page_id: research
layout: page
permalink: /research/
title: 연구
description: 고차원 금융을 위한 구조 보존 학습.
nav: true
nav_order: 1
---

우리는 고차원·데이터 기반 환경에서도 금융수학이 작동하도록 하는 **구조 보존 학습(structure-preserving
learning)** 방법을 연구합니다. 연구는 크게 두 축으로 구성됩니다.

## 1. 동적 포트폴리오 선택을 위한 구조 복원 강화학습

고전적 동적 포트폴리오 선택은 풍부한 경제학적 구조(폰트랴긴 최적성 조건, 공상태(costate)/수반
관계, 분리정리 등)를 갖는 확률제어 문제입니다. 우리의 **PG-DPO(Pontryagin-Guided Direct Policy
Optimization)** 프레임워크는 이러한 구조와 현대적 정책 최적화를 결합하여, 학습된 정책이 기저
제어 문제에 충실하면서도 다수 자산으로 확장되도록 합니다.

- 폰트랴긴 최대원리(PMP)로 유도되는 직접 정책 최적화.
- 학습된 공상태로부터 최적 제어를 복원하는 2단계/투영 변형(P-PGDPO).
- 현실적 동역학 하에서 고차원(수십~수백 자산)으로의 확장.

<!-- TODO(content): 대표 그림/결과와 PG-DPO 논문 링크 추가 (Publications 참고). -->

## 2. 기계학습 기반 자산가격결정

**자산가격결정(asset pricing)**에 대한 기계학습·계량경제학 접근을 연구합니다. 예측을 블랙박스로
다루지 않고, 무차익(no-arbitrage)과 경제학적 구조를 존중하는 방식으로 가격결정 모형을 추정·검정합니다.

<!-- TODO(content): 구체 프로젝트·데이터·성과로 확장. -->

논문 목록은 [Publications]({{ '/publications/' | relative_url }}) 페이지를 참고하세요.
