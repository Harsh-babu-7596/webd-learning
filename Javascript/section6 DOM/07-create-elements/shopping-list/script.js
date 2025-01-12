const item = document.createElement('div')

item.className = 'item-class'

item.setAttribute('title', 'myelement') //used for adding any attribute in any TML tag

item.innerText = "kaka kaka"

// till now its just a blank nodes


const text = document.createTextNode('bol-kake');

item.appendChild(text);
document.body.querySelector('.form-control').appendChild(item);
// document.querySelector('ul').appendChild(item);
console.log(item);




// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');

// // div.innerText = 'Hello World';

// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// // document.body.appendChild(div);

// document.querySelector('ul').appendChild(div);