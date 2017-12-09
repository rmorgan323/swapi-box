import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

jest.mock('../../helper/apiCalls.js')

describe('App test', () => {
  it('should render correctly', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
    expect(renderedApp.find('.app-component').length).toEqual(1);
  })

  it('should set active type correctly when handleUpdateState is called', () => {
  	const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
  	renderedApp.instance().handleUpdateState(0)

  	expect(renderedApp.state('active')).toEqual(0)
  })

  it('should not change active state if incorrect value is passed into handleUpdateState', () => {
  	const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
  	const defaultState = {...renderedApp.state()};

  	renderedApp.instance().handleUpdateState(5)
  	expect(renderedApp.state()).toEqual(defaultState)
  })

  it('should toggle favorite in card when favoriteCard is called', () => {
  	const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
  	const mockCard = {name: 'luke skywalker',
  										id: 1,
  										favorite: false};
  	renderedApp.setState({ items: mockCard })
  	console.log(renderedApp.state('items'))

  	renderedApp.instance().favoriteCard(1);
  	console.log(renderedApp.debug())
  })

  // it('should set state correctly when component mounts', async () => {
  // 	const renderedApp = await shallow(<App />);
  // 	const expected = ['luke', 'laya', 'chewy', 'hoth', 'deathstar', 'x-wing']
  // 	await renderedApp.update()
  // 	expect(renderedApp.state('items')).toEqual(expected)

  // })

  //rendering
  //state changes - test methods that change state in isolation
  //test that fetch calls are made correctly
  //test that data is digested by the component correctly
  
})