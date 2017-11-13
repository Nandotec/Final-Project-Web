$(document).ready(load);
$(document).on("click", ".addButton", add);

function load(){
	$.ajax({
    	url: "./files/joinCoursePreloadService.php",
    	type: "POST",
    	dataType: "json",
    	success: function(JsonData){
    		var newHtml = "";
    		JsonData.forEach(function(entree){
				newHtml+= "<tr>"
				newHtml+= "<td>" + entree.courseName + "</td>"
                newHtml+= "<td>" + entree.courseId + "</td>"
				newHtml+= "<td>" + entree.firstName + " " + entree.lastName + "</td>"
				newHtml+= "<td><button class= 'addButton'>+</button></td>"
				newHtml+= "</tr>"
    		})
    	  	$("#courseTable").append(newHtml);
    	}
      });
}

function add()
{
    var courseId = $(this).parent().parent().find('td').eq(1).text();
    var limitReached = 0;
    $.ajax({
        url: "./files/addLimitStudentCourseService.php",
        type: "POST",
        dataType: "json",
        success: function(JsonData){
            if(JsonData == "true")
            {
                limitReached = 1;
                alert("Limit has been reached, remove classes before adding a new one.");
            }
        }
      });
    delay = 50;
    setTimeout(function(){
    if(limitReached == 0)
	{
        jsonToSend = {
		  "uCourseId": courseId
		  };
	    $.ajax({
    	   url: "./files/addStudentCourseService.php",
    	   type: "POST",
    	   data: jsonToSend,
    	   ContentType: "application/json",
    	   dataType: "json",
    	   success: function(JsonData){
    	  	alert("The Class has been added");
    	}
        });
    } 
    }, delay);
    $(this).parent().parent().remove();
}