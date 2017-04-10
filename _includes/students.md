  <h2>Sample Student Profiles</h2>
  <table>
   {% for student in site.students %}
   <tr>
     <td>
      <img src="{{ student.url }}/50h.jpg" alt="thumbnail" >
     </td>
     <td><a href="{{student.url}}">{{ student.name }}</a></td>
     </tr>
   {% endfor %}

  </table>
