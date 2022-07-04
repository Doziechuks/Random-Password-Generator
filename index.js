const inputElement = document.querySelector("#input");
const copyElement = document.querySelector("#icon");
const btnElement = document.querySelector('#btn');
const popUpElement = document.querySelector("#altert-container");

btnElement.addEventListener('click', () => {
  createPassword();
});

let createPassword = () => {
  const randomCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ[]!@#%_-()%$&+;:?/\|';
  const passwordLength = 15;
  let passwordDefault = '';
  for(i = 0; i < passwordLength; i++){
    const randomNum = Math.floor(Math.random() * randomCharacters.length);
    passwordDefault += randomCharacters.substring(randomNum, randomNum + 1);
  }
  inputElement.value = passwordDefault;
  popUpElement.innerText = passwordDefault + ' Copied!';
}

copyElement.addEventListener('click', () => {
  copyPassword();
});

let copyPassword = () =>{
  inputElement.select();
  inputElement.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputElement.value);
  if(inputElement.value){
    popUpElement.classList.remove("active");
    setTimeout(() => {
      popUpElement.classList.add("active");
    }, 2000);
  }
}
