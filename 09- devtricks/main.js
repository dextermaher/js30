window.onload = function() {
  main();
}

function main() {
  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }

  // Regular
  console.log("Hello");
  // Interpolated
  console.log("[Dx] I am a %S string!", '%S');
  
  // Styled
  console.log('%c I am some great text', 'font-size: 40px; background:red; text-shadow: 10px 10px 0 blue');
  // warning!
  console.warn('YOU HAVE SUCCESFULLY DOWNLOADED TROJAN.EXE SRC:THISWEBSITEISATROJAN.COM')
  // Error :|
      console.error('EVRY TIME YOU SPELL INCORRECTLY CORRECTLY, YOU ARE SPELLING IT INCORRECTLY.');
  // Info
      console.info(' EVERYTHING THAT HAS EVER HAPPENED IN HISTORY HAS RESULTED IN YOU READING THIS.');
  // Testing
  const p = document.querySelector('p');

  console.assert(p.classList.contains('ouch'), 'That is wrong!');
  // clearing
  //console.clear();
  // Viewing DOM Elements
  console.log(p);
  console.dir(p);
  // Grouping together
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
  });
  // counting
  doCount();

  // timing
  console.time('fetching data')
  fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
  })
}



function doCount() {
  console.count('Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Dog boy is secretly Wes');
  console.count('Dog boy is secretly Wes');
  console.count('Dog boy is secretly Wes');
  console.count('Wes');
  console.count('Dog boy is secretly Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Dog boy is secretly Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Wes');
  console.count('Wes');
}