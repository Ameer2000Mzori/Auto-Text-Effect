// our selected elements
let titleText: any = document.getElementsByClassName("title-Text")[0];
let inputNum = document.getElementsByClassName("input-Num")[0] as HTMLElement;

// our gelobal varibales
let textEl: string = `WE LOVE PROGRAMMING`;
let speed: number = 100;
let index: number = 0;
let isReversing: boolean = false;

// our auto writeText functions
const writeText = (): void => {
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

// our change speed function
const changeSpeed = (e: Event): void => {
  let newSpeed: number = 0;
  if (inputNum instanceof HTMLInputElement) {
    newSpeed = parseInt(inputNum.value, 10);
  }
  speed = newSpeed * 100;
  console.log(speed);
};

// our event linsters
inputNum.addEventListener("change", (e: Event) => changeSpeed(e));

// when the website is loaded
writeText();
