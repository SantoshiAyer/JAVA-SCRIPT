let myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    let success = true; // Change this to false to test rejection
  
    if (success) {
      resolve('Operation successful!');
    } else {
    reject('Operation failed!');
    }
});

  //handling promises results
myPromise
.then(result => {
    console.log(result); // Logs: 'Operation successful!'
})
.catch(error => {
    console.log(error); // If promise is rejected, log the error message
});


