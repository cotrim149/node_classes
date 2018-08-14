
var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);

  });
}

asyncAdd(5 , 7).then((result) => {
  console.log(`Result: ${result}`);
  return asyncAdd(result, 33);
}).then((result) => {
  console.log('Expect result be 45. Result: ',result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// var somePromisse = new Promise(((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey. It worked');
//     reject('Unable to fulfill the promise.');
//   }, 2500);
// }));

// somePromisse.then((message) => {
//   console.log(message);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });