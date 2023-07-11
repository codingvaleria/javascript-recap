/*
Represents the completion stage of an Async operation in jS

States
1. Pending: all operations begine from this state
2. Fulfilled: an async action was succesfully completed
3. Rejected: an async action was not successfully completed.
*/
// Synchronous Operation
let promise = new Promise(function (resolve, reject) {
  //do something
});

const count = false;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value");
  } else {
    reject("There is no count value");
  }
});

// console.log(countValue);
// Asynchronous with fulfilled operation
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 8000);
});

promise2.then((success) => console.log(success));

// Asynchronous with rejected operation
let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 4000);
});

// Promise Chaining; then, catch, finally
// const promise4 = doSomething();

// const promise5 = promise4.then(successCallback, failureCallback);

// // then() syntax
// promiseObject.then(onFulfilled, onRejected);

//Example
// return a promise
let task = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// execute when promise is resolved successfully
task
  .then(function successValue1(result) {
    console.log(result);
  })
  .then(function sucessValue2() {
    console.log("call this multiple times");
  });

// The catch() method
let task2 = new Promise(function (resolve, reject) {
  reject("Promise rejected");
})
  .then(function successValue(result) {
    console.log(result);
  })
  // executes if there is an error
  .catch(function errorValue(result) {
    console.log(result);
  });

// The finally method ; disconnect connection to a database; executes irrevelant of result of promise
let newValue = new Promise(function (resolve, reject) {
  resolve("promise resolved");
});

newValue
  .then((success) => {})
  .catch((error) => {})
  .finally(function greet() {
    console.log("This code is executed");
  });

// Nested promises
function testAsync() {
  let promise3 = new Promise(function (resolve, reject) {
    console.log("promise");
    // setTimeout(() => reject(new Error("Whoops!")), 0);
    setTimeout(() => {
      console.log("promise 3");
      resolve(0);
    }, 3000);
  })
    .then((x) => {
      console.log(x);
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          console.log("promise 4");
          resolve(x + 1);
        }, 1000);
      }).then((x) => {
        return x + 1;
      });
    })
    .then((x) => {
      console.log("x2", x);
      return x * 2;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("Here");
  return promise3;
}

testAsync().then((x) => {
  console.log(x);
});

// Async/Await
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(46);
    }, 1000);
  });
}
// to read the value of promise
async function start() {
  const result = await getData();
  console.log(result);
}

start();
// another way.
async function start2() {
  getData().then((result) => {
    console.log(result);
  });
}
start2()
