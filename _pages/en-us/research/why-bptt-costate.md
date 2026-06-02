---
page_id: why-bptt-costate
layout: page
permalink: /research/why-bptt-costate/
title: "Why BPTT ≈ Costate?"
description: "How the BPTT backward pass recovers the Pontryagin costate."
nav: false
---

A technical note behind [PG-DPO]({{ '/research/' | relative_url }}): the backward pass of
backpropagation through time (BPTT) computes the **pathwise discrete adjoint** of the
time-discretized control problem. Under stationarity and martingale-projection consistency, this
discrete adjoint converges to the **adjoint BSDE** — the continuous-time Pontryagin costate. The
derivation below makes this correspondence precise.

{% assign figs = "1,2,3,4,5,6,7" | split: "," %}
{% for n in figs %}
<div class="text-center my-4">
  <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/research/bptt-' | append: n | append: '.png' | relative_url }}" alt="Why BPTT ≈ Costate — figure {{ n }}" style="max-width:100%;">
</div>
{% endfor %}

<p class="mt-4"><a href="{{ '/research/' | relative_url }}">&larr; Back to Research</a></p>
