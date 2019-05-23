console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"; // url for dog image
const breedUrl = 'https://dog.ceo/api/breeds/list/all'; // url for breed data

// getting image data...
fetch(imgUrl, { method: "GET"
}) // fetching for image data
.then(response => response.json()) // receive fetch data in json
.then(json => // json is an array called message
  {
    json.message.forEach(doggyPic => // iterate thru each url
    {
      let imgElement = document.createElement('img');
      imgElement.src = doggyPic;
      document.querySelector('#dog-image-container').appendChild(imgElement);
    });
  });

  let dogBreedsUnorderedListContainer = document.querySelector('#dog-breeds');
  dogBreedsUnorderedListContainer.innerHTML =
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => {
    for( let breed in json.message){
      if(!filter || breed.startsWith(filter)){
        let breedElement = document.createElement('li');
        breedElement.innerText = breed;
        dogBreedsUnorderedListContainer.appendChild(breedElement);
        breedElement.addEventListener('click', handleChangeColor);
      }
    }
});
