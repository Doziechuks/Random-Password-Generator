const inputElement = document.querySelector("#input");
const copyElement = document.querySelector("#icon");
const btnElement = document.querySelector("#btn");
const popUpElement = document.querySelector("#altert-container");
const counterElement = document.querySelector(".counter");
let counter = 10;
let create = null;
let count = null;

btnElement.addEventListener("click", () => {
   counter = 10;
  clearInterval(create);
  clearInterval(count);
  countDown();
  createPassword();
});

let createPassword = () => {
  const randomCharacters =
    "abcdefghijklm1234567890";
  const passwordLength = 7;
  let passwordDefault = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * randomCharacters.length);
    passwordDefault += randomCharacters.substring(randomNum, randomNum + 1);
  }
  inputElement.value = passwordDefault;
  create = setInterval(createPassword, 10000);
};

function countDown() {
 count = setInterval(timer, 1000);
  function timer() {
    counter--;
    counterElement.innerText = counter;
    if (counter === 0) {
      counter = 10;
    }
  }
}

copyElement.addEventListener("click", () => {
  copyPassword();
});

let copyPassword = () => {
  inputElement.select();
  inputElement.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputElement.value);
  if (inputElement.value) {
    popUpElement.classList.remove("active");
    setTimeout(() => {
      popUpElement.classList.add("active");
    }, 2000);
  }
};


