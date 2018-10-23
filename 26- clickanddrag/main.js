window.onload = function() {
  main();
}

let slider, isDown, startX, scrollLeft;

function main() {
  defineVariables();
  slider.addEventListener('mousedown', (ev) => {
    isDown = true;
    slider.classList.add('active');
    startX = ev.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX);
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mousemove', (ev) => {
    if(!isDown) return;
    ev.preventDefault();
    const x = ev.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2.5;
    slider.scrollLeft = scrollLeft - walk;
  });
}


function defineVariables() {
  slider = document.querySelector('.items');
  isDown = false;
}