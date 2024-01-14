// consider having a select instead of an input with budget. When they click on a price range, the program will generate an eyewear brand within that budget - event listener on each select?


function generateEyewearBrand(event){
  event.preventDefault()

  new Typewriter("#eyewear-brand", {
    strings: "ember niche eyewear",
    autoStart: true,
    delay: 40,
    cursor: ""
  });

}



let eyewearFormElement = document.querySelector('#eyewear-generator-form')
eyewearFormElement.addEventListener('submit', generateEyewearBrand)