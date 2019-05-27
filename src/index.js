console.log('%c HI', 'color: firebrick')

//fetching dog img
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function getDogImg () {
fetch(imgUrl, {method: "GET"})
.then( function (respond) {
  return respond.json()
})
.then( function (imgs) {
  imgs.message.forEach( function (img) {
    const dogImgContainer = document.querySelector('#dog-image-container')
    dogImgContainer.innerHTML +=
    `<img id= 'dogImg' src='${img}'  face" height="100" width="142">`

  })
})
}

getDogImg();
//fetching dog breed
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl, {method: "GET"})
.then( function (resp) {
  return resp.json()
})
.then(function(breedsObjList){
  const dogBreedList = document.querySelector('#dog-breeds')
      for (const breedKey in breedsObjList.message){
        if (breedsObjList.message[breedKey].length === 0) {
          dogBreedList.innerHTML +=
          `<li>${breedKey}</li>`
        } else {
          for(const subBreedKey of breedsObjList.message[breedKey]){
            dogBreedList.innerHTML +=
            `<li>${subBreedKey} ${breedKey}</li>`
          }
        }
      }
      const allBreed = document.querySelectorAll('li')
      // console.log(allBreed)
      for (breedKey of allBreed){
        breedKey.addEventListener("click", function(e){
          e.target.style.color = "red";
        })
      }
      const dropdown = document.querySelector("#breed-dropdown")
      let list = document.querySelector('li')

      dropdown.addEventListener("change", function(e){
        for (list of dogBreedList.children){
          // debugger
          if (dropdown.value === list.innerText[0]) {
            list.style.display = "";
          }else{
            list.style.display = "none";
          }
        }
      })
    })
