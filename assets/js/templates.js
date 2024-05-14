const templates = {
    disney: (character) => `<h3>${character.name}</h3>
					<img
						src=${character.imageUrl}
						alt="${character.name}"
					/>
					<h5>Aparece en: ${character.film ? character.films.join(', ') : 'No hay datos'}</h5>
					<h6><a href=${character.sourceUrl}>Más info</a></h6>`,

    pokemon: (pokemon) => `<h3>${pokemon.name}</h3>
					<img
						src=${pokemon.sprites.other['official-artwork'].front_default}
						alt=${pokemon.name}
					/>
					<h5>Id: ${pokemon.id}</h5>`,

    valorant: (player) => `<h3>${player.displayName}</h3>
					<img
						src=${player.largeArt}
						alt=${player.displayName}
					/>
					<h5>UUID: ${player.uuid}</h5>
                <h6><a href=${player.wideArt}>Arte ancho</a></h6>`,

    perros: (item) => `<h3>${item.animal}</h3>
					<img
						src=${item.img}
						alt=${item.animal}
                        style='object-fit: cover'
					/>
					<h5>Ojos color: ${item.color}</h5>`,
}
