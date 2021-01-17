// function name(){
//     console.log('Shahnewaz');
//     console.log('Khondokar...Koi tmi');
// }

// name();

// var date = 14;
// var place = 'Dhaka';
// name();
// var meetPlace = 'Dhanmondhi';
// name();

//==Using Parameter==//
/*function doubleIt(num){
    var result = num * 2;
    console.log(result);
}

doubleIt(5);
doubleIt(100);
doubleIt(500);

*/


//==Using Parameter another way==//
function doubleIt(num){
    var result = num * 2;
    return result;
}

var first = doubleIt(5);
var second = doubleIt(100);
var third = doubleIt(500);
var total = first + second + third;
// console.log(first, second, third)
// console.log(total);


function add(num1, num2){
    var result = num1 + num2;
    return result;
}

var sum = add(15, 17);

console.log(sum);
