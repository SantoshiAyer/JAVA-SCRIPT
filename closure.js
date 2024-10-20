// fuction hello1(){
//    let message="good morning"
// console.log("hello1:" +message)}




function outerFunction() {
   var outerVariable = 'I am from the outer function';
   
   function innerFunction() {
     console.log(outerVariable); 
   }
   
   return innerFunction;
 }
 
 var innerFunc = outerFunction();
 innerFunc()