const add = document.getElementById('addBtn');
const remove = document.getElementById('removeBtn');
const removeAll = document.getElementById('reallBtn');
const submit = document.getElementById('submitBtn');
// const arr = [];

add.addEventListener('click', () => {
  const inputValue = document.getElementById('inpValue').value;
  //   arr.push(inputValue);
  //   console.log(arr);
  const ul = document.getElementById('listContainer');
  const li = document.createElement('li');
  li.setAttribute('id', 'list');
  const txt = document.createTextNode(inputValue);

  li.appendChild(txt);
  ul.appendChild(li);
  //   inputValue = '';
});

remove.addEventListener('click', () => {
  var li = document.getElementById('list');
  //   li.forEach((item) => {
  li.remove();
  //   });
});

removeAll.addEventListener('click', () => {
  const ul = document.getElementById('listContainer');
  ul.innerHTML = null;
});

// for (let i = 0; i < arr.length; i++) {
// arr.map((array, index) => {
submit.addEventListener('click', () => {
  //   const inputValue = document.getElementById('inpValue').value;
  //   console.log(inputValue);
  //   // array.push(inputValue);
  //   // console.log(array);
  const ul2 = document.getElementById('listContainer2');
  //   const div = document.getElementById('display-whole');
  const ul = document.getElementById('listContainer');
  //   console.log(div);
  //   const li2 = document.createElement('li');
  //   li2.setAttribute('id', 'list2');
  //   const txt2 = document.createTextNode();
  ul2.innerHTML = ul.innerHTML;
  //   ul2.innerHTML.toUpperCase();
  //   li2.appendChild(txt2);
  //   ul2.appendChild(li2);
});
// });
// }

// const upper = document.getElementById('upperBtn');
// const lower = document.getElementById('lowerBtn');

// upper.addEventListener('click', () => {
//   const value = 'hi';
// //   var ul2Container = document.getElementById('listContainer2');
// //   const value1 = ul2Container.innerHTML.value;
// //   console.log(value1)
// const list1 = document.getElementById('list');
// const some= list1;
// console.log(some);
// //   ul2Container.innerHTML.value.toUpperCase();
//   console.log(value.toUpperCase());
// });
