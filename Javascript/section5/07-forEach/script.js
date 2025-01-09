const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// View prototype chain
console.log(socials.__proto__);

// practice coding
socials.forEach(function(item) {
    // things need to be done
    console.log(item);
});


// index can also be passed depending on need as this is the funtion
// Long form
socials.forEach(function(item) {
    console.log(item);
});

// Short form
socials.forEach((item) => console.log(item));

// We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);
// its a callback funtion so arguments are not passed

// Array of objects
const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));

// forEach only works with predefined variable name as we know it.