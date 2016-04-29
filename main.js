var timeMin = 0;
var timeSec = 3;
var timerIntervalID = 0;

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}


function updateTimer() {
	var displayString = "";

	console.log("Update timer()");
	if (timeSec === 0) {
		timeSec = 59;
		timeMin--;
	} else {
		timeSec--;
	}

	displayString = timeMin + ":" + pad(timeSec, 2);


	$(".timer").html(displayString);
	
	if (timeMin < 1 && timeSec < 1) {
		$(".timer").css('color', 'red');
		clearInterval(timerIntervalID);
		alert("Pomodoro Over!")
	}
}

function test() {
	console.log("Test");
}

$(document).ready(function() {
	$("button").click(function() {
		console.log("Button pressed");
		timerIntervalID = setInterval(updateTimer, 1000);
	});
});



