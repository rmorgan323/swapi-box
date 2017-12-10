import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card test', () => {
  it('should render correctly', () => {
    const renderedCard = shallow(<Card />);

    expect(renderedCard.find('.card-component').length).toEqual(1);
  });

  it('should receive props', () => {
    const renderedCard = mount(<Card name='Luke'
                                     lineOne='Tatooine'
                                     lineTwo='Human'
                                     lineThree='200,000'
                                     favoriteStatus={false} 
                                     />);

    expect(renderedCard.props().name).toEqual('Luke');
    expect(renderedCard.props().lineOne).toEqual('Tatooine');
    expect(renderedCard.props().lineTwo).toEqual('Human');
    expect(renderedCard.props().lineThree).toEqual('200,000');
    expect(renderedCard.props().favoriteStatus).toEqual(false);
  });

  it('should render a card correctly', () => {
    const renderedCard = shallow(<Card name='Bespin'
                                       lineOne='gas giant'
                                       lineTwo='6,000,000'
                                       lineThree='temperate'
                                       lineFour='Lobot' />);

    expect(renderedCard.find('h3').text()).toEqual('Bespin');
    expect(renderedCard.find('h4').at(0).text()).toEqual('gas giant');
    expect(renderedCard.find('h4').at(1).text()).toEqual('6,000,000');
    expect(renderedCard.find('h4').at(2).text()).toEqual('temperate');
    expect(renderedCard.find('h4').at(3).text()).toEqual('Lobot');
  });

  it('should add a fave-card class if card has a favoriteStatus of true', () => {
    const renderedCard_notFave = shallow(<Card favoriteStatus={false}/>);
    const renderedCard_fave = shallow(<Card favoriteStatus={true}/>);

    expect(renderedCard_notFave.find('.fave-card').length).toEqual(0);
    expect(renderedCard_fave.find('.fave-card').length).toEqual(1);
  });

  it('should pass in labels for each data category corresponding to the cardType prop value', () => {
    const renderedCard = shallow(<Card name='Luke'
                                       lineOne='Tatooine'
                                       lineTwo='Human'
                                       lineThree='200,000'
                                       cardType={0} />);

    expect(renderedCard.find('h4').at(0).text()).toEqual('Homeworld: Tatooine');
    expect(renderedCard.find('h4').at(1).text()).toEqual('Species: Human');
    expect(renderedCard.find('h4').at(2).text()).toEqual('Homeworld Population: 200,000');
  });
});
