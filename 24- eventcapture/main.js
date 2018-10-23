window.onload = function() {
  main();
}

let divs, button;

function main() {
  defineVariables();
  divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
  }));
  
  button.addEventListener('click', () => {
    console.log('CLICK!!!')

  }, {
    once: true
  })};


function defineVariables() {
  divs = document.querySelectorAll('div');
  button = document.querySelector('button');
}


function logText(e) {
  // console.log(this.classlist)
  console.log(this.classList.value);
  // e.stopPropagation();
}