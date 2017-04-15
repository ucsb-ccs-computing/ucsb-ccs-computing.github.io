  <h2>Sample Alumni Profiles</h2>

  <table>
    <thead>
  <tr><th>pic</th><th>name</th><th>affiliation</th><th>city</th></tr>
  </thead>

<tbody>

{% for alum in site.alumni %}
   <tr>
     <td class="pic">
      <img src="{{ alum.url }}50h.jpg" alt="thumbnail" >
     </td>
     <td class="name"><a href="{{alum.url}}">{{ alum.name }}</a></td>
     <td class="affiliation">{{alum.affiliation}}</td>
          <td class="city">{{alum.city}}</td>	
     </tr>
   {% endfor %}
  </tbody>
  </table>

