window.onload = function() {
  main();
}

let addItems;
let itemsList;
let items;
// let el;
// let index;
function main() {
  setUp();

  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false 
      
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items))
    this.reset();
  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i)=> {
      return `
      <li>
        <input type="checkbox" data-index=$"${i} id="item${i}" ${plate.done ? 'checked' : ' '} />
        <label for="item${i}">${plate.text}</label>
      <li>
      `;
    }).join('');
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return;     
    console.log(items[e.target.dataset.index].done, "[Dx] e");
    items[e.target.dataset.index].done = !items[e.target.dataset.index].done;
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList);
  }

  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);

  populateList(items, itemsList);
}





function setUp() {
  addItems = document.querySelector('.add-items');
  itemsList = document.querySelector('.plates');
  items = JSON.parse(localStorage.getItem('items')) || [];
  // el = e.target;
  // index = el.dataset.index;
} 