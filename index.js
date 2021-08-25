// executer

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4, 5];
//         resolve(roll_no);
//         reject('Error while communicating');
//     }, 2000);
// });

// const getBiodata = (indexData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((indexData) => {
//             let bioData = {
//                 name: "Mohsin",
//                 age: 19
//             }
//             resolve(`My Roll no is ${indexData}. My name is ${bioData.name} and i am ${bioData.age} years old.    
//             `);
//         }, 2000, indexData);
//     });
// }
// promise consume
// promise.then((rollno) => {
//     console.log(rollno);
//     return getBiodata(rollno[1]);
// }).then((value1) => {
//     console.log(value1);
// })
//     .catch((value) => {
//         console.log("Error =", value);
//     })




const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no);
        // reject("Error While Communicating");
    }, 2000);
});


const getBioData = (indexData) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexData) => {
            let BioData = {
                name: "Mohsin Ali Khan",
                age: 19
            }
            resolve(`My name is ${BioData.name} and i am ${BioData.age} years old. My Roll No. is ${indexData}`);
        }, 2000, indexData)
    })
}

promise.then((rollno) => {
    console.log("Students Roll No =", rollno);
    return getBioData(rollno[2])
        .then((value) => {
            console.log("Students Identity =", value);
        })
}).catch((error) => {
    console.log(error);
})