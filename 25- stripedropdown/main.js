window.onload = function() {
  main();
}

let triggers, background, nav, dropdown;

function main() {
  defineVariables();
  triggers.forEach(elem => elem.addEventListener('mouseenter', handleEnter));
  triggers.forEach(elem => elem.addEventListener('mouseleave', handleLeave));
  // console.log(dropdown1, dropdownCourses, dropdown3);
}


function defineVariables() {
  triggers      = document.querySelectorAll('.cool > li');
  background    = document.querySelector('.dropdownBackground');
  nav           = document.querySelector('.top');
  // dropdown1 = document.querySelector('.dropdown1');
  // dropdownCourses = document.querySelector('.courses');
  // dropdown3 = document.querySelector('.dropdown3');
}

function handleEnter(ev) {
  // console.log(ev, ev.target);
  defineVariables();
  this.classList.add('trigger-enter');
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 1);
  background.classList.add('open');
  console.log(nav);
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  console.log(dropdownCoords);
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width:  dropdownCoords.width,
    top:    dropdownCoords.top - navCoords.top,
    left:   dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
 this.classList.remove('trigger-enter', 'trigger-enter-active');
 background.classList.remove('open');

}