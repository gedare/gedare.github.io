---
title: Students
nav_title: Students
layout: default
order: 5
---

# Current Students

## Post-Doctoral Scholars
<table>
{% tablerow p in site.data.people.current.PostDoc cols:3 %}
{% if p.url %}<a href="{{ p.url }}">{% endif %}
<img src="{{ p.pic }}" alt="{{ p.name }}" title="{{ p.name }}" style="width:150px;" /><br />
{{ p.name }}<br />
{% if p.url %}</a>{% endif %}
{{ p.degree }}
{% endtablerow %}
</table>

## PhD Students
<table>
{% tablerow p in site.data.people.current.PhD cols:3 %}
{% if p.url %}<a href="{{ p.url }}">{% endif %}
<img src="{{ p.pic }}" alt="{{ p.name }}" title="{{ p.name }}" style="width:150px;" /><br />
{{ p.name }}<br />
{% if p.url %}</a>{% endif %}
{{ p.degree }}
{% endtablerow %}
</table>

## MS Students
<table>
{% tablerow p in site.data.people.current.MS cols:3 %}
{% if p.url %}<a href="{{ p.url }}">{% endif %}
<img src="{{ p.pic }}" alt="{{ p.name }}" title="{{ p.name }}" style="width:150px;" /><br />
{{ p.name }}<br />
{% if p.url %}</a>{% endif %}
{{ p.degree }}
{% endtablerow %}
</table>

## Undergraduate Students

<table>

{% tablerow p in site.data.people.current.Undergraduate cols:3 %}
{% if p.url %}<a href="{{ p.url }}">{% endif %}
<img src="{{ p.pic }}" alt="{{ p.name }}" title="{{ p.name }}" style="width:150px;" /><br />
{{ p.name }}<br />
{% if p.url %}</a>{% endif %}
{{ p.degree }}
{% endtablerow %}
</table>

# Alumni

## PhD Students
<table>
{% tablerow p in site.data.people.past.PhD cols:3 %}
{% if p.url %}<a href="{{ p.url }}">{% endif %}
<img src="{{ p.pic }}" alt="{{ p.name }}" title="{{ p.name }}" style="width:150px;" /><br />
{{ p.name }}<br />
{% if p.url %}</a>{% endif %}
{{ p.degree }}
{% endtablerow %}
</table>

## MS Students
<table>
{% tablerow p in site.data.people.past.MS cols:3 %}
{% if p.url %}<a href="{{ p.url }}">{% endif %}
<img src="{{ p.pic }}" alt="{{ p.name }}" title="{{ p.name }}" style="width:150px;" /><br />
{{ p.name }}<br />
{% if p.url %}</a>{% endif %}
{{ p.degree }}
{% endtablerow %}
</table>

## Undergraduate Students

<table>

{% tablerow p in site.data.people.past.Undergraduate cols:3 %}
{% if p.url %}<a href="{{ p.url }}">{% endif %}
<img src="{{ p.pic }}" alt="{{ p.name }}" title="{{ p.name }}" style="width:150px;" /><br />
{{ p.name }}<br />
{% if p.url %}</a>{% endif %}
{{ p.degree }}
{% endtablerow %}

</table>

