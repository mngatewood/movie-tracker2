import React from 'react';
import { Card, mapStateToProps, mapDispatchToProps } from "./Card";
import { shallow } from 'enzyme';
import { 
  mockMovieData, 
  mockFavoriteMovieData, 
  mockUser } from '../../mockData/mockData';
  jest.mock('../../apiCalls/')

describe('Card', () => {
  let wrapper;
  let setError;
  let addFavoriteToStore;
  let removeFavoriteFromStore;
  let instance;

  beforeEach(() => {
    setError = jest.fn();
    addFavoriteToStore = jest.fn();
    removeFavoriteFromStore = jest.fn();
    
    wrapper = shallow(
      <Card
        movie={mockMovieData}
        user={mockUser}
        setError={setError}
        addFavoriteToStore={addFavoriteToStore}
        removeFavoriteFromStore={removeFavoriteFromStore}
        isFavorite={false} />);
    instance = wrapper.instance();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should update state on favoriteError when there is no user ', () => {
    const mockEmptyUser = {};
    wrapper = shallow(
      <Card
        movie={mockMovieData}
        user={mockEmptyUser} 
        setError={setError}
        addFavoriteToStore={addFavoriteToStore}
        removeFavoriteFromStore={removeFavoriteFromStore}
        isFavorite={false} />);
    instance.favoriteError();
    expect(wrapper.state('favErrorHidden')).toEqual(false); 
  });

  it.skip('calls addToFavoritesDb and addFavortiesToStore on addFavorite', () => {
    
  });

  it.skip('calls favoriteError on handleClick', () => {
    instance.favoriteError = jest.fn();
    instance.handleClick();
    expect(instance.favoriteError).toHaveBeenCalled();
  });

  it('should map to the store', () => {
    const mockStore = { user: mockUser };
    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore);
  });

  it('should call dispatch function when using mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setError();
    mapped.addFavoriteToStore();
    mapped.removeFavoriteFromStore();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
