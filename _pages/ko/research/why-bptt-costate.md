---
page_id: why-bptt-costate
layout: page
permalink: /research/why-bptt-costate/
title: "Why BPTT ≈ Costate?"
description: "BPTT 역방향 패스가 폰트랴긴 공상태를 복원하는 원리."
nav: false
---

[PG-DPO]({{ '/research/' | relative_url }}) 뒤의 기술 노트입니다. 시간 역전파(BPTT)의 역방향
패스는 시간 이산화된 제어 문제의 **경로별 이산 수반(adjoint)**을 계산합니다. 정상성과
마팅게일-투영 일관성 하에서, 이 이산 수반은 **수반 BSDE** — 연속시간 폰트랴긴 공상태 — 로
수렴합니다. 아래 도식이 이 대응 관계를 구체적으로 보여줍니다.

{% assign figs = "1,2,3,4,5,6,7" | split: "," %}
{% for n in figs %}
<div class="text-center my-4">
  <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/research/bptt-' | append: n | append: '.png' | relative_url }}" alt="Why BPTT ≈ Costate — 도식 {{ n }}" style="max-width:100%;">
</div>
{% endfor %}

<p class="mt-4"><a href="{{ '/research/' | relative_url }}">&larr; 연구로 돌아가기</a></p>
