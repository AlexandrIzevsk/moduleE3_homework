let x
let y

function sum(x) {
    return function (y) {
        return x + y;
    }
}

let f = sum(5);
console.log(f(0), f(1), f(6));