window.onload = function() {
  main();
}

function main() {
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"');

  function handleCheck(e) {
   
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
        console.log(checkbox);

        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
          console.log('Starting to check them inbetween!');
          console.log("[Dx] Starting to check");
          
        }
        
        if (inBetween) {
          checkbox.checked = true;
        }
      });

    }


    lastChecked = this;
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));








}
