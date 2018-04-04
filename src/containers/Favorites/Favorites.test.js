/* eslint-disable camelcase */
import React from 'react';
import { Favorites, mapStateToProps } from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {
  let mockFavorites;
  let wrapper;

  beforeEach(() => {
    mockFavorites = [
      { title: 'movie1', movie_id: '1' }
    ];
    wrapper = shallow(<Favorites
      favorites={mockFavorites} />);
  });
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should map to the store", () => {
    const mockStore = { favorites: mockFavorites};
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });
});
