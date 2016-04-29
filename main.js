var timeMin = 25;
var timeSec = 60;

function updateTimer() {
	if (timeSec === 0) {
		
	}
	$('timer').val(timeMin + ":" + timeSec);
}

$(document).ready(function() {
	$("button").click(function() {
		setInterval(updateTimer, 1000);
	});



