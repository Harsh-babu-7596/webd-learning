function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child')
    const li = document.createElement('li');

    li.textContent = 'Replaced first item'

    firstItem.replaceWith(li);
}

function replacesecanditem() {
    const sItem = document.querySelector('li:nth-child(2)')
    sItem.outerHTML = '<li>kabutar ja ja ja</li>'
        // li.textContent = 'Replaced first item'

    // firstItem.replaceWith(li);
}
// replaceFirstItem();
// replacesecanditem();

function replaceAllItems() {

    const lis = document.querySelectorAll('li');
    lis.forEach((item, index) => {
        if (index === 1) {
            item.innerHTML = 'updated';
        } else {
            item.innerHTML = 'bhakk';
        }
    })
}

replaceAllItems();



// replaceWith() Method
/*function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

// OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second</li>';
}

// Replace All Items
function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  // lis.forEach((item, index) => {
  //   // item.outerHTML = '<li>Replace All</li>';
  //   if (index === 1) {
  //     item.innerHTML = 'Second Item';
  //   } else {
  //     item.innerHTML = 'Replace All';
  //   }
  // });

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
  );
}
*/

// replaceChild() Method
// first argument is item to be updated 2nd is removed ater replacement
function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h4 = document.createElement('h4');
    h4.id = 'app-title';
    h4.textContent = 'Shopping List';
    header.replaceChild(h4, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
// replaceChildHeading();