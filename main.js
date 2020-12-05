import { films } from './data/films.js'
import { people } from './data/people.js'

const main = document.querySelector('main')



/*people.forEach(person => {
    console.log(person.name)
    let personImg = document.createElement('img')
    personImg.src = "https://starwars-visualguide.com/assets/img/characters/1.jpg"
    main.appendChild(personImg)
})
*/

for (let i = 0; i < 7; i++){
    let personImg = document.createElement('img')
    personImg.src = 'https://starwars-visualguide.com/assets/img/characters/' + (i + 1) + '.jpg'
    main.appendChild(personImg)
    console.log(people[i].name)
}