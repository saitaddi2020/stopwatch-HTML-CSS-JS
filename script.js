const passwordBox = document.getElementById("pass");
const length = 14;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*:?";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)]; 
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]; 
    password += number[Math.floor(Math.random()*number.length)]; 
    password += symbol[Math.floor(Math.random()*symbol.length)]; 

    while(password.length < length){
         password+= allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;

    }
    function copying() {
        if (passwordBox.value === "") {
            alert("No password to copy! Generate one first.");
            return;
        }
    
        navigator.clipboard.writeText(passwordBox.value)
            // .then(() => {
            //     alert("Password copied to clipboard!");
            // })
            // .catch(err => {
            //     console.error("Failed to copy: ", err);
            // });
    }
    