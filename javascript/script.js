// clear input 
function clearInput() {
        document.getElementById("textinput").value = "";
}



// clear output 
function clearOutput() {
        document.getElementById("textoutput").innerHTML = "";
}







//  First Round Function 
function round() {
        let value = document.getElementById("textinput").value
        if (!value) {
                Toastify({
                        text: "Please enter a floating point number",
                        duration: 2000,
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                                background: "linear-gradient(to right, red, black)",
                        },
                        onClick: function () { } // Callback after click
                }).showToast();
        }
        let roundValue = Math.round(value)
        let round = "<h3 class='text-primarytheme mb-0'>" + roundValue + "</h3> Round your value"
        document.getElementById("textoutput").innerHTML = round;
}









//  Second Ceil A Number Function
function ceil() {
        let value = document.getElementById("textinput").value
        if (!value) {
                Toastify({
                        text: "Please enter a floating point number",
                        duration: 2000,
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                                background: "linear-gradient(to right, red, black)",
                        },
                        onClick: function () { } // Callback after click
                }).showToast();
        }
        let ceilValue = Math.ceil(value)
        let ceil = "<h3 class='text-primarytheme mb-0'>" + ceilValue + "</h3> Ceil your value"
        document.getElementById("textoutput").innerHTML = ceil;
}










// Third Floor A Number Function
function floor() {
        let value = document.getElementById("textinput").value
        if (!value) {
                Toastify({
                        text: "Please enter a floating point number",
                        duration: 2000,
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                                background: "linear-gradient(to right, red, black)",
                        },
                        onClick: function () { } // Callback after click
                }).showToast();
        }
        let floorValue = Math.floor(value)
        let floor = "<h3 class='text-primarytheme mb-0'>" + floorValue + "</h3> Floor your value"
        document.getElementById("textoutput").innerHTML = floor;
}







// Fourth Generate A Random Number
function random() {
        let randomValue = Math.random();
        let random = "<h3 class='text-primarytheme mb-0'>" + randomValue + "</h3> Random value"
        document.getElementById("textoutput").innerHTML = random;
}









// Fifth Dice Function
function dice() {
        let randomValue = Math.random();
        randomValue = (randomValue * 6) + 1;
        let diceValue = Math.floor(randomValue);
        let dice = "<h2 class='text-primarytheme mb-0'>" + diceValue + "</h2> <span> Generating a random number from 1 to 6 </span>"
        document.getElementById("textoutput").innerHTML = dice;

}











// Six Strong Password
function strong() {
        let giveValue = document.getElementById("textinput").value;
        if(!giveValue){
                alert("Please enter length of strong password")
                return;
        }
  let randomString = '';
  let upperCaseAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  let number = '0123456789';
  let symbol = '!@#$%&*+';
  let possibleString = upperCaseAlphabets + lowerCaseAlphabets + number + symbol;

  for (let i = 0; i < giveValue; i++) {

    let randomNumber = Math.random();
    randomString += possibleString.charAt(Math.floor(randomNumber * possibleString.length));

  }
  let html = "<h3 class='text-primarytheme mb-0'>" + randomString + "</h3> Strong Password"
  document.getElementById('textoutput').innerHTML = html;

}










// Converting Strings Function
function converting() {
        let value = 25.12345;
        let digit = value
        digit = Number(digit);
        console.log("value is ", digit)
        let allDigit = "<h3 class='text-primarytheme mb-0'>" + digit + "</h3> Converting strings is  <span style='color:green'> 'Successfully'</span>"
        document.getElementById("textoutput").innerHTML = allDigit;
}










// Controlling Length


// function controlling(){
        // let num = document.getElementById("textoutput").value;
        // if(!num) {
//         alert("Please enter number")
//         return;
// }
// num = Number(num);
// console.log(typeof num)
// num = num.toFixed(2);

// document.getElementById("textoutput").innerHTML = num
// }

function controlling(){
let num = 25.12345
num = Number(num)

console.log(typeof num)

num = parseInt(num)

num = Number(num)
console.log(typeof num)
console.log(num)
let value = "<h3 class='text-primarytheme mb-0'>" + num + "</h3> <span> Controlling lenght of original string is <span style='color:green'> 'Successfully'</span>"
document.getElementById("textoutput").innerHTML = value
}





// Calculate GTS
function calculate(){
        let cost = document.getElementById("textinput").value;
        if(!cost){
                alert("Please type something to calculate")
                return;
        }
        cost = Number(cost)
        let taxInput = +prompt("Enter your tax")

        // tax 17 / 100
        let tax = cost * (taxInput / 100);
        let totalCost = cost + tax;
        totalCost = Math.round(totalCost)

        document.getElementById("textoutput").innerHTML =  "Your bill = <span class='text-primaryTheme fw-bold fw-18'>" + cost + "</span>";

        document.getElementById("textoutput").innerHTML += "<br>Tax " + taxInput + "% = <span class='text-danger fw-bold fw-18'>" + tax.toFixed(2) + "</span>" ;

        document.getElementById("textoutput").innerHTML +=  "<br>Total amoung including tax = <span class='text-success fw-bold fw-18'>" + totalCost + "</span>";
        
}

