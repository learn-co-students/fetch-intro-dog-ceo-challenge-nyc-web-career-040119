console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(function(res){
      // debugger
      return res.json()
    })
    .then(function(info){
      const imgArr = info.message
      //info.message gives us the images in an array
      const breedLoc = document.querySelector("#dog-breeds")
      //locate where we want to paste the photos
      imgArr.forEach(function(img){
        console.log(img)
        const newBreed = document.createElement('ul')
        const imgTag = document.createElement("img")
          imgTag.src = `${img}`
          imgTag.className = "img"

        newBreed.appendChild(imgTag)
        breedLoc.appendChild(newBreed)
        console.log(newBreed)
      })
    })

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(function(res){
      return res.json()
    })
    .then(function(breed){
      const breedObj = breed.message
      const dogList = document.querySelector("#dog-list")
      var breedArr = Object.keys(breedObj)

      const dropDown = document.querySelector("#breed-dropdown")

      dropDown.addEventListener('change', function(){
        // console.log(`I was changed`)
        breedArr = Object.keys(breedObj).filter(function(key){
          return key.startsWith(`${dropDown.value}`)
        })
        dogList.innerHTML = ""
        breedArr.forEach(show)

      })

      const show = function(breed){
        const typeOfBreed  = breedObj[breed]
        //array , need to use bracket notation to pass in variable
        if(typeOfBreed.length > 0){
          typeOfBreed.forEach(function(spec){
            // st.innerHTML += `<li>${spec} ${breed}</li>`
            const display = document.createElement("li")
            display.innerHTML = `${spec} ${breed}`

            display.addEventListener('click',function(e){
              display.style.color = "red"
              display.style.fontFamily = "courier"

            })
            dogList.appendChild(display)
          })
        }else{
            // st.innerHTML += `<li>${breed}</li>`
            const display = document.createElement("li")
            display.innerHTML = breed

            display.addEventListener('click',function(e){
              display.style.color = "red"
              display.style.fontFamily = "courier"
            })
            dogList.appendChild(display)
        }
      } // end of helper function
      breedArr.forEach(show)
    })
  // console.log("THE DOM HAS ARRIVED")
})
