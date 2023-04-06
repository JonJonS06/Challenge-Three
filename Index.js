// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Will be using an array method!!
// var finalPAssword = ('B', 'a');
var number = ["0123456789"];
var specialChar = ["!%&,*+-./<>?~"];
var alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
var alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];