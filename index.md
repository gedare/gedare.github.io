---
title: Gedare Bloom
nav_title: Home
layout: default
order: 1
---

# Gedare Bloom

Assistant Professor   
Director, Embedded Systems Security Lab  
Department of Computer Science  
University of Colorado at Colorado Springs  
gbloom uccs edu 

# Education

* Ph.D., Computer Science, The George Washington University, 2013
* M.S., Computer Science, The George Washington University, 2012
* B.S., Computer Science and Mathematics, Michigan Technological University, 2005

# Research

I investigate security problems in real-time embedded systems
and apply solutions across the hardware-software interface.

See more on my [research page](./research.html).

## Selected Publications

See more on my [publications page](./publications.html),
[CV (PDF)](./vitae-gedare.pdf), or on
[Google Scholar](https://scholar.google.com/citations?user=8ZBnSl4AAAAJ).
* H. Olufowobi, C. Young, J. Zambreno, and **G. Bloom**.
  *SAIDuCANT: Specification-based Automotive Intrusion Detection using Controller Area Network (CAN) Timing*,
  IEEE Transactions on Vehicular Technology, **IEEE TVT (JIF: 5.339)**
* M. Nasri, T. Chantem, **G. Bloom**, and R. Gerdes.
  *On the Limitations and Vulnerabilities of Schedule Randomization against Schedule-Based Attacks*,
  25th IEEE Real-Time and Embedded Technology and Applications Symposium,
  **RTAS'19 (25% acceptance)**
* J. Song, **G. Bloom**, and G. Parmer.
  *SuperGlue: IDL-Based, System-Level Fault Tolerance for Embedded Systems*,
  Proceedings of the 46th IEEE/IFIP International Conference on Dependable Systems and Networks,
  **DSN '16 (22% acceptance)**
  [PDF](./pdf/SonBlo16A.pdf)
  [bibtex](./bib/SonBlo16A.bib)
* **G. Bloom** and R. Simha.
  *Hardware-Enhanced Distributed Access Enforcement for Role-Based Access Control*,
  Proceedings of the 19th ACM Symposium on Access Control Models and Technologies, **SACMAT '14 (29% acceptance)**
  [PDF](./pdf/BloSim14A.pdf)
  [bibtex](./bib/BloSim14A.bib)
* **G. Bloom**, G. Parmer, B. Narahari, and R. Simha.
  *Shared Hardware Data Structures for Hard Real-Time Systems*,
  12th International Conference on Embedded Software, **EMSOFT '12 (24% acceptance)**,
  [PDF](./pdf/BloPar12A.pdf)
  [bibtex](./bib/BloPar12A.bib)

# Teaching

I develop and teach practical, hands-on courses in systems areas including
architecture, operating systems, real-time embedded systems, and security.

See more on my [teaching page](./teaching.html)

# News and Events

{% assign evts = site.data.news.events | sort:"date" | reverse %} 
{% for event in evts %}
{% assign ed = event.date | date: '%s' %}
* {{ event.date | date: "%B %-d, %Y" }} &nbsp; 
{%- if event.url -%} [**{{ event.title }}**]({{event.url}})
{%- else -%} **{{ event.title }}** {%- endif -%}
&nbsp; {{ event.description}}
{%- endfor -%}

