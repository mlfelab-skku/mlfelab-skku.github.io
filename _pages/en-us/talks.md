---
page_id: talks
layout: page
permalink: /talks/
title: talks
description: Invited talks, seminars, and conference presentations.
nav: true
nav_order: 4
---

{% assign talks = site.data.talks %}
{% assign years = talks | map: "year" | uniq | sort | reverse %}
{% for y in years %}
## {{ y }}

<ul>
{% assign yt = talks | where: "year", y %}
{% for t in yt %}
  <li><strong>{{ t.title }}</strong> — {{ t.venue }}{% if t.location %}, {{ t.location }}{% endif %}</li>
{% endfor %}
</ul>
{% endfor %}
