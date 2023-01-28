let i = 0;

function addListItem() {
  let list = document.getElementById('list');
  let item = document.createElement('li');
  item.id = 'sender';
  item.appendChild(document.createTextNode('Great. Thank you'));
  list.appendChild(item);
}

document.addEventListener('DOMContentLoaded', function () {
  for (let j = i; j < 0; j++) {
    addListItem();
  }
  let button = document.getElementById('addItemButton');
  button.onclick = addListItem;
});
