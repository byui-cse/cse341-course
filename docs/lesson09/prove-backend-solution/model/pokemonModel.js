const fetch = require('node-fetch');

exports.getPokemon = (offset, callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            callback(data.results);
        });
}