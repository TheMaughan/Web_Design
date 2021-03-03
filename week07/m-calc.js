const btn = document.querySelector('button');
const in_p = document.querySelector('input');
//calculate(document.getElementById('tarea_1').value);

function calculate(tarea_1) {
  const num = parseFloat(tarea_1, 10);
  document.getElementById("tst_2").innerHTML = num;
}

btn.onkeyup = calculate;