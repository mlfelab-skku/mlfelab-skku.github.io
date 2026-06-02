---
page_id: research
layout: page
permalink: /research/
title: research
description: "PG-DPO — Pontryagin-Guided Direct Policy Optimization."
nav: true
nav_order: 1
dropdown: true
children:
  - title: Overview
    permalink: /research/
  - title: "Why BPTT ≈ Costate?"
    permalink: /research/why-bptt-costate/
---

## PG-DPO: Pontryagin-Guided Direct Policy Optimization

<p class="lab-tagline" style="font-size:1.25rem;">Forward simulation. BPTT costates. Hamiltonian recovery.</p>

<p><a class="btn btn-sm" href="https://pgdpo-playground.vercel.app/" style="border:1px solid var(--global-theme-color);color:var(--global-theme-color);border-radius:6px;padding:0.35rem 0.9rem;text-decoration:none;">▶ Interactive demo</a></p>

PG-DPO is our framework for solving high-dimensional, continuous-time stochastic control
problems. Instead of learning an entire value landscape, it **learns the policy path, estimates
the costate, and recovers the control locally** from the Hamiltonian optimality condition.

<div class="text-center my-4">
  <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/research/pgdpo-1.png' | relative_url }}" alt="PG-DPO two-stage sketch in the Merton model" style="max-width:100%;">
  <div class="text-muted" style="font-size:0.85rem;margin-top:0.4rem;">A two-stage sketch in the Merton model: warm-up, then costate estimation and control recovery.</div>
</div>

### The two stages

**Stage 1 — Warm-up.** A feasible policy network is trained by direct simulation of the controlled
dynamics.

**Stage 2 — Costate estimation + control recovery.** Backpropagation through time (BPTT) over
continuation rollouts produces *pathwise costate estimates*; Monte-Carlo averaging stabilizes them
into an adjoint signal. The estimated costate then enters the Hamiltonian optimality condition and
the optimal control is recovered directly.

> The backward pass computes the pathwise discrete adjoint of the time-discretized control problem.
> Under stationarity and martingale-projection consistency, it converges to the adjoint BSDE — the
> continuous-time Pontryagin costate. See [Why BPTT ≈ Costate?]({{ '/research/why-bptt-costate/' | relative_url }}).

### Core idea

Classical Hamilton–Jacobi–Bellman (HJB) methods provide verification but face the curse of
dimensionality; deep reinforcement learning scales better but loses structural optimality. PG-DPO
combines all three desiderata:

- the **scalability** of neural policies,
- the **structural discipline** of Pontryagin's maximum principle, and
- the **numerical precision** of local Hamiltonian control recovery.

### Why Pontryagin-guided?

Many hard control problems have delicate *intermediate* structure rather than a complicated final
policy — settings where global value-function learning is unstable or expensive:

- high-dimensional portfolio choice,
- hard constraints,
- parameter uncertainty,
- non-Markovian or delay-driven dynamics,
- non-exponential discounting,
- transaction costs with no-trade regions.

PG-DPO uses simulated rollouts and adjoint sensitivities to enforce *local* optimality conditions
instead of solving a global PDE.

<div class="text-center my-4">
  <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/research/pgdpo-2.png' | relative_url }}" alt="PG-DPO problem landscape" style="max-width:100%;">
</div>

### Extensions

The framework extends across continuous-time control. For **constrained** problems the Hamiltonian
recovery becomes a local KKT / barrier / QP-style decoder; for **transaction-cost** problems the
costate-to-control map recovers buy / hold / sell regimes and no-trade regions. Further extensions
cover non-Markovian dynamics and non-exponential discounting.

### Asset pricing with machine learning

Alongside PG-DPO, we study machine-learning and econometric approaches to **asset pricing** —
estimating and testing pricing models in a way that respects no-arbitrage and economic structure.

### Selected references

- *Breaking the Dimensional Barrier: A Pontryagin-Guided Direct Policy Optimization for Continuous-Time Multi-Asset Portfolio* — <a href="https://arxiv.org/abs/2504.11116">arXiv:2504.11116</a>
- *Breaking the Dimensional Barrier for Constrained Dynamic Portfolio Choice* — under revision in Mathematical Finance, <a href="https://arxiv.org/abs/2501.12600">arXiv:2501.12600</a>
- *Breaking the Dimensional Barrier: Dynamic Portfolio Choice with Parameter Uncertainty via Pontryagin Projection* — <a href="https://arxiv.org/abs/2601.03175">arXiv:2601.03175</a>
- *Beyond the Bellman Recursion: A Pontryagin-Guided Framework for Non-Exponential Discounting* — ICML 2026, <a href="https://arxiv.org/abs/2605.20996">arXiv:2605.20996</a>

See [Papers]({{ '/publications/' | relative_url }}) and [Papers in Progress]({{ '/papers-in-progress/' | relative_url }}) for the full list.
