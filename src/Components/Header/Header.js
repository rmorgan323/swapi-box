import React from 'react';
import './Header.css';

const Header = (props) => {

	return (
		<div className="header-component">
			{console.log('header component', props)}
			<h1>swAPIbox</h1>
			<h6>FAVORITES <span>{props.favorites.length}</span></h6>
			<div>
				<button onClick={props.getCharacters}>characters</button>
				<button onClick={props.getWorlds}>worlds</button>
				<button onClick={props.getVehicles}>vehicles</button>
			</div>
		</div>
	)
}




export default Header;