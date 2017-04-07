---
title: UCSB CCS Computing
---

<div id="about" data-role="collapsible" data-collapsed="true" markdown="1">
<h2>About CCS Computing</h2>

The College of Creative Studies (CCS) Computing Program provides a small, tight-knit community of talented, passionate, self-directed learners in the context of a major research university. Our program provides well-prepared students an accelerated path through the "lower division" curriculum so that they can move quickly into advanced courses offered both in the CCS and the College of Engineering’s CS Department, which is one of the highest ranked CS departments in the nation. Our goal: early involvement of students in research and creative activity.

</div>

<div id="about" data-role="collapsible" data-collapsed="true" markdown="1">
<h2>About this website</h2>
This site is maintained in this github repo: <{{ site.github_url }}>, and is based on Github Pages, Jekyll, and JQuery Mobile.   Members of the CCS Computing community are encourage to help keep the content up to date by forking and doing pull requests. 
</div>


<div id="students" data-role="collapsible" data-collapsed="false">
  <h2>Students</h2>
  <ul>
   {% for student in site.students %}
     <li {% if student.indent %} class="indent" {% endif %}><a href="{{student.url}}">{{ student.name }}</a></li>
   {% endfor %}
  </ul>
</div>

<div id="alumni" data-role="collapsible" data-collapsed="false">
  <h2>Alumni</h2>
  <ul>
   {% for alum in site.alumni %}
     <li {% if alum.indent %} class="indent" {% endif %}><a href="{{alum.url}}">{{ alum.name }}</a></li>
   {% endfor %}
  </ul>
</div>



<div id="faculty" data-role="collapsible" data-collapsed="false">
  <h2>Faculty</h2>
  <ul>
   {% for person in site.faculty %}
     <li {% if person.indent %} class="indent" {% endif %}><a href="{{person.url}}">{{ person.name }}</a></li>
   {% endfor %}
  </ul>
</div>

<div id="publications" data-role="collapsible" data-collapsed="false">
  <h2>Publications by CCS Computing Students</h2>
  <p>CCS student authors are in bold.</p>
  <ul>
  <li>#NotOkay: Understanding Gender-based Violence in Social Media
  Mai Elsherief, Elizabeth Belding and <b>Dana Nguyen</b>.    International AAAI Conference on Web and Social Media (ICWSM) 2017, May 2017, Montreal, Canada.</li>
  
    <li>Joseph McMahan, Michael Christensen, Lawton Nichols, <b>Jared Roesch</b>, <b>Sung-Yee Guo</b>, Ben Hardekopf, and Timothy Sherwood. 2017. An Architecture Supporting Formal and Compositional Binary Analysis. In Proceedings of the Twenty-Second International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS '17). ACM, New York, NY, USA, 177-191. DOI: <a href="https://doi.org/10.1145/3037697.3037733">https://doi.org/10.1145/3037697.3037733</a></li>

<li>
Kyle Dewey, <b>Jared Roesch</b>, and Ben Hardekopf. 2015. Fuzzing the Rust Typechecker Using CLP (T). In Proceedings of the 2015 30th IEEE/ACM International Conference on Automated Software Engineering (ASE) (ASE '15). IEEE Computer Society, Washington, DC, USA, 482-493. DOI=<a href="http://dx.doi.org/10.1109/ASE.2015.65">http://dx.doi.org/10.1109/ASE.2015.65</a>
</li>


<li>Kyle Dewey, <b>Jared Roesch</b>, and Ben Hardekopf. 2014. Language fuzzing using constraint logic programming. In Proceedings of the 29th ACM/IEEE international conference on Automated software engineering (ASE '14). ACM, New York, NY, USA, 725-730. DOI=<a href="http://dx.doi.org/10.1145/2642937.2642963">
http://dx.doi.org/10.1145/2642937.2642963</a></li>

<li>
Vineeth Kashyap, Kyle Dewey, <b>Ethan A. Kuefner</b>, <b>John Wagner</b>, <b>Kevin Gibbons</b>, John Sarracino, Ben Wiedermann, and Ben Hardekopf. 2014. JSAI: a static analysis platform for JavaScript. In Proceedings of the 22nd ACM SIGSOFT International Symposium on Foundations of Software Engineering (FSE 2014). ACM, New York, NY, USA, 121-132.
DOI:
<a href="http://dx.doi.org/10.1145/2635868.2635904">
http://dx.doi.org/10.1145/2635868.2635904
</a>

</li>


<li>
Madhukar N. Kedlaya, <b>Jared Roesch</b>, Behnam Robatmili, Mehrdad Reshadi, and Ben Hardekopf. 2013. Improved type specialization for dynamic scripting languages. In Proceedings of the 9th symposium on Dynamic languages (DLS '13). ACM, New York, NY, USA, 37-48.

DOI=
<a href="http://dx.doi.org/10.1145/2508168.2508177">
http://dx.doi.org/10.1145/2508168.2508177
</a>

</li>

<li>
Vineeth Kashyap, John Sarracino, <b>John Wagner</b>, Ben Wiedermann, and Ben Hardekopf. 2013. Type refinement for static analysis of JavaScript. In Proceedings of the 9th symposium on Dynamic languages (DLS '13). ACM, New York, NY, USA, 17-26. DOI=
<a href="http://dx.doi.org/10.1145/2508168.2508175">
http://dx.doi.org/10.1145/2508168.2508175
</a>
</li>



  </ul>
</div>


<!--

<div id="topics" data-role="collapsible" data-collapsed="false">
  <h2>Topics</h2>
  <ul>
   {% for topic in site.topics %}
     <li {% if topic.indent %} class="indent" {% endif %}><a href="{{topic.url}}">{{ topic.topic }}</a>&mdash;{{topic.desc}}</li>
   {% endfor %}
  </ul>
</div>


<div id="resources" data-role="collapsible" data-collapsed="false">
  <h2>Resources</h2>
  <ul>
   {% for topic in site.resources %}
     <li {% if topic.indent %} class="indent" {% endif %}><a href="{{topic.url}}">{{ topic.topic }}</a>&mdash;{{topic.desc}}</li>
   {% endfor %}
  </ul>
</div>

-->