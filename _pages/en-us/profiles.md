---
page_id: profiles
layout: page
permalink: /people/
title: people
description: Members of the research group.
nav: true
nav_order: 2
---

## Principal Investigator

**Jeonggyu Huh (허정규)** — Associate Professor, Department of Mathematics, Sungkyunkwan University.
[CV]({{ '/cv/' | relative_url }}) · <a href="mailto:jghuh@skku.edu">jghuh@skku.edu</a>

{% assign postdocs = site.data.members.members | where: "group", "postdoc" %}
{% assign grads = site.data.members.members | where: "group", "grad" %}
{% assign undergrads = site.data.members.members | where: "group", "undergrad" %}
{% assign alumni = site.data.members.members | where: "group", "alumni" %}

## Postdoctoral Researchers

<ul>
{% for m in postdocs %}
  <li><strong>{{ m.name }}</strong>{% if m.name_kr %} ({{ m.name_kr }}){% endif %} — {{ m.role }}{% if m.detail %}<br><em>{{ m.detail }}</em>{% endif %}{% if m.scholar %} · <a href="{{ m.scholar }}">Google Scholar</a>{% endif %}</li>
{% endfor %}
</ul>

## Graduate Students

<ul>
{% for m in grads %}
  <li><strong>{{ m.name }}</strong>{% if m.name_kr %} ({{ m.name_kr }}){% endif %} — {{ m.role }}{% if m.detail %}<br><em>{{ m.detail }}</em>{% endif %}</li>
{% endfor %}
</ul>

## Undergraduate Students

<ul>
{% for m in undergrads %}
  <li><strong>{{ m.name }}</strong>{% if m.name_kr %} ({{ m.name_kr }}){% endif %} — {{ m.role }}{% if m.detail %}<br><em>{{ m.detail }}</em>{% endif %}</li>
{% endfor %}
</ul>

## Alumni

<ul>
{% for m in alumni %}
  <li><strong>{{ m.name }}</strong>{% if m.name_kr %} ({{ m.name_kr }}){% endif %} — {{ m.role }}, {{ m.date }}{% if m.placement %} → {{ m.placement }}{% endif %}</li>
{% endfor %}
</ul>
