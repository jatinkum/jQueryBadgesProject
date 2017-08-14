$(function() {

  // your code will go here
    $.ajax({
    url: 'https://www.codeschool.com/users/jatin258.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var arrCourseComp =response.courses.completed;
      var $badges=$('#badges');
      $.each(arrCourseComp,function(key,value){

      	
      	var course=$('<div/>',{
      		'class':'course'
      	}).appendTo($badges);
      	
      	$('<h3 />',{
      		'text':value.title
      	}).appendTo(course);

      	$('<img />',{
      		'src':value.badge
      	}).appendTo(course);

      	$('<a />',{
      		href:value.url,
      		target:"_blank",
      		text:"See Course",
      		'class':'btn btn-primary'
      	}).appendTo(course);
      	
      });
    }
  });

});
