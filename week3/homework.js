'use strict';
// 1.write a function that takes anther function as an argument and runs it..
function foo(callback) {
    callback = function () {
        return callback();
    }
}

function bar() {
    console.log('Hello, I am bar!');
}
foo(bar());

//2.

var numbers = [];
function sayThree(item) {
    if (item % 3 === 0) {
        console.log("this number is divisible by 3 ");
        numbers.push(item);
    } else {
        console.log("this number is not divisible by 3 ");
        numbers.push(item);
    }

}
function sayFive(item) {
    if (item % 5 === 0) {
        console.log("this number is divisible by 5 ");
        numbers.push(item);
    } else {
        console.log("this number( " + a + " )is not divisible by 5 ");
        numbers.push(item);
    }

}

function threeFive(startIndex, stopIndex) {

    for (let index = startIndex; index < stopIndex; index++) {
        if (index % 3 === 0) {
            sayThree(index);
        } else if (index % 5 === 0) {
            sayFive(index);
        } else {
            sayFive(index);
            sayThree(index);
        }
    }
}
threeFive(10, 15, sayFive, sayThree);

//3.1.a for loop


function repeatStringNumTimes(str, num) {

    str = num < 0 ? "" : str;
    let strRa = "";
    for (let i = 0; i < num; i++) {
        strRa += str;
    }

    console.log("FOR LOOP:" + strRa);
}

repeatStringNumTimes("abc", 3);


// 3.2.a while loop

function repeatsStringNumTimes(str, num) {

    str = num < 0 ? "" : str;
    let strRa2 = "";
    let i = 0;
    while (i < num) {
        strRa2 += str;
        i++;
    }

    console.log("WHILE LOOP:" + strRa2);
}

repeatsStringNumTimes("abc", 3);


// 3.3 a do loop

function repeatsStringsNumTimes(str, num) {

    str = num < 0 ? "" : str;
    let strRa3 = "";
    let i = 0;

    do {
        strRa3 += str;
        i++;
    } while (i < num);

    console.log("DO LOOP:" + strRa3);
}

repeatsStringsNumTimes("abc", 3);

// 7.

let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

console.log(i do not understand what is going here);


//5.function that allow the second declaration
function createBase(something) {
    return function (x) {
        return x += something;
    }
}
let addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27