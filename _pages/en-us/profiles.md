---
page_id: profiles
layout: page
permalink: /people/
title: people
description: Members of the research group.
nav: true
nav_order: 2
---

{% assign postdocs = site.data.members.members | where: "group", "postdoc" %}
{% assign grads = site.data.members.members | where: "group", "grad" %}
{% assign undergrads = site.data.members.members | where: "group", "undergrad" %}
{% assign alumni = site.data.members.members | where: "group", "alumni" %}

## Principal Investigator

<div class="row align-items-center my-2">
  <div class="col-4 col-md-3">
    <img src="{{ '/assets/img/prof_pic.png' | relative_url }}" alt="Jeonggyu Huh" class="img-fluid rounded z-depth-1" style="aspect-ratio:1/1;object-fit:cover;">
  </div>
  <div class="col-8 col-md-9">
    <div style="font-size:1.2rem;font-weight:600;">Jeonggyu Huh <span style="font-weight:400;color:var(--global-text-color-light);">(허정규)</span></div>
    <div style="color:var(--global-text-color-light);">Associate Professor, Department of Mathematics, SKKU</div>
    <div class="mt-1"><a href="{{ '/cv/' | relative_url }}">CV</a> · <a href="mailto:jghuh@skku.edu">jghuh@skku.edu</a></div>
  </div>
</div>

## Postdoctoral Researchers

<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-1">
{% for m in postdocs %}
  <div class="col">
    <div class="member-card h-100">
      {% if m.image %}<img class="member-photo" src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" loading="lazy">{% endif %}
      <div class="member-name">{{ m.name }}{% if m.name_kr %} <span class="member-name-kr">({{ m.name_kr }})</span>{% endif %}</div>
      <div class="member-role">{{ m.role }}</div>
      {% if m.detail %}<div class="member-detail">{{ m.detail }}</div>{% endif %}
      {% if m.scholar %}<div class="member-links"><a href="{{ m.scholar }}">Scholar</a></div>{% endif %}
    </div>
  </div>
{% endfor %}
</div>

## Graduate Students

<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-1">
{% for m in grads %}
  <div class="col">
    <div class="member-card h-100">
      {% if m.image %}<img class="member-photo" src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" loading="lazy">{% endif %}
      <div class="member-name">{{ m.name }}{% if m.name_kr %} <span class="member-name-kr">({{ m.name_kr }})</span>{% endif %}</div>
      <div class="member-role">{{ m.role }}</div>
      {% if m.detail %}<div class="member-detail">{{ m.detail }}</div>{% endif %}
    </div>
  </div>
{% endfor %}
</div>

## Undergraduate Students

<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-1">
{% for m in undergrads %}
  <div class="col">
    <div class="member-card h-100">
      {% if m.image %}<img class="member-photo" src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" loading="lazy">{% endif %}
      <div class="member-name">{{ m.name }}{% if m.name_kr %} <span class="member-name-kr">({{ m.name_kr }})</span>{% endif %}</div>
      <div class="member-role">{{ m.role }}</div>
      {% if m.detail %}<div class="member-detail">{{ m.detail }}</div>{% endif %}
    </div>
  </div>
{% endfor %}
</div>

## Alumni

<ul>
{% for m in alumni %}
  <li><strong>{{ m.name }}</strong>{% if m.name_kr %} ({{ m.name_kr }}){% endif %} — {{ m.role }}, {{ m.date }}{% if m.placement %} → {{ m.placement }}{% endif %}</li>
{% endfor %}
</ul>
