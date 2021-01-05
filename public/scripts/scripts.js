const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for ( let recipe of recipes ) {
    recipe.addEventListener("click", function() {
        const recipeImage = recipe.querySelector('img').src
        const recipeName = recipe.querySelector('.recipe__name').textContent
        const chefName = recipe.querySelector('.recipe__chef-name').textContent

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = recipeImage
        modalOverlay.querySelector('.recipe-name').textContent = recipeName
        modalOverlay.querySelector('.chef-name').textContent = chefName
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})