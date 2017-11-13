$(document).ready(preloadManagedCourses);
$(document).on("click", ".courseEntree", loadAlumni);
$(document).on("click", ".firstNameButton", grades);
$(document).on("click", ".dropButton", drop);
var currentLoadedCourse = "";

function preloadManagedCourses(){
    var firstName = "";
    var lastName = "";
    $.ajax({
    url: "./files/profileInfoService.php",
    type: "POST",
    dataType: "json",
    success: function(profInfo){
        firstName = profInfo.firstName;
        lastName = profInfo.lastName;
    }
    });

    var delay = 250;
    setTimeout(function(){
        var jsonToSend = {
        "uFirstName": firstName,
        "uLastName": lastName
    };
    $.ajax({
        url: "./files/coursePreloadService.php",
        type: "POST",
        data: jsonToSend,
        ContentType: "application/json",
        dataType: "json",
        success: function(JsonData){
            var newHtml = "";
            JsonData.forEach(function(entree){
                newHtml+= "<li class='courseEntree'>"
                newHtml+= entree.courseName;
                newHtml+= "</li>"
            })
            $("#orderedCourseList").append(newHtml);
        }
      });
    }, delay);
}

function loadAlumni(){
    $("#studentTable").children().remove();
    var newHtml = "";
    newHtml += "<tr>";
    newHtml += "<th>Student Name</th>"
    newHtml += "<th>Student Email</th>"
    newHtml += "<th>Partial 1</th>"
    newHtml += "<th>Partial 2</th>"
    newHtml += "<th>Final Exam</th>"
    newHtml += "<th>Drop Student</th>"
    newHtml += "</tr>"; 

    var jsonToSend = {
        "uCourseName": $(this).text()
    };
    $.ajax({
    	url: "./files/studentListService.php",
        type: "POST",
        data: jsonToSend,
        ContentType: "application/json",
        dataType: "json",
    	success: function(JsonData){
    		JsonData.forEach(function(entree){
				newHtml+= "<tr>"
				newHtml+= "<td class = 'firstNameButton'><strong>" + entree.firstName + " " + entree.lastName + "</strong></td>"
				newHtml+= "<td>" + entree.email + "</td>"
				newHtml+= "<td>"+ entree.firstScore + "</td>"
				newHtml+= "<td>" + entree.secondScore + "</td>"
				newHtml+= "<td>" + entree.finalScore + "</td>"
				newHtml+= "<td><button class= 'dropButton'>X</button></td>"
				newHtml+= "</tr>"
                currentLoadedCourse = entree.courseId;
    		})
    	  	$("#studentTable").append(newHtml);
    	},
        error: function(error)
        {
            $("#studentTable").append(newHtml);
        }
      });
}

function grades(){
    var jsonToSend = {
        "uGradingEmail": $(this).parent().find("td").eq(1).text(),
        "uGradingCourse" : currentLoadedCourse
    };
    $.ajax({
        url: "./files/gradeSessionService.php",
        type: "POST",
        data: jsonToSend,
        ContentType: "application/json",
        dataType: "json",
        success: function(JsonData){
            document.location.href = "calificaciones.html";
        }
    });
}

function drop()
{
    var email = $(this).parent().parent().find('td').eq(1).text();
    
    jsonToSend = {
        "uEmail": email,
        "uCourseId": currentLoadedCourse
        };
    $.ajax({
        url: "./files/dropStudentCourseService.php",
        type: "POST",
        data: jsonToSend,
        ContentType: "application/json",
        dataType: "json",
        success: function(JsonData){
            alert("The student has been removed");
        }
      });
    $(this).parent().parent().remove();
}