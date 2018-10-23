window.onload = function() {
  main();
}

function main() {
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  


  const sortedBands = bands.sort(function (a, b) {
    let res = strip(a) > strip(b);
    return res ? 1 :-1;
    
    // if (strip(a) > strip(b)) {
    //   return 1;
    // }
    // else {
    //   return -1;
    // }    
  });


  document.querySelector('.bands').innerHTML +=
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');
  console.log(sortedBands);

}

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}