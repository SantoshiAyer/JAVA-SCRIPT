// fuction hello1(){
//    let message="good morning"
// console.log("hello1:" +message)}
// hello1()



function outerFunction() {
   var outerVariable = 'I am from the outer function';
   
   function innerFunction() {
     console.log(outerVariable); 
   }
   
   return innerFunction;
 }
 
 var innerFunc = outerFunction();
 innerFunc()