var age = ['15', '17', '14', '16'];

console.log(age[1]);



//====//
var age = ['15', '17', '14', '16'];

// console.log(age[3]);
var myAge = age[2];

console.log(myAge);


//====//
var age = ['15', '17', '14', '16'];

var myAge = age[2];

age[1] = 21;
console.log(age);



// //====//
// var friendAge = [15, 17, 14, 16];

// var sonaliAge = friendAge[2];

// friendAge[1] = 21;

// var position = friendAge.indexOf(14);
// console.log(position);


//==Push==//
var friendAge = [15, 17, 14, 16];

var sonaliAge = friendAge[2];

friendAge[1] = 21;

var position = friendAge.indexOf(14);

// console.log(friendAge);
friendAge.push(15);
friendAge.push(20);
console.log(friendAge);
friendAge.pop();
console.log(friendAge);


//==Element Length==//
var friendAge = [15, 17, 14, 16];

var sonaliAge = friendAge[2];

friendAge[1] = 21;

var position = friendAge.indexOf(14);

console.log(friendAge.length);
friendAge.push(15);
friendAge.push(20);
console.log(friendAge.length);