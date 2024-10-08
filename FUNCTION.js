function myFunction(msg){
    //parameter=ip
        console.log("msg")
}
myFunction("i love js");//Argument

//function=2numbers,sum
function sum(a,b){
    //local variables
    s=a+b;
    return s;
}
let val=sum(3,4);
console.log(val);
//sum function
function sum (a,b){
    return a+b;
}
//multiplication function
function mul(a,b){
    return a*b;
}
//Arrow function
function sum (a,b){
    return a+b;
}
const arrowSum = (a,b) => {
    console.log(a+b);
};

//multiplication Arrow function 
function mul(a,b){
    return a*b;
}
const arrowMul= (a,b) => { 
    console.log(a*b);
};
//lets practice
//Q.1 create a function using the "function"keyword that takes string as an argument and returns the number of vowels in the string.
function countVowels(str){
    let count=0;
    for(const char of str){
        if(char= = = "a"||chr = = ="e"||char= = ="i"||char = = ="o"||char = = ="u"){
            count++;
        }
        
    }
    console.log(count);
}
//Q.2 create an arrow function to perform the same task.
const countVow = str() => {
    let count=0;
    for(const char of str){
        if(char= = = "a"||chr = = ="e"||char= = ="i"||char = = ="o"||char = = ="u"){
            count++;
        }
        
    }
    console.log(count);
}

