// Function

function greet(name) {
    return "Hello " + name;
}
console.log(greet("karthik"));


// Function with multiple parameters

function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 5));


// Arrow function

const addition = (a, b) => a + b;
console.log(addition(20, 40));


// Anonymous function

const greets = function(name) {
    return "Welcome " + name;
};
console.log(greets("Sara"));


// Callback function

function hello(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("See you!");
}

hello("Almas", bye);


// Callback using anonymous function

function greetings(name, callback) {
    console.log("Hi " + name);
    callback();
}

greetings("Riya", function() {
    console.log("Goodbye!");
});


// Callback using arrow function

function good(name, callback) {
    console.log("Hey " + name);
    callback();
}

good("Rahul", () => {
    console.log("Take care!");
});


// setTimeout callback

setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);