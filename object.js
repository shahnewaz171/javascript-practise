//Object//
var student = { id:121, phone:1367, name:"newaz"};

var student2 = { id:1367, phone:6737, name:"Jannatul"};

// var phoneNo = student["phone"];//show phone number
var phoneNo = student.phone; //show phone number

var topPhone = "phone";

student2.phone = 5050;

student2.cinema = "Agni2222"; //Add new property for student2
student[topPhone] = 45050; //updated phone number
console.log(phoneNo);
console.log(student);
console.log(student2);