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
*Some pdf links are broken because I cannot redistribute the text; feel free
to ask me for an author copy and I will try to oblige.*



{% assign mypubs = site.data.pubs.references | reverse %}
{% assign months = "January February March April May June July August September October November December &nbsp; " | split: ' ' %}
{% assign types = "thesis chapter article-journal paper-conference" | split: ' ' %}
{% assign type-sect = "Theses,Book Chapters,Journal Articles,Conference and Workshop Papers" | split: ',' %}

{% assign t-index = -1 %}
{% for type in types %}
{% assign t-index = t-index | plus: 1 %}
{% assign index = 0 %}
# {{ type-sect[t-index] }}
{% for pub in mypubs %}
{%- if pub.type == type -%}
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
{%- if pub.URL -%} [{{ pub.title }}]({{ pub.URL }})
{%- elsif pub.DOI -%} [{{ pub.title }}](https://dx.doi.org/{{ pub.DOI }})
{%- else -%} {{ pub.title }}
{%- endif -%}
*,
{%- if pub.container-title -%} &nbsp; in {{ pub.container-title }},{%- endif -%}
{%- if pub.volume -%} &nbsp; vol. {{ pub.volume }},{%- endif -%}
{%- if pub.issue -%} &nbsp; iss. {{ pub.issue }},{%- endif -%}
{%- if pub.page -%} &nbsp; pp. {{ pub.page }},{%- endif -%}
{%- if pub.publisher -%} &nbsp; {{ pub.publisher }},{%- endif -%}
{%- for date in pub.issued -%}
{% assign midx = date.month | plus: -1 %}
{{ months[midx] }}
{{ date.year }}
{%- endfor -%}
{%- assign pdffile = "./pdf/" | append: pub.id | append: ".pdf" | remove: ":" -%}
{%- if pdffile -%} [&#91; pdf &#93;]({{pdffile}}){%- endif -%}
{% assign mypubs = site.data.pubs.references | reverse %}
{%- endif -%}
{% endfor %}
{% endfor %}


# Notice

This material is presented to ensure timely dissemination of scholarly and
technical work. Copyright and all rights therein are retained by authors or by
other copyright holders. All persons copying this information are expected to
adhere to the terms and constraints invoked by each author's copyright. In most
cases, these works **may not be reposted** without the explicit permission
of the copyright holder.

