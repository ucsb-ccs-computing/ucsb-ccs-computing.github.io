var data = {
    "students": [
	{% for student in site.students %}
	{
	    "name" : "{{ student.name }}",
	    "year" :  "{{ student.year }}",
	    "url" :  "{{ student.url }}",
	},
	{% endfor %}
    ],
    "alumni": [
	{% for alum in site.alumni %}
	{
	    "name" : "{{ alum.name }}",
	    "affiliation" :  "{{ alum.affiliation }}",
	    "city" :  "{{ alum.city }}",
	    "url" :  "{{ alum.url }}",
	},
	{% endfor %}
    ],
    "faculty": [
	{% for person in site.faculty %}
	{
	    "name" : "{{ person.name }}",
	    "url" :  "{{ person.url }}",
	},
	{% endfor %}
    ],
};

data.pathname_to_object = {};

$.each( data.students, function( index, student ) {
    student.prev = data.students[((index + data.students.length) - 1) % (data.students.length)]
    student.next = data.students[((index + data.students.length) + 1) % (data.students.length)];
    student.data_students_index = index;
    data.pathname_to_object[student.url]=student;
});

$.each( data.alumni, function( index, alum ) {
    alum.prev = data.alumni[((index + data.alumni.length) - 1) % (data.alumni.length)]
    alum.next = data.alumni[((index + data.alumni.length) + 1) % (data.alumni.length)];
    alum.data_alumni_index = index;
    data.pathname_to_object[alum.url]=alum;
});

$.each( data.faculty, function( index, person ) {
    person.prev = data.faculty[((index + data.faculty.length) - 1) % (data.faculty.length)]
    person.next = data.faculty[((index + data.faculty.length) + 1) % (data.faculty.length)];
    person.data_faculty_index = index;
    data.pathname_to_object[person.url]=person;
});
