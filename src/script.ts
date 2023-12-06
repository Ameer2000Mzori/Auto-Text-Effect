// our selected elements
let titleText: any = document.getElementsByClassName("title-Text")[0];
let inputNum = document.getElementsByClassName("input-Num")[0];

// our gelobal varibales
let textEl: string = `WE LOVE PROGRAMMING`;
var speed: any = 100;
let index = 0;
let isReversing = false;

// our functions
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

// our event linsters
inputNum.addEventListener("change", (e: any) => {
  let newSpeed = 0;
  console.log(newSpeed);
  console.log(e.target.value);
  newSpeed = e.target.value;
  speed = newSpeed * 100;
});

writeText();
