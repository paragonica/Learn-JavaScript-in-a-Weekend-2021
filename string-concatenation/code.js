var a = "Hello";
var b = "World";
var c = "Bob";
var d = ["Susan", "Tim", "Mary"];
var e = 2021;
var f = "World Trade Conference";

console.log(a + " " + b);
console.log(a += b);
console.log(e + " " + f);
console.log(f + " " + e);
console.log(d.join());
console.log(d.join(" "));
console.log(d.join(", and"));
console.log(["http://www.mysite.com", "products", "books", "business"].join("/"));
console.log("".concat("Join us at ", f, " ", e));
console.log(`In ${e} we will attend the ${f}.`);
console.log(`This is a long string
            that I want to be output on
            several lines, not a single line.`);
console.log(`
This is a long string
that I want to be output on
several lines, not a single line.
`);            