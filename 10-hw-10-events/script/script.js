const playSound = (soundUrl, id) => {
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
        document.getElementById('do').classList.add('whiteActive');
        return playSound("././audio/1.mp3");
    case 81:
        document.getElementById('playDoMinor').classList.add('blackActive');
        return playSound("././audio/b1.mp3");
    case 83:
        document.getElementById('re').classList.add('whiteActive');
        return playSound("././audio/2.mp3");
    case 87:
        document.getElementById('playReMinor').classList.add('blackActive');
        return playSound("././audio/b2.mp3");
    case 68:
        document.getElementById('mi').classList.add('whiteActive');
        return playSound("././audio/3.mp3");
    case 70:
        document.getElementById('fa').classList.add('whiteActive');
        return playSound("././audio/4.mp3");
    case 82:
        document.getElementById('playFaMinor').classList.add('blackActive');
        return playSound("././audio/b3.mp3");
    case 71:       
        document.getElementById('sol').classList.add('whiteActive');
        return playSound("././audio/5.mp3");
    case 84:
        document.getElementById('playSolMinor').classList.add('blackActive');
        return playSound("././audio/b4.mp3");
    case 72:
        document.getElementById('la').classList.add('whiteActive');
        return playSound("././audio/6.mp3");
    case 89:
        document.getElementById('playLaMinor').classList.add('blackActive');
        return playSound("././audio/b5.mp3");
    case 74:
        document.getElementById('si').classList.add('whiteActive');
        return playSound("././audio/7.mp3");
}
});

document.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 65:
            return document.getElementById('do').classList.remove('whiteActive');
        case 81:
            return document.getElementById('playDoMinor').classList.remove('blackActive');        
        case 83:
            return document.getElementById('re').classList.remove('whiteActive');
        case 87:
            return document.getElementById('playReMinor').classList.remove('blackActive');
        case 68:
            return document.getElementById('mi').classList.remove('whiteActive');
        case 70:
            return document.getElementById('fa').classList.remove('whiteActive');
        case 82:
            return document.getElementById('playFaMinor').classList.remove('blackActive');
        case 71:
            return document.getElementById('sol').classList.remove('whiteActive');
        case 84:
            return document.getElementById('playSolMinor').classList.remove('blackActive');
        case 72:
            return document.getElementById('la').classList.remove('whiteActive');
        case 89:
            return document.getElementById('playLaMinor').classList.remove('blackActive');
        case 74:
            return document.getElementById('si').classList.remove('whiteActive');
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