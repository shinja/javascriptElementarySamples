

var log = function() {
    console.log.call({}, arguments);
}

var assert = function(expression, msg) {

    (expression) && console.log(msg);
}


assert( typeof anonyFunc == "undefined", "anonyFunc is NOT assigned yet, event the anonymous function is already created though." ); 

var anonyFunc = function(){ return true; }; //anonyomus function
assert(namedFunc() && anonyFunc(), "works, even though namedFunc is moved under this line." ); 
function namedFunc(){ return true; }; //named function, could be defined at the last.


function stealthCheck(){ 
    assert( stealth(), "function defined below return statement, that's OK!" ); 

    return stealth(); 

    function stealth(){ return true; } 
} 

stealthCheck();


log('----Name of Function----');

var ninja = function myNinja(){ 
    assert( ninja == myNinja, "This function is named two things(ninja, myNinja) - at once!" ); 
}; 

ninja();
assert( typeof myNinja == "undefined", "But myNinja isn't defined outside of the function." ); 
log( ninja );


var ninja = {

    atr: "ninja", 

    yell: function(n) {
        
        /* 
         * !!We call ninja.yell here not this.yell, 
         * which will get an exception after we set ninja = null!!
        */
        return n > 0 ?  ninja.yell(n-1) + "a" : "[" + this.atr + "]::hiy";
    },
};
log("ninja.yell(4)", ninja.yell(4));
samurai = { yell: ninja.yell };
log("samurai.yell(4)", samurai.yell(4));

ninja = null; //set ninja as null
log("samurai.yell function instance = ", samurai.yell);

try {
    log("after set ninja = null", "samurai.yell(4)", samurai.yell(4), '\n'); //exception!!
} catch(e) {
    // console.log(e.name);  
    // console.log(e.message);
    console.log(e.stack);
}

var ninja = {
    spark: function spark(n) {

        /*
        * calling the local reference-able function "spark" in the named function.
        */
        return n > 0 ? spark(n - 1) + "s" : "park";
    }
};

log("ninja.spark(4)", ninja.spark(4));
samurai = { spark : ninja.spark};
log("samurai.spark(4)", samurai.spark(4));

ninja = null; //set ninja as null

try {
    log("after set ninja = null", "samurai.spark(4)", samurai.spark(4), '\n'); //exception!!
} catch(e) {
    log(e);
}

var ninja = { 
  yell: function(n){ 
    return n > 0 ? arguments.callee(n-1) + "a" : "hiy"; 
  } 
}; 
log("ninja.yell(4), arguments.callee is the function itself.", ninja.yell(4));


