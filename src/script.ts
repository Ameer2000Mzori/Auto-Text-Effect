let titleText: any = document.getElementsByClassName("title-Text")[0];

let textEl: string = `WE LOVE PROGRAMMING`;
let speed = 100;
let index = 0;
let isReversing = false;

const writeText = () => {
  if (!isReversing) {
    titleText.innerText = textEl.slice(0, index);
    index++;

    if (index > textEl.length) {
      isReversing = true;
      index = textEl.length - 1;
    }
  } else {
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
