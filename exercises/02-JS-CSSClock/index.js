const secondHand = document.querySelector('[data-second]');
const minuteHand = document.querySelector('[data-minute]');
const hourHand = document.querySelector('[data-hour]');

function setDate() {
    const now = new Date();
    const secondsDegrees = (now.getSeconds()/60)*360;
    const minutesDegrees = (now.getMinutes()/60)*360;
    const hourDegrees = (now.getHours()/12)*360;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    //console.log(secondsDegrees)
}

setInterval(setDate, 1000)