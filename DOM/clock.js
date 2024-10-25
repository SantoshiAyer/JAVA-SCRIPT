const clock = document.getElementById('clock'); // Get the clock element

setInterval(function () {
    let date = new Date(); // Get the current date and time
    clock.innerHTML = date.toLocaleTimeString(); // Update the clock with the current time
}, 1000); // Update every second (1000 milliseconds)
