//promise chain
console.log("getting data1..");
gateData(1);
.then((res)=>{
    console.log("getting data2....");
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res);
});