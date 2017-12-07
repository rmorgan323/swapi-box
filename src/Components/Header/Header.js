import React from 'react';
import './Header.css';

const Header = ( {favorites, getWorlds, getVehicles, handleUpdateState} ) => {

	return (
		<div className="header-component">
			<h1>nerdbox</h1>
			<h6>FAVORITES <span>{favorites.length}</span></h6>
			<div>
				<button onClick={() => handleUpdateState('characters')}>characters</button>
				<button onClick={() => handleUpdateState('worlds')}>worlds</button>
				<button onClick={() => handleUpdateState('vehicles')}>vehicles</button>
			</div>
		</div>
	)
}




export default Header;