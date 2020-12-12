const starGrid = document.querySelector('.starGrid')


async function loadData(){
    const response = await fetch('https://swapi.dev/api/people/')
    const data = await response.json()
    populateStarPage(data)
}

function populateStarPage(data){
    const allPeople = data.results
    for ( const people of allPeople){
    let starCard = document.createElement('div')
    starCard.className= 'starCard'
    let starName = document.createElement('h3')
    starName.textContent = people.starName

    starCard.appendChild(starName)
    starGrid.appendChild(starCard)
    }
}

loadData()