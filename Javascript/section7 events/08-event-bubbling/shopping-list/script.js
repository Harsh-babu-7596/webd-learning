const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

// e denotes event
// bubbeling refers to here as a thing called
// if  a button was clicked then it follows a trajectory of 

// Button DIV BODY HTML Document
// and it goes around that  till document is reached 
button.addEventListener('click', (e) => {
    alert('Button was clicked');
    e.stopPropagation(); //this term stops the propogation around the whole document 
});
// or stop immediate propogation is used in case of multiple events
// explained in the net video
div.addEventListener('click', (e) => {
    alert('Div was clicked');
    e.stopPropagation();
});

form.addEventListener('click', () => {
    alert('Form was clicked');
});

document.body.addEventListener('click', () => {
    alert('Body was clicked');
});