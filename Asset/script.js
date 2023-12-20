// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//lets create a function that randomly generates between a random number betwen 2 numbers 
function initialNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//let's create a mega array  
var character = []
//let's create a password variable 
var password = []
var passLength;

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length 
  passLength = parseInt(prompt("Please choose a password length between 8 and 128 characters"))
  if (passLength < 8) {
    alert("password length can't be less than 8")
    return getPasswordOptions
  }
  else if (passLength > 128) {
    alert("password length can't be greater than 128")
    return getPasswordOptions()
  }


  const SpecialPrompt = prompt("do you want special Character in your password ? Answer yes or no")
  const NumericPrompt = prompt("do you want Numeric Character in your password ? Answer yes or no")
  const LowerPrompt = prompt("do you want lower Case Character in your password ? Answer yes or no")
  const UpperPrompt = prompt("do you want upper case Character in your password ? Answer yes or no")

  // Confirm which character sets to use 
  // If the user answers false for all, either return out of the function or call the function again  

  if (SpecialPrompt === "no" && NumericPrompt === "no" && LowerPrompt === "no" && UpperPrompt === "no") {
    alert("you have not chosen a character set, please choose at least one")
    return getPasswordOptions()
  }


  // Once they select a character set:
  // Generate a random character for each selected character set
  // Either push selected character sets to a mega-array of all selected characters
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index

  if (SpecialPrompt === "yes") {
    var firstChar = initialNumber(0, specialCharacters.length)
    firstChar = specialCharacters[firstChar]
    password.push(firstChar)
    character = specialCharacters.concat(character)
  }

  if ((NumericPrompt) === "yes") {
    var firstChar = initialNumber(0, numericCharacters.length)
    firstChar = numericCharacters[firstChar]
    password.push(firstChar)
    character = numericCharacters.concat(character)
  }

  if ((LowerPrompt) === "yes") {
    var firstChar = initialNumber(0, lowerCasedCharacters.length)
    firstChar = lowerCasedCharacters[firstChar]
    password.push(firstChar)
    character = lowerCasedCharacters.concat(character)
  }

  if ((UpperPrompt) === "yes") {
    var firstChar = initialNumber(0, upperCasedCharacters.length)
    firstChar = upperCasedCharacters[firstChar]
    password.push(firstChar)
    character = upperCasedCharacters.concat(character)
  }

  console.log(character)
  console.log(password)
  console.log(character)

}

getPasswordOptions()


// Function for getting a random element from an array  
// Need a variable to hold the password as it's being generated 
// Need a variable to hold the index that's being generated 

// For loop that loops the number of times that matches the length the user chose 
// Generate a random number
// That number is the index for a character in the mega-array
// So then, mega-array[generated-index] is the actual character
// Add that character to the password 

// Once we finish the for loop, return the generated password

console.log(password.length)


function getRandom() {
  for (let i = password.length; i < passLength; i++) {
    var megaIndex = initialNumber(0, character.length);
    var char = character[megaIndex]
    password.push(char)
  }
  return password.join('')

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getRandom();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
