function getClock() {
    const time = new Date();
    const hrs = time.getHours();
    const min = time.getMinutes();
    return document.getElementById('clock').innerHTML = hrs + ':' + min;
}
getClock();
setInterval(getClock, 60000);