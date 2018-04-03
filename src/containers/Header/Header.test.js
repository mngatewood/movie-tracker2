import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('Header when logged in', () => {

  let wrapper;
  let mockUser;

  it('matches the snapshot', () => {
    const mockUser = { name: "me" };
    const wrapper = shallow(<Header user={mockUser} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call logOut and resetFavorites on handleClick', () => {
    mockUser = { name: "me" };
    const mockLogOut = jest.fn();
    const mockResetFavorites = jest.fn();
    wrapper = shallow(<Header user={mockUser} 
      logOut={mockLogOut} 
      resetFavorites={mockResetFavorites} />);
    wrapper.instance().handleClick();
    expect(mockLogOut).toHaveBeenCalled();
    expect(mockResetFavorites).toHaveBeenCalled();
  });

});

describe('Header when logged out', () => {

  it('matches the snapshot', () => {
    const mockUser = {};
    const wrapper = shallow(<Header user={mockUser} />);
    expect(wrapper).toMatchSnapshot();
  });

});