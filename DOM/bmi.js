const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#result'); // Make sure this matches your HTML

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight.`;
    } else {
        const bmi = (weight / ((height * height))).toFixed(2); // height is already in meters
        results.innerHTML = `Your BMI is: <span>${bmi}</span>`;
    }
});
