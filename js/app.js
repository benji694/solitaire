let cards = document.querySelectorAll(".cards");
let counter = 0;
for (const card of cards) {
  card.addEventListener("click", () => {
    if (card.style.backgroundColor == "green") {
      card.style.backgroundColor = "blue";
      counter--;
      showSelected();
    } else {
      card.style.backgroundColor = "green";
      counter++;
      showSelected();
    }
  });
}
const h2 = document.querySelector("h2");
const showSelected = () => {
  h2.textContent = `Vous avez selectioner ${counter} cartes`;
};
showSelected();
