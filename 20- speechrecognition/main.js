window.onload = function() {
  main();
}

let recognition, p, words, shouldStop, shouldListen;

function main() {
  init();

  recognition.addEventListener('result', handleResults);
  recognition.addEventListener('result', backgroundColor);
  recognition.addEventListener('result', story);

  recognition.addEventListener('end', handleEnd);
  recognition.start();
  let button = document.querySelector('#dn');
  button.addEventListener('change', handleClick);
  shouldStop = !button.checked;
}

function init() {
  window.SpeechRecognition = window.SpeechRecognition || window.
  webkitSpeechRecognition;

  recognition = new SpeechRecognition();
  recognition.interimResults = true;

  p = document.createElement('p');
  words = document.querySelector('.words');
  words.appendChild(p);
}


function handleResults(e) {
  shouldListen = true;
  const transcript = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('')
    
  p.textContent = transcript;

  if(e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
  
    
  if (transcript.includes('self destruct')) {
    shouldStop = true;
  }
    

  if (transcript.includes('set background to')) {
    recognition.addEventListener('result', findImage);
  }

 
  // // ~ ~ ~ ~ ~ ~ I M A G E S ~ ~ ~ ~ ~ ~ ~  

  if (transcript.includes('OverWatch')) {
    document.body.style.backgroundImage = "url('https://www.playerattack.com/imagery/2014/11/Overwatch-Logo.jpg')";
  }

 if (transcript.includes('up up down down left right left right ba start')) {
   document.body.style.backgroundImage = "url('https://media3.giphy.com/media/3o7qE8co3YAzNUoAW4/giphy.gif')";    
  }


   



  
    
  
}

function findImage(imageWanted) {
  
  //Turn to string
  const imageToFind = Array.from(imageWanted.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    
  
  //take out "set background to'"
  let imageMostlyCut = imageToFind.replace(/set background to /i, '');
   
    
  //spces become dashes for easier search
  let imageFullCut = imageMostlyCut.replace(/ /g, '-')
  console.log(imageFullCut, "[Dx] imageFullCut");
  setBackground(imageFullCut);
}

function setBackground(searchVal) {
  
  
  document.body.style.background = `url(https://unsplash.com/search/photos/${searchVal})`;


}


function backgroundColor(color) {
  const colorToFind = Array.from(color.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('')

  let colorNameCut = colorToFind.replace(/ /g, '')
  document.body.style.backgroundColor = colorNameCut;

}

function story(storyLine) {
  const colorToFind = Array.from(storyLine.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('')

  let fly, spider, bird, cat, dog, goat, cow, horse;

  fly = new Image();
  spider = new Image();
  bird =  new Image();
  cat = new Image();
  dog = new Image();
  goat =  new Image();
  cow = new Image();
  horse =  new Image();

  fly.src = "https://1001freedownloads.s3.amazonaws.com/vector/thumb/94049/Fly.png";
  spider.src = "https://cdn.pixabay.com/photo/2016/03/31/15/06/spider-1292997_960_720.png"
  bird.src = "http://www.clker.com/cliparts/j/g/h/H/3/M/cartoon-bird-hi.png"
  cat.src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png"
  dog.src = "https://cdn.pixabay.com/photo/2017/01/31/18/46/corgi-2026347_960_720.png"
  goat.src = "https://i.pinimg.com/originals/e1/ad/c3/e1adc39907082d99c913e03d61f1eb1f.png"
  cow.src = "https://cdn.pixabay.com/photo/2016/04/01/09/01/animal-1299116_960_720.png"
  horse.src = "https://i0.wp.com/clipground.com/images/farm-horse-clipart-2.jpg?resize=806%2C682"


  if (transcript.includes('fly')) {
    drawImage(fly);
  }
}


function handleClick(ev) {
  let button = document.querySelector('#dn')
 
  shouldStop = !button.checked;
  if (button.checked === true){
    recognition.start();
  }
}


function handleEnd() {
  if (!shouldStop) {
    recognition.start();
  }
}
