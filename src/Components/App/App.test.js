import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../../helper/apiCalls.js');

describe('App test', () => {
  it('should render correctly', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
    expect(renderedApp.find('.app-component').length).toEqual(1);
  });

  it('should set active type correctly when handleUpdateState is called', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
    renderedApp.instance().handleUpdateState(0);

    expect(renderedApp.state('active')).toEqual(0);
  });

  it('should not change active state if incorrect value is passed into handleUpdateState', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
    const defaultState = {...renderedApp.state()};

    renderedApp.instance().handleUpdateState(5);
    expect(renderedApp.state()).toEqual(defaultState);

    renderedApp.instance().handleUpdateState('dog');
    expect(renderedApp.state()).toEqual(defaultState);
  });

  it('should toggle favorite in card when favoriteCard is called', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
    const mockCard = [ 
      {
        name: 'Luke Skywalker',
        id: 1,
        favorite: false
      } 
    ];
    renderedApp.setState({ items: mockCard });

    expect(renderedApp.state('items')[0].favorite).toEqual(false);

    renderedApp.instance().favoriteCard(1);

    expect(renderedApp.state('items')[0].favorite).toEqual(true);
  });

  it.skip('should set state correctly when component mounts', async () => {
    const renderedApp = await shallow(<App />);
    const expected = ['Luke', 'Leia', 'Chewbacca', 'Hoth', 'Naboo', 'X-Wing', 'Tie Fighter'];

    expect(renderedApp.state('items')).toEqual(expected);
  });

  it('should set state of favorites when findFavorites function is called', () => {
    const renderedApp = shallow(<App />);
    const mockCards = [
      {
        name: 'Luke Skywalker',
        id: 1,
        favorite: false
      },
      {
        name: 'Hans Solo',
        id: 2,
        favorite: true
      }
    ];

    expect(renderedApp.state('favorites')).toEqual(0);

    renderedApp.setState({ items: mockCards });
    renderedApp.instance().findFavorites();

    expect(renderedApp.state('favorites')).toEqual(1);
  });
});
