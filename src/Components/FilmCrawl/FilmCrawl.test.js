import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import FilmCrawl from './FilmCrawl';

describe('FilmCrawl test', () => {
  it.skip('should render correctly', () => {
    const renderedFilmCrawl = shallow(<FilmCrawl />);

    expect(renderedFilmCrawl.find('.FilmCrawl').length).toEqual(1);
  })

  //snapshot?

  it.skip('calls fetch when component mounts', () => {

  })

  it.skip('sets state with new film data after fetch call is consumed', () => {
  	
  })
})