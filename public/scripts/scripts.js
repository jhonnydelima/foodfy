const recipes = document.querySelectorAll('.recipe')

for ( let index = 0; index < recipes.length; index++ ) {
    recipes[index].addEventListener('click', () => {
        window.location.href = `/recipes/${index}`
    })
}

const recipeDetails = document.querySelectorAll('.recipe__detail')

for ( let recipeDetail of recipeDetails ) {
    const toggleButton = recipeDetail.querySelector('.toggle__button')
    const toggleContent = recipeDetail.querySelector('.toggle__content')

    toggleButton.addEventListener('click', () => {
        if ( toggleButton.textContent == "ESCONDER" ) {
            toggleButton.textContent = "MOSTRAR"
        } else {
            toggleButton.textContent = "ESCONDER"
        }
        toggleContent.classList.toggle('hide')
    })
}

const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active");
    }
}