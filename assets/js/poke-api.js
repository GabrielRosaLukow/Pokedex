
const PokeAPI = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    
    const stats = pokeDetail.stats.map((statSlot) => statSlot.base_stat)
    const [hp, attack, defense, specialAttack, specialDefense, speed] = stats
    pokemon.stats = stats
    pokemon.hp = hp
    pokemon.attack = attack
    pokemon.defense = defense
    pokemon.specialAttack = specialAttack
    pokemon.specialDefense = specialDefense
    pokemon.speed = speed
    
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

PokeAPI.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

PokeAPI.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(PokeAPI.getPokemonsDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

