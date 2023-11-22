// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = 
  passwordText.value = password;

  var passwordLength = prompt("Please choose the length of your generated password:");

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

