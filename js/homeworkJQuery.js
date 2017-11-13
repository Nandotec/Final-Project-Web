$(document).ready(load);
$(document).on("click", "#buttonHomework", add);

function load(){
	$.ajax({
    	url: "./files/homeworkPreloadService.php",
    	type: "POST",
    	dataType: "json",
    	success: function(JsonData){
    		var newHtml = "";
    		JsonData.forEach(function(entree){
				newHtml+= "<div>" + entree.content + "</div><br>";
    		})
    	  	$("#homeworkContent").append(newHtml);
    	}
      });
}

function add()
{	
	jsonToSend = {
		"uContent": $("#hwComment").val()
		};
	$.ajax({
    	url: "./files/homeworkService.php",
    	type: "POST",
    	data: jsonToSend,
    	ContentType: "application/json",
    	dataType: "json",
    	success: function(JsonData){
            var newHtml = "";
            newHtml+= "<div>" + JsonData.content + "</div><br>";
            $("#homeworkContent").append(newHtml);
    	}
      });
}