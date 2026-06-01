---
page_id: profiles
layout: page
permalink: /people/
title: 구성원
description: 연구실 구성원.
nav: true
nav_order: 2
---

{% assign postdocs = site.data.members.members | where: "group", "postdoc" %}
{% assign grads = site.data.members.members | where: "group", "grad" %}
{% assign undergrads = site.data.members.members | where: "group", "undergrad" %}
{% assign alumni = site.data.members.members | where: "group", "alumni" %}

## 지도교수

<div class="row align-items-center">
  <div class="col-4 col-md-3">
    <img src="{{ '/assets/img/prof_pic.png' | relative_url }}" alt="허정규" class="img-fluid rounded z-depth-1" style="aspect-ratio:1/1;object-fit:cover;">
  </div>
  <div class="col-8 col-md-9">
    <strong>허정규</strong> (Jeonggyu Huh) — 성균관대학교 수학과 부교수.<br>
    <a href="{{ '/cv/' | relative_url }}">CV</a> · <a href="mailto:jghuh@skku.edu">jghuh@skku.edu</a>
  </div>
</div>

## 박사후연구원

<div class="row row-cols-2 row-cols-md-4 g-4 mt-1">
{% for m in postdocs %}
  <div class="col text-center">
    {% if m.image %}<img src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" class="img-fluid rounded z-depth-1 mb-2" style="aspect-ratio:1/1;object-fit:cover;">{% endif %}
    <div><strong>{{ m.name_kr | default: m.name }}</strong></div>
    <div class="text-muted" style="font-size:0.85em;">{{ m.role }}</div>
    {% if m.detail %}<div style="font-size:0.8em;">{{ m.detail }}</div>{% endif %}
    {% if m.scholar %}<a href="{{ m.scholar }}" style="font-size:0.8em;">Scholar</a>{% endif %}
  </div>
{% endfor %}
</div>

## 대학원생

<div class="row row-cols-2 row-cols-md-4 g-4 mt-1">
{% for m in grads %}
  <div class="col text-center">
    {% if m.image %}<img src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" class="img-fluid rounded z-depth-1 mb-2" style="aspect-ratio:1/1;object-fit:cover;">{% endif %}
    <div><strong>{{ m.name_kr | default: m.name }}</strong></div>
    <div class="text-muted" style="font-size:0.85em;">{{ m.role }}</div>
    {% if m.detail %}<div style="font-size:0.8em;">{{ m.detail }}</div>{% endif %}
  </div>
{% endfor %}
</div>

## 학부생

<div class="row row-cols-2 row-cols-md-4 g-4 mt-1">
{% for m in undergrads %}
  <div class="col text-center">
    {% if m.image %}<img src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" class="img-fluid rounded z-depth-1 mb-2" style="aspect-ratio:1/1;object-fit:cover;">{% endif %}
    <div><strong>{{ m.name_kr | default: m.name }}</strong></div>
    <div class="text-muted" style="font-size:0.85em;">{{ m.role }}</div>
    {% if m.detail %}<div style="font-size:0.8em;">{{ m.detail }}</div>{% endif %}
  </div>
{% endfor %}
</div>

## 동문

<ul>
{% for m in alumni %}
  <li><strong>{{ m.name_kr | default: m.name }}</strong> ({{ m.name }}) — {{ m.role }}, {{ m.date }}{% if m.placement %} → {{ m.placement }}{% endif %}</li>
{% endfor %}
</ul>
