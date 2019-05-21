console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function fetchFourDogs(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(json => {
    json.message.forEach(dogImageURL => {
      let imageElement = document.createElement('img')
      imageElement.src = dogImageURL
      document.querySelector('#dog-image-container').appendChild(imageElement)
    })
  })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function fetchBreeds(filter=undefined){
  let container = document.querySelector('#dog-breeds')
  container.innerHTML = ''
  fetch(breedUrl)
  .then(res => res.json())
  .then(json => {
    for(breed in json.message){
      if(!filter || breed.startsWith(filter)){
        let breedElement = document.createElement('li')
        breedElement.innerText = breed
        container.appendChild(breedElement)
        breedElement.addEventListener('click', handleChangeColor)
      }
    }
  })
}

function handleChangeColor(event){
  event.target.style.color = 'red'
}

function handleDropDown(event){
  fetchBreeds(event.target.value)
}

document.addEventListener("DOMContentLoaded", function(){
  fetchFourDogs()
  fetchBreeds()
  document.querySelector('#breed-dropdown').addEventListener('change', handleDropDown)
})
