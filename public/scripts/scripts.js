const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for ( let recipe of recipes ) {
    recipe.addEventListener("click", function() {
        const recipeId = recipe.getAttribute('id')
        const recipeName = recipe.querySelector('.recipe__name').textContent
        const chefName = recipe.querySelector('.recipe__chef-name').textContent

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/public/assets/${recipeId}.png`
        modalOverlay.querySelector('.recipe-name').textContent = recipeName
        modalOverlay.querySelector('.chef-name').textContent = chefName
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})