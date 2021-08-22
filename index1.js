// Promises

console.log("Before Prepare Food");

function prepareFood(data) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (data !== 2) {
                console.log("Prepare Food");
                resolve("Food is Ready");
            } else {
                reject("value not acceptable");
            }

        }, 2000)
    });
    return promise;
}

function prepareTea() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Prepare Tea");
            resolve("Tea is Ready");
        }, 3000)
    });
    return promise;
}

function prepareCoffee() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        }, 2000)
    });
    return promise;
}

// function myCallback(value) {
//     console.log("Food is Ready callback =", value);
//     prepareFrenchToast(frenchToastcallBack);
// }

// function frenchToastcallBack(value) {
//     console.log("French Toast is Ready callback =", value);
//     prepareCoffee(CoffeecallBack);
// }

// function CoffeecallBack(value) {
//     console.log("Coffee is Ready callBack =", value);
// }

let promise = prepareFood(2);
// console.log("Promise = ", promise);

promise.then(function (value) {
    console.log("Food is Ready to Eat =", value);
    return prepareTea();
}).then(function (tea) {
    console.log("Tea is Ready =", tea);
    return prepareCoffee();
}).then(function (coffee) {
    console.log("Coffee is Ready! =", coffee);
})
    .catch(function (error) {
        console.log("Error =", error);
    });

// console.log("After Prepare food dinner is ready!");