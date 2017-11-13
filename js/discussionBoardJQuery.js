$(document).ready(load);
$(document).on("click", "#buttonDiscussion", add);

function load(){
	$.ajax({
    	url: "./files/discussionBoardPreloadService.php",
    	type: "POST",
    	dataType: "json",
    	success: function(JsonData){
    		var newHtml = "";
    		JsonData.forEach(function(entree){
                newHtml+= "<div><strong>" + entree.email + "</strong></div><br>";
				newHtml+= "<div>" + entree.content + "</div><br>";
    		})
    	  	$("#discussionBoardContent").append(newHtml);
    	}
      });
}

function add()
{	
	jsonToSend = {
		"uContent": $("#discussionComment").val()
		};
	$.ajax({
    	url: "./files/discussionBoardService.php",
    	type: "POST",
    	data: jsonToSend,
    	ContentType: "application/json",
    	dataType: "json",
    	success: function(JsonData){
            var newHtml = "";
            newHtml+= "<div><strong>" + JsonData.email + "</strong></div><br>";
            newHtml+= "<div>" + JsonData.content + "</div><br><br>";
            $("#discussionBoardContent").append(newHtml);
    	}
      });
}