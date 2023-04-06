
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '<', '>', '?'];
var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumerals;
var confirmUpper;
var confirmLower;


function generatePassword() {
    var confirmLength = (prompt("Select your password length between 8-128 characters."));

    while(confirmLength < 8 || confirmLength > 128) {
        alert("Password must be between 8-128 characters. Please try again.");
        var confirmLength = (prompt("Select your password length between 8-128 characters."));
}

var confirmSpecialCharacter = confirm("Would you like to include Special Characters?");
var confirmNumerals = confirm("Would you like to include Numerals?");
var confirmUpper = confirm("Would you like to include Uppercase Characters?");
var confirmLower = confirm("Would you like to include Lowercase Characters?");

    while(confirmSpecialCharacter === false && confirmNumerals === false && confirmUpper === false && confirmLower === false) {
        alert("You must choose a minimum of one parameter.");
        var confirmSpecialCharacter = confirm("Would you like to include Special Characters?");
        var confirmNumerals = confirm("Would you like to include Numerals?");
        var confirmUpper = confirm("Would you like to include Uppercase Characters?");
        var confirmLower = confirm("Would you like to include Lowercase Characters?");
    }

var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar);
    }

    if (confirmNumerals) {
      passwordCharacters = passwordCharacters.concat(number);
    }
      
    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(alphaUpper);
    }

    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(alphaLower);
    }

var randomPassword = "";
    for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    
}
return randomPassword;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }