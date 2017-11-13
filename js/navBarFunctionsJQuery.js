$(document).on('click', '#homeButton', home);
$(document).on('click', '#profile', profile);
$(document).on('click', '#coursesStudent', coursesStudent);
$(document).on('click', '#teachers', teachers);
$(document).on('click', '#joinCourse', joinCourse);
$(document).on('click', '#coursesTeacher', coursesTeacher);
$(document).on('click', '#grades', grades);
$(document).on('click', '#newCourse', newCourse);
$(document).on('click', '#aboutButton', aboutButton);
$(document).on('click', '#contactButton', contactButton);
$("#logout").click(logout);

function home()
{
	document.location.href = "homePage.html";
}

function profile()
{
	document.location.href = "userProfile.html";
}

function coursesStudent()
{
	document.location.href = "courseProfile.html";
}

function teachers()
{
	document.location.href = "teacherProfile.html";
}

function joinCourse()
{
	document.location.href = "joinCourse.html";
}

function coursesTeacher()
{
	document.location.href = "courseMaestro.html";
}

function grades()
{
	document.location.href = "grading.html";
}

function newCourse()
{
	document.location.href = "addCourse.html";
}

function aboutButton()
{
	document.location.href = "about.html";
}

function contactButton()
{
	document.location.href = "contact.html";
}

function logout()
{
	$.ajax({
  		url: "./files/logoutService.php",
		type: "POST",
		dataType: "json",
		success: function(session){
			if(session.active == "false")
			{
				document.location.href = "login.html";
			}
		}
	});
}