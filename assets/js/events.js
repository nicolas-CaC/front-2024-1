const searchHandleKeyup = (e) => {

    const search = e.target.value.toLowerCase().trim()

    if (search === 'disney')
        createDefaultContainer(search)

    if (search === 'pokemon')
        createPokeContainer(search)

    if (search === 'valorant')
        createDefaultContainer(search)

    if (search === 'perros')
        createPerrosContainer(search)
}



const windowHandleScroll = () => {
    const { y } = body.getBoundingClientRect()

    const opacity = 100 + y
    header.style.opacity = `${opacity}%`
    header.style.visibility = opacity < 0 ? 'hidden' : 'visible'

    const arrowOpacity = 0 - y
    arrow.style.opacity = `${arrowOpacity}%`
    arrow.style.visibility = arrowOpacity > 0 ? 'visible' : 'hidden'
}



const cardHandleClick = (character) => {
    localStorage.setItem('character', JSON.stringify(character))
    location.href = 'pagina.html'
}



const headerHandleMouseover = () => {
    header.style.visibility = 'visible'
    header.style.opacity = '100%'
}



const arrowHandleClick = () => window.scrollTo(0, 0)



