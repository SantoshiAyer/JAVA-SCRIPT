//let btn = document.querySelector("#btn"); // Use quotes for the selector

//btn.addEventListener("click", (evt) => {
  //  console.log("button was clicked - handler 1");
//});

//btn.addEventListener("click", (evt) => {
  //  console.log("button was clicked - handler 2");
//});

//const btn=("click", (evt) => {
  //  console.log("button was clicked - handler 3");
//});
//btn.addEventListener("click", (evt) => {
  //  console.log("button was clicked - handler 3");
//});

//btn.addEventListener("click", (evt) => {
  //  console.log("button was clicked - handler 4");
//});

//btn.removeEventListener("click", (evt) => {
   // console.log("button was clicked - handler 3");
//});

let btn = document.querySelector("#btn"); // Select the button

// Handler functions
const handler1 = (evt) => {
    console.log("button was clicked - handler 1");
};

const handler2 = (evt) => {
    console.log("button was clicked - handler 2");
};

const handler3 = (evt) => {
    console.log("button was clicked - handler 3");
};

const handler4 = (evt) => {
    console.log("button was clicked - handler 4");
};

// Add event listeners
btn.addEventListener("click", handler1);
btn.addEventListener("click", handler2);
btn.addEventListener("click", handler3);
btn.addEventListener("click", handler4);

// If you want to remove handler3 later, do this
btn.removeEventListener("click", handler3);
