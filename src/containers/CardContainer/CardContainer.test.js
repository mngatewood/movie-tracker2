import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const wrapper = shallow(<CardContainer />)
  //need to pass in props to CardContainer
  // expect(wrapper).toMatchSnapshot();
});
