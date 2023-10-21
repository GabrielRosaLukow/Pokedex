const pokemonDetail = document.getElementById('pokemonDetail')
const limit = 1
let offset = 0;


function pokemonPage(offset, limit) {
    console.log(pokemon.number)
    PokeAPI.getPokemons(offset, limit).then((pokemons) =>  {
    const page = pokemons.map((pokemon) =>`
        <section class="container">
        <img class="img" src="${pokemon.photo}" alt="Bulbasaur">
        <li class ="pokemon"> 
        <div class = "details">
            <span class="${pokemon.name}">
            Bulbasaur
            </span>
        <div class="types">
            <ol class="type">
                grass
            </ol>
            <ol class="type">
                poison
            </ol>
        </div>
            <div class="detailsList" >
                <ol class="stats">
                Stats
                </ol>
                <ol class="stats">
                    About
                </ol>
                <ol class="stats">
                    Moves
                </ol>
            </div>
            <ol class="pokemonStats">
                HP: 45
                <div>

                </div>
            </ol>
            <ol class="pokemonStats">
                ATK: 49
            </ol>
            <ol class="pokemonStats">
                DEF: 49
            </ol class="pokemonStats">
            <ol class="pokemonStats">
                SATK: 65
            </ol>
            <ol class="pokemonStats">
                SDEF: 65
            </ol>
            <ol class="pokemonStats">
                SPD: 45
            </ol>
        </div>
    </li>
</section>
    `).join('')
    console.log(page)
    pokemonDetail.innerHTML += page
    });
}
pokemonPage(offset, limit);


function pokemonDetail() {
    
}