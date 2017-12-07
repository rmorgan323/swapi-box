import React from 'react';
import './Header.css';

const Header = ( {favorites, getWorlds, getVehicles, handleUpdateState} ) => {

	return (
		<div className="header-component">
			<h1>nerdbox</h1>
			<h6>FAVORITES <span>(some number)</span></h6>
			<div>
				<button onClick={() => handleUpdateState(0)}>characters</button>
				<button onClick={() => handleUpdateState(1)}>worlds</button>
				<button onClick={() => handleUpdateState(2)}>vehicles</button>
			</div>
		</div>
	)
}




export default Header;