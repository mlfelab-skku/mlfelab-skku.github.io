---
page_id: publications
layout: page
permalink: /publications/
title: 논문
description: 역연대순 논문 목록. jekyll-scholar로 생성됩니다.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

## 게재 논문

<div class="publications">

{% bibliography %}

</div>

## 진행 중 논문

<div class="publications">

{% bibliography --file in_progress %}

</div>
