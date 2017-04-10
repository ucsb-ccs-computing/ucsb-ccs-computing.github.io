  <h2>Sample Alumni Profiles</h2>

  <table>
   {% for alum in site.alumni %}
   <tr>
     <td>
      <img src="{{ alum.url }}/50h.jpg" alt="thumbnail" >
     </td>
     <td><a href="{{alum.url}}">{{ alum.name }}</a></td>
     </tr>
   {% endfor %}

  </table>

