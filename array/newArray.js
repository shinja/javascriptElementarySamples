

var arr = new Array(2,3) // ok we have [2, 3]
console.log(arr) 
arr = new Array(2) // do we have [2] ?
console.log(arr) // no! we have array [undefined, undefined]



var indent = new Array(5).join('a');
console.log("repeat string", indent);
