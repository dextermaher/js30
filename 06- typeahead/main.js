window.onload = function() {
  main();
}

let cities = [];
let searchField;
let suggestions;

function main() {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


  fetch(endpoint)
      .then(blob => blob.json())
      .then(data => {
        cities = data;
        console.log(data, "[Dx] data");
      });

      searchField = document.querySelector('.search');
      suggestions = document.querySelector('.suggestions');

      searchField.addEventListener('keyup', displayMatches);

}
function displayMatches(e) {
  let matches = findMatches(this.value, cities);

  const html = matches.map(place => {
    let regex = new RegExp(this.value, 'gi');
    let cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    let stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    let populationDisplay = numberWithCommas(place.population);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${populationDisplay}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
  
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function findMatches(lookFor, places) {
  return places.filter(place => {
    const regex = new RegExp(lookFor, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}