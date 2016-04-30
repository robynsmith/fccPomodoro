var timeMin = 0;
var timeSec = 3;
var timerIntervalID = null;

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
		var whichButton = $(this).attr("value");
		console.log("Button pressed");
		timeMin = parseInt($("#min").val());
		timeSec = parseInt($("#sec").val());

		switch(whichButton) {
			case "start":
				if ( (timeMin > -1) && (timeSec > -1) ) {
					timerIntervalID = setInterval(updateTimer, 1000);
				} else {
					$(".timer").html("Error: Timer minutes and seconds required. Please fill out fields below with positive integers");	
				}

				break;
			case "reset":
				if (timerIntervalID !== null) {
					clearInterval(timerIntervalID);
				}

				$(".timer").css('color', 'black');
				displayString = timeMin + ":" + pad(timeSec, 2);
				$(".timer").html(displayString);
				break;
		}
	});
});



