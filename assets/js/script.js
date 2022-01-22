// header date display
function updateTime() {
    var headerDay = moment().format("dddd, MMMM Do");
    $("#currentDay").empty().append(headerDay); 
};

//schedule background colors
var colorSchedule = function() {
    // get current time
    var currentHour = moment().format("k");
    for (i = 9; i <= 17; i++) {
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

//save to localStorage
$(".time-block").on("click", ".saveBtn", function() {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(hour, text);
});

// load from local storage to page
var loadSchedule = function(text) {
    for (i = 9; i <= 17; i++) {
        $(".schedule" + i)[0].value = retrieveText("schedule" + i);
    };
};

//retrieve from localStorage
var retrieveText = function(text) {
    if (!localStorage.getItem(text)) {
        return "";
    }
    return localStorage.getItem(text);
};

// refresh page every 5sec
setInterval(function() {
    colorSchedule();
    updateTime();
}, 5000);


updateTime();
colorSchedule();
loadSchedule();