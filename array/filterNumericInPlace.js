

var filterNumericInPlace = function(arr) {

   for(var i = arr.length - 1 ; i >= 0; i--) {
        if(typeof arr[i] != "number")
           arr.splice(i, 1); 
   } 
}


var arr = ["a", 1, "b", 2];
filterNumericInPlace(arr);
console.log(arr);
