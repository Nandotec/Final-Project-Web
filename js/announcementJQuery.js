$(document).ready(load);
$(document).on("click", "#buttonAnnouncement", add);

function load(){
	$.ajax({   
    	url: "./files/announcementPreloadService.php",
    	type: "POST",
    	dataType: "json",
    	success: function(JsonData){
    		var newHtml = "";
    		JsonData.forEach(function(entree){
				newHtml+= "<div>" + entree.content + "</div><br>";
    		})
    	  	$("#announcementsContent").append(newHtml);
    	}
      });
}

function add()
{	
	jsonToSend = {
		"uContent": $("#announComment").val()
		};
	$.ajax({
    	url: "./files/announcementService.php",
    	type: "POST",
    	data: jsonToSend,
    	ContentType: "application/json",
    	dataType: "json",
    	success: function(JsonData){
            var newHtml = "";
            newHtml+= "<div>" + $("#announComment").val() + "</div><br>";
            $("#announcementsContent").append(newHtml);
    	}
      });
}