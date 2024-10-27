let btn1 = document.querySelector("#btn");

btn1.onclick = () => {
    console.log("btn was clicked");
    let a = 12;
    a++;
    console.log(a); // This will now log 13
};
