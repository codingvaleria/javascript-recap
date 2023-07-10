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
const promise4 = doSomething();

const promise5 = promise4.then(successCallback, failureCallback);

// then() syntax
promiseObject.then(onFulfilled, onRejected);

