const data = require('../data.json');

exports.home = (req, res) => {
    return res.render('site/home', { recipes: data.recipes });
};

exports.about = (req, res) => {
    return res.render('site/about');
};

exports.getAllRecipes = (req, res) => {
    return res.render('site/recipes', { recipes: data.recipes });
};

exports.getRecipe = (req, res) => {
    const recipes = data.recipes;
    const recipeIndex = req.params.index;

    return res.render('site/recipe', { recipe: recipes[recipeIndex] });
};