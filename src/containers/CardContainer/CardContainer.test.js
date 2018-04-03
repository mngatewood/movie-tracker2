/* eslint-disable camelcase */

import React from 'react';
import { CardContainer, mapStateToProps } from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  let mockMovies;
  let mockFavorites;

  beforeEach(() => {
    mockMovies = [
      { title: 'movie1', movie_id: '1' },
      { title: 'movie2', movie_id: '2' },
      { title: 'movie3', movie_id: '3' }
    ];
    
    mockFavorites = [
      { title: 'movie1', movie_id: '1' }
    ];
  });
  
  it('matches the snapshot', () => {
    const wrapper = shallow(<CardContainer
      movies={mockMovies}
      favorites={mockFavorites} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should map to the store", () => {
    const mockFavorites = [{ title: "movie1", movie_id: "1" }];
    const mockStore = { 
      movies: mockMovies,
      favorites: mockFavorites 
    };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });
});