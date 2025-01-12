// remove() Method
// select th query and remove can do questions as per need
function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

// listitems do act like lists when calculating not tml ones

// dom study when applying


// removeChild() Method
// select parent select child and remove child using removeChild
function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

// Other examples
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}

function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}
// removeItem3(2);
const removeItem4 = (itemNumber) =>
    document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();
// removeFirstItem();
// removeItem(2);
removeItem4(2);