  <h2>Sample Student Profiles</h2>
  <table>
  <thead>
  <tr><th>pic</th><th>name</th><th>year</th></tr>
  </thead>
<tbody>
{% for student in site.students %}
   <tr>

    <td class="pic">
      <img src="{{ student.url }}/50h.jpg" alt="thumbnail" >
     </td>
     <td class="name"><a href="{{student.url}}">{{ student.name }}</a></td>
     <td class="year">{{student.year}}</td>
     </tr>
   {% endfor %}
</tbody>
  </table>
