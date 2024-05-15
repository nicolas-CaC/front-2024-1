async function getApiData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}



function createCards(characters, search) {
    container.innerHTML = ''
    for (const character of characters) {
        const card = document.createElement('div')
        card.className = "card-container"
        card.innerHTML = templates[search](character)
        card.addEventListener('click', () => cardHandleClick(character))
        container.append(card)
    }
}



async function createPokeContainer(search) {
    pokemons = []
    for (let i = 1; i <= 152; i++) {
        const api = apis[search] + i
        pokemon = await getApiData(api)
        pokemons.push(pokemon)
    }
    pokemons.sort((a, b) => a.id - b.id)
    createCards(pokemons, search)
}



async function createDefaultContainer(search) {
    const result = await getApiData(apis[search])
    createCards(result.data, search)
}


async function createPerrosContainer(search) {
    const result = await getApiData(apis[search])
    createCards(result, search)
}