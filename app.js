// https://www.omnicalculator.com/health/tpa

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const tPAneededRadio = document.getElementById('tPAneededRadio');
const weightRadio = document.getElementById('weightRadio');

let tPAneeded;
let weight = v; 

// labels of the inpust
const variable = document.getElementById('variable');

tPAneededRadio.addEventListener('click', function() {
  variable.textContent = 'Weight';
  weight = v;
  result.textContent = '';
});

weightRadio.addEventListener('click', function() {
  variable.textContent = 'tPA needed';
  tPAneeded = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(tPAneededRadio.checked)
    result.textContent = `tPA needed = ${computetPAneeded().toFixed(5)}`;

  else if(weightRadio.checked)
    result.textContent = `Weight = ${computeweight().toFixed(5)}`;
})

// calculation

function computetPAneeded() {
  return Number(weight.value) * 0.9;
}

function computeweight() {
  return Number(tPAneeded.value) / 0.9;
}