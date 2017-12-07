import React from 'react';
import './Header.css';

const Header = ({handleUpdateState, numberOfFavorites}) => {

	return (
		<div className="header-component">
			<h1>nerdbox</h1>
			<div>
				<button onClick={() => handleUpdateState(0)}>characters</button>
				<button onClick={() => handleUpdateState(1)}>worlds</button>
				<button onClick={() => handleUpdateState(2)}>vehicles</button>
				<button onClick={() => handleUpdateState(3)}>favorites<span>{numberOfFavorites}</span></button>
			</div>
		</div>
	)
}

export default Header;