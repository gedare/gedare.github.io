---
title: Publications
nav_title: Pubs
layout: default
order: 4
---

This page is presented in reverse chronological order. 
Please refer to my [Research](./research.html) page for a more
cohesive and organized approach that highlights my publications in the context
of the specific research problems that they address.

<!--
# Notice

This material is presented to ensure timely dissemination of scholarly and
technical work. Copyright and all rights therein are retained by authors or by
other copyright holders. All persons copying this information are expected to
adhere to the terms and constraints invoked by each author's copyright. In most
cases, these works **may not be reposted** without the explicit permission
of the copyright holder.

# Publications
-->


{% assign mypubs = site.data.pubs.references | reverse %}
{% assign months = "January February March April May June July August September October November December &nbsp; " | split: ' ' %}

# Theses
{% for pub in mypubs %}
{%- if pub.type == 'thesis' -%}
{% assign index = index | plus: 1 %}
{{ index }}. &nbsp; 
  {%- for author in pub.author -%}
    {%- if author.family == 'Bloom' -%}
    **{{ author.given }} {{ author.family }}**, &nbsp;
    {%- else -%}
    {{ author.given }} {{ author.family }}, &nbsp;
    {%- endif -%}
  {%- endfor -%}
  &nbsp; *
  {%- if pub.URL -%}[{{ pub.title }}]({{ pub.URL }})
  {%- elsif pub.DOI -%}[{{ pub.title }}](https://dx.doi.org/{{ pub.DOI }})
  {%- else -%}{{ pub.title }}
  {%- endif -%}
  *,
  {{ pub.publisher }},
  {%- for date in pub.issued -%}
    {% assign midx = date.month | plus: -1 %}
    {{ months[midx] }}
    {{ date.year }}.
  {%- endfor -%}
{%- endif -%}
{% endfor %}

# Book Chapters
{% for pub in mypubs %}
{%- if pub.type == 'chapter' -%}
{% assign index = index | plus: 1 %}
{{ index }}. &nbsp; 
  {%- for author in pub.author -%}
    {%- if author.family == 'Bloom' -%}
    **{{ author.given }} {{ author.family }}**, &nbsp;
    {%- else -%}
    {{ author.given }} {{ author.family }}, &nbsp;
    {%- endif -%}
  {%- endfor -%}
  &nbsp; *
  {%- if pub.URL -%}[{{ pub.title }}]({{ pub.URL }})
  {%- elsif pub.DOI -%}[{{ pub.title }}](https://dx.doi.org/{{ pub.DOI }})
  {%- else -%}{{ pub.title }}
  {%- endif -%}
  *,
  {{ pub.container-title }},
  pp. {{ pub.page }},
  {{ pub.publisher }},
  {%- for date in pub.issued -%}
    {% assign midx = date.month | plus: -1 %}
    {{ months[midx] }}
    {{ date.year }}.
  {%- endfor -%}
{%- endif -%}
{% endfor %}



# Journals
{% for pub in mypubs %}
{%- if pub.type == 'article-journal' -%}
{% assign index = index | plus: 1 %}
{{ index }}. &nbsp; 
  {%- for author in pub.author -%}
    {%- if author.family == 'Bloom' -%}
    **{{ author.given }} {{ author.family }}**, &nbsp;
    {%- else -%}
    {{ author.given }} {{ author.family }}, &nbsp;
    {%- endif -%}
  {%- endfor -%}
  &nbsp; *
  {%- if pub.URL -%}[{{ pub.title }}]({{ pub.URL }})
  {%- elsif pub.DOI -%}[{{ pub.title }}](https://dx.doi.org/{{ pub.DOI }})
  {%- else -%}{{ pub.title }}
  {%- endif -%}
  *,
  {{ pub.container-title }},
  vol. {{ pub.volume }},
  iss. {{ pub.issue }},
  pp. {{ pub.page }},
  {%- for date in pub.issued -%}
    {% assign midx = date.month | plus: -1 %}
    {{ months[midx] }}
    {{ date.year }}.
  {%- endfor -%}
{%- endif -%}
{% endfor %}

# Conferences and Workshops
{% for pub in mypubs %}
{%- if pub.type == 'paper-conference' -%}
{% assign index = index | plus: 1 %}
{{ index }}. &nbsp; 
  {%- for author in pub.author -%}
    {%- if author.family == 'Bloom' -%}
    **{{ author.given }} {{ author.family }}**, &nbsp;
    {%- else -%}
    {{ author.given }} {{ author.family }}, &nbsp;
    {%- endif -%}
  {%- endfor -%}
  &nbsp; *
  {%- if pub.URL -%}[{{ pub.title }}]({{ pub.URL }})
  {%- elsif pub.DOI -%}[{{ pub.title }}](https://dx.doi.org/{{ pub.DOI }})
  {%- else -%}{{ pub.title }}
  {%- endif -%}
  *,
  {{ pub.container-title }},
  pp. {{ pub.page }},
  {%- for date in pub.issued -%}
    {% assign midx = date.month | plus: -1 %}
    {{ months[midx] }}
    {{ date.year }}.
  {%- endfor -%}
{%- endif -%}
{% endfor %}



