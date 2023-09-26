let add = document.getElementById("addTask");
let input = document.getElementById("inputField");
let taskContainer = document.getElementById("taskContainer");

add.addEventListener('click', addItem);

input.addEventListener('keypress', function(e) {
  if(e.key=="Enter") {
    addItem();
  }
});

function addItem(e) {
  const item_value = input.value;
  const item = document.createElement('div');
  item.classList.add('item');

  const item_content = document.createElement('div');
  item_content.classList.add('content');
  item.appendChild(item_content);

  const input_item = document.createElement('input');
  input_item.classList.add('text');
  input_item.type = 'text';
  input_item.value = item_value;
  input_item.setAttribute('readonly', 'readonly');
  item_content.appendChild(input_item);

  taskContainer.appendChild(item);
}