let a = 3;
let b = 3000;
const intervalid = setInterval(function () {
    console.log(a++);
}, 1000);
setTimeout(function () {
    clearInterval(intervalid);
}, b - a)