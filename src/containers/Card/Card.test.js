import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './Card';
import { shallow } from 'enzyme';
import { mockMovieData, mockFavoriteMovieData, mockUser } from '../../mockData/mockData';

describe('Card', () => {
  let wrapper;
  let setError;
  let addFavoriteToStore;
  let removeFavoriteFromStore;

  beforeEach(() => {
    setError = jest.fn();
    addFavoriteToStore = jest.fn();
    removeFavoriteFromStore = jest.fn()

    wrapper = shallow(
      <Card
        movie={mockMovieData}
        user={mockUser}
        setError={setError}
        addFavoriteToStore={addFavoriteToStore}
        removeFavoriteFromStore={removeFavoriteFromStore}
        isFavorite={false}
      />,
      { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls favoriteError with the correct params on handleClick ', () => {
    const mockEvent = { target: {} };
    const mockFavoriteError = jest.fn();
    const favoriteButton = wrapper.find('button');
    favoriteButton.simulate('click');
    expect(mockFavoriteError).toHaveBeenCalledWith(mockEvent);
  });
});
