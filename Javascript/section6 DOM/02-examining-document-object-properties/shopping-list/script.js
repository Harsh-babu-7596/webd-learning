let output;

output = document.all[11];
output = document.all.length;

output = document.documentElement;

output = document.head;
output = document.body;

output = document.body.children;


output = document.doctype;
output = document.contentType;


output = document.forms[0].method;
// the method is get as there was none defined earlier while defining the form

document.forms[0].id = 'newid'
output = document.forms[0].id;
// console.log(output);

// console.log(document.links[0]);
output = document.links[0].id = "Glinks"
output = document.links[0].href;
output = document.links[0].className = 'Google-1';
output = document.links[0].classList;


output = document.images;
console.log(output);


// for accessing the form we generally focus on the major html doc converted to array
// below is one way of doing it


// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);













/*
let output;

// document.all is deprecated
output = document.all;
output = document.all[11];
output = document.all.length;

// Everything in the html tags
output = document.documentElement;

// Head and body tags
output = document.head;
output = document.body;

// HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

// Random properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Get all forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Change a form id
document.forms[0].id = 'new-id';

// Get all links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Get all images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
*/