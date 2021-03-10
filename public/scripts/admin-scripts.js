function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");

    // clone the last field
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // if last field is empty, don't add it
    if (newField.children[0].value == "") return false;

    // clear new field
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

function addStep() {
    const steps = document.querySelector("#preparation-steps");
    const fieldContainer = document.querySelectorAll(".step");

    // clone the last field
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // if last field is empty, don't add it
    if (newField.children[0].value == "") return false;

    // clear new field
    newField.children[0].value = "";
    steps.appendChild(newField);
}

document.querySelector("#add-ingredient").addEventListener("click", addIngredient);
document.querySelector("#add-step").addEventListener("click", addStep);