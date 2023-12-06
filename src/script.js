var titleText = document.getElementsByClassName("title-Text")[0];
var textEl = "WE LOVE PROGRAMMING";
var speed = 100;
var index = 0;
var isReversing = false;
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
