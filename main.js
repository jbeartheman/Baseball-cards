async function getAPIData(url)  {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// now, use the asynce getAPIdata function

function loadPage(data){
    getAPIData('https://pokeapi.co/api/v2/pokemon').then
    (async (data) => { 
        for (const pokemon of data.results) {
            await getAPIData(pokemon.url).then((pokeData) => {
                populatePokeCard(pokeData)
            })
            
        }
    })
}


const pokeGrid = document.querySelector('.pokewarsGrid')

function populatePokeCard(singlePokemon){
    let pokeScene = document.createElement('div')
    pokeScene.classname = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.classname = 'card'
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')

    let frontLabel = document.createElement('p')
    frontLabel.textContent = singlePokemon.name


    pokeFront.appendChild(frontLabel)
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}



loadPage()