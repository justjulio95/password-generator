// Assignment code here
/*
  WHAT MAKES A POTENTIAL PASSWORD?
    - Uppercase letters
    - Lowercase letters
    - Numbers
    - Special characters
*/

// Create variables for uppercase/lowercase letters, numbers, and special characters
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = alphaUpper.toLowerCase();
var numbers = "0123456789";
var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// create a pW object that contains the length and empty string of the yet to be password
var pW = {
  length: 0,
  characters: '',
  reset: function() {
    this.length = 0;
    this.characters = "";
  }
};

/*
  Criteria Notes
  - Ask for length of the password (MIN 8 characters, MAX 128)
  - Ask user if they want UPPERCASE letters
  - Ask user if they want LOWERCASE letters
  - Ask user if they want NUMBERS
  - Ask user if they want SPECIAL CHARACTERS
*/

//Function to ask for the length of the users password
var askLength = function() {
  var length = prompt("How long would you like your password to be? (Please pick a number between 8 and 128)");

  //Check that input is a number and that that number is valid
  if (isNaN(parseInt(length)) || (length < 8 || length > 128)) {
    alert("You did not enter an appropriate value. Please try again.");
    askLength();
  } else {
    // set user selected length to pW's length
    pW.length = length;
  }
};

// ask if user wants to include uppercase letters
var askUpper = function() {
  var checkUpper = confirm("Would you like your password to include UPPERCASE letters?");
  // If yes (TRUE)
  if (checkUpper) {
    alert("UPPERCASE letters will be included.");
    // add alphaUpper var to the string of characters
    pW.characters += alphaUpper;
  }
};

// ask if user wants to include lowercase letters
var askLower = function() {
  var checkLower = confirm("Would you like your password to include LOWERCASE letters?");
  // If yes (true)
  if (checkLower) {
    alert("LOWERCASE letters will be included.");
    // add alphaLower var to the string of characters
    pW.characters += alphaLower;
  }
};

// ask if user wants to include numbers
var askNumbs = function() {
  var checkNumbs = confirm("Would you like your password to include NUMBERS?");
  if (checkNumbs) {
    alert("NUMBERS will be included.");
    // add numbers var to the string of characters
    pW.characters += numbers;
  } 
};

// ask if user wants to include special characters
var askSpecial = function() {
  checkSpecial = confirm("Would you like your password to include SPECIAL characters?");

  if (checkSpecial) {
    alert("SPECIAL characters will be included.");
    // add special var to the string of characters
    pW.characters += special;
  }
};

var generatePassword = function() {

  pW.reset();
  askLength();
  askUpper();
  askLower();
  askNumbs();
  askSpecial();

  //declare empty password variable
  var password = '';

  //iterate through the pW.characters value
  for (var i = 0; i < pW.length; i++) {
    var randomChar = Math.floor(Math.random() * pW.characters.length);
 
    password += pW.characters.substring(randomChar, randomChar + 1);
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);