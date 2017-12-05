import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import FilmCrawl from '../FilmCrawl/FilmCrawl.js';

class App extends Component {
	constructor() {
		super();

		this.state = {
			favorites: ['1', '2'],
			containerTitle: '',
			characters: ['char1', 'char2'],
			worlds: ['world1', 'world2'],
			vehicles: ['rigs1', 'rigs2']
		}
	}

	getCharacters = () => {
		console.log('get me some characters')
	}

  render() {
    return (
      <div>
      	<Header favorites={this.state.favorites}
      					getCharacters={this.getCharacters} />
    		<FilmCrawl />
      </div>
    );
  }
}

export default App;
