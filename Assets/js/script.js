// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("Hi I am Jesse");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("passwordText");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Declaring variables
let upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
upperCaseOptions.split(", ");
console.log(upperCaseOptions);
let lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
let numberOptions = "0123456789";
let symbolOptions = "!@#$%^&*()_+";

//get user options
function getPasswordOptions() {
  let passwordLength = parseInt(
    prompt(
      "choose a length of at least 8 characters and no more than 128 characters"
    )
  );

  //If the password legnth is less than 8 or gretaer than 128 the form should cancel
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Sorry it needs to follow the password requirements");
    return;
  }

  // This option will alert the user the message depicted in the quotations
  let isUpperCase = confirm("Is your password going to contain a uppercase?");
  let isLowerCase = confirm("Is your password going to contain a lowerase?");
  let isNumber = confirm("Is your password going to contain a number?");
  let isSymbol = confirm("Is your password going to contain a symbol?");

  let passwordOptions = {
    length: passwordLength,
    upperCase: isUpperCase,
    lowerCase: isLowerCase,
    number: isNumber,
    symbol: isSymbol,
  };

  console.log(passwordOptions);

  return passwordOptions;
}

//This option randomizes element characters
function randomizer(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

/// This option is my choice of variables

function generatePassword() {
  let options = getPasswordOptions();
  let tempPassword = [];
  let possibleSelection = [];
  let guarenteeCharacter = [];

  //This options selects possible variable selections
  if (options.upperCase) {
    possibleSelection = possibleSelection.concat(upperCaseOptions);
    guarenteeCharacter.push(randomizer(upperCaseOptions));
  }

  if (options.lowerCase) {
    possibleSelection = possibleSelection.concat(lowerCaseOptions);
    guarenteeCharacter.push(randomizer(lowerCaseOptions));
  }

  if (options.number) {
    possibleSelection = possibleSelection.concat(numberOptions);
    guarenteeCharacter.push(randomizer(numberOptions));
  }

  if (options.symbol) {
    possibleSelection = possibleSelection.concat(symbolOptions);
    guarenteeCharacter.push(randomizer(symbolOptions));
  }

  let finalPasswordArray = [];
  let finalGeneratedPassword = "";

  // This option pushes arrays of possible characters into the temp password
  for (let i = 0; i < options.length; i++) {
    tempPassword.push([randomizer(randomizer(possibleSelection))]);
  }

  // This option merges arrays to spit out the objects
  var merged = [].concat.apply([], tempPassword);
  finalGeneratedPassword = merged.join("");
  console.log(finalGeneratedPassword);
  console.log(merged.join(""));

  return finalGeneratedPassword;
}
