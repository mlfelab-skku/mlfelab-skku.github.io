---
page_id: talks
layout: page
permalink: /talks/
title: talks
description: Invited talks, seminars, and conference presentations.
nav: true
nav_order: 4
---

{% assign cur = 0 %}
{% for t in site.data.talks %}
  {% if t.year != cur %}
    {% unless forloop.first %}</ul></section>{% endunless %}
    {% assign cur = t.year %}
    <section class="talks-section"><h2>{{ t.year }}</h2><ul>
  {% endif %}
  <li>{% if t.kind %}<span class="talk-type">{{ t.kind }}</span>{% endif %}<strong>{{ t.title }}</strong> <span class="talk-venue">&mdash; {{ t.venue }}{% if t.duration %} ({{ t.duration }}){% endif %}, {{ t.year }}</span>{% if t.scheduled %} <span class="pub-status">scheduled</span>{% endif %}</li>
  {% if forloop.last %}</ul></section>{% endif %}
{% endfor %}

<h2>Organizing Committee (selected)</h2>

<ul class="pub-list">
{% for o in site.data.organizing %}
  <li><span class="pub-title">{{ o.title }}</span>{% if o.year %} <span class="talk-venue">&mdash; {{ o.year }}</span>{% endif %}{% if o.url %} <span class="pub-links"><a href="{{ o.url }}">Link</a></span>{% endif %}</li>
{% endfor %}
</ul>
