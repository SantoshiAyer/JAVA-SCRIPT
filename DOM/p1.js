const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e); // Log the event
        console.log(e.target); // Log the target of the event

        // Get the color from the button's ID
        const color = e.target.id;

        // Change the background color based on the button clicked
        if (color === 'grey' || color === 'white' || color === 'blue' || color === 'yellow') {
            body.style.backgroundColor = color;
        }
    });
});
