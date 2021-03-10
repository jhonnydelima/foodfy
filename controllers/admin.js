const fs = require('fs');
const data = require('../data.json');

exports.index = (req, res) => {
    return res.render("admin/index", { recipes: data.recipes });
}

exports.create = (req, res) => {
    return res.render("admin/create");
}

exports.post = (req, res) => {
    const keys = Object.keys(req.body);

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all the fields!");
        }
    }

    data.recipes.push(req.body);

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error!");

        return res.redirect("/admin/recipes");
    });
}

exports.show = (req, res) => {
    // id == index
    const { id } = req.params;

    const foundRecipe = data.recipes[id];

    if (!foundRecipe) {
        return res.send("Recipe not found!");
    }

    const recipe = {
        ...foundRecipe,
        id
    };
    
    return res.render("admin/show", { recipe });
}

exports.edit = (req, res) => {
    // id == index
    const { id } = req.params;

    const foundRecipe = data.recipes[id];

    if (!foundRecipe) {
        return res.send("Recipe not found!");
    }

    const recipe = {
        ...foundRecipe,
        id
    };

    return res.render("admin/edit", { recipe });
}

exports.put = (req, res) => {
    // id == index
    const { id } = req.body;

    const foundRecipe = data.recipes[id];

    if (!foundRecipe) {
        return res.send("Recipe not found!");
    }

    const recipe = {
        ...foundRecipe,
        image: req.body.image,
        title: req.body.title,
        author: req.body.author,
        ingredients: req.body.ingredients,
        preparation: req.body.preparation,
        information: req.body.information
    };

    data.recipes[id] = recipe;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error!");

        return res.redirect(`/admin/recipes/${id}`);
    });
}

exports.delete = (req, res) => {
    // id == index
    const { id } = req.body;

    data.recipes.splice(id, 1);

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) res.send("Write file error!");

        return res.redirect("/admin/recipes");
    });
}