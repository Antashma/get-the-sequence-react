/* function checkWin() {
    if (currPatternIndex === gamePattern.length) {
        clearInterval(timer);
        document.querySelectorAll('.num-btn').forEach(el => el.disabled = true);
        messageDisplay.textContent = 'You win :)';
        messageDisplay.classList.add("win-text");
    }
}  

function checkLoss() {
    if (wrongCounter === 3 || timerStart === 0) {
        clearInterval(timer);
        document.querySelectorAll('.num-btn').forEach(el => el.disabled = true);
        messageDisplay.textContent = 'You lose :(';
        messageDisplay.classList.add("loss-text");
    }
}

function updateWrongCounter() {
    let countArr = []
    for (let i = 0; i < wrongCounter; i++) {
        countArr.push('❌')
    };
    wrongCounterDisplay.textContent = countArr.join(" ");
    return 
} */



function getRandomNum1To9() {
    return Math.floor((Math.random() * 9) + 1);
}

function createSequence() {    
    const sequenceArr = []
    while (sequenceArr.length < 5) {
        let num = getRandomNum1To9()
        if (sequenceArr.includes(num) === false) {
            sequenceArr.push(num)
        }
    }  
    return sequenceArr;
}

function scrambleArr(arr){
    console.log("running randomizer")
    const newArr = [];
    let copy = [...arr];
    while (copy.length > 1) {
        let randomIndex = Math.floor(Math.random() * copy.length);
        newArr.push(copy[randomIndex]);
        copy.splice(randomIndex, 1) 
    }
    newArr.push(copy[0])
    return newArr;
}



export {
    scrambleArr,
    createSequence
}