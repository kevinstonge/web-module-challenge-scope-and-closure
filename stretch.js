//1.
// (function(){
//     var a = b = 3;
// })();
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));
// I predict that the above code will return:
// "a defined? false"
// "b defined? false"
// because the console.log statements are referencing a variable declared within a code block with nested scope.

//actual result: 
// "a defined? false"
// "b defined? true"
// b == 3, a is undefined!

//this result was surprising and confusing to me, article linked in the readme didn't directly explain this example. var a = b = 3; works to define both a and b in global scope, and in nested scope, AND in an immediately invoked function:
var a = b = 3;
console.log(a,b);
function test() {
    var c = d = 3;
    w = 6;
    console.log(c,d);
}
test();
// console.log("c",c); //undefined
console.log("d",d); //defined and equal to 3
console.log("w",w); //defined and equal to 6
(function(){
    let e = f = 3;
    console.log("e,f:",e,f);
})();

