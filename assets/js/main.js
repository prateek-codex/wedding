

var weddingDate = new Date('04-22-2022');

function initCountDown() {

    let diffTime = Math.abs(weddingDate - new Date());
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let diffHours = Math.ceil(diffTime / (1000 * 60 * 60)) % 24;
    let diffMins = Math.ceil(diffTime / (1000 * 60)) % 60;
    let diffSeconds = Math.ceil(diffTime / (1000)) % 60;
    document.getElementById("std-seconds").innerHTML = diffSeconds;
    document.getElementById("std-minutes").innerHTML = diffMins;
    document.getElementById("std-hours").innerHTML = diffHours;
    document.getElementById("std-days").innerHTML = diffDays;
    setTimeout(initCountDown, 1000);
}

initCountDown();