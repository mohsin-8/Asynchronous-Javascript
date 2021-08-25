// executer

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        // resolve(roll_no);
        reject('Error while communicating');
    }, 2000);
});

// promise consume
promise.then((rollno) => {
    console.log(rollno);
}).catch((value) => {
    console.log("Error =", value);
})