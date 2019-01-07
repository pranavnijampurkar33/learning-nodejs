var name = "John"
setTimeout(()=>{
    console.log("Ok. I am 3rd..!");
},2000);

console.log("I am first");
console.log("I am 2nd");

const fetchData = callback => {
    console.log("1 fetchdata");
    setTimeout(() => {
        callback("2 fetchdata");
    },1500);
};

setTimeout(()=>{
    console.log("3 setTimeout");
    fetchData(text => {
        console.log(`4 ${text}`);
    });
},1000)

console.log("5 data");