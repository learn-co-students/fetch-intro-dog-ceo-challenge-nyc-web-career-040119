console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){

  // FETCHING THE IMAGES
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(object){
      const container = document.querySelector("#dog-image-container");
      object["message"].forEach(function(img){
        container.innerHTML += `
          <img src=${img}>
        `
      });
    });

  // FETCHING THE BREEDS
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  let breedsContainer = document.querySelector("#dog-breeds");

  fetch(breedUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(breedsList){
      for (const breed in breedsList.message){
        if (breedsList.message[breed].length === 0) {
          breedsContainer.innerHTML += `
            <li>${breed}</li>
          `
        } else {
          for(const subBreed of breedsList.message[breed]){
            breedsContainer.innerHTML += `
              <li>${subBreed} ${breed}</li>
            `
          };
        };  // if ... else end
      }; // for ... in end

      let listedBreeds = document.querySelectorAll("li");
      let li = document.querySelector("li")
      for (const breed of listedBreeds){
        breed.addEventListener("click", function(e){
          e.target.style.color = "red";
        }); // event listener end
      }; // for ... of event listener end

    }); // 2nd .then end

    // BREED FILTER
    // let breedsContainer = document.querySelector("#dog-breeds");
    const dropdown = document.querySelector("#breed-dropdown");
    dropdown.addEventListener("change", function(e){
      for (li of breedsContainer.children){
        // debugger
        if (dropdown.value === li.innerText[0]) {
          li.style.display = "";
        }else{
          li.style.display = "none";
        };
      };
    });
}); // DOM Contents Loaded end
