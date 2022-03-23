
// Ao Salvar transformar em string
// Ao Buscar transformar em JSON 

export const addPokemon = (pokemon) => {
    //pegar a lista de pokemons do localstorage
    //verificar se já está na lista de favoritos
    //adicionar a essa lista o novo pokemon
    const dados = getPokemonsFavorites()
    if(!dados.some(e => e === pokemon)){
        dados.push(pokemon)
        const newDados = JSON.stringify(dados)
        localStorage.setItem("favoritos", newDados)
    }
    

    
}
export const removePokemon = (pokemon) => {
        const dados = getPokemonsFavorites()
        if(dados.some(e => e === pokemon)){
            const newDados = [...dados.filter((e) => e != pokemon)]
            console.log(newDados)
            localStorage.setItem("favoritos", JSON.stringify(newDados))
        }
    
    // const newDados = JSON.
}

export const getPokemonsFavorites = (pokemon) => {
    const dados = localStorage.getItem("favoritos")
    const pokemonData = dados ? JSON.parse(dados) : []
    return pokemon ? pokemonData.find(e => e == pokemon) : pokemonData
}



// favoritos