console.log('%c HI', 'color: firebrick')

// ## Challenge 1 load dog pics
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer = document.getElementById('dog-image-container')

fetch(imgUrl)
.then(res=>res.json())
.then(json=>{
  let imgArray = json.message
    imgArray.forEach(image=>{
    let imageElement = document.createElement('img')
    imageElement.src = image
    imgContainer.appendChild(imageElement)
    document.getElementById('dog-image-container').appendChild(imageElement)
    })
})

// ## Challenge 2 fetch all dog Breeds and put into list tag
// ## Challenge 3 change style.color in list tage
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropDown = document.getElementById('breed-dropdown')
const alphabetArray = ["e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
alphabetArray.forEach(alphabet=>{
  dropDown.innerHTML += `<option value='${alphabet}'>${alphabet}</option>`
})

      fetch(breedUrl)
      .then(res=>res.json())
      .then(json=>{
        let dogObject = json.message
        // const breedsArray = Object.keys(dogObject))
        const ul = document.getElementById('dog-breeds')
        for (let key in dogObject) {
          // console.log(key)
          let li = document.createElement('li')
            li.innerText = `${key}`
            ul.appendChild(li)
            li.addEventListener('click', e=>{
            // console.log(e.target)
            e.target.style.color = 'blue'
            })
         }
       dropDown.addEventListener('change', handleDropDown)
      })

      // ## Challenge 4 expand dropDown to include the entire alphabet
      //if user selects 'a' in the dropdown, only show the breeds with names that start with the letter a
    function handleDropDown(e){
      let userInput = dropDown.options[dropDown.selectedIndex].value;
      // console.log(userInput)
      let firstLetter = userInput.charAt(0)
      fetch(breedUrl)
      .then(res=>res.json())
      .then(json=>{
        let dogObject = json.message
        // const breedsArray = Object.keys(dogObject))
        const ul = document.getElementById('dog-breeds')
        ul.innerHTML = ``
        for (let key in dogObject) {
          // console.log(key)
          let li = document.createElement('li')
            li.innerText = `${key}`
            if(li.innerText.startsWith(firstLetter)){
                  console.log(li)
             ul.appendChild(li)
          }
            li.addEventListener('click', e=>{
            // console.log(e.target)
            e.target.style.color = 'blue'
            })
         }

      })


    }
