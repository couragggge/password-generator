const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

const generateButton = document.getElementById('genrate-el');
const firstButton = document.getElementById('first-El');
const secondButton = document.getElementById('second-El');

// generateButton.addEventListener('click', () => {
//   const generatedPasswordOne = generateRandomPassword();
//   console.log("Here is a random password: ", generatedPassword);
//   firstButton.textContent = generatedPassword;
// //   secondButton.textcontent = generatedPassword;
//   const generatedPasswordTwo = generateRandomPassword();
//   console.log("Here is the second random password: ", generatedPasswordTwo);
//   secondButton.textContent = generatedPasswordTwo;
// });
generateButton.addEventListener('click', () => {
  const firstGeneratedPassword = generateRandomPassword();
  console.log("Here is the first random password: ", firstGeneratedPassword);
  firstButton.textContent = firstGeneratedPassword;

  const secondGeneratedPassword = generateRandomPassword();
  console.log("Here is the second random password: ", secondGeneratedPassword);
  secondButton.textContent = secondGeneratedPassword;
});

// const generateButton = document.getElementById('genrate-el');
// const firstButton = document.getElementById('first-El');
// const secondButton = document.getElementById('second-El');

// generateButton.addEventListener('click', () => {
//   const generatedPassword = generateRandomPassword();
//   console.log("Here is a random password: ", generatedPassword);
//   firstButton.textContent = generatedPassword;
//   secondButton.textContent = generatedPassword;
// });