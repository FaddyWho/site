        /* filter
* -------------------------------------------------- */
// Add active class to the current control button (highlight it)
const filterButtons = document.querySelectorAll(".filtercontainer button")
const filterCards = document.querySelectorAll(".card")

const filterIt = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterCards.forEach(card => {
      card.classList.add("filterDiv")
      if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("filterDiv")
      }
    })
    
}

filterButtons.forEach(button => button.addEventListener("click", filterIt))
