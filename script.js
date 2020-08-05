// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
document.getElementById("myBtn").onclick = displayPassword;



function displayPassword(){

    var longString = "";
    var numberOfCharacters = 0;

        do {
        var numberOfCharacters = prompt("How many characters do you want in your password? (Pick an integer between 8 and 128)");
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
        console.log(lowerCase);
        var upperCase= confirm("Do you want uppercase?");
        console.log(upperCase);
        var numeric= confirm("Do you want numeric?");
        console.log(numeric);
        var specialCharacters= confirm("Do you want special characters?");
        console.log(specialCharacters);
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
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    document.getElementById("Password").innerHTML = rString;
    // console.log(rString);
}


