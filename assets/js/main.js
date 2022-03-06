

var weddingDate = new Date("2022-04-22T00:00:00");

function initCountDown() {

    let diffTime = Math.abs(weddingDate - new Date());
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let diffHours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    let diffMins = Math.floor((diffTime / (1000 * 60)) % 60);
    let diffSeconds = Math.floor((diffTime / (1000))  % 60);
    document.getElementById("std-seconds").innerHTML = diffSeconds;
    document.getElementById("std-minutes").innerHTML = diffMins;
    document.getElementById("std-hours").innerHTML = diffHours;
    document.getElementById("std-days").innerHTML = diffDays;
    setTimeout(initCountDown, 1000);
}

initCountDown();