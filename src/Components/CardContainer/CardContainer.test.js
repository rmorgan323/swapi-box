import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe.skip('CardContainer test', () => {
  it('should render correctly', () => {
    const renderedCardContainer = shallow(<CardContainer />);

    expect(renderedCardContainer.find('.CardContainer').length).toEqual(1);
  })
})