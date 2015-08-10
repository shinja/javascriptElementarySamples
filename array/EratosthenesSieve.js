

var prime = function(n) {

    var start = 2;

    var ary = Array.apply(null, new Array(n - 1)).map(function(v, i) {
         return start + i;
    });

    var getPrime = function(p, ary) {

        if(p == ary.length)
            return ary;

        return getPrime(p + 1, 
                ary.filter(function(v) {
                    return v == ary[p] || v % ary[p] != 0;
                }));
    }

    return getPrime(0, ary);
}

console.log(prime(100).reduce(function(a, b) {
    return a + b;
}));
