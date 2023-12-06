// our selected elements
var titleText = document.getElementsByClassName("title-Text")[0];
var inputNum = document.getElementsByClassName("input-Num")[0];
// our gelobal varibales
var textEl = "WE LOVE PROGRAMMING";
var speed = 100;
var index = 0;
var isReversing = false;
// our auto writeText functions
var writeText = function () {
    if (!isReversing) {
        titleText.innerText = textEl.slice(0, index);
        index++;
        if (index > textEl.length) {
            isReversing = true;
            index = textEl.length - 1;
        }
    }
    else {
        titleText.innerText = textEl.slice(0, index);
        index--;
        if (index < 0) {
            isReversing = false;
            index = 0;
        }
    }
    setTimeout(writeText, speed);
};
// our change speed function
var changeSpeed = function (e) {
    var newSpeed = 0;
    if (inputNum instanceof HTMLInputElement) {
        newSpeed = parseInt(inputNum.value, 10);
    }
    speed = newSpeed * 100;
    console.log(speed);
};
// our event linsters
inputNum.addEventListener("change", function (e) { return changeSpeed(e); });
// when the website is loaded
writeText();
