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

  // else { remove later
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

  // let newPassword = "";
  // let selectedOptions = upperCaseOptions + symbolOptions;

  // for (let i = 0; i < passwordLegnth; i++) {
  //   newPassword += selectedOptions.charAt(
  //     Math.floor(Math.random() * passwordLength)
  //   );
  // }

  // if (upperCaseOptions === true) {
  //   isNumbers = isSymbol.getNumbers(0);
  //   isNumber++;
  // }

  // return newPassword;
}

function randomizer(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

/// Your choice of variables

function generatePassword() {
  let options = getPasswordOptions();
  let tempPassword = [];
  let possibleSelection = [];
  let guarenteeCharacter = [];

  if (options.upperCase) {
    possibleSelection = possibleSelection.concat(upperCaseOptions);
    guarenteeCharacter.push(randomizer(upperCaseOptions));
  }
  //samething for rest of variables
  if (options.upperCase) {
    possibleSelection = possibleSelection.concat(upperCaseOptions);
    guarenteeCharacter.push(randomizer(upperCaseOptions));
  }

  if (options.upperCase) {
    possibleSelection = possibleSelection.concat(upperCaseOptions);
    guarenteeCharacter.push(randomizer(upperCaseOptions));
  }

  if (options.upperCase) {
    possibleSelection = possibleSelection.concat(upperCaseOptions);
    guarenteeCharacter.push(randomizer(upperCaseOptions));
  }

  //loop over lengthoptions we created.
  //create temp array inside of the loop
  //push arrary of possible characters into our temp password
  //concat charaters inside of our temp password array
  //create another loop thats users our gaurantee matches temp password with brackets I

  //return temp password. Convert arr to a string FIND METHOD!!
}
