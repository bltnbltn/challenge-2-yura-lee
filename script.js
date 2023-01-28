let i = 0;

function addListItem() {
  let list = document.getElementById('list');
  let item = document.createElement('li');
  item.className = 'sender';
  item.appendChild(document.createTextNode('Great. Thank you'));
  list.appendChild(item);
  var el = document.getElementById('list');
  el.className = 'sender';
  el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  chat.value = '';
}

document.addEventListener('DOMContentLoaded', function () {
  for (let j = i; j < 0; j++) {
    addListItem();
  }
  let button = document.getElementById('addItemButton');
  button.onclick = addListItem;
});
