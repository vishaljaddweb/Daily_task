const fs = require('fs');

var data = fs.readFileSync('student.json');
var student = JSON.parse(data);
console.log(student);