window.onload = function() {
    main();
  }
  
  function main() {
    window.addEventListener('keydown', function (e) {
        let query   = '[data-key="'+ e.keyCode +'"]';
        let elem    = document.querySelector('.key' + query);
        let audio    = document.querySelector('audio' + query);
        if (!audio) {
            return;
        }

        elem.classList.add('playing');
        audio.currentTime = 0;
        audio.play();

    });



    let keys = document.querySelectorAll('.key');
   

    keys.forEach(keyElem => {
        keyElem.addEventListener('transitionend', removeTransition);
    });




  }

  function removeTransition(e) {
      if (e.propertyName === 'transform') {
        console.log(e);
        e.target.classList.remove('playing');
      }
  }