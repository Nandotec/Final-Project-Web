$("#homeButton").click(home);
$("#aboutButton").click(about);
$("#contactButton").click(contact);
$("#signupButton").click(signup);
$("#loginButton").click(login);
$("#logButton").click(signin);

function home()
{
	document.location.href = "landingpage.html";
}

function about()
{
	document.location.href = "landingpage.html";
}

function contact()
{
	document.location.href = "landingpage.html";
}

function signup()
{
	document.location.href = "signin.html";
}

function login()
{
	document.location.href = "login.html";
}

function signin()
{
    if($("#emailField").val() != "" && $("#passwordField").val() != "")
    {
        $("#emailMessage").text("");
        $("#passwordMessage").text("");
	var jsonToSend = {
    	"uEmail": $("#emailField").val(),
        "uPassword": $("#passwordField").val()
    	};
	$.ajax({
    	url: "./files/loginService.php",
    	type: "POST",
        data: jsonToSend,
        ContentType: "application/json",
        dataType: "json",
    	success: function(JsonData){
    	  	alert("Welcome Back, " + JsonData.firstName + " " + JsonData.lastName + ".");
      		document.location.href = "userProfile.html";
    	},
        error: function(errorData){
            alert("User not registered. Try again");
        }
      });
    }
    else
    {
        if($("#emailField").val() == "")
        {
            $("#emailMessage").text("Fill in your email");
        }
        if($("#passwordField").val() == "")
        {
            $("#passwordMessage").text("Fill in your password");
        }
    }
}


