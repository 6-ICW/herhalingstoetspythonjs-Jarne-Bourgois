const txtveld = document.getElementById("leeftijd");
const rijbewijs = document.getElementById("rijbewijs");
const btnindienen = document.getElementById("indienen");


// Wat moet er gebeuren indien JA? 

btnindienen.addEventListener("click", () => {
  console.log("ello");
  if (rijbewijs === "nee") {
    console.log("nee");
  }
  rijbewijs.innerText = "";
});

