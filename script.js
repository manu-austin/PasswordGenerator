// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// former when of calling function. modified and put at bottom (document.getElementById("myBtn").onclick = displayPassword;)

var passWord = document.querySelector("#Password");
var longString = "";
var numberOfCharacters = 0;

function displayPassword(){

    
// can't get my password to delete each time I do another generate password except when I hit cancel

    passWord.textContent = "";

        do {
        var numberOfCharacters = prompt("How many characters do you want in your password? (Pick an integer between 8 and 128)");

        // get out of loop if hit cancel at the beginning
        if (numberOfCharacters === null) {
            return;
        }

        numberOfCharacters = numberOfCharacters * 1; // *1 So that computer recognizes when numberOfCharacters is a numerical value

        
        if (numberOfCharacters<8 || numberOfCharacters>128 || Number.isInteger(numberOfCharacters) === false) {
            alert("Please choose an integer between 8 and 128!");
        }
    }
    while (numberOfCharacters<8 || numberOfCharacters>128 || Number.isInteger(numberOfCharacters) === false) ;


    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt
    do {
        var lowerCase= confirm("Do you want lowercase?");
        var upperCase= confirm("Do you want uppercase?");
        var numeric= confirm("Do you want numeric?");
        var specialCharacters= confirm("Do you want special characters?");

        // THEN my input should be validated and at least one character type should be selected
        if (lowerCase===false && upperCase===false && numeric===false && specialCharacters === false){
            alert("At least one character type should be selected!");
        }
    }
    while (lowerCase===false && upperCase===false && numeric===false && specialCharacters === false);


    // define content of the string to pick characters from
    if (lowerCase===true) {
        longString="abcdefghijklmnopqrstuvwxyz";
    }

    if (upperCase===true) {
        longString="ABCDEFGHIJKLMNOPQRSTUVWXYZ" + longString;
    }

    if (numeric===true) {
        longString="0123456789" + longString;
    }

    if (specialCharacters===true) {
        longString=" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + longString;
    }


    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    var rString = randomString(numberOfCharacters, longString);


    function randomString(length, chars) {
        var result = "";
        //math.random number between 0<1 math.floor(random() * # characters) give an integer between 0 and # chars -1
        for (var i = 0; i < length; ++i) {
            result = result + chars[Math.floor(Math.random() * chars.length)]; 
        }
        return result;
    }

    passWord.textContent = rString;
    // document.getElementById("Password").innerHTML = rString;
    // console.log(rString);
}

// program is launched when we hit the button
myBtn.addEventListener("click", displayPassword);

