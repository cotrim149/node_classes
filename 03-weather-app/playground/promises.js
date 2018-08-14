var somePromisse = new Promise(((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hey. It worked');
    reject('Unable to fulfill the promise.');
  }, 2500);
}));

somePromisse.then((message) => {
  console.log(message);
}, (errorMessage) => {
  console.log(errorMessage);
});