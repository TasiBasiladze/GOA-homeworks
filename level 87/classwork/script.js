//task 1
//A Promise is an object that represents an asynchronous operation and its final result (either resolve or reject).
//It is used to organize code more conveniently, especially in asynchronous operations such as sending requests to
//a server, reading files, and so on.

//task 2
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1); 
    }, 1000);
});

promise1
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});

//task 3
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(2)
    }, 1000)
})

promise2
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});

//task 4
function fetchData(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("succesed");
        } else {
          reject("not succesed");
        }
      }, 1000); 
    });
}

fetchData(true) 
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

