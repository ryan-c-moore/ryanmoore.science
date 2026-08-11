---
permalink: /research/
title: "Research"
---

## Publications

{% assign pubs = site.data.publications | where: "status", "published" | sort: "year" | reverse %}
{% assign all_tags = "" | split: "," %}
{% for pub in site.data.publications %}
  {% assign all_tags = all_tags | concat: pub.tags %}
{% endfor %}
{% assign unique_tags = all_tags | uniq %}

{% comment %} Fixed display order for the filter buttons below. If you introduce a new tag, add it here too — otherwise it just gets appended at the end. {% endcomment %}
{% assign tag_order = "older-adults,media-consumption,misinformation,scams,interventions,ai,computational-methods" | split: "," %}
{% assign ordered_tags = "" | split: "," %}
{% for tag in tag_order %}
  {% if unique_tags contains tag %}
    {% assign single = tag | split: "," %}
    {% assign ordered_tags = ordered_tags | concat: single %}
  {% endif %}
{% endfor %}
{% for tag in unique_tags %}
  {% unless tag_order contains tag %}
    {% assign single = tag | split: "," %}
    {% assign ordered_tags = ordered_tags | concat: single %}
  {% endunless %}
{% endfor %}
{% assign unique_tags = ordered_tags %}

<p class="pub-note">* indicates co-first authorship</p>

<div class="tag-filter">
  <button data-tag="all" class="active">All</button>
  {% for tag in unique_tags %}
  <button data-tag="{{ tag }}">{{ tag | replace: '-', ' ' }}</button>
  {% endfor %}
</div>

<ul class="pub-list">
  {% for pub in pubs %}
  <li class="pub-item" data-tags="{{ pub.tags | join: ',' }}">
    <img class="pub-thumb" src="{{ pub.image | default: '/assets/pubs/placeholder.svg' | relative_url }}" alt="">
    <div class="pub-body">
      <p class="pub-title">{{ pub.title }}</p>
      <p class="pub-meta">
        <em>{{ pub.venue }}</em>, {{ pub.year }}<br>
        {{ pub.authors | replace: "Moore, R.C.", "<strong>Moore, R.C.</strong>" }}
      </p>
      <p class="pub-links">
        {% for link in pub.links %}<a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }}</a>{% endfor %}
        {% if pub.blurb %}<button class="pub-toggle">nutshell description</button>{% endif %}
      </p>
      {% if pub.awards %}
      <p class="pub-meta">{% for a in pub.awards %}Award: {{ a }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}</p>
      {% endif %}
      {% if pub.coverage %}
      <p class="pub-meta">Coverage: {% for c in pub.coverage %}{% if c.url and c.url != "#" %}<a href="{{ c.url }}" target="_blank" rel="noopener">{{ c.label }}</a>{% else %}{{ c.label }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
      {% endif %}
      {% if pub.blurb %}<p class="pub-blurb">{{ pub.blurb }}</p>{% endif %}
    </div>
  </li>
  {% endfor %}
</ul>

{% assign working_papers = site.data.publications | where_exp: "p", "p.status != 'published'" %}
{% if working_papers.size > 0 %}
<div class="working-papers">
  <h2>Working Papers</h2>
  {% for wp in working_papers %}
  <div class="wp-item" data-tags="{{ wp.tags | join: ',' }}">
    <p class="pub-title">{{ wp.title }}</p>
    <p class="wp-status">
      {% if wp.status == 'conditionally_accepted' %}Conditionally Accepted at <em>{{ wp.venue }}</em>
      {% elsif wp.status == 'in_revision' %}Revise &amp; Resubmit
      {% else %}Under Review{% endif %}
    </p>
    <p class="pub-meta">{{ wp.authors | replace: "Moore, R.C.", "<strong>Moore, R.C.</strong>" }}</p>
    {% if wp.links %}
    <p class="pub-links">{% for link in wp.links %}<a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }}</a>{% endfor %}</p>
    {% endif %}
    {% if wp.awards %}
    <p class="pub-meta">{% for a in wp.awards %}Award: {{ a }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}</p>
    {% endif %}
  </div>
  {% endfor %}
</div>
{% endif %}

<h2 id="dissertation-heading">Dissertation</h2>

<div class="wp-item" data-tags="older-adults,misinformation,interventions,media-consumption">
  <p class="pub-title">Short Educational Videos Improve Older Adults' Digital Literacy and Resilience to Online Deception at Scale</p>
  <p class="pub-meta">Stanford University, 2025<br>Winner of the Nathan Maccoby Outstanding Dissertation Award</p>
  <p class="pub-links"><a href="https://purl.stanford.edu/vn678vq6064" target="_blank" rel="noopener">Link</a></p>
</div>

<script src="{{ '/assets/js/pubs.js' | relative_url }}"></script>
