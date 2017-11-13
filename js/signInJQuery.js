$("#homeButton").click(home);
$("#aboutButton").click(about);
$("#contactButton").click(contact);
$("#signupButton").click(signup);
$("#loginButton").click(login);
$("#registerButton").click(register);
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

function register()
{
  if($("#passwordInput").val() != "" && $("#fNameInput").val() != "" && $("#lNameInput").val() != "" &&
    $("#emailInput").val() != "" && $("input[name = optradio]").is(":checked") && $("input[name = optradio2]").is(":checked") && 
    $("#countrySelect").prop('selectedIndex') != "0")
  {
        $("#emailMessage").text("");
        $("#passwordMessage").text("");
        $("#fNameMessage").text("");
        $("#lNameMessage").text("");
        $("#countryMessage").text("");
        $("#typeMessage").text("");
        $("#genderMessage").text("");
	   var jsonToSend = {
        	"uPassword": $("#passwordInput").val(),
        	"uFirstName": $("#fNameInput").val(),
        	"uLastName": $("#lNameInput").val(),
        	"uEmail": $("#emailInput").val(),
        	"uCountry" : $("#countrySelect").val(),
        	"uGender" : $("input[type='radio'][name='optradio']:checked").val(),
        	"uType" : $("input[type='radio'][name='optradio2']:checked").val()
      	};

      	$.ajax({
        	url: "./files/registerUserService.php",
        	type: "POST",
        	data: jsonToSend,
        	ContentType: "application/json",
        	dataType: "json",
        	success: function(jsonData) {
         		alert("USER HAS BEEN REGISTERED CORRECTLY. WELCOME: " + jsonData.firstName + " " + jsonData.lastName + ".");
          		document.location.href = "homePage.html";
        	},
        	error: function(eMessage) {
          	alert(eMessage.statusText);
        	}
      	});
      }
    else{
        $("#emailMessage").text("");
        $("#passwordMessage").text("");
        $("#fNameMessage").text("");
        $("#lNameMessage").text("");
        $("#countryMessage").text("");
        $("#typeMessage").text("");
        $("#genderMessage").text("");
      if($("#passwordInput").val() == "")
      {
          $("#passwordMessage").text("Fill in your password");
      }
      if($("#fNameInput").val() == "")
      {
          $("#fNameMessage").text("Fill in your first name");
      }
      if( $("#lNameInput").val() == "")
      {
          $("#lNameMessage").text("Fill in your last name");
      }
      if($("#emailInput").val() == "")
      {
          $("#emailMessage").text("Fill in your email");
      }
      if(!$("input[name = optradio]").is(":checked"))
      {
          $("#genderMessage").text("Choose a gender");
      }
      if(!$("input[name = optradio2]").is(":checked"))
      {
          $("#typeMessage").text("Choose a type");
      }
      if($("#countrySelect").prop('selectedIndex') == "0")
      {
          $("#countryMessage").text("Choose a country");
      }
    }
}