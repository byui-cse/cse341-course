const express = require('express');
const app = express();

const controller = require('../controller/pokemonController');

app.get('/', (req, res, next) => {
    res.render('welcomePage');
})
.get('/pokemon/:page', (req, res, next) => {
    const page = req.params.page;
    controller.getPokemon(page, (pokemon) => {
            res.render('pokemon', {
                pokemonList: pokemon,
                page: page
            });
    });
});

module.exports = app;