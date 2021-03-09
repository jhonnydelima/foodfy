const data = require('../data.json');

exports.home = (req, res) => {
    return res.render('home', { recipes: data.recipes });
};

exports.about = (req, res) => {
    return res.render('about');
};

exports.getAllRecipes = (req, res) => {
    return res.render('recipes', { recipes: data.recipes });
};

exports.getRecipe = (req, res) => {
    const recipes = data.recipes;
    const recipeIndex = req.params.index;

    return res.render('recipe', { recipe: recipes[recipeIndex] });
};