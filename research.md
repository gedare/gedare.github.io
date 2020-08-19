---
title: Research
nav_title: Research
layout: default
order: 2
---

<!--
See also my **research statement
[(HTML)](./bloom-research-statement.html)
[(PDF)](./bloom-research-statement.pdf)**.
-->

This page describes my research projects more-or-less in
reverse chronological order. See also my
[publications](publications.html) and [software](software.html).

# Overview
My research area is in real-time/embedded systems (RT/ES) focusing on the
cross-cutting concerns of security and predictability.  My research applies the
areas of operating systems, computer architecture, computer security, and
programming languages/compilers.

To conduct RT/ES research, I have developed experimental infrastructures using
modified cycle-accurate processor simulators including
[SimpleScalar](http://www.simplescalar.com/),
[GEMS](http://research.cs.wisc.edu/gems/), and
[gem5](http://www.gem5.org/Main_Page).
With these simulators I have used bare-metal, the Linux kernel,
[Composite OS](http://composite.seas.gwu.edu/), and the
[RTEMS](http://www.rtems.org/) real-time operating system to evaluate
my research.

# Automotive Cyber Security
<table>
<tr>
  <td style="border: 0px;"><img src="img/NSF_4-Color_bitmap_Logo.png" alt="National Science Foundation" style="width:100px;" /></td>
  <td style="border: 0px;">Supported in part by NSF 
  [CNS 1646317](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1646317)
  and
  [CNS 2011620](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2011620).
  </td>
</tr>
</table>


This project investigates security protocols and mechanisms that maintain safe operations for network-connected and autonomous automotive vehicles. I am currently pursuing two broad directions:
1. Develop algorithms and methods for an in-vehicle network
      intrusion detection system that can detect attacks on the (CAN) network
      and transition vehicular subsystems into fail-safe/fail-operational modes.
1. Improve our understanding of the attack surface that a connected car
      exposes and the vulnerabilities that may be exploited remotely.

### Papers
{% assign mypubs = site.data.pubs.references | reverse %}
{%- for pub in mypubs -%}
{%- assign keywords = pub.keyword | split: ", " -%}
{% if keywords contains "automotive security" %}
* &nbsp;
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
{%- if pub.issued.month -%}
{%- assign midx = issue.month | plus: -1 -%}
&nbsp; {{ months[midx] }}
{%- endif -%}
{%- if issue.year -%} &nbsp; {{ issue.year }}{%- endif -%}
.
{%- assign pdffile = "./pdf/" | append: pub.id | append: ".pdf" | remove: ":" -%}
&nbsp; [&#91; pdf &#93;]({{pdffile}}) 

{%- endif -%}
{% endfor %}


# Hardware Data Structures
For my dissertation, I studied hardware support (circuit-level parallelism) for
improving the performance of data structures. I investigated how OS support
helps applications to use the hardware, and applied my methods to real-time
systems (GPS navigation, image processing) and distributed access control.

### Papers
* <b>G. Bloom</b>, R. Simha.
      <i>Hardware-Enhanced Distributed Access Enforcement for
        Role-Based Access Control</i>,
      Proceedings of the 19th ACM Symposium on Access Control Models
      and Technologies, SACMAT '14, June 2014.
* <b>G. Bloom</b>. 
    "Operating System Support for Shared Hardware Data Structures", 
    Dissertation Thesis, The George Washington University, 2012.
* <b>G. Bloom</b>, G. Parmer, B. Narahari, and R. Simha.
      <i>Shared Hardware Data Structures for Hard Real-Time Systems</i>,
      12th International Conference on Embedded Software, EMSOFT 2012,
      October 2012.
* <b>G. Bloom</b>, G. Parmer, B. Narahari, and R. Simha. 
<i>Real-Time Scheduling with Hardware Data Structures</i>,
Work-in-Progress Session, IEEE Real-Time Systems Symposium, 2010. RTSS 2010. December 2010.


# Untrusted IC Fabrication&mdash;IC Supply Chain
A newer field of study is the problem of malicious changes made to integrated
circuits (IC or chip).  These malicious changes, called Trojan circuits (or
hardware Trojans), are an active area of study.  Trojan circuits are a problem
because ICs are manufactured in untrusted semiconductor fabrication plants
(fabs or foundries).  Untrusted fabrication also introduces the threats of
intellectual property (IP) theft and counterfeit or cloned chips.
    
I looked into methods of active detection of Trojan circuit behavior at
runtime; my work is contrary to most other research, which focuses on detection
in a lab setting.  By adding some simple, verifiable hardware logic at the
board level (plug a card in to your motherboard), we can detect Trojan circuits
when they make their move.
    
I also propose novel methods for fabs to increase trust in their processes
by adding audit and tracking mechanisms.

### Papers
* <b>G. Bloom</b>, B. Narahari, R. Simha, A. Namazi, and R. Levy
  <i>FPGA SoC Architecture and Runtime to Prevent Hardware Trojans from Leaking
  Secrets</i>,
  2015 IEEE International Workshop on Hardware-Oriented Security and Trust, HOST 2015. 
* <b>G. Bloom</b>, B. Narahari, R. Simha, and J. Zambreno. 
  <i>Providing secure execution environments with a last line of defense 
    against Trojan circuit attacks</i>, Computers &amp; Security, vol. 28, no. 7, pp. 660-669,
  October 2009. 
* <b>G. Bloom</b>, B. Narahari, and R. Simha.
  <i>OS Support for Detecting Trojan Circuit Attacks</i>, hst, pp. 100-103,
  2009 IEEE International Workshop on Hardware-Oriented Security and Trust, HOST 2009. 
* <b>G. Bloom</b>, B. Narahari, and R. Simha.
  <i>Fab Forensics: Increasing Trust in IC Fabrication</i>,
  IEEE International Conference on Technologies for Homeland Security, 2010. 
  HST '10.

# Hardware Containers for Software Security
In the hardware containers project, I worked closely with Eugen Leontie and
others to investigate hardware approaches for fine-grained memory access
control. Our solution enables software developers to enforce memory protection
in software components as small as C functions.  Our code is available on
GitHub with a [modified SimpleScalar](https://github.com/gedare/containers_simplescalar) and [modified GEMS](https://github.com/gedare/GEMS).

### Papers
* E. Leontie, <b>G. Bloom</b>, R. Simha,
      <i>Hardware and Software Support for Fine-Grained Memory Access Control
      and Encapsulation in C++</i>,
      ACM SIGPLAN Systems, Programming, Languages and Applications: Software
      for Humanity (SPLASH 2013), October 2013.
* E. Leontie, <b>G. Bloom</b>, B. Narahari, and R. Simha.
      <i>No Principal Too Small: Memory Access Control for Fine-Grained
        Protection Domains</i>,
      15th Euromicro Conference on Digital System Design, DSD 2012,
      September 2012.

* E. Leontie, <b>G. Bloom</b>, R.Simha.
  <i>Automation for Creating and Configuring Security Manifests for Hardware Containers</i>,
  4th Symposium on Configuration Analytics and Automation, SafeConfig 2011,
  October 2011.

* E. Leontie, <b>G. Bloom</b>, O. Gelbart, B. Narahari, and R. Simha. 
  <i>A Compiler-Hardware Technique for Protecting Against Buffer Overflow Attacks</i>, 
  Journal of Information Assurance and Security (JIAS),
   vol. 5, no. 1, pp. 1-8, 2010.

* E. Leontie, <b>G. Bloom</b>, B. Narahari, R. Simha, and J. Zambreno. 
  <i>Hardware Containers for Software Components: A Trusted Platform for COTS-Based Systems</i>, 
  2009 IEEE/IFIP International Symposium on Trusted Computing and Communications, TRUSTCOM 2009, 
  August 2009.
* E. Leontie, <b>G. Bloom</b>, B. Narahari, R. Simha, and J. Zambreno. <i>Hardware-enforced
    Fine-grained Isolation of Untrusted Code</i>, Proceedings of the Workshop on Secure Execution 
  of Untrusted Code (SecuCode), November 2009.

# Distributed Systems
My research career started out in parallel programming with the
[MTU UPC Group](http://www.upc.mtu.edu/) and distributed systems with
Jonathan Stanton's project, the [Spread Messaging Toolkit](http://www.spread.org/).
Although I did not go very far along this path, the general area
continues to interest me.

## Secure Bulletin Board (SecBB)
Critical to many electronic voting systems, a 
secure bulletin board provides append-only, globally-visible storage.
Verifying operations with a secure bulletin board is simple:
post items to the board and the entire world can verify their contents.
Unfortunately, most current implementations require
trusting a central (third) party.

One approach could use replicated servers and copy posted
messages to each replica.  Then, a majority of messages that are 
read exactly the same are taken as the correct message.  I have implemented
such a service, using a group messaging system and some cryptographic 
primitives. If a majority of the servers are correct, a posted message
will remain immutable.  Although the implementation is not
production-quality, initial performance results are promising for even 
large precinct elections (4 million voters).

## Mixnet Privacy
The gap between the practical and theoretical number of permutations that can
be generated using a pseudorandom number generator (PRNG), when combined with
randomized partial checking, introduces privacy loss.  However, the privacy
loss is of a theoretical nature: as long as the PRNG maintains the seed entropy
at a level that is computationally infeasible to brute-force, then this gap
does not indicate loss of privacy.
### Papers
* <b>G. Bloom</b> and S. Popoveniuc. 
    <i>Information Leakage in Mix Networks with Randomized Partial Checking</i>,
    2009 International Conference on Information Security and Privacy, ISP-09, July 2009.

<!--
<div class="box">
  <div class="boxtop">People</div>
  <div class="boxp">
    Advisors:
    <ul>
      <li><a href="http://www.seas.gwu.edu/~narahari/">Bhagi Narahari</a></li>
      <li><a href="http://www.seas.gwu.edu/~simha/">Rahul Simha</a></li>
      <li><a href="http://www.seas.gwu.edu/~jstanton/">Jonathan Stanton</a>&ndash;former advisor</li>
      <li><a href="http://www.admin.mtu.edu/urel/ttoday/?issue=20140630#remembering-steve-seidel">Steve Seidel</a>&ndash;Undergrad research advisor</li>
    </ul>

    Collaborators:
<ul>
  <li><a href="http://www.seas.gwu.edu/~gparmer/">Gabriel Parmer</a></li>
  <li><a href="http://www.ece.iastate.edu/~zambreno/">Joseph Zambreno</a></li>
  <li><a href="http://www.leko.ro/">Eugen Leontie</a></li>
  <li>Olga Chen (Gelbart)</li>
  <li><a href="http://home.gwu.edu/~poste/">Stefan Popoveniuc</a></li>
  <li><a href="http://www.seas.gwu.edu/~guruv/">Guru Venkataramani</a></li>
  <li><a href="http://joelsherrill.com/">Joel Sherrill</a></li>
</ul>
  </div>
</div>
-->

## Disclaimers

  * The opinions, findings, and conclusions or recommendations expressed are
    those of the author(s) and do not necessarily reflect the views of the
    National Science Foundation.

  * Any opinions, findings, and conclusions or recommendations expressed in
    this material are those of the authors and should not be interpreted as
    necessarily representing the official policies, either expressed or
    implied, of the U.S.  Department of Homeland Security.

