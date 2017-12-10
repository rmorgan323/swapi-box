import React from 'react';
import { shallow } from 'enzyme';
import FilmCrawl from './FilmCrawl';

jest.mock('../../helper/apiCalls.js');

describe('FilmCrawl test', () => {
  it('should render correctly', () => {
    const renderedFilmCrawl = shallow(<FilmCrawl />);

    expect(renderedFilmCrawl.find('.film-crawl-container').length).toEqual(1);
  });

  it.skip('should set state correctly when component mounts', async () => {
    const renderedFilmCrawl = await shallow(<FilmCrawl />);
    const expected = {
      title: 'A New Hope', 
      date: 'May 15, 1977', 
      episode: 'VII', 
      crawl: [
        'It is a...', 
        'Rebel spaceships...', 
        'have won...'
      ]};

    setTimeout(
      () => expect(renderedFilmCrawl.state('story')).toEqual(expected)
      , 0);
  });
});
