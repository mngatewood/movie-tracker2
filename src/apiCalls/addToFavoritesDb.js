/* eslint-disable camelcase */
import { getAccessToken } from "./getAccessToken";

export const addToFavoritesDb = async (movieId, userId) => {
  const token = await getAccessToken();
  if (!token) {
    return null;
  }
  const favoriteData = { movie_id: movieId, user_id: userId };
  const apiRoot = process.env.REACT_APP_AUTH_API_URL;
  const url = apiRoot + "/users/favorites";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(favoriteData),
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const favoriteId = await response.json();
    return favoriteId;
  } catch (error) {
    throw new Error("Error adding to favorites");
  }
};
