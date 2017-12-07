import React from 'react';
import './Card.css';

const Card = ({name, lineOne, lineTwo, lineThree, lineFour, id, cardType, favoriteCard}) => {

	const lineOneTitle = ['Homeworld: ', 'Terrain: ', 'Model: ']
	const lineTwoTitle = ['Species: ', 'Population: ', 'Class: ']
	const lineThreeTitle = ['Homeworld Population: ', 'Climate: ', 'Passengers: ']
	const lineFourTitle = ['', 'Known Residents: ', '']

	let cardDisplay = (
		<div>
			<button onClick={() => favoriteCard(id)}>FAV</button>
			<h3>{name}</h3>
			<h4>{lineOneTitle[cardType]}{lineOne}</h4>
			<h4>{lineTwoTitle[cardType]}{lineTwo}</h4>
			<h4>{lineThreeTitle[cardType]}{lineThree}</h4>
			<h4>{lineFourTitle[cardType]}{lineFour}</h4>
		</div>
	)

	return (
		<div className="card-component">
			{cardDisplay}
		</div>
	)
}

export default Card;
