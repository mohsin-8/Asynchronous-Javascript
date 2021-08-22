/*
    Call Back Functions
*/
// function myDisplayer(some) {
//     document.getElementById('demo').innerHTML = some;
//     console.log(some);
// }

// function myFirst() {
//     myDisplayer('Hello');
// }

// function mySecond() {
//     myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();

/*
You could call a calculator function (myCalculator),
save the result, and then call another
function (myDisplayer) to display the result:
*/

// function myDisplayer(result) {
//     console.log("Answer is =", result);
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myCalculator(5, 2);
// myDisplayer(result);


/*
Or, you could call a calculator function
(myCalculator), and let the calculator function call the display function
(myDisplayer):
*/


// function myDisplayer(result) {
//     console.log('Answer is =', result);
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
// }

// myCalculator(5, 5);






/*
Using a callback, you could call the calculator function
(myCalculator) with a callback, and let the calculator function
run the callback after the calculation is finished:
*/


// function myDisplayer(result) {
//     console.log('Answer is =', result);
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);






/*
     Asynchronous Javascript
*/

// Waiting for Timout

// setTimeout(myFunction, 2000);

// function myFunction() {
//     console.log('I love you!');
// }






// setTimeout(() => {
//     myFunction2("I love you")
// }, 2000);

// function myFunction2(value) {
//     console.log(value);
// }









// Waiting for Intervals

// setInterval(myFunction, 1000);

// function myFunction() {
//     let d = new Date();
//     document.getElementById('demo').innerHTML =
//         d.getHours() + ":" +
//         d.getMinutes() + ":" +
//         d.getSeconds();
// }



// Callback function


console.log("Before Prepare Food");

function prepareFood(callBack) {
    setTimeout(() => {
        console.log("Prepare Food");
        callBack("Food is Ready");
    }, 2000)
}

function prepareFrenchToast(callBack) {
    setTimeout(() => {
        console.log("Prepare French Toast");
        callBack("French Toast is Ready");
    }, 3000);
}

function prepareCoffee(callBack) {
    setTimeout(() => {
        console.log('Prepare Coffee');
        callBack("Coffee is ready");
    }, 3000)
}


function myCallback(value) {
    console.log("Food is Ready callback =", value);
    prepareFrenchToast(frenchToastcallBack);
}

function frenchToastcallBack(value) {
    console.log("French Toast is Ready callback =", value);
    prepareCoffee(CoffeecallBack);
}

function CoffeecallBack(value) {
    console.log("Coffee is Ready callBack =", value);
}

prepareFood(myCallback);

console.log("After Prepare food dinner is ready!");