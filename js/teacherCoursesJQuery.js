$(document).ready(preloadManagedCourses);
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

          console.log(JsonData);
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



$(document).on("click",".courseEntree",function() {
        var txt=$(this).text();
        console.log(txt);

        jsonToSend={
            "course":txt
        };

        console.log(jsonToSend);

        $.ajax({
            url:"./files/courseSessionService.php",
            type:"POST",
            data:jsonToSend,
            ContentType:"application/json",
            dataType:"json",

            success:function(jsonData){

             document.location.href = "discussionBoard.html";
            }
        })
    });


