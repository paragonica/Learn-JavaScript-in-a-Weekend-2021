// function chainingAssignments() {
//     var a = b = c = 10;
// }
// chainingAssignments();
// console.log("a", a);
// console.log("b", b);
// console.log("c", c);
// function goodChaining() {
//     var a, b, c;
//     a = b = c = 10;

//     var d = 10, e = d;
// }

// console.log("a", a);
// console.log("b", b);
// console.log("c", c);
// console.log("d", d);
// console.log("e", e);

// function mathAssignmentOperators() {
//     var x = 10;
//     console.log(x);
//     x += 5;
//     console.log(x);
//     x -= 3;
//     console.log(x);
//     x *= 4;
//     console.log(x);
//     x /= 2;
//     console.log(x);
//     x %= 5;
//     console.log(x);
//     x **= 2;
//     console.log(x);
// }
// mathAssignmentOperators();

// function bitwiseAssignment() {
//     var x = 163;
//     console.log(x.toString(2));
//     var y = 178;
//     console.log(y.toString(2));

//     x &= y;
//     console.log(x, " : ", x.toString(2));

//     var z = 45;
//     console.log(z.toString(2));

//     x |= z;
//     console.log(x, " : ", x.toString(2));

//     var w = 37;
//     console.log(w.toString(2));

//     x ^= w;
//     console.log(x, " : ", x.toString(2));
// }

// bitwiseAssignment();

// function logicalAssignment() {
//     var a = 1;
//     var b = 0;

//     a &&= 2;
//     console.log(a);
//     b &&= 5;
//     console.log(b);

//     var c = true;
//     var d = false;

//     c &&= 10;
//     console.log(c);
//     d &&= 15;
//     console.log(d);

//     var e = 1;
//     e ||= "Hello";
//     console.log(e);

//     var f = false;
//     f ||= "Goodbye";
//     console.log(f);

//     var g = "cupcakes";
//     g ??= "good";
//     console.log(g);

//     var h;
//     h ??= "I think it is undefined";
//     console.log(h);

//     var i = null;
//     i ??= "This one is null";
//     console.log(i);
// }
// logicalAssignment();
function shiftAssignment() {
    var a = 5;
    console.log(a);
    console.log(a.toString(2));

    a <<= 2;
    console.log(a.toString(2));
    console.log(a);

    var b = 5;
    console.log(b);
    console.log(b.toString(2));

    b >>= 2;
    console.log(b.toString(2));
    console.log(b);

    var c = -5;
    console.log(c);
    console.log(c.toString(2));

    c >>>= 2;
    console.log(c.toString(2));
    console.log(c);

    var d = -5;
    console.log(d);
    console.log(d.toString(2));

    d >>= 2;
    console.log(d.toString(2));
    console.log(d);
}
shiftAssignment();