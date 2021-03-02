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

function generatePassword() {
  let passwordLegnth = prompt(
    "choose a length of at least 8 characters and no more than 128 characters"
  );

  //If the password legnth is less than 8 or gretaer than 128 the form should cancel
  if (passwordLegnth < 8 || passwordLegnth > 128) {
    alert("Sorry it needs to follow the password requirements");
  } else {
    let upperCase = confirm("Is your password going to contain a uppercase?");
    let lowerCase = confirm("Is your password going to contain a lowerase?");
    let number = confirm("Is your password going to contain a number?");
    let symbol = confirm("Is your password going to contain a symbol?");

    if (upperCase || lowerCase || number || symbol) {
      var randomstring = Math.random().toString().slice(-8);
    }
    // let randomstring = {
    //   upperCase = ABCDEFGHIJKLMNOPQRSTUVWXYZ;
    //   lowerCase = abcdefghijklmnopqrstuvwxyz;
    //   number = 0123456789;
    //   symbol = !@#$%^&*()_+;
    // }
  }

  var newPassword = Math.random().toString().slice(-8);
  return newPassword;
}
/// Your choice of variables
