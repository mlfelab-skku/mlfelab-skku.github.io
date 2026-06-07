---
page_id: projects
layout: page
permalink: /projects/
title: 프로젝트
description: 연구비 지원 과제.
nav: false
nav_order: 5
---

<ul class="grants-list">
{% for g in site.data.grants %}
  <li>
    <strong>{{ g.title_ko | default: g.title }}</strong>
    {{ g.funder_ko | default: g.funder }} · {{ g.period_ko | default: g.period }}{% if g.budget %} · {{ g.budget }}{% endif %}
  </li>
{% endfor %}
</ul>

## 특허

<ul class="grants-list">
{% for p in site.data.patents %}
  <li>
    <strong>{{ p.title }}</strong>
    {{ p.office }} (No. {{ p.number }}, {{ p.date }}) · 출원인: {{ p.applicants }}
  </li>
{% endfor %}
</ul>
