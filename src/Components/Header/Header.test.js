import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header test', () => {
  it.skip('should render correctly', () => {
    const renderedHeader = shallow(<Header />);

    expect(renderedHeader.find('.Header').length).toEqual(1);
  });

  //snapshot?
});