function add(x, y) {

    return function (z) {
        return x + y + z;
    }
}

var x = add(5, 7);
console.log(x(9));