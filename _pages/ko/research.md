---
page_id: research
layout: page
permalink: /research/
title: 연구
description: "PG-DPO — Pontryagin-Guided Direct Policy Optimization."
nav: true
nav_order: 1
dropdown: true
children:
  - title: 개요
    permalink: /research/
  - title: "Why BPTT ≈ Costate?"
    permalink: /research/why-bptt-costate/
---

## PG-DPO: Pontryagin-Guided Direct Policy Optimization

<p class="lab-tagline" style="font-size:1.25rem;">Forward simulation. BPTT costates. Hamiltonian recovery.</p>

<p><a class="btn btn-sm" href="https://pgdpo-playground.vercel.app/" style="border:1px solid var(--global-theme-color);color:var(--global-theme-color);border-radius:6px;padding:0.35rem 0.9rem;text-decoration:none;">▶ 인터랙티브 데모</a></p>

PG-DPO는 고차원 연속시간 확률제어 문제를 푸는 우리의 프레임워크입니다. 가치함수 전체를 학습하는
대신 **정책 경로를 학습하고 공상태(costate)를 추정한 뒤, 해밀토니안 최적성 조건으로부터 제어를
국소적으로 복원**합니다.

<div class="text-center my-4">
  <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/research/pgdpo-1.png' | relative_url }}" alt="Merton 모형에서의 PG-DPO 2단계 스케치" style="max-width:100%;">
  <div class="text-muted" style="font-size:0.85rem;margin-top:0.4rem;">Merton 모형에서의 2단계 스케치: warm-up 이후 공상태 추정과 제어 복원.</div>
</div>

### 두 단계

**1단계 — Warm-up.** 제어 동역학의 직접 시뮬레이션으로 실행 가능한 정책 신경망을 학습합니다.

**2단계 — 공상태 추정 + 제어 복원.** continuation rollout에 대한 시간 역전파(BPTT)가 *경로별
공상태 추정치*를 만들고, 몬테카를로 평균이 이를 안정적인 수반(adjoint) 신호로 다듬습니다. 추정된
공상태는 해밀토니안 최적성 조건에 들어가 최적 제어를 직접 복원합니다.

> 역방향 패스는 시간 이산화된 제어 문제의 경로별 이산 수반을 계산하며, 정상성과 마팅게일-투영
> 일관성 하에서 수반 BSDE(연속시간 폰트랴긴 공상태)로 수렴합니다.
> [Why BPTT ≈ Costate?]({{ '/research/why-bptt-costate/' | relative_url }}) 참고.

### 핵심 아이디어

고전적 HJB(Hamilton–Jacobi–Bellman) 방법은 검증을 제공하지만 차원의 저주에 취약하고, 심층
강화학습은 확장성은 좋지만 구조적 최적성을 잃습니다. PG-DPO는 세 가지를 결합합니다.

- 신경망 정책의 **확장성**,
- 폰트랴긴 최대원리의 **구조적 규율**,
- 국소 해밀토니안 제어 복원의 **수치적 정밀성**.

### 왜 폰트랴긴 기반인가?

많은 어려운 제어 문제는 복잡한 최종 정책이 아니라 섬세한 *중간* 구조를 가집니다 — 전역 가치함수
학습이 불안정하거나 비싼 경우들입니다.

- 고차원 포트폴리오 선택,
- 강한 제약,
- 파라미터 불확실성,
- 비(非)마르코프·지연 동역학,
- 비지수(non-exponential) 할인,
- 무거래 영역을 동반한 거래비용.

PG-DPO는 전역 PDE를 푸는 대신, 시뮬레이션 rollout과 수반 민감도로 *국소* 최적성 조건을 강제합니다.

<div class="text-center my-4">
  <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/research/pgdpo-2.png' | relative_url }}" alt="PG-DPO 문제 지형" style="max-width:100%;">
</div>

### 확장

이 프레임워크는 연속시간 제어 전반으로 확장됩니다. **제약** 문제에서는 해밀토니안 복원이 국소
KKT / barrier / QP 디코더가 되고, **거래비용** 문제에서는 공상태-제어 맵이 매수/보유/매도 영역과
무거래 영역을 복원합니다. 비마르코프 동역학과 비지수 할인으로도 확장됩니다.

### 참고문헌

- *Breaking the Dimensional Barrier: A Pontryagin-Guided Direct Policy Optimization for Continuous-Time Multi-Asset Portfolio* — <a href="https://arxiv.org/abs/2504.11116">arXiv:2504.11116</a>
- *Breaking the Dimensional Barrier for Constrained Dynamic Portfolio Choice* — under revision in Mathematical Finance, 2026, <a href="https://arxiv.org/abs/2501.12600">arXiv:2501.12600</a>
- *Breaking the Dimensional Barrier: Dynamic Portfolio Choice with Parameter Uncertainty via Pontryagin Projection* — <a href="https://arxiv.org/abs/2601.03175">arXiv:2601.03175</a>
- *Beyond the Bellman Recursion: A Pontryagin-Guided Framework for Non-Exponential Discounting* — accepted in International Conference on Machine Learning (ICML), 2026, <a href="https://arxiv.org/abs/2605.20996">arXiv:2605.20996</a>
- *Rec-ve-ing the Ki&#45;&#45;s in D&#45;&#45;ay C-nt-ol: A Str-ct-re-Aw-re O-timal Con&#45;&#45;ol So-ve- wit- Pon-ry-gin -roj-ction*
- *Rec-ve-ing No-Tr-de Re-i-ns: Pont&#45;&#45;a-in-Gui&#45;&#45;d Po&#45;&#45;cy Proj&#45;&#45;tion f-r Tr&#45;&#45;action-C-st -ont-ol*

전체 목록은 [Papers]({{ '/publications/' | relative_url }}) 와 [Papers in Progress]({{ '/papers-in-progress/' | relative_url }}) 를 참고하세요.
