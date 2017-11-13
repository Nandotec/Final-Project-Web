$(document).ready(loadTeachers)
$(document).on("click", ".teacherEntree", loadTeacherProfile);

function loadTeachers(){
	$.ajax({
    	url: "./files/teacherPreloadService.php",
    	type: "POST",
    	dataType: "json",
    	success: function(JsonData){
    		var newHtml = "";
    		JsonData.forEach(function(entree){
				newHtml+= "<li class='teacherEntree'>"
				newHtml+= entree.courseName;
				newHtml+= "</li>"
    		})
    	  	$("#orderedTeacherList").append(newHtml);
    	}
      });
}

function loadTeacherProfile(){

	var jsonToSend = {
		"uCourseName" : $(this).text()
	};
	$.ajax({
  		url: "./files/teacherProfileService.php",
    	type: "POST",
    	data: jsonToSend,
    	ContentType: "application/json",
    	dataType: "json",
		success: function(profInfo){
				$("#fNameSpan").text(profInfo.firstName);
				$("#lNameSpan").text(profInfo.lastName);
				$("#emailSpan").text(profInfo.email);
				$("#genderSpan").text(profInfo.gender);
				$("#countrySpan").text(profInfo.country);
			},
 	 error: function(eMessage) {
    	      alert(eMessage.statusText);
        }	
  });
}