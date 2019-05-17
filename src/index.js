document.addEventListener('DOMContentLoaded', function(){

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const dogsContainer = document.querySelector("#dog-image-container")

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
}) // end DOMContentLoaded
