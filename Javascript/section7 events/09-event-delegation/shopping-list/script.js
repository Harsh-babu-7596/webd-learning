const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Add an event listener on all items
// listItems.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

// list.addEventListener('click', (e) => {
//         if (e.target.tagName === 'LI') {
//             e.target.;
//         }
//     })
// Add a single event listener on the parent (Event Delegation)
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'black';
        // console.log(e.target.tagName);
    }
});

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});