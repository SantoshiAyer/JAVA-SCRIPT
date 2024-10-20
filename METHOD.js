//for loop in Arrays
//arr.forEach(callBackFunction)
//callbackFuction:Here,it is a function to execute for each element in the array
//a callback is a function passed as an argument yo another function
//arr.forEach((val) =>{
    //console.log(val);
//})
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
})
//Arrow function
let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val)
});
//lets practice
//  Q.1 for a given array of numbers print the square of each value ussing forEach loop.
let nums=[2,4,6,8];

nums.forEach((num )=>{
    console.log(num*num);
})
//some more array methods
//Map
//creates a new array with the results of some operation.the value its callback returns are used to form a new array
arr.map(callbackFnx(value,index,array))
let newArr=arr,map((val)=>{
    return val*2;
})
//example
// Original array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using the map method to square each number
const squaredNumbers = numbers.map(num => num * num);

// Output the new array
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//FILTER method;creates  new array of element that give true for a condition /filter.
//e.g all even elements
let newArr=arr.filter((val)=>{
    return val%2= = = 0;
})
const numbers = [1, 2, 3, 4, 5];

// Filtering out even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//Reduce:performs some operation and reduces the array to a single value . It returns that single value.
const array1=[1,2,3,4]

arr.reduce((res,carr)=>{
    return res+ curr ;
});
console.log(output);


//
let n=prompt("enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

//

let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum=",sum);

//

let factorial =arr.reduce((res,curr)=>{
    return res*curr;
});

