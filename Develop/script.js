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
  var newPassword = "!@#$%%^^&";
  newPassword = "jesse";
  return newPassword;
}
