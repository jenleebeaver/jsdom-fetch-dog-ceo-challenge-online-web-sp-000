console.log('%c HI', 'color: firebrick');

//ON PAGE LOAD
//- document onload (waits for page to load vefore js runs)
//Can use DOM Content Loaded:

//EX:
//document.addEventListener("DOMContentLoaded", function(){
//  console.log("The DOM has loaded.")
//});

//However, the above is inefficent when we can use defer (this waits for css/html stylesheets to load);
//This belongs in HTML
//<script src="index.js" defer></script>


//CHALLENGE 1:
//loads index.js file
const imgURL = "https://dog.ceo/api/breeds/image/random/4";

//Using fetch to grab data. Also parsing data as JSON and adding image elements to DOM for each image in the array
fetch(imgURL)
  //returns json structure
  .then(resp => resp.json())
  .then(resp => resp.message.forEach(image => addImage(image)));

//this function is grabbing elements and adding to the DOM
function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
  let ImageEl = document.createElement('img');
  ImageEl.src = dogPicUrl;
  container.appendChild(ImageEl);
}

//CHALLENGE 2:
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

//add breeds to page in ul

fetch(breedURL)
  .then(resp => resp.json())
  .then(resp => {
    breeds = Object.keys(results.message);
    //keys returns an array that has strings = to enumerable properties (=true)
    updateBreedList(breeds);
    addBreedSelectListener();
    //allows user to select a breed from a list of images using drop down menu
  });

  //here we are iterating through breeds
  function updateBreedList(breeds){
    let ul = document.querySelector('#dog-breeds');
    breeds.forEach(breed => addBreed(breed));
  }

  //adding breed into list ul
  function addBreed(breed){
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
  }
