const txtveld = document.getElementById("leeftijd");
const rijbewijs = document.getElementById("rijbewijs");
const btnindienen = document.getElementById("indienen");

btnindienen.addEventListener("click", () => {
  console.log("ello");
  if (rijbewijs === "nee") {
    console.log("nee");
  }
  rijbewijs.innerText = "";
});
