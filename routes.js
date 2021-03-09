const express = require('express');
const admin = require('./controllers/admin');
const site = require('./controllers/site');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.redirect("/home");
});

// SITE
routes.get('/home', site.home);
routes.get('/about', site.about);
routes.get('/recipes', site.getAllRecipes);
routes.get("/recipes/:index", site.getRecipe);

// ADMIN
routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", admin.post); // Cadastrar nova receita
routes.put("/admin/recipes", admin.put); // Editar uma receita
routes.delete("/admin/recipes", admin.delete); // Deletar uma receita

module.exports = routes;