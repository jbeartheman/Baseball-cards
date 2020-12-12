/*async function getAPIData(url)  {
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
    getAPIData('https://swapi.dev/api/people').then
    (async (data) => { 
        for (const people of data.results) {
            await getAPIData(people.url).then((starData) => {
                populateStarCard(starData)
            })
            
        }
    })
}


const starGrid = document.querySelector('.starwarsGrid')

function populateStarCard(singlePerson){
    let starScene = document.createElement('div')
    starScene.classname = 'scene'
    let starCard = document.createElement('div')
    starCard.classname = 'card'
    let starFront = document.createElement('div')
    let starBack = document.createElement('div')

    let frontLabel = document.createElement('p')
    frontLabel.textContent = singlePerson.name


    starFront.appendChild(frontLabel)
    starCard.appendChild(starFront)
    starCard.appendChild(starBack)
    starScene.appendChild(starCard)
    starGrid.appendChild(starScene)
}
*/

const starGrid = document.querySelector('.starwarsGrid')


function loadData(){
    fetch('https://swapi.dev/api/people/1')
    .then(response => response.json())
    .then(data => console.log(data));

}


loadData()