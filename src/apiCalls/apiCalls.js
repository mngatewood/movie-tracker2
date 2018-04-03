export const userLogin = async credentials => {
  const url = 'api/users';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type': 'application/json' }
    });
    const user = await response.json();
    return user.data;
  } catch (error) {
    throw new Error('Error logging in');
  }
};

export const userSignup = async accountInfo => {
  const url = 'api/users/new';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(accountInfo),
      headers: { 'Content-Type': 'application/json' }
    });
    const userId = await response.json();
    return userId;
  } catch (error) {
    throw new Error('Error signing up');
  }
};

export const getFavorites = async userId => {
  const url = `api/users/${userId}/favorites`;
  try {
    const response = await fetch(url);
    const favorites = await response.json();
    return favorites.data;
  } catch (error) {
    throw new Error('Error getting favorites');
  }
};

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