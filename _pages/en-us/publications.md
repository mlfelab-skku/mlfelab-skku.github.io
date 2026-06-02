---
page_id: publications
layout: page
permalink: /publications/
title: papers
description: Submitted papers, then published papers by year.
nav: true
nav_order: 3
dropdown: true
children:
  - title: Published
    permalink: /publications/
  - title: "Papers in Progress"
    permalink: /papers-in-progress/
---

{% assign subs_pgdpo = site.data.papers.submitted | where: "pgdpo", true %}
{% assign subs_other = site.data.papers.submitted | where: "pgdpo", false %}
{% assign pub = site.data.papers.published %}
{% assign years = pub | map: "year" | uniq | sort | reverse %}

## Submitted

### PG-DPO
<ul class="pub-list">
{% for p in subs_pgdpo %}{% include paper_entry.liquid p=p %}{% endfor %}
</ul>

### Others
<ul class="pub-list">
{% for p in subs_other %}{% include paper_entry.liquid p=p %}{% endfor %}
</ul>

## Published

{% for y in years %}
### {{ y }}
<ul class="pub-list">
{% assign yp = pub | where: "year", y %}
{% for p in yp %}{% include paper_entry.liquid p=p %}{% endfor %}
</ul>
{% endfor %}

## Refereeing service

{% for r in site.data.papers.refereeing %}
### {{ r.year }}

{{ r.journals | join: " &middot; " }}
{% endfor %}
