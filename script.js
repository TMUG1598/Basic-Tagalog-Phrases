let beats = {
    "49": {
        beat: new Beat("./assets/good morning.m4a"),
        button: new Button('#fdcb6e', 49)
    },
    "50": {
        beat: new Beat("./assets/good afternoon.m4a"),
        button: new Button('#fdcb6e', 50)
    },
    "51": {
        beat: new Beat("./assets/good evening.m4a"),
        button: new Button('#fdcb6e', 51)
    },
    "52": {
        beat: new Beat("./assets/my name is.m4a"),
        button: new Button('#74b9ff', 52)
    },
    "53": {
        beat: new Beat("./assets/how are you.m4a"),
        button: new Button('#74b9ff', 53)
    },
    "54": {
        beat: new Beat("./assets/thanks.m4a"),
        button: new Button('#74b9ff', 54)
    },
    "55": {
        beat: new Beat("./assets/i love you.m4a"),
        button: new Button('#ff7675', 55)
    },
    "56": {
        beat: new Beat("./assets/hbd.m4a"),
        button: new Button('#ff7675', 56)
    },
    "57": {
        beat: new Beat("./assets/take care.m4a"),
        button: new Button('#ff7675', 57)
    }
}

triggerBeat = (event) => {
    const keyCode = event.keyCode;
    if(keyCode in beats) {
        let keyPressed = beats[keyCode];
        keyPressed.beat.playAudio();
        keyPressed.button.select();
    }
}

triggerBeat = (event) => {
    const keyCode = event.keyCode;
    if(keyCode in beats) {
        let keyPressed = beats[keyCode];
        keyPressed.beat.playAudio();
        keyPressed.button.select();
    }
}

clickedBeat = (event) => {
    console.log(event.target.id);
    const keyCode = event.target.id;
    if(keyCode in beats) {
        let keyPressed = beats[keyCode];
        keyPressed.beat.playAudio();
        keyPressed.button.select();
    }
}

document.addEventListener('keydown', triggerBeat);
document.addEventListener('click', clickedBeat);