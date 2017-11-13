$(document).ready(load);
$(document).on("click", ".dropButton", drop);

function load(){
	$.ajax({
    	url: "./files/studentCourseService.php",
    	type: "POST",
    	dataType: "json",
    	success: function(JsonData){
    		var newHtml = "";
    		JsonData.forEach(function(entree){
				newHtml+= "<tr>"
				newHtml+= "<td><strong>" + entree.courseName + "</strong></td>"
                newHtml+= "<td>" + entree.courseId + "</td>"
				newHtml+= "<td>" + entree.firstName + " " + entree.lastName + "</td>"
				newHtml+= "<td>"+ entree.firstScore + "</td>"
				newHtml+= "<td>" + entree.secondScore + "</td>"
				newHtml+= "<td>" + entree.finalScore + "</td>"
				newHtml+= "<td><button class= 'dropButton'>X</button></td>"
				newHtml+= "</tr>"
    		})
    	  	$("#courseTable").append(newHtml);
    	}
      });
}

function drop()
{
    var courseId = $(this).parent().parent().find('td').eq(1).text();
	
	jsonToSend = {
		"uCourseId": courseId
		};
	$.ajax({
    	url: "./files/deleteStudentCourseService.php",
    	type: "POST",
    	data: jsonToSend,
    	ContentType: "application/json",
    	dataType: "json",
    	success: function(JsonData){
    	  	alert("The Class has been removed");
    	}
      });
	$(this).parent().parent().remove();
}