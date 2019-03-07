---
title: Software
nav_title: Software
layout: default
order: 7
---

This page describes some of my open-source software projects and contributed
work. A lot of this software was written while conducting
[research](./research.html) projects.

I'm still working on organizing this material, and almost always writing
new code. Come back in awhile.

<!-- Template ...................................
<div class="box">
  <div class="boxtop">PROJECT_TITLE</div>
  <div class="boxp">
    PARAGRAPH DESCRIBING PROJECT
  </div> <br />
  <div class="boxp">
    OPTIONAL ADDL PARAGRAPH(S)
  </div><br />
</div>
..............................................-->

# RTEMS
I am an active contributor and committer to the
[RTEMS Project](www.rtems.org), an
open-source real-time operating system in use by industry, government,
academia, and hobbyists.

Some of the larger projects I've done include:
* Porting RTEMS to the sparc64.
  I wrote a description on my [blog](http://gedare-csphd.blogspot.com/2010/06/sparc-v9-sparc64-rtems.html).
  The [code](http://code.google.com/p/rtemssparc64/)
  is available on Google Code, and it has been merged upstream.

* Refactoring the thread scheduler. I wrote a description on my
  [blog](http://gedare-csphd.blogspot.com/2010/12/rtems-adding-new-scheduler.html).
  The [code](http://code.google.com/p/rtems-sched/)
  is available on Google Code, and it has been merged upstream.

Some unmerged or archival projects may be found as branches on my
[github fork](https://github.com/gedare/rtems).

I mentored the following student projects as part of Google Summer of Code or ESA Summer of Code in Space.
* Spencer Goodwin, <i>CTF Integration</i>, 2017.
  He worked toward using Common Trace Format (CTF) with the RTEMS Capture Engine and Trace Framework.

* Habeeb Olufowobi, <i>Porting RTEMS to ARM Cortex M4F</i>, 2016.
  He added a new board support package for the TM4C129x embedded system.
      
* Sambeet Panigrahi, <i>Porting ROCK on RTEMS</i>, 2016.
  He worked on updating prior efforts to get the ROCK robotic platform
  to work with RTEMS.
     
* Rohini Kulkarni, <i>Raspberry Pi 2 Support</i>, 2015.
  She ported RTEMS to work on the multicore Raspberry Pi 2.

* Hermann Felbinger, <i>Improve Code Coverage Analysis Meeting
  Aviation and Automotive Standards</i>, 2015. He worked on improving
  the code coverage analysis of RTEMS. This work resulted in a joint paper
  in the Real-time Linux Workshop.

* Saeed Ehteshamifar, <i>RTEMS Fault Tolerance Project</i>, 2015, 2016.
  He worked on adapting the Slingshot tool to generate
  fault injection campaigns for RTEMS.

* P&#345;emysl Houdek, <i>RTEMS port to Cortex &mdash; Rf4</i>, 2014.
  He ported RTEMS to an ARM board with two processors in lock-step mode
  for safety-critical systems.

* Hesham Moustafa Almatary,
  <i>Porting RTEMS to OpenRISC</i>, 2014;
  <i>Enhance low-level API of libmm</i>, 2013;
  <i>RTEMS MMU/MPU support for ARM architecture</i>, 2012.
  I have described some of his efforts on my blog:
  [MMU project](http://gedare-csphd.blogspot.com/2012/10/gsoc2012-mmu-project-and-musings.html) and
  [libmm](http://heshamelmatary.blogspot.com/2013/09/inside-low-level-details-of-rtemsmmu.html).
  The [2012](https://github.com/heshamelmatary/rtems-gsoc2012)
  and [2013](https://github.com/heshamelmatary/rtems-gsoc2013)
  code is available on github, and much of this work has been merged upstream.
  Hesham went to University of York for his Master's degree starting Fall 2014.
 
* Sree Harsha Konduri, <i>Global EDF Scheduler</i>, 2013. He wrote a
  new SMP scheduler using the existing framework at the time. The code was
  not merged because the SMP scheduler framework changed a lot afterward.

* Petr Benes.
  <i>Porting of resource reservation framework to RTEMS executive</i>, 2011.
  The [code](http://google-summer-of-code-2011-rtems.googlecode.com/files/petr_benes.tar.gz)
  is available in a tar ball and it has been merged upstream.
  Petr's project was a substantial portion of his
  [Master's thesis](http://support.dce.felk.cvut.cz/mediawiki/images/e/e5/Dp_2011_benes_petr.pdf)
  at the Czech Technical University in Prague.

# gem5
I hack on and make contributions (mostly bug fixes) to the
[gem5](http://www.m5sim.org/Main_Page) simulator.

# C++ STL Data Structure Profiling
I implemented some timing and operation counting within the gcc 4.7.1
(libstdc++) STL profile mode. The code is available on
[github](https://github.com/gedare/stlprof), but it was not merged upstream.
I updated some parts of it to 4.9.2, but the patch fell through
the cracks. I described this effort on my
[blog](http://gedare-csphd.blogspot.com/2013/01/profiling-c-applications-class.html).

# Fetch flagged email
I wrote [Python script](http://code.google.com/p/fetch-flagged-email/)
to ease downloading and applying git patches from gmail.

# Secure Bulletin Board
Stefan Popoveniuc and I implemented a secure bulletin board service for
electronic voting. I implemented the back-end consisting of cryptographic
multisignatures and majority-rule consensus among mutually untrusting servers
in C with the [Spread toolkit](www.spread.org).  Stefan implemented
the front-end.  The code is not currently available, but I might drop it on
github someday.

# Healthcare Informatics
As an applications analyst for 
[Bloom Road Consulting Group LLC](http://www.bloomroad.com/)
I wrote a handful of C++ data processing
applications, along with a number of scripts and modules for Word, Excel,
and Base. This software was all proprietary, although I do retain the right
to produce derivative works in most cases.

# Particulate Matter Segregation
As an industry-funded undergraduate research project, Justin Ter Avest and I
implemented a
[Monte Carlo simulation of particulate matter segregation](http://www.sciencedirect.com/science/article/pii/0032591086850057)
in Unified Parallel C (UPC). I implemented the back-end physics engine and
collision detection algorithms, and Justin implemented the graphics and
networking subsystems.  The code is not currently available; I have it
archived, but I am not certain about my intellectual property rights to it. At
any rate, I doubt anyone would find it terribly useful, but if you are curious
drop me a line and I can find out if I can share any of it.

# Driving Simulator: Super X Racer
4 fellow students and I implemented &quot;Super X Racer&quot;, a 3-D driving
simulation written in C++ with OpenGL and GLUT as a semester-long project in a
software development undergraduate class.  My primary responsibility was to
implement the physics engine, which included acceleration, braking, environment
interaction (friction, collision detection), and turning radius enforcement. We
all participated in the software requirements specification and design.  The
code is not currently available, although I think I have it somewhere on a CD.

# Diablo II Item Descriptor
My earliest released code was a relatively simple program that I wrote in High
School that let users explore the range of item modifiers in Diablo II.  I put
the software up on some fan-site that collected such applications.  It was
downloaded over a thousand times, which made me feel pretty cool at the time.
Of course, the users were probably hoping it actually was an item hack, which
it was not. (Much h8 for cheaters.) I never released the source code, although
I do still have it; I don't think it is particularly any good or useful.

