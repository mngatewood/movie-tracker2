import React from 'react';
import ReactDOM from 'react-dom';
import { Favorites } from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {

  const mockFavorites = [
    { title: 'movie1', movie_id: '1' }
  ];
  const wrapper = shallow(<Favorites
    favorites={mockFavorites} />);

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
