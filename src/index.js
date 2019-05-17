document.addEventListener('DOMContentLoaded', function(){

  // APIs
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  // DOM Containers
  const dogsContainer = document.querySelector("#dog-image-container")
  const dogBreedsContainer = document.querySelector("#dog-breeds")

  // FETCH IMAGES
  fetch(imgUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(dogImages){
      const dogsUrl = dogImages.message

      // add images to dogsContainer
      dogsUrl.forEach(function(dog){
        const newDog = document.createElement("img")
        newDog.src = dog
        dogsContainer.appendChild(newDog)
      }) // end dogsUrl

    }) // end dogImages

  // FETCH BREEDS
  fetch(breedUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(dogBreeds){
      const dogBreedList = dogBreeds.message
      // dogBreedList is an object

      // loop through each object item
      // forEach does not work on objects
      for (let [key, value] of Object.entries(dogBreedList)) {
        const newDogBreed = document.createElement("li")
        newDogBreed.innerText = key
        dogBreedsContainer.appendChild(newDogBreed)
      } // end for loop
    }) // end dogBreeds

}) // end DOMContentLoaded
