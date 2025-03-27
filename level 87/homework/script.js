//task 1
const promise1 = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
})
promise1
    .then(res => console.log(res))
    .catch(err => console.log(err));

//task 2
const promise2 = new Promise((resolve, reject) => {
    reject("Something went wrong!");
})

promise2
    .then(res => console.log(res))
    .catch(err => console.log(err));

//task 3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2 seconds have passed");
    }, 2000);
})

promise3
    .then(res => console.log(res))
    .catch(err => console.log(err));

//task 4
const promise4 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 11);
    if (random < 5){
        resolve("Success!");
    }
    else{
        reject("Failed!");
    }
})

promise4
    .then(res => console.log(res))
    .catch(err => console.log(err));

//task 5
promise5 = new Promise((resolve) => {
    resolve(5);
});

promise5
    .then(res => res)
    .then(res => res * 2)
    .then(res => res * 2)
    .then(res => console.log(res * 2));

//task 6
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched!");
    }, 1000);
})

promise6
    .then(res => console.log(res))
    .catch(err => console.log(err));