window.onload = function() {
  main();
}

let holes, scoreBoard, moles, lastHole, timeUp, score, isBonked;

function main() {
  definingVariables();
  moles.forEach(mole => mole.addEventListener('click', bonk));
  // document.addEventListener('keyup', cheat);

}


function definingVariables(){
  holes = document.querySelectorAll('.hole');  
  scoreBoard = document.querySelector('.score');
  moles = document.querySelectorAll('.mole');
  timeUp = false;
  isbonked = false;
}

function randomTime(low, high){
  return Math.round(Math.random() * (high - low) + low);
}

function randomHole(inHoles) {
  let idx = Math.floor(Math.random() * inHoles.length);
  let hole = inHoles[idx];
  if(hole === lastHole){
    console.log('Same Hole');
    return randomHole(holes);
  }
  
   
  lastHole = hole;
  return hole;
}


function peep(){
  let time = randomTime(900, 1000);
  let hole = randomHole(holes);
  console.log(time, hole, 'time, hole ');
  hole.classList.add('up');
  setTimeout(function(){
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  peep();
  setTimeout(() => timeUp = true, 10000);
  score = 0;
}

function bonk(ev) {
  console.log(ev);
  let indexOfUp = this.classList.value.indexOf('up');
  let isNotYetBonked = (indexOfUp = 0);
  


  // if ( isNotYetBonked ) {
  //   score ++;
  // } 

  if (!ev.isTrusted) return;
  // if (isBonked === false){
  //   score ++;
  //   scoreBoard.textContent = score;
  //   isBonked = true;
  // }
  score ++;
  scoreBoard.textContent = score;
}

function cheat(ev) {
  score = 9999;
  scoreBoard.textContent = score;

}
