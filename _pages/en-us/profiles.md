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

<div class="row align-items-center">
  <div class="col-4 col-md-3">
    <img src="{{ '/assets/img/prof_pic.png' | relative_url }}" alt="Jeonggyu Huh" class="img-fluid rounded z-depth-1" style="aspect-ratio:1/1;object-fit:cover;">
  </div>
  <div class="col-8 col-md-9">
    <strong>Jeonggyu Huh</strong> (허정규) — Associate Professor, Department of Mathematics, SKKU.<br>
    <a href="{{ '/cv/' | relative_url }}">CV</a> · <a href="mailto:jghuh@skku.edu">jghuh@skku.edu</a>
  </div>
</div>

## Postdoctoral Researchers

<div class="row row-cols-2 row-cols-md-4 g-4 mt-1">
{% for m in postdocs %}
  <div class="col text-center">
    {% if m.image %}<img src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" class="img-fluid rounded z-depth-1 mb-2" style="aspect-ratio:1/1;object-fit:cover;">{% endif %}
    <div><strong>{{ m.name }}</strong>{% if m.name_kr %} ({{ m.name_kr }}){% endif %}</div>
    <div class="text-muted" style="font-size:0.85em;">{{ m.role }}</div>
    {% if m.detail %}<div style="font-size:0.8em;">{{ m.detail }}</div>{% endif %}
    {% if m.scholar %}<a href="{{ m.scholar }}" style="font-size:0.8em;">Scholar</a>{% endif %}
  </div>
{% endfor %}
</div>

## Graduate Students

<div class="row row-cols-2 row-cols-md-4 g-4 mt-1">
{% for m in grads %}
  <div class="col text-center">
    {% if m.image %}<img src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" class="img-fluid rounded z-depth-1 mb-2" style="aspect-ratio:1/1;object-fit:cover;">{% endif %}
    <div><strong>{{ m.name }}</strong>{% if m.name_kr %} ({{ m.name_kr }}){% endif %}</div>
    <div class="text-muted" style="font-size:0.85em;">{{ m.role }}</div>
    {% if m.detail %}<div style="font-size:0.8em;">{{ m.detail }}</div>{% endif %}
  </div>
{% endfor %}
</div>

## Undergraduate Students

<div class="row row-cols-2 row-cols-md-4 g-4 mt-1">
{% for m in undergrads %}
  <div class="col text-center">
    {% if m.image %}<img src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" class="img-fluid rounded z-depth-1 mb-2" style="aspect-ratio:1/1;object-fit:cover;">{% endif %}
    <div><strong>{{ m.name }}</strong>{% if m.name_kr %} ({{ m.name_kr }}){% endif %}</div>
    <div class="text-muted" style="font-size:0.85em;">{{ m.role }}</div>
    {% if m.detail %}<div style="font-size:0.8em;">{{ m.detail }}</div>{% endif %}
  </div>
{% endfor %}
</div>

## Alumni

<ul>
{% for m in alumni %}
  <li><strong>{{ m.name }}</strong>{% if m.name_kr %} ({{ m.name_kr }}){% endif %} — {{ m.role }}, {{ m.date }}{% if m.placement %} → {{ m.placement }}{% endif %}</li>
{% endfor %}
</ul>
