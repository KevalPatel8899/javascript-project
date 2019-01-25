const secondHand =  document.querySelector(".second-hand");
const minHand   = document.querySelector(".min-hand");
const hourHand  = document.querySelector(".hour-hand");
var div = document.querySelector("#secs");

function setDate()
{
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	console.log(secondHand.style.transform);

	const minutes = now.getMinutes();
	const MinsDegrees = ((minutes / 60) * 360) + 90;
	minHand.style.transform = `rotate(${MinsDegrees}deg)`;

	const hours = now.getHours();
	const hourDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	
	 document.getElementById('hours').innerHTML = hours;
	 document.getElementById('mins').innerHTML = " : " +minutes;
	 document.getElementById('secs').innerHTML = " : "+seconds;
}


setInterval(setDate,1000);