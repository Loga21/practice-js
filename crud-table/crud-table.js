const userDetails = [
  {
    Name: 'Paresh',
    Email: 'paresh@gmail.com',
  },
  {
    Name: 'Hardik',
    Email: 'hardik@gmail.com',
  },
];

userDetails.map((details) => {
  //    const index = index;
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  // const td3 = document.createElement('td');
  const table = document.getElementById('table');
  const editBtn = document.createElement('button');
  editBtn.setAttribute('id', 'editBtn');
  // editBtn.setAttribute('onClick', 'handleEdit()');
  editBtn.innerHTML = 'Edit';
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', 'deleteBtn');
  deleteBtn.innerHTML = 'Delete';

  td1.innerHTML = details.Name;
  td2.innerHTML = details.Email;

  table.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(editBtn);
  tr.appendChild(deleteBtn);
});

const delBtn = document.querySelectorAll('#deleteBtn');
const edBtn = document.querySelectorAll('#editBtn');

delBtn.forEach((dBtn) => {
  dBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });
});

console.log(userDetails[0].Name);
// var number = 0;
// var selected = '';
// userDetails.map((item, index) => {

edBtn.forEach((eBtn, index) => {
  // for (let i = 0; i < userDetails.length; i++) {
    eBtn.addEventListener('click', () => {
      const nameField = document.getElementById('name');
      // console.log(nameField);
      const emailField = document.getElementById('email');
      nameField.value = userDetails[index].Name;
      emailField.value = userDetails[index].Email;
      // id++;
      //   selected = index;
    });
  // }
});

// function handleEdit(number = 0) {
//   const nameField = document.getElementById('name');
//   // console.log(nameField);
//   const emailField = document.getElementById('email');
//   nameField.value = userDetails[number].Name;
//   emailField.value = userDetails[number].Email;
//   number++;
//   //   selected = index;
// }

// handleEdit();
// });

// edBtn.addEventListener('click', (e) => {
//   nameField.innerHTML = value.Name;
// });
