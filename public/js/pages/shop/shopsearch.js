import { shopSection } from "./shopsection.js";

export function shopSearch() {

    const searchInput = document.querySelector("#placeholder");

    const searchButton = document.querySelector("#searchbtn");

    const shopProducts = document.querySelector("#shopproduct");


    // Display all products when the page first loads
    shopProducts.innerHTML = shopSection();


    // When Search button is clicked
    searchButton.addEventListener("click", () => {

        const search = searchInput.value;

        shopProducts.innerHTML = shopSection(search);

    });

}