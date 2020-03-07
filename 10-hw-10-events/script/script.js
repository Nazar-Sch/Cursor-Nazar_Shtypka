const doNote = new Audio("././audio/1.mp3");
const re = new Audio("././audio/2.mp3");
const mi = new Audio("././audio/3.mp3");
const fa = new Audio("././audio/4.mp3");
const sol = new Audio("././audio/5.mp3");
const la = new Audio("././audio/6.mp3");
const si = new Audio("././audio/7.mp3");

function play(audio, id) {
    return document.getElementById(id)
    .addEventListener('click', function() {
        // console.log(audio);
        // audio.pause();
        audio.currentTime = 0;
        audio.play();
        // setTimeout(() => (audio.volume = 0.8), 400);
        // setTimeout(() => (audio.volume = 0.6), 800);
        // setTimeout(() => (audio.volume = 0), 1000);
        // setTimeout(() => (audio.volume = 0.2), 1600);
    }); 
}
const playDo = play(doNote, 'do');
const playRe = play(re, 're');
const playMi = play(mi, 'mi');
const playFa = play(fa, 'fa');
const playSol = play(sol, 'sol');
const playLa = play(la, 'la');
const playSi = play(si, 'si');

window.addEventListener('keydown', ({keyCode}) => {
    // Press a
    if (keyCode === 65) return play(doNote, 'do');
})