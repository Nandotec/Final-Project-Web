$(document).ready(loadContent);
var studentHtml = "<ul class='nav navbar-nav'>"
studentHtml += "<li id = 'homeButton'> <a href='#''>Home</a></li>"
studentHtml += "<li id = 'profile'> <a href='#''>Profile</a></li>"
studentHtml += "<li id = 'coursesStudent'> <a href='#''>Courses</a></li>"
studentHtml += "<li id = 'teachers'> <a href='#''>Teachers</a></li>"
studentHtml += "<li id = 'joinCourse'> <a href='#''>Join Course</a></li>"
studentHtml += "<li id = 'aboutButton' > <a href='#''>About</a></li>"
studentHtml += "<li id = 'contactButton'> <a href='#''>Contact</a></li>"
studentHtml += "</ul>"

var teacherHtml = "<ul class='nav navbar-nav'>"
teacherHtml += "<li id = 'homeButton'> <a href='#'>Home</a></li>"
teacherHtml += "<li id = 'profile'> <a href='#'>Profile</a></li>"
teacherHtml += "<li id = 'coursesTeacher'> <a href='#'>Courses</a></li>"
teacherHtml += "<li id = 'newCourse'> <a href='#'>New Courses</a></li>"
teacherHtml += "<li id = 'grades'> <a href='#'>Grades</a></li>"
teacherHtml += "<li id = 'aboutButton' > <a href='#'>About</a></li>"
teacherHtml += "<li id = 'contactButton'> <a href='#'>Contact</a></li>"
teacherHtml += "</ul>"

function loadContent(){
	$.ajax({
  		url: "./files/typeService.php",
		type: "POST",
		dataType: "json",
		success: function(profInfo){
			console.log(profInfo.type);
				if(profInfo.type == "Teacher")
				{
					$("#barContainer").append(teacherHtml);
				}
				else if (profInfo.type == "Student")
				{
					$("#barContainer").append(studentHtml);
				}

			},
 	 error: function(eMessage) {
    	      alert(eMessage.statusText);
        }	
  });
}