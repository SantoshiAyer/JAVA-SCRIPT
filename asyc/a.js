// Simulating an asynchronous operation
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000); // Simulates a 2-second delay
    });
}

// Async function
async function getData() {
    console.log("Fetching data...");
    const data = await fetchData(); // Waits for the Promise to resolve
    console.log(data); // Logs "Data fetched!"
}

getData(); // Call the async functions



//You can use try...catch to handle errors in async functions:


async function getDataWithErrorHandling() {
    try {
        console.log("Fetching data...");
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getDataWithErrorHandling();


//Using with APIs
//Here's an example of using async and await with the Fetch API to get data from a server:



async function fetchUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

fetchUserData();

//Summary
// async makes a function return a Promise.
// await pauses the execution until the Promise is resolved or rejected.
// Use try...catch for error handling within async functions.

