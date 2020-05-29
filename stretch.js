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

//this result was surprising and confusing to me, article linked in the readme didn't directly explain this example. var a = b = 3; works to define both a and b in function scope, but only b is becomes defined in global scope, which is unexpected behavior. below I have written a few lines of annotated code to explore what is happening here:
var a = b = 3; // works as expected
function test() {
    var c = d = 3; //works as expected in scope
    w = 6;
}
//c, d, not defined before function is called
test();
//console.log(c,d); //only c is not defined now
console.log("w",w); //defined and equal to 6
(function(){
    let e = f = 3;
    console.log("e,f:",e,f);
})();

// console.log(e); //undefined
console.log(f); //3

//this appears to have to do with the missing declaration keyword ('var'/'let'/'const') preceeding variable b in the original example. I did ultimately find an article that explained that this is a quirky hoisting phenomenon in javascript that coders should try to avoid because it makes debugging very difficult:

//quote from https://blog.usejournal.com/var-let-and-const-hoisting-and-scope-8860540031d1:
    // When you don’t declare a variable but assign a value to the variable, the variable gets created and is attached to the global execution context (window in the browser and global in node). This, however, is strongly advised against as it makes debugging very difficult.

// 2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

// ```js
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

//to do this using closure implies that the createBase function createBase() needs to return a function that accepts the parameter passed from the addSix function calls, and that this nested function needs to reference the 6 passed to the parent function (closure).:

// solution:
// function createBase(base) {
//     return function(addend) {
//         return base + addend;
//     }
// }

//just want to try with arrows:
let createBase = base => addend => base + addend; 
var addSix = createBase(6);
console.log(addSix(10));

//3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

