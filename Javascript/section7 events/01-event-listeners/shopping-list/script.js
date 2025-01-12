const clearBtn = document.querySelector('#clear');

// select the query with this id

function onClear() {
    const items = document.querySelector('ul');
    const iteml = document.querySelectorAll('li');

    // items.innerHTML = '';
    iteml.forEach((item => item.remove()));
    // items.forEach((item) => item.remove());

    // below is the most preferred wayy in otder to do some things
    // while (itemList.firstChild) {
    //     itemList.removeChild(itemList.firstChild);
    // }
}

// JavaScript Event Listener
clearBtn.onclick = function() {
    alert('Clearing Items');
    onClear();
};
// this doesn't work due to hoisting so generally we prefer event listeners instead o embedded functionsm
// clearBtn.onclick = function() {
//     console.log('Clear Items');
// };

// addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));

// Use named function
// clearBtn.addEventListener('click', onClear);

// removeEventListener()
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Fire off event from JS
// setTimeout(() => clearBtn.click(), 5000);