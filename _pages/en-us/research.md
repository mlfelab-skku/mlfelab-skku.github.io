---
page_id: research
layout: page
permalink: /research/
title: research
description: Structure-preserving learning for high-dimensional finance.
nav: true
nav_order: 1
---

We build **structure-preserving learning methods** that make financial mathematics work in
high-dimensional, data-driven settings. Two themes organize most of our work.

## 1. Structure-recovering reinforcement learning for dynamic portfolio selection

Classical dynamic portfolio choice is a stochastic control problem whose solution carries rich
economic structure (e.g. the Pontryagin optimality conditions, costate/adjoint relations, and
separation results). Our **PG-DPO (Pontryagin-Guided Direct Policy Optimization)** framework couples
this structure with modern policy optimization so that learned policies remain faithful to the
underlying control problem while scaling to many assets.

- Direct policy optimization guided by Pontryagin's maximum principle (PMP).
- Two-stage / projection variants (P-PGDPO) that recover the optimal control from learned costates.
- Scaling to high-dimensional settings (tens to hundreds of assets) under realistic dynamics.

<!-- TODO(content): add representative figures/results and links to the PG-DPO papers (see Publications). -->

## 2. Asset pricing with machine learning

We study machine-learning and econometric approaches to **asset pricing** &mdash; estimating and
testing pricing models in a way that respects no-arbitrage and economic structure rather than
treating prediction as a black box.

<!-- TODO(content): expand with specific projects, datasets, and outcomes. -->

For publications, see the [Publications]({{ '/publications/' | relative_url }}) page.
