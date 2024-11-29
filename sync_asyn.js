/*console.log('Start');

function doTask(){
console.log('Task is being done.');
}

doTask(); //This will run immediately,after"Start"

console.log('End');*/


console.log('Start');

function doTaskAsync(){
setTimeout(()=>{
console.log('Task is being done asynchronously.');
},2000);
}
doTaskAsync();

console.log('End');
