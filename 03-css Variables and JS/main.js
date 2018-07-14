window.onload = function() {
  main();
}
  
function main() {
  const inputs = document.querySelectorAll('.controls input');
  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mouseMove', handleUpdate));
}
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(document.documentElement.style, "[Dx] document.documentElement.style");
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}