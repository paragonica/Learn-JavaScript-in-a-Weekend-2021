/*
function getShortCourseName() {
    var shortName = "Learning JavaScript";
    return shortName;
}
var longNameFunc = function getLongCourseName() {
    var longName = "Learning JavaScript Programming";
    return longName;
}
console.log(getShortCourseName());
//console.log(getLongCourseName());
console.log(longNameFunc());
*/
/*
function processOrder(quantity, successFunc, errorFunc) {
    if (quantity <=3) {
        completeOrder();
        successFunc();
    } else {
        errorFunc();
    }
}
var successFunction = function success() {
    console.log("success");
}
var errorFunction = function error() {
    console.log("error");
}
processOrder(2, successFunction, errorFunction);
processOrder(4, successFunction, errorFunction);

function completeOrder() {
    console.log("completing the order");
}
*/
courseOne = "JavaScript Programming";
var courseTwo = "HTML in a Weekend";

function courseListOne() {
    var courseThree = "CSS Made Easy";
    courseFour = "Python Coding";

    console.log(courseOne);
    console.log(courseTwo);
    console.log(courseThree);
    console.log(courseFour);
}

function courseListTwo() {
    var courseFive = "Expert HTML";

    console.log(courseOne);
    console.log(courseTwo);
    console.log(courseThree);
    console.log(courseFour);
    console.log(courseFive);
}

courseListOne();
courseListTwo();