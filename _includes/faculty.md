  <h2>Sample Faculty Profiles</h2>
  <table>
   {% for person in site.faculty %}
   <tr>
     <td>
      <img src="{{ person.url }}/50h.jpg" alt="thumbnail" >
     </td>
     <td><a href="{{person.url}}">{{ person.name }}</a></td>
     </tr>
   {% endfor %}

  </table>
