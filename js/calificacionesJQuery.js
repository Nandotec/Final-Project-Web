$("#firstPartialButton").click(firstPartial);
$("#secondPartialButton").click(secondPartial);
$("#finalButton").click(final);

function firstPartial()
{
	if($("#firstPartial").val() <= 100 && $("#firstPartial").val() >= 0 && $("#firstPartial").val() != "")
	{
		var jsonToSend = {
        "uGrade": $("#firstPartial").val()
    	};
		$.ajax({
    	url: "./files/firstPartialService.php",
    	type: "POST",
        data: jsonToSend,
        ContentType: "application/json",
        dataType: "json",
    	success: function(JsonData){
			alert("The student's grade has been updated");
			$("#firstPartial").val("");
    	}
      });
	} else
	{
		alert("Provide a value with 0 and 100");
		$("#firstPartial").val("");
	}
}

function secondPartial()
{
	if($("#secondPartial").val() <= 100 && $("#secondPartial").val() >= 0 && $("#secondPartial").val() != "")
	{
		var jsonToSend = {
        "uGrade": $("#secondPartial").val()
    	};
		$.ajax({
    	url: "./files/secondPartialService.php",
    	type: "POST",
        data: jsonToSend,
        ContentType: "application/json",
        dataType: "json",
    	success: function(JsonData){
			alert("The student's grade has been updated");
			$("#secondPartial").val("");
    	}
      });
	} else
	{
		alert("Provide a value with 0 and 100");
		$("#secondPartial").val("");
	}
}

function final()
{
	if($("#final").val() <= 100 && $("#final").val() >= 0 && $("#final").val() != "")
	{
		var jsonToSend = {
        "uGrade": $("#final").val()
    	};
		$.ajax({
    	url: "./files/finalScoreService.php",
    	type: "POST",
        data: jsonToSend,
        ContentType: "application/json",
        dataType: "json",
    	success: function(JsonData){
			alert("The student's grade has been updated");
			$("#final").val("");
    	}
      });
	}
	else
	{
		alert("Provide a value with 0 and 100");
		$("#final").val("");
	}
}
