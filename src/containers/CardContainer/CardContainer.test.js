import React from 'react';
import ReactDOM from 'react-dom';
import { CardContainer } from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  
  it('matches the snapshot', () => {

    const mockMovies = [
      { title: 'movie1', movie_id: '1' },
      { title: 'movie2', movie_id: '2' },
      { title: 'movie3', movie_id: '3' }
    ];
    const mockFavorites = [
      { title: 'movie1', movie_id: '1' }
    ];
    const wrapper = shallow(<CardContainer
      movies={mockMovies}
      favorites={mockFavorites} />);

    expect(wrapper).toMatchSnapshot();
  });

});