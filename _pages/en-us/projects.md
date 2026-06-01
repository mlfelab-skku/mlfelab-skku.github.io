---
page_id: projects
layout: page
permalink: /projects/
title: projects
description: Funded research projects and grants.
nav: true
nav_order: 5
---

<ul>
{% for g in site.data.grants %}
  <li>
    <strong>{{ g.title }}</strong><br>
    {{ g.funder }} · {{ g.period }}{% if g.budget %} · {{ g.budget }}{% endif %}
  </li>
{% endfor %}
</ul>
