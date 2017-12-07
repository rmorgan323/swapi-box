import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card.js';

const CardContainer = ({ containerTitle, favoriteCard, active, items }) => {

		let displayItems = items.filter(item => item.cardType === active)

		let currentDisplay = displayItems.map((item) => {
			return <Card name={item.name}
									 lineOne={item.lineOne}
									 lineTwo={item.lineTwo}
									 lineThree={item.lineThree}
									 lineFour={item.lineFour}
									 key={item.id} 
									 id={item.id}
									 cardType={item.cardType}
	                 favoriteCard={favoriteCard} />
		})
	
	return (
		<div className="card-container-component">
			<h2>{containerTitle}</h2>
			<div className="card-container">
				{currentDisplay}
			</div>
		</div>
	)
}

export default CardContainer;