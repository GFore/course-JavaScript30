const secondHand = document.querySelector('[data-second]');

function setDate() {
    const now = new Date();
    const secondsDegrees = (now.getSeconds()/60)*360;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(secondsDegrees)
}

setInterval(setDate, 1000)