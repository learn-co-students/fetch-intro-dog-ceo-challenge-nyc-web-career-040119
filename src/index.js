document.addEventListener('DOMContentLoaded', function(){

  // APIs
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  // DOM Containers
  const dogsContainer = document.querySelector("#dog-image-container")
  const dogBreedsContainer = document.querySelector("#dog-breeds")
  const breedDropdown = document.querySelector("#breed-dropdown")

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

      // LIST BREEDS
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
      } // end for loop

      // FILTER
      breedDropdown.addEventListener("change", function(){
        const breedOptions = breedDropdown.options
        const optionsIndex = breedOptions.selectedIndex
        const filterSelection = breedDropdown.options[optionsIndex].value
        const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

        // resets dogBreedsContainer on selection
        dogBreedsContainer.innerHTML = ""

        // creates a new switch statement for each letter of the alphabet
        alphabet.forEach(function(letter){
          switch (filterSelection){
            case letter:
            breedKeys.forEach(function(breed){
              if (breed[0] === letter){
                // if the first letter of the breed begins with letter
                // create new elements with the matching breed
                const newDogBreed = document.createElement("li")
                newDogBreed.dataset.id = `breed-id-${breed}`
                newDogBreed.innerText = breed
                dogBreedsContainer.append(newDogBreed)
              }
            })
            break;
          } // end switch
        }) // end alphabet loop

      })

    }) // end dogBreeds

  // ADD ALL ALPHABETS TO DROPDOWN

}) // end DOMContentLoaded
