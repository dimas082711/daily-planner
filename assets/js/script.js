// header date display
function updateTime() {
    var headerDay = moment().format("dddd, MMMM Do");
    $("#currentDay").empty().append(headerDay); 
};

//schedule background colors
var colorSchedule = function() {
    // get current time
    var currentHour = moment().format("k");
    for (i = 8; i <= 17; i++) {
        // remove old classes 
        $(".schdeule" + i).removeClass("past present future");

        //apply new classes
        if (currentHour > i) {
            $(".schedule").addClass("past");
        } 
        else if (currentHour == i) {
         $(".schedule" + i).addClass("present");
        } 
        else {
            $(".schedule" + i).addClass("future")
        };
    };
};



updateTime();
colorSchedule();