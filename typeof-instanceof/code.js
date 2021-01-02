// function out(str, result) {
//     console.log(str, result);
// }

// out('typeof 37',typeof 37);
// out('typeof 3.14',typeof 3.14);
// out('typeof NaN',typeof NaN);
// out('typeof Number(10)',typeof Number(10));
// out('typeof Number("1")',typeof Number('1'));
// out('typeof 42n',typeof 42n);
// out('typeof ""',typeof "");
// out('typeof "apple"',typeof "apple");
// out('typeof String(1)',typeof String(1));
// out('typeof true',typeof true);
// out('typeof !!(1)',typeof !!(1));
// out('typeof undefined',typeof undefined);
// out('typeof {name: "Mary"}',typeof {name: "Mary"});
// out('typeof [1, 2, 3]',typeof [1, 2, 3]);
// out('typeof new Date()',typeof new Date());
// out('typeof function() {}',typeof function() {});
// out('typeof null',typeof null);

function Person(first, last, age, gender, hobbies) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.hobbies = hobbies;
}
Person.prototype.greeting = function() {
    alert("Hi there. My name is " + this.first + ".");
};

function Teacher(first, last, age, gender, hobbies, subject) {
    Person.call(this, first, last, age, gender, hobbies);

    this.subject = subject;
}
Teacher.prototype.greeting = function() {
    alert("Hello, I am your teacher.");
}
var me = new Person("Bob", "Smith", 34, "M", "tennis");
console.log(me.first);
me.greeting();
var myTeacher = new Teacher("Susan", "Carson", 55, "F", "running", "Math");
console.log(myTeacher.last);
myTeacher.greeting();

console.log(me instanceof Person);
console.log(myTeacher instanceof Teacher);
console.log(myTeacher instanceof Person);
console.log(me instanceof Teacher);
console.log(me instanceof Object);
console.log(myTeacher instanceof Object);
