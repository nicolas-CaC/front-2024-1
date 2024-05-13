const character = JSON.parse(localStorage.getItem('character'))
const body = document.querySelector('body')

body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

const card = document.createElement('div')
card.className = 'card-container'
card.style.zIndex = 2
card.innerHTML = templates.pokemon(character)
body.insertAdjacentElement('afterbegin', card)