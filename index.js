// Async/Await function

const loadData = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
};

loadData();


// We can handle errors using a try catch block like this:

const loadData = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/todos/qwe1";
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            console.log(data);
        } else {
            console.log(res.status); // 404
        }
    } catch (err) {
        console.log(err)
    }
};

loadData();

// OUTPUT
// 404









/*
This is one of the traits of async functions — 
their return values are guaranteed to be 
converted to promises. To handle data returned 
from an async function we can use a then keyword 
to get the data.
*/


const loadData = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const data = loadData().then(data => console.log(data));