// Async & Await functions

console.log("Before Prepare Food");

function prepareFood(callBack) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Prepare Food");
            resolve("Food is Ready");
        }, 2000);
    });
    return promise;
}

function prepareTea(callBack) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Prepare Tea");
            resolve("Tea is Ready");
        });
    });
    return promise;
}

function prepareFoodcallBack(value) {
    console.log("Food is Ready to Eat =", value);
    prepareTea(prepareTeacallBack);
}

function prepareTeacallBack(value) {
    console.log("Coffee is Ready =", value);
}



async function startProcess() {
    let foodValue = await prepareFood();
    console.log("Food ", foodValue);
    let teaValue = await prepareTea();
    console.log("Tea ", teaValue);
}

startProcess();





let promise = prepareFood();

// promise.then(function (value) {
//     console.log("Food is Ready callback = ", value);
//     return prepareTea();
// }).then(function (teaValue) {
//     console.log("Tea is Ready callback = ", teaValue);
// })

prepareFood(prepareFoodcallBack);




console.log("After Prepare Food dinner is Ready!");