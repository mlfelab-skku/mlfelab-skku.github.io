---
page_id: projects
layout: page
permalink: /projects/
title: 프로젝트
description: 연구비 지원 과제.
nav: true
nav_order: 6
---

<ul class="grants-list">
{% for g in site.data.grants %}
  <li>
    <strong>{{ g.title }}</strong>
    {{ g.funder }} · {{ g.period }}{% if g.budget %} · {{ g.budget }}{% endif %}
  </li>
{% endfor %}
</ul>
