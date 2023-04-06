// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var number = ["0123456789"];
var specialChar = ["!%&,*+-./<>?~"];
var alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
var alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumerals;
var confirmUppercase;
var confirmLowercase;


function gerneratePassword() {
    var confirmLength = (prompt("Select your password length between 8-128 characters."));

    while(confirmLength <= 8 || confirmLength >= 128) {
        alert("Password must be between 8-128 characters. Please try again.");
        var confirmLength = (prompt("Select your password length between 8-128 characters."));
}

var confirmSpecialCharacter = confirm("Would you like to include Special Characters?");
var confirmNumerals = confirm("Would you like to include Numerals?");
var confirmUppercase = confirm("Would you like to include Uppercase Characters?");
var confirmLowercase = confirm("Would you like to include Lowercase Characters?");

    while(confirmSpecialCharacter === false && confirmNumerals === false && confirmUppercase === false && confirmLowercase === false) {
        alert("You must choose a minimum of one parameter.");
        var confirmSpecialCharacter = confirm("Would you like to include Special Characters?");
        var confirmNumerals = confirm("Would you like to include Numerals?");
        var confirmUppercase = confirm("Would you like to include Uppercase Characters?");
        var confirmLowercase = confirm("Would you like to include Lowercase Characters?");
    }


}


var randomPassword = ""

for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }