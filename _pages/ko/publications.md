---
page_id: publications
layout: page
permalink: /publications/
title: 논문
description: 제출 중 논문, 이어서 연도별 게재 논문.
nav: true
nav_order: 3
dropdown: true
children:
  - title: 게재 논문
    permalink: /publications/
  - title: 진행 중 논문
    permalink: /papers-in-progress/
---

{% assign subs_pgdpo = site.data.papers.submitted | where: "pgdpo", true %}
{% assign subs_other = site.data.papers.submitted | where: "pgdpo", false %}
{% assign pub = site.data.papers.published %}
{% assign years = pub | map: "year" | uniq | sort | reverse %}

## 제출 중 (Submitted)

### PG-DPO
<ul class="pub-list">
{% for p in subs_pgdpo %}{% include paper_entry.liquid p=p %}{% endfor %}
</ul>

### Others
<ul class="pub-list">
{% for p in subs_other %}{% include paper_entry.liquid p=p %}{% endfor %}
</ul>

## 게재 논문

{% for y in years %}
### {{ y }}
<ul class="pub-list">
{% assign yp = pub | where: "year", y %}
{% for p in yp %}{% include paper_entry.liquid p=p %}{% endfor %}
</ul>
{% endfor %}
