let myPromise = new Promise((resolve, reject) => {
// Simulate an asynchronous operation
let success = true; // Change this to false to test rejection

if (success) {
resolve('Operation successful!');
} else {
reject('Operation failed!');
}
});

//handling promises results..
myPromise
.then(result => {
console.log(result); // Logs: 'Operation successful!'
})
.catch(error => {
console.log(error); // If promise is rejected, log the error message.
});

//Asynchronous Operation..
let fetchData = new Promise((resolve, reject) => {
setTimeout(() => {
let dataFetched = true; // Change this to false to simulate an error.

if (dataFetched) {
resolve("Data fetched successfully!");
} else {
reject("Error: Data fetch failed!");
}
}, 2000);
});

fetchData
.then((message) => {
console.log(message); // Logs after 2 seconds: 'Data fetched successfully!'..
})
.catch((error) => {
console.log(error); // Logs if the promise is rejected..
});



