---
page_id: research
layout: page
permalink: /research/
title: research
description: Structure-recovering learning for high-dimensional finance.
nav: true
nav_order: 1
---

We build **structure-recovering learning methods** that make financial mathematics work in
high-dimensional, data-driven settings. Two themes organize most of our work.

## PG-DPO: Pontryagin-Guided Direct Policy Optimization

Traditional Hamilton–Jacobi–Bellman (HJB) methods give rigorous verification but suffer from the
curse of dimensionality; deep reinforcement learning scales better but loses structural optimality
guarantees. **PG-DPO** bridges the two by learning policy *paths* and estimating *costates* rather
than building an entire value landscape. The method proceeds in three stages:

1. **Warm-up** — train a feasible policy network by direct simulation.
2. **Costate estimation** — use backpropagation through time (BPTT) on continuation rollouts to
   produce pathwise costate estimates, stabilized by Monte-Carlo averaging.
3. **Control recovery** — insert the estimated costates into the Hamiltonian optimality conditions
   to recover the controls directly. For constrained problems the recovery becomes a KKT/QP decoder;
   for transaction-cost variants it recovers buy/hold/sell regimes and no-trade boundaries.

The framework targets problems with delicate intermediate structure: high-dimensional portfolio
selection, hard constraints, parameter uncertainty, non-Markovian dynamics, non-exponential
discounting, and transaction costs with no-trade regions.

## Asset pricing with machine learning

We also study machine-learning and econometric approaches to **asset pricing** — estimating and
testing pricing models in a way that respects no-arbitrage and economic structure rather than
treating prediction as a black box.

See [Publications]({{ '/publications/' | relative_url }}) for papers and
[Projects]({{ '/projects/' | relative_url }}) for funded research.
