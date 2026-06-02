---
page_id: papers-in-progress
layout: page
permalink: /papers-in-progress/
title: 진행 중 논문
description: 프리프린트·작업 중 논문, 보충 증명 및 향후 연구 방향.
nav: false
nav_order: 4
---

## Preprints

<ul class="pub-list">
{% for p in site.data.in_progress.preprints %}
  <li>
    {% if p.pgdpo %}<span class="pub-tag-pgdpo">PG-DPO</span>{% endif %}<span class="pub-title">{{ p.title }}</span>
    <span class="pub-meta">{{ p.authors | replace: "Jeonggyu Huh", "<strong>Jeonggyu Huh</strong>" }}</span>
    {% if p.links %}<div class="pub-links">{% for l in p.links %}<a href="{{ l.url }}">{{ l.label }}</a>{% endfor %}</div>{% endif %}
    {% if p.supplementary %}<div class="pub-supp">+ 보충 증명(Supplementary proofs): {% for s in p.supplementary %}{{ s.label }} <a href="{{ s.url }}">PDF</a>{% unless forloop.last %} &middot; {% endunless %}{% endfor %}</div>{% endif %}
  </li>
{% endfor %}
</ul>

## 진행 중 논문 (Papers in Progress)

{% for g in site.data.in_progress.working %}
### &raquo; {{ g.group }}
<ul class="pub-list">
{% for it in g.items %}
  {% assign parts = it | split: ", with " %}
  <li><span class="pub-title">{{ parts[0] }}</span>{% if parts[1] %}<span class="pub-meta">with {{ parts[1] }}</span>{% endif %}</li>
{% endfor %}
</ul>
{% endfor %}

## 향후 연구 방향 (Future directions)

{{ site.data.in_progress.future_directions }}
