

var camlize = function(str) {

    words = str.split("-");

    return words.shift() + words.map(function(item) {
        return item.charAt(0).toUpperCase() + item.substr(1); 
    }).join("");
}


console.log(camlize("background-color"));
console.log(camlize("list-style-image"));

