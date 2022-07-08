const inputElement = document.querySelector("#input");
const copyElement = document.querySelector("#icon");
const btnElement = document.querySelector("#btn");
const popUpElement = document.querySelector("#altert-container");
const counterElement = document.querySelector(".counter");
let counter = 10;
let count;

btnElement.addEventListener("click", () => {
  createPassword();
  countDown();
  if(btnElement){
    counter = 10;
  }
  
});

let createPassword = () => {
  const randomCharacters =
    "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ[]!@#%_-()%$&+;:?/|";
  const passwordLength = 10;
  let passwordDefault = "";
  for (i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * randomCharacters.length);
    passwordDefault += randomCharacters.substring(randomNum, randomNum + 1);
  }
  inputElement.value = passwordDefault;
  // popUpElement.innerText = passwordDefault + ' Copied!';
  count = setInterval(createPassword, 10000);
};


function countDown() {
   count = setInterval(timer, 1000);
  function timer() {
    counter = counter - 1;
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
