// our selected elements
var titleText = document.getElementsByClassName("title-Text")[0];
var inputNum = document.getElementsByClassName("input-Num")[0];
console.log(inputNum.value);
// our gelobal varibales
var textEl = "WE LOVE PROGRAMMING";
var speed = 100;
var index = 0;
var isReversing = false;
// our functions
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
writeText();
// our event linsters
