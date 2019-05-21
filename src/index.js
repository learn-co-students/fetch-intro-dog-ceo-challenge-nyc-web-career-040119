let switcher = false
let filterList = ["All"]
const breedUl = document.querySelector('#dog-breeds')
const dogContainer = document.querySelector('#dog-image-container')
const filterBtn = document.querySelector('#filter-btn')
const filterSelect = document.querySelector('#breed-dropdown')

// Used to Capitalize Breeds
const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Grabs & Scales Images to 150px
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp=>resp.json())
  .then(function(dog) {
    dog['message'].forEach(function(pic) {
      dogContainer.innerHTML += `
        <img src="${pic}" width="150px" height="150px"/>
      `
    })
  })

// Capitalize All Breeds & Sub-Breeds -- Adds '-' to Only Breeds with Sub-Breeds -- Adds First Letter to Filter List
fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp=>resp.json())
  .then(function(dog) {
    const breedKeys = Object.keys(dog['message'])
    const breedValues = Object.values(dog['message'])
    let arr = {}
    for (var i = 0; i < breedKeys.length; i++) {
      if (breedValues[i].length > 0) {
        for (var j=0; j<breedValues[i].length; j++) {
          if (!filterList.includes(breedValues[i][j].slice(0,1))) {
            filterList.push(breedValues[i][j].slice(0,1))
          }
          breedValues[i][j] = capitalize(breedValues[i][j])
        }
        breedValues[i][0] = (" - ").concat(breedValues[i][0])
      }
      arr[capitalize(breedKeys[i])] = breedValues[i]
      if (!filterList.includes(breedKeys[i].slice(0,1))) {
        filterList.push(breedKeys[i].slice(0,1))
      }
    }
    filterList.sort().map(f => {
      filterSelect.innerHTML += `
      <option value="${f}">${f}</option>
      `
    })
    let keys = Object.keys(arr)
    let values = Object.values(arr)
    for (var i = 0; i < keys.length; i++) {
      breedUl.innerHTML += `
        <li>${keys[i]}${values[i].join(", ")}</li>
      `
    }
  })

// Switches Colors on Click
breedUl.addEventListener('click',function(e) {
    switcher = !switcher
    if (switcher) {
      e.target.style.color = 'purple'
    } else {
      e.target.style.color = 'black'
    }
})

// Filter Breeds Based on Selection -- Includes Sub-Breeds
function filterFunc() {
  let child = breedUl.children
  let choice = filterSelect.value.toUpperCase()
  for (var i=0; i < child.length; i++) {
    if (child[i].innerText.includes(choice) || choice === "ALL") {
      child[i].style.display = ''
    } else {
      child[i].style.display = 'none'
    }
  }
}
