import React from 'react';
import './Card.css';

const Card = ({name, lineOne, lineTwo, lineThree, lineFour, type, favoriteCardFunc}) => {

	const lineOneTitle = ['Homeworld: ', 'Terrain: ', 'Model: ']
	const lineTwoTitle = ['Species: ', 'Population: ', 'Class: ']
	const lineThreeTitle = ['Homeworld Population: ', 'Climate: ', 'Passengers: ']
	const lineFourTitle = ['', 'Known Residents: ', '']

	let cardDisplay = (
		<div>
			<h3>{name}</h3>
			<h4>{lineOneTitle[type]}{lineOne}</h4>
			<h4>{lineTwoTitle[type]}{lineTwo}</h4>
			<h4>{lineThreeTitle[type]}{lineThree}</h4>
			<h4>{lineFourTitle[type]}{lineFour}</h4>
		</div>
	)

	return (
		<div className="card-component">
			{cardDisplay}
		</div>
	)
}

export default Card;
