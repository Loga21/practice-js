var btn = document.getElementById('tagBtn');
btn.addEventListener('click', () => {
  var inputVal = document.getElementById('inpValue').value;
  console.log(inputVal);
  var tag = document.getElementById('tagContainer');
  tag.innerHTML = inputVal;
});

// var op = () => {
//   return `<div class="container">
//         <h2 class="welcome">Hello</h2>
//         <p id="tagContainer"></p>
//         <h2 class="welcome1"></h2>
//     </div>`;
// };
