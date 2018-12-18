const secondHand = document.querySelector('[data-second]');
const minuteHand = document.querySelector('[data-minute]');
const hourHand = document.querySelector('[data-hour]');
const digitalTime = document.querySelector('[data-digTime]');
const digitalDate = document.querySelector('[data-date]');

function setDate() {
    const now = new Date();
    const secondsDegrees = (now.getSeconds()/60)*360;
    const minutesDegrees = (now.getMinutes()/60)*360;
    const hourDegrees = (now.getHours()/12)*360;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    digitalTime.innerHTML = now.toLocaleTimeString();
    digitalDate.innerHTML = now.toLocaleDateString();
}

setInterval(setDate, 1000)