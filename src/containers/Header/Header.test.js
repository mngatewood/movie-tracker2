import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { shallow, mount } from 'enzyme';

describe('Header when logged in', () => {

  let wrapper;
  let mockUser;

  beforeEach(() => {
  });

  it('matches the snapshot', () => {
    const mockUser = { name: "me" };
    const wrapper = shallow(<Header user={mockUser} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call logOut when handleClick is invoked', () => {
    mockUser = { name: "me" };
    const mockFunction = jest.fn();
    wrapper = shallow(<Header user={mockUser} 
      logOut={mockFunction} 
      resetFavorites={mockFunction} />);
    wrapper.instance().handleClick();
    expect(mockFunction).toHaveBeenCalled();
  });

});

describe('Header when logged out', () => {

  it('matches the snapshot', () => {
    const mockUser = {};
    const wrapper = shallow(<Header user={mockUser} />);
    expect(wrapper).toMatchSnapshot();
  });

});