// IFFE Syntax (Has it's own scope and runs right away)
// called immediately invoked function expression


// there is a way to declare and invoke at the same time
// the reason is multiple files and just it
(function() {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

// Params
(function(name) {
    console.log('Hello ' + name);
})('Shawn');

// Named IIFE (Can only be called recursively)
(function hello() {
    console.log('Hello');
})();