const grab = (selector) => document.querySelector(selector);

const addToDOM = (eltType, eltText, domLocation) => {
  const newElt = document.createElement(eltType);
  newElt.innerText = eltText;

  const location = (
    typeof domLocation === "string" ? grab(domLocation) : domLocation
  );

  location.appendChild(newElt);

  return newElt;
}

const switchTextColor = (dogElt) => {
  dogElt.addEventListener("click", (e) => {
    // debugger;
    switch (dogElt.style.color) {
      case "":
        dogElt.style.color = "red";
        break;
      case "black":
        dogElt.style.color = "red";
        break;
      case "red":
        dogElt.style.color = "black";
        break;
    }
  });
}

document.addEventListener("DOMContentLoaded", (e) => {

  // BEGIN ADD DOG IMGS /////////////////////////
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(dogImgs =>{
      dogImgContainer = grab("#dog-image-container")

      for (const img of dogImgs.message) {
        // debugger;
        dogImgContainer.innerHTML += `
          <img src="${img}" width="24%" height="24%">
        `
      }
  });
  // END ADD DOG IMGS /////////////////////////


  // BEGIN ADD DOG BREEDS /////////////////////////
  let dogBreedsHash;

  fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
      dogBreedsHash = json.message; // GIVES ACCESS TO dogBreedsHash OUTSIDE OF FETCH

      // BEGIN FOR //////////
      for (const breedName in dogBreedsHash) {
        if (dogBreedsHash[breedName].length === 0) {
          // FULL subBreed ARRAY
          const thisDog = addToDOM("li", breedName, dogBreedsUl);
          switchTextColor(thisDog);
          //////////////////////
        } else {
          for (const subBreed of dogBreedsHash[breedName]) {
            // EMPTY subBreed ARRAY
            const thisDog = addToDOM("li", `${subBreed} ${breedName}`, dogBreedsUl);
            switchTextColor(thisDog);
            ///////////////////////
          }
        }
      }
      // END FOR //////////
  });
  // END ADD DOG BREEDS /////////////////////////


  const dogBreedsUl = grab("#dog-breeds");

  const breedDropdown = grab("#breed-dropdown");

  breedDropdown.addEventListener("change", (e) => {
    for (const dogBreed of dogBreedsUl.children) {
      const breedName = dogBreed.innerText.split(" ");
      if (breedName[breedName.length - 1][0] === breedDropdown.value) {
        dogBreed.style.display = "";
      } else {
        dogBreed.style.display = "none";
      }
    }
  });

});
