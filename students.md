---
title: Students
nav_title: Students
layout: default
order: 5
---

# Current Students

## Post-Doctoral Scholars
<ul>
{% for p in site.data.people.current.PostDoc %}
<li> {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}
{%- if p.url -%}</a>{%- endif -%}
{%- if p.degree -%}, &nbsp; {{ p.degree }} {%- endif -%}
</li>
{% endfor %}
</ul>

## PhD Students
<ul>
{% for p in site.data.people.current.PhD %}
<li> {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}
{%- if p.url -%}</a>{%- endif -%}
{%- if p.degree -%}, &nbsp; {{ p.degree }} {%- endif -%}
</li>
{% endfor %}
</ul>

## MS Students
<ul>
{% for p in site.data.people.current.MS %}
<li> {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}
{%- if p.url -%}</a>{%- endif -%}
{%- if p.degree -%}, &nbsp; {{ p.degree }} {%- endif -%}
</li>
{% endfor %}
</ul>

## Undergraduate Students
<ul>
{% for p in site.data.people.current.Undergraduate %}
<li> {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}
{%- if p.url -%}</a>{%- endif -%}
{%- if p.degree -%}, &nbsp; {{ p.degree }} {%- endif -%}
</li>
{% endfor %}
</ul>

# Alumni

## Post-Doctoral Scholars
<ul>
{% for p in site.data.people.past.PostDoc %}
<li> {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}
{%- if p.url -%}</a>{%- endif -%}
&nbsp; First employment: {{ p.first_employment }}.
</li>
{% endfor %}
</ul>

## PhD Students
<ul>
{% for p in site.data.people.past.PhD %}
<li> {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}
{%- if p.url -%}</a>{%- endif -%}
{%- if p.degree -%}, &nbsp; {{ p.degree }} {%- endif -%}
&nbsp; First employment: {{ p.first_employment }}.
</li>
{% endfor %}
</ul>

## MS Students
<ul>
{% for p in site.data.people.past.MS %}
<li> {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}
{%- if p.url -%}</a>{%- endif -%}
{%- if p.degree -%}, &nbsp; {{ p.degree }} {%- endif -%}
</li>
{% endfor %}
</ul>

## Undergraduate Students
<ul>
{% for p in site.data.people.past.Undergraduate %}
<li> {%- if p.url -%}<a href="{{ p.url }}">{%- endif -%}
{{ p.name }}
{%- if p.url -%}</a>{%- endif -%}
{%- if p.degree -%}, &nbsp; {{ p.degree }} {%- endif -%}
</li>
{% endfor %}
</ul>

