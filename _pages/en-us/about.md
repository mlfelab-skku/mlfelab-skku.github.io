---
page_id: about
layout: about
title: professor
permalink: /professor/
nav: true
nav_order: 0
dropdown: true
children:
  - title: profile
    permalink: /professor/
  - title: talks
    permalink: /talks/
  - title: projects
    permalink: /projects/
  - title: teaching
    permalink: /teaching/
  - title: cv
    permalink: /cv/
subtitle: Associate Professor, Department of Mathematics, <a href='https://www.skku.edu/'>Sungkyunkwan University</a>

profile:
  align: right
  image: prof_pic.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Department of Mathematics</p>
    <p>#31313, Natural Science Building 1</p>
    <p>Sungkyunkwan University, Suwon, Korea</p>
    <p><a href="mailto:jghuh@skku.edu">jghuh@skku.edu</a></p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # news lives on the lab home
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<span class="eyebrow">Financial Mathematics &amp; Machine Learning</span>

<p class="lab-tagline">Welcome! I&rsquo;m interested in making financial mathematics <em>work</em> in high-dimensional settings. I bridge elegant theory and the reality of constrained, frictional, and uncertain markets. I develop structure-preserving learning methods that make dynamic portfolio choice deployable in practice.</p>

<div>
  <span class="brand-tag">PG-DPO</span>
  <span class="brand-tag">Dynamic portfolio choice</span>
  <span class="brand-tag">Deep hedging</span>
  <span class="brand-tag">Asset pricing</span>
  <span class="brand-tag">Stochastic control</span>
</div>

<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 my-4">
  <div class="col">
    <a class="section-card" href="{{ '/research/' | relative_url }}">
      <i class="section-card-icon fa-solid fa-flask"></i>
      <div class="section-card-title">Research</div>
      <p class="section-card-desc">Overview of our methods and themes.</p>
    </a>
  </div>
  <div class="col">
    <a class="section-card" href="{{ '/publications/' | relative_url }}">
      <i class="section-card-icon fa-solid fa-book"></i>
      <div class="section-card-title">Papers</div>
      <p class="section-card-desc">Published papers, preprints, and code.</p>
    </a>
  </div>
  <div class="col">
    <a class="section-card" href="{{ '/people/' | relative_url }}">
      <i class="section-card-icon fa-solid fa-users"></i>
      <div class="section-card-title">People</div>
      <p class="section-card-desc">Faculty, researchers, and students.</p>
    </a>
  </div>
  <div class="col">
    <a class="section-card" href="{{ '/join/' | relative_url }}">
      <i class="section-card-icon fa-solid fa-door-open"></i>
      <div class="section-card-title">Join us</div>
      <p class="section-card-desc">For prospective students.</p>
    </a>
  </div>
</div>
