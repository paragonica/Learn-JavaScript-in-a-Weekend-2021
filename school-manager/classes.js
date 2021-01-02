class Person {
    constructor(firstName, lastName, age, gender) {
        this.fname = firstName;
        this.lname = lastName;
        this.age = age;
        this.gender = gender;
    }
    greeting() {
        console.log(`${this.fname} says hello!`);
    }
}
const p = new Person("Bob", "Smith", 45, "M");
p.greeting();

class Teacher extends Person {
    constructor(firstName, lastName, age, gender, subject, yearsService) {
        super(firstName, lastName, age, gender);
        this.subject = subject;
        this.yearsService = yearsService;
    }
    greeting() {
        super.greeting();
        console.log("Students, please take your seats.")
    }
    passOutTests() {
        console.log("Teacher passes out tests.")
    }
}
const t = new Teacher("Sue", "Carson", 33, "F", "Science", 18);
t.greeting();
t.passOutTests();

class Student extends Person {
    constructor(firstName, lastName, age, gender, classes) {
        super(firstName, lastName, age, gender);
        this.classes = classes;
    }
    greeting() {
        super.greeting();
        console.log("Hi, how did you do on the quiz?");
    }
    takeTest() {
        console.log(this.fname + " is taking a test.")
    }
}
const s = new Student("Tim", "Hogan", 18, "M", ["Math", "Science", "Economics"]);
s.greeting();
s.takeTest();

class Administrator extends Person {
    constructor(firstName, lastName, age, gender, department, yearsService) {
        super(firstName, lastName, age, gender);
        this.department = department;
        this.yearsService = yearsService;
    }
    greeting() {
        super.greeting();
        console.log("See you at the budget meeting.");
    }
    attendMeeting()  {
        console.log("Time for another meeting.")
    }
}
const a = new Administrator("Doug", "Yang", 43, "M", "Finance", 12);
a.greeting();
a.attendMeeting();