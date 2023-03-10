function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
} 

var upperCase = confirm("Click OK to confirm including uppercase characters");
 var lowerCase = confirm("Click OK to confirm including lowercase characters");
 var numbers = confirm("Click OK to confirm including numeric characters");
 var specialCharacters = confirm("Click OK to confirm including special characters");
 if (!upperCase && !lowerCase && !numbers && !specialCharacters) {
   alert("You must choose at least one character type");
   return;
 }
 var password = "";
 var characterTypes = [];
 var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
 var numbersSet = "0123456789";
 var specialCharactersSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
