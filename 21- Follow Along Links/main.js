window.onload = function() {
  main();
}

let highlight;
let triggers;

function main() {
  variables();
  triggers.forEach(a => {
    a.addEventListener('mouseenter', highlightLink);
  });

}

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  console.log(this, linkCoords);

  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${linkCoords.left + window.scrollX}px, ${linkCoords.top + window.scrollY}px)`;

}






function variables() {
  triggers = document.querySelectorAll('a');
  highlight = document.createElement('span');
  highlight.classList.add('highlight');
  document.body.append(highlight);
}