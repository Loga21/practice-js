const items = [];

const add = document.getElementById('addBtn');
const remove = document.getElementById('removeBtn');
const removeAll = document.getElementById('reallBtn');
const submit = document.getElementById('submitBtn');

// var x = 0;
add.addEventListener('click', () => {
  var inputValue = document.getElementById('inpValue').value;
  // items[x] = inputValue;
  // x++;

  // inputValue = null;
  items.push(inputValue);
  console.log(items);
  for (i = 0; i < items.length; i++) {
    // items.map((item, index) => {
    const ul = document.getElementById('listContainer');
    const li = document.createElement('li');
    li.setAttribute('class', 'list');
    const txt = document.createTextNode(items[i]);
    // const div = document.querySelector('.item-container');
    // div.innerHTML = items[i];
    li.appendChild(txt);
    ul.appendChild(li);
    // console.log(handleSubmit);
  }
  items.pop(inputValue);
});
// });

// console.log(items);
remove.addEventListener('click', () => {
  var removeLi = document.querySelector('.list');
  // items.pop(li);
  removeLi.remove();
});

removeAll.addEventListener('click', () => {
  const removeUl = document.getElementById('listContainer');
  removeUl.innerHTML = null;
});

// submit.addEventListener('click', () => {
//   const div = document.getElementById('display-whole');
// });

// function handleSubmit() {
//   var inputValue2 = document.getElementById('inpValue').value;
//   items.push(inputValue2);
//   const ul2 = document.getElementById('listContainer2');
//   const li2 = document.createElement('li');
//   li2.setAttribute('id', 'list2');
//   const txt2 = document.createTextNode(items);

//   li2.appendChild(txt2);
//   ul2.appendChild(li2);
// }

function handleSubmit() {
  const ul2 = document.getElementById('listContainer2');
  var listItem1 = document.getElementsByClassName('list');
  // const ul = document.getElementById('listContainer');
  var listArray1 = [];
  for (let i = 0; i < listItem1.length; i++) {
    listArray1.push(listItem1[i].innerHTML);
    const li2 = document.createElement('li');
    li2.setAttribute('class', 'list2');
    const txt2 = document.createTextNode(listArray1[i]);
    li2.appendChild(txt2);
    ul2.appendChild(li2);
    console.log(listArray1[i]);
    console.log(txt2);
  }

  // const div = document.querySelector('.item-container');
  // div.innerHTML = items[i];
  // ul2.innerHTML = li2.innerHTML;
}

//reference
// var list = document.getElementsByClassName('list-item');
// var listArray = [];
// for (var i = 0; i < list.length; i++) {
//   listArray.push(list[i].innerHTML);
//   console.log(listArray[i]);
// }

function upper() {
  // const ul2 = document.getElementById('listContainer2');
  const listITem2 = document.getElementsByClassName('list2');

  var listArray2 = [];
  for (i = 0; i < listITem2.length; i++) {
    listArray2.push(listITem2[i].innerHTML);
    const upperCase = listArray2[i].toUpperCase();
    listITem2[i].innerHTML = upperCase;
  }
}

function lower() {
  // const ul2 = document.getElementById('listContainer2');
  const listItem3 = document.getElementsByClassName('list2');

  var listArray3 = [];
  for (i = 0; i < listItem3.length; i++) {
    listArray3.push(listItem3[i].innerHTML);
    const lowerCase = listArray3[i].toLowerCase();
    listItem3[i].innerHTML = lowerCase;
  }
}
