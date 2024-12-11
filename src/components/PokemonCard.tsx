const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

function PokemonCard() {
	const pokemon = pokemonList[1];
	return (
		<section>
			<figure>
				{pokemon.imgSrc !== undefined ? (
					<img src={pokemon.imgSrc} alt={pokemon.name} />
				) : (
					<p>???</p>
				)}
				<figcaption>Bulbasaur</figcaption>
			</figure>
		</section>
	);
}

export default PokemonCard;
