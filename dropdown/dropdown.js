const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const ul = document.getElementById('itemContainer');
  const arrow = document.getElementById('turnArrow');
  console.log(arrow)
  console.log(ul.innerHTML);
  // if(ul){
  ul.classList.toggle('active');
  arrow.classList.toggle('active');
  // }
});
