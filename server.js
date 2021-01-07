const express = require('express')
const nunjucks = require('nunjucks')

const recipes = require('./data')
const server = express()

server.use(express.static('public'))

server.set("view engine", 'njk')
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', (req, res) => {
  return res.render('home', { items: recipes })
})

server.get('/about', (req, res) => {
  return res.render('about')
})

server.get('/recipes', (req, res) => {
  return res.render('recipes', { items: recipes })
})

server.get("/recipes/:index", (req, res) => {
  const recipesArray = recipes;
  const recipeIndex = req.params.index;

  return res.render('recipe', { recipe: recipesArray[recipeIndex] })
})

server.listen(5000, () => {
  console.log("server is running...")
})