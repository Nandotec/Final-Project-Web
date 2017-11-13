$("#addCourse").click(addCourse);

function addCourse(){
	if($("#idClass").val() != "" && $("#nombreClass").val() != "")
	{
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

		var delay = 100;
		setTimeout(function(){
		var jsonToSend = {
		"uFirstName": firstName,
		"uLastName": lastName,
    	"uId": $("#idClass").val(),
        "uName": $("#nombreClass").val()
    	};
		$.ajax({
    	url: "./files/addCourseService.php",
    	type: "POST",
    	data: jsonToSend,
    	ContentType: "application/json",
    	dataType: "json",
    	success: function(JsonData){
    	  	alert("Your course has been added succesfully.");
    	}
      });
	}, delay);
		
	}
}