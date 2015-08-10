

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
//
var timeout = function(cb) {

    console.log('timeout');
    if(cb) cb();
}

setTimeout(timeout, 1000, function() {
   
    setTimeout(timeout, 1000, function() {
        console.log('end'); 
    });
    console.log('loop for blocking JavaScript messsage queue');
    for(;;);
});


