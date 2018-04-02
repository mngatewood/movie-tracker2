import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const wrapper = shallow(<Header />)
  //need to pass in props to header
  // expect(wrapper).toMatchSnapshot();
});

//need to test handleChange calls logout