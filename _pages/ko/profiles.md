---
page_id: profiles
layout: page
permalink: /people/
title: 구성원
description: 연구실 구성원.
nav: true
nav_order: 2
---

## 지도교수

**허정규 (Jeonggyu Huh)** — 성균관대학교 수학과 부교수.
[CV]({{ '/cv/' | relative_url }}) · <a href="mailto:jghuh@skku.edu">jghuh@skku.edu</a>

{% assign postdocs = site.data.members.members | where: "group", "postdoc" %}
{% assign grads = site.data.members.members | where: "group", "grad" %}
{% assign undergrads = site.data.members.members | where: "group", "undergrad" %}
{% assign alumni = site.data.members.members | where: "group", "alumni" %}

## 박사후연구원

<ul>
{% for m in postdocs %}
  <li><strong>{{ m.name_kr | default: m.name }}</strong> ({{ m.name }}) — {{ m.role }}{% if m.detail %}<br><em>{{ m.detail }}</em>{% endif %}{% if m.scholar %} · <a href="{{ m.scholar }}">Google Scholar</a>{% endif %}</li>
{% endfor %}
</ul>

## 대학원생

<ul>
{% for m in grads %}
  <li><strong>{{ m.name_kr | default: m.name }}</strong> ({{ m.name }}) — {{ m.role }}{% if m.detail %}<br><em>{{ m.detail }}</em>{% endif %}</li>
{% endfor %}
</ul>

## 학부생

<ul>
{% for m in undergrads %}
  <li><strong>{{ m.name_kr | default: m.name }}</strong> ({{ m.name }}) — {{ m.role }}{% if m.detail %}<br><em>{{ m.detail }}</em>{% endif %}</li>
{% endfor %}
</ul>

## 동문

<ul>
{% for m in alumni %}
  <li><strong>{{ m.name_kr | default: m.name }}</strong> ({{ m.name }}) — {{ m.role }}, {{ m.date }}{% if m.placement %} → {{ m.placement }}{% endif %}</li>
{% endfor %}
</ul>
