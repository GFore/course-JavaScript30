const secondHand = document.querySelector('[data-second]');
const minuteHand = document.querySelector('[data-minute]');
const hourHand = document.querySelector('[data-hour]');
const digitalTime = document.querySelector('[data-digTime]');
const digitalDate = document.querySelector('[data-date]');

function setHands() {
    const now = new Date();
    const secondsDegrees = (now.getSeconds()/60)*360;
    const minutesDegrees = (now.getMinutes()/60)*360;
    const hoursDegrees = (now.getHours()/12)*360 + Math.floor(now.getMinutes()/12)*6;

    // Toggle off the CSS transition when the hand needs to move from
    // the 59 sec position to the 0 sec postion to avoid the hand
    // appearing to move counter-clockwise from 59 to 0.
    if (secondsDegrees === 354 || secondsDegrees === 6) {
        secondHand.classList.toggle('ticker');
    };
    if (minutesDegrees === 354 || minutesDegrees === 6) {
        minuteHand.classList.toggle('ticker');
    };
    if (hoursDegrees === 354 || hoursDegrees === 6) {
        hourHand.classList.toggle('ticker');
    };
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    digitalTime.innerHTML = now.toLocaleTimeString();
    digitalDate.innerHTML = now.toLocaleDateString();
}

setInterval(setHands, 1000)