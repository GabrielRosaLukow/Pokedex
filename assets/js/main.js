const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;



function LoadPokemonItens(offset, limit) {
    PokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
         `
        <button class="button" onclick="pokemonPage()"> <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
        
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                    </li>
        </button>
            `).join('')
        pokemonList.innerHTML += newHtml
    })                                                
}

LoadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        LoadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        LoadPokemonItens(offset, limit)       
    }
})

function pokemonPage() {
    window.location.href = "detail.html"
}
