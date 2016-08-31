var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(planet){
  el.innerHTML += `<div>${planet}</div>`;
});


// Use the map method to create a new array where the first letter of each planet is capitalized
var upperCasePlanets = planets.map(function (planet){
  var planetLetters = planet.split("");
  //remove 1st index
  planetLetters.splice(0,1);
  console.log(planetLetters);
   var capLetter = planet.split("")[0].toUpperCase();//.splice(0,1);
   console.log(capLetter);
    //add capLetter to front of planetLetters
    planetLetters.unshift(0, capLetter);
    //join array and return

     planet.replace(planet[0], capLetter);
    console.log("planet", planet);
  });
  
// console.log("upperCasePlanets", upperCasePlanets);
// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];