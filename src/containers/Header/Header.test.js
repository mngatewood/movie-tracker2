import React from 'react';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme';

describe('Header when logged in', () => {
  let wrapper;
  let mockUser;

  beforeEach(() => {
    mockUser = { name: "me" };
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<Header user={mockUser} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call logOut and resetFavorites on handleClick', () => {
    const mockLogOut = jest.fn();
    const mockResetFavorites = jest.fn();
    wrapper = shallow(<Header user={mockUser} 
      logOut={mockLogOut} 
      resetFavorites={mockResetFavorites} />);
    wrapper.instance().handleClick();
    expect(mockLogOut).toHaveBeenCalled();
    expect(mockResetFavorites).toHaveBeenCalled();
  });

  it("should map to the store", () => {
    const mockStore = { 
      user: mockUser,
      error: false 
    };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });

  it("should call dispatch function when using mapDispatchToProps", () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logOut();
    mapped.resetFavorites();
    expect(mockDispatch).toHaveBeenCalled();
  });
});

describe('Header when logged out', () => {

  it('matches the snapshot', () => {
    const mockUser = {};
    const wrapper = shallow(<Header user={mockUser} />);
    expect(wrapper).toMatchSnapshot();
  });
});