// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var charLowerChoice = 'abcdefghijklmnopqrstuvwxyz';
var charUpperChoice = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charNumChoice = '0123456789';
var charSpecChoice = "~!@-#$'";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

function generatePassword() {
  var characters = "";
  var passLength = prompt("Please Enter how many characters you wish your generated password to be:", "8 - 128");

  var pass = "";

  if (passLength < 8 || passLength > 128) {
    alert("Invalid input, password length must be between 8 and 128 characters.");
    generatePassword();
  } else {

    alert("Please select atleast one of the following options to include in your password:");

    var charLower = confirm("Would you like to include Lowercase letters in your password?");

    var charUpper = confirm("Would you like to include Uppercase letters in your password?");

    var charNum = confirm("Would you like to include Numerics in your password?");

    var charSpec = confirm("Would you like to include special characters(ie. !@?#$%) in your password?");

    if (charLower === true) {
      characters += charLowerChoice;
    }

    if (charUpper === true) {
      characters += charUpperChoice;
    }

    if (charNum === true) {
      characters += charNumChoice;
    }

    if (charSpec === true) {
      characters += charSpecChoice;
    }

    if (charLower === true || charUpper === true || charNum === true || charSpec === true) {
      for (var i = 0; i <= passLength; i++) {
        var randomstring = Math.floor(Math.random() * characters.length);
        console.log(randomstring);
        pass += characters[randomstring];
      }
      console.log(pass);
      return pass;
    }
    else {
      alert("Invalid input. One type of character must be selected.");
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);