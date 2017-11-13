$(document).ready(loadContent);

function loadContent(){
	$.ajax({
  		url: "./files/profileInfoService.php",
		type: "POST",
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