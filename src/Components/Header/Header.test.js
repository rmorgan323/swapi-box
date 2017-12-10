import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header test', () => {
  it('should render correctly', () => {
    const renderedHeader = shallow(<Header />);

    expect(renderedHeader.find('.header-component').length).toEqual(1);
  });

  it('should receive props', () => {
    const renderedHeader = mount(<Header numberOfFavorites={8} />);

    expect(renderedHeader.props().numberOfFavorites).toEqual(8);
  });

  it('should match the snapshot', () => {
    const renderedHeader = shallow(<Header numberOfFavorites={5} />);

    expect(renderedHeader).toMatchSnapshot();
  });
});