const playSound = (soundUrl) => {
    const audio = new Audio();
    audio.src = soundUrl;
    audio.autoplay = true;
};
function play(url, id) {
    const onMousePlay = document.getElementById(id);
    return onMousePlay.addEventListener('click', function() {
        playSound(url);
    });
}
document.addEventListener('keydown', function (event) {
switch (event.keyCode) {
    case 65:
        return playSound("././audio/1.mp3");
    case 81:
        return playSound("././audio/b1.mp3");
    case 83:
        return playSound("././audio/2.mp3");
    case 87:
        return playSound("././audio/b2.mp3");
    case 68:
        return playSound("././audio/3.mp3");
    case 70:
        return playSound("././audio/4.mp3");
    case 82:
        return playSound("././audio/b3.mp3");
    case 71:
        return playSound("././audio/5.mp3");
    case 84:
        return playSound("././audio/b4.mp3");
    case 72:
        return playSound("././audio/6.mp3");
    case 89:
        return playSound("././audio/b5.mp3");
    case 74:
        return playSound("././audio/7.mp3");
}
});
const playDo = play("././audio/1.mp3", 'do');
const playRe = play("././audio/2.mp3", 're');
const playMi = play("././audio/3.mp3", 'mi');
const playFa = play("././audio/4.mp3", 'fa');
const playSol = play("././audio/5.mp3", 'sol');
const playLa = play("././audio/6.mp3", 'la');
const playSi = play("././audio/7.mp3", 'si');

const playDoMinor = play("././audio/b1.mp3", 'playDoMinor');
const playReMinor = play("././audio/b2.mp3", 'playReMinor');
const playFaMinor = play("././audio/b3.mp3", 'playFaMinor');
const playSolMinor = play("././audio/b4.mp3", 'playSolMinor');
const playLaMinor = play("././audio/b5.mp3", 'playLaMinor');