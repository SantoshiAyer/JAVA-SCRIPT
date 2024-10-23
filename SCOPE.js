
function addOne(num) {
    return num + 1;
}
console.log(addOne(2)); // Call the function to log the result

const addTwo = function(num) {
    return num + 2;
};
console.log(addTwo(2)); // Call the function to log the result

//nested scope
function one(){
    const username='santu'

    function two() {
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username="santu"
    if(username= = ="santu"){
        const website="youtube"
        console.log(username+website)
    }
    console.log(website);
}
console.log(username);














