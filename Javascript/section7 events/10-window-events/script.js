// On Page Load

// basically onload reloads stuff way before the script is combined

// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => console.log('Page Loaded'));
// On DOM Load
// in cas of DOM loaded the DOM loads way early before the main
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));
console.log('Run me');

// we can use with defer in the head tag or just keep in the head tag

// Resize Event
window.addEventListener('resize', () => {
    // there are multiple events one of them is resize and others the list can be accessed thorugh chat Gpts
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// Scroll Event
// window.addEventListener('scroll', () => {
//     console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
//     //  scroll osition is also an event and it works on a cursor   // 
//     if (window.scrollY > 70) {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// });

// Focus & Blur Events
// window.addEventListener('focus', () => {
//     document.querySelectorAll('p').forEach((p) => {
//         p.style.color = 'blue';
//     });
// });

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'black';
    });
});