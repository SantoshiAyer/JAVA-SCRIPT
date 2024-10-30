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
