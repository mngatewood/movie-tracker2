export const addToFavoritesDb = async (movieData, userId) => {
  const favoriteData = {...movieData, user_id: userId};
  const url = 'api/users/favorites/new';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(favoriteData),
      headers: { 'Content-Type': 'application/json' }
    });
    const favoriteId = await response.json();
    return favoriteId;
  } catch (error) {
    throw new Error('Error adding to favorites');
  }
};

export const removeFromFavoritesDb = async (movieId, userId) => {
  const favoriteData = {movieId, userId};
  const url = `api/users/${userId}/favorites/${movieId}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(favoriteData),
      headers: { 'Content-Type': 'application/json' }
    });
    const favoriteId = await response.json();
    return favoriteId;
  } catch (error) {
    throw new Error('Error removing favorite');
  }
};