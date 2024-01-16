

function displayEyewearBrand(response){
  console.log("Eyewear brand generated")
  new Typewriter("#eyewear-brand", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });

}

function generateEyewearBrand(event){
  event.preventDefault()

  let userInputElement = document.querySelector('#user-input')

  let apiKey = "03fde306dbeefffd37840714ft0decoa"
  let prompt = `Generate the names of three real, independent eyewear brands based on the ${userInputElement.value}. Do NOT include more information about the brand, ONLY include the brand name. Do not repeat the prompt in your answers. This should be a real eyewear brand that allows customers to buy glasses online. IT MUST BE A REAL EYEWEAR BRAND WITH A WORKING WEBSITE. Display each result in basic HTML with on a separate line with a <br/> between them, and include a link to their website which opens in a new tab. They must each be on a separate line with their respective websites next to them.`
  let context = "You are an eyewear brand expert and love real, small, independent eyewear brands, in particular. Your job is to generate the names of actual independent eyewear brands based on the user's input"
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`


   let eyewearElement = document.querySelector(".eyewear-brand");
   eyewearElement.classList.remove("hidden");
   eyewearElement.innerHTML = `<div class="generating"> Generating three eyewear brands based on your search of '${userInputElement.value}'...</div>`;
  console.log("Generating eyewear brand")

  axios.get(apiUrl).then(displayEyewearBrand)

}



let eyewearFormElement = document.querySelector('#eyewear-generator-form')
eyewearFormElement.addEventListener('submit', generateEyewearBrand)