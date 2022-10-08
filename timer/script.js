let hou = document.querySelector(`input.hou`);
let min = document.querySelector(`input.min`);
let sec = document.querySelector(`input.sec`);
let start = document.querySelector(`.start`);
let startPomo = document.querySelector(`.start-pomodoro`);

let inputCard = document.querySelector(`.card`);
let cardsDiv = document.querySelector(`.cards`);
let btnDiv = document.querySelector(`.timer-btn`);

// Start all buttons

// Start button
start.addEventListener(`click`, function () {
    if (hou.value <= 0 && min.value <= 0 && sec.value <= 0
        || min.value > 60 || sec.value > 60) {
        flash(inputCard);
        return false;
    }

    this.remove();
    startPomo.remove();
    document.querySelector(`.start-container, .start-btn`).remove();
    hou = hou.value || 0;
    min = min.value || 0;
    sec = sec.value || 0;

    timerForm(hou, min, sec);
});

// Pomodoro button
startPomo.addEventListener(`click`, function () {
    this.remove();
    start.remove();
    document.querySelector(`.start-container, .start-btn`).remove();

    timerForm(0, 25, 0);
    pomoBreak();
});

function pomoBreak() {
    let pomoBreakBtn = document.createElement(`button`);
    pomoBreakBtn.classList.add(`break`);
    pomoBreakBtn.classList.add(`green`);
    let pomoBreakText = document.createTextNode(`Start Break`);
    pomoBreakBtn.appendChild(pomoBreakText);
    btnDiv.prepend(pomoBreakBtn);

    pomoBreakBtn.addEventListener(`click`, function () {
        console.log(`Yes, Break button is working...`);
        // timerForm(0, 5, 0);
    });
}

// Pause button
function pause() {
    let pauseBtn = document.createElement(`button`);
    pauseBtn.classList.add(`pause`);
    pauseBtn.classList.add(`blue`);
    let pauseText = document.createTextNode(`Pause Timer`);
    pauseBtn.appendChild(pauseText);
    btnDiv.appendChild(pauseBtn);

    pauseBtn.addEventListener(`click`, function () {
        console.log(`Yes, Pause button is working...`);
    });


}

// Stop button
function stop() {
    let stopBtn = document.createElement(`button`);
    stopBtn.classList.add(`stop`);
    stopBtn.classList.add(`red`);
    let stopText = document.createTextNode(`Stop Timer`);
    stopBtn.appendChild(stopText);
    btnDiv.appendChild(stopBtn);

    stopBtn.addEventListener(`click`, function () {
        location.reload();
    });
}
// End all buttons

// Creat timer form
function timerForm(hou, min, sec) {
    // Hours div
    let houDiv = document.createElement("div");
    houDiv.classList.add("card");

    // p tag
    let houP = document.createElement("p");
    let houText = document.createTextNode("Hours");
    houP.appendChild(houText);
    houDiv.appendChild(houP);

    // h3 tag
    let houH3 = document.createElement("h3")
    let houNum = document.createTextNode(hou);
    houH3.appendChild(houNum);
    houH3.classList.add(`houCount`);
    houDiv.appendChild(houH3);

    // Added to cards div
    cardsDiv.appendChild(houDiv);

    // Minutes div
    let minDiv = document.createElement("div");
    minDiv.classList.add("card");

    // p tag
    let minP = document.createElement("p");
    let minText = document.createTextNode("Minutes");
    minP.appendChild(minText);
    minDiv.appendChild(minP);

    // h3 tag
    let minH3 = document.createElement("h3")
    let minNum = document.createTextNode(min);
    minH3.appendChild(minNum);
    minH3.classList.add(`minCount`);
    minDiv.appendChild(minH3);

    // Added to cards div
    cardsDiv.appendChild(minDiv);

    // seconds div
    let secDiv = document.createElement("div");
    secDiv.classList.add("card");

    // p tag
    let secP = document.createElement("p");
    let secText = document.createTextNode("Seconds");
    secP.appendChild(secText);
    secDiv.appendChild(secP);

    // h3 tag
    let secH3 = document.createElement("h3")
    let secNum = document.createTextNode(sec);
    secH3.appendChild(secNum);
    secH3.classList.add(`secCount`);
    secDiv.appendChild(secH3);

    // Added to cards div
    cardsDiv.appendChild(secDiv);

    pause();
    stop();
    timeCalc();
};

function timeCalc() {
    let houCount = document.querySelector(`.houCount`);
    let minCount = document.querySelector(`.minCount`);
    let secCount = document.querySelector(`.secCount`);

    let start = setInterval(() => {
        if (secCount.innerHTML > 0) {
            secCount.innerHTML--;
        }
        if (secCount.innerHTML == 0) {
            if (minCount.innerHTML > 0) {
                minCount.innerHTML--;
                secCount.innerHTML = 59;
            }
            if (minCount.innerHTML == 0) {
                if (houCount.innerHTML > 0) {
                    houCount.innerHTML--;
                    minCount.innerHTML = 59;
                }
                if (houCount.innerHTML == 0 &&
                    minCount.innerHTML == 0 &&
                    secCount.innerHTML == 0) {
                    clearInterval(start);
                    let timeCards = document.querySelectorAll(`.cards .card`);
                    for (let i = 0; i < timeCards.length; i++) {
                        flash(document.querySelectorAll(`.cards .card`)[i]);
                    }
                    let sound = new Audio(`sounds/alarm_clock_1.mp3`);
                    sound.play();
                }
            }
        }
    }, 1000);
}

function flash(warning) {
    let start = setInterval(() => {
        warning.style.border = `2px solid red`;
    }, 100);
}

// let input = document.querySelectorAll(`input`);
// for (let i = 0; i < input.length; i++) {
//     document.querySelectorAll(`input`)[i].addEventListener(`keydown`, function (e) {
//         if (e.key == `-` || e.key == `+`) {
//             alert(e.key);
//             e.key.value = `0`;
//         }
//     })
// }


// hou
// min
// sec

// hou.value
// min.value
// sec.value


// houCount
// minCount 
// secCount 

// houCount.innerHTML < 10 ? `0${houCount}` : houCount;
// minCount.innerHTML < 10 ? `0${minCount}` : minCount;
// secCount.innerHTML < 10 ? `0${secCount}` : secCount;