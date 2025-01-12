// insertAdjacentElement Example
// query select kro then add add krdo naya element banaake using insertadjacentHtml fnction se 4 wale argument
// /or naya tag deek

function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'testing';

    filter.insertAdjacentElement('beforebegin', h1);
}
// insertElement();

// insertAdjacentText Example
function insertText() {
    const item = document.querySelector('li:first-child');
    item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}
// 
// insertAdjacentHTML example
function insertHTML() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}
// insertHTML();

// insertBefore Example
function insertBeforeItem() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}

insertBeforeItem();
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/