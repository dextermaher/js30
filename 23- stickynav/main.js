window.onload = function() {
  main();
}

let nav, topOfNav;

function main() {
  settingVariables();
  window.addEventListener('scroll', fixNav);
}


function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  }
  else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

function settingVariables() {
  nav = document.querySelector('#main');
  topOfNav = nav.offsetTop;
}