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

      const breedKeys = Object.keys(dogBreedList)
      // calling Object.keys(object) will return all key items from Object

      breedKeys.forEach(function(breed){
        const newDogBreed = document.createElement("li")
        newDogBreed.dataset.id = `breed-id-${breed}`
        newDogBreed.innerText = breed
        dogBreedsContainer.appendChild(newDogBreed)
      })

      // EVENT LISTENER
      const breedItem = document.querySelectorAll("li")

      for (let i = 0; i < breedItem.length; i++) {
        breedItem[i].addEventListener("click", function(){
          breedItem[i].style.backgroundColor = "pink"
        });
      }

    }) // end dogBreeds

}) // end DOMContentLoaded
