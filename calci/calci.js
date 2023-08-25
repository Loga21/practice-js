var display = document.getElementById('inpValue');

function disValue(val) {
  display.value += val; //appending
}

function ans() {
  var result = display.value;
  var op = eval(result);
  display.value = op;
}

function clr() {
  display.value = '';
}
