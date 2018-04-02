import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

it('renders correctly', () => {

  const wrapper = shallow(<Card />)
  //need to pass in props to card
  // expect(wrapper).toMatchSnapshot();
});
