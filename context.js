

var log = function() {
    console.log.call({}, arguments);
}

var assert = function(expression, msg) {
    (expression) && console.log(msg);
}


var obj = {};

function fn() {
    return this;
}

log(fn.call(obj) == obj);
// console.log(fn() == this);
