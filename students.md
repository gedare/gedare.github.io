---
title: Students
nav_title: Students
layout: default
order: 5
---

This page is [also available with pictures](./students-img.html).

# Current Students

## Post-Doctoral Scholars
{% for p in site.data.people.current.PostDoc %}
1. {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}, 
{%- if p.url -%}</a>{%- endif -%}
{{ p.degree }}
{% endfor %}

## PhD Students
{% for p in site.data.people.current.PhD %}
1. {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}, 
{%- if p.url -%}</a>{%- endif -%}
{{ p.degree }}
{% endfor %}

## MS Students
{% for p in site.data.people.current.MS %}
1. {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}, 
{%- if p.url -%}</a>{%- endif -%}
{{ p.degree }}
{% endfor %}

## Undergraduate Students
{% for p in site.data.people.current.Undergraduate %}
1. {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}, 
{%- if p.url -%}</a>{%- endif -%}
{{ p.degree }}
{% endfor %}

# Alumni

## PhD Students
{% for p in site.data.people.past.PhD %}
1. {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}, 
{%- if p.url -%}</a>{%- endif -%}
{{ p.degree }}. First employment: {{ p.first_employment }}.
{% endfor %}

## MS Students
{% for p in site.data.people.past.MS %}
1. {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}, 
{%- if p.url -%}</a>{%- endif -%}
{{ p.degree }}
{% endfor %}

## Undergraduate Students
{% for p in site.data.people.past.Undergraduate %}
1. {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}, 
{%- if p.url -%}</a>{%- endif -%}
{{ p.degree }}
{% endfor %}


