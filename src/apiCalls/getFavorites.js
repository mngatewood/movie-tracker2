/* eslint-disable camelcase */
import { getAccessToken } from "./getAccessToken";

export const getFavorites = async userId => {
  const token = await getAccessToken();
  if (!token) {
    return null;
  }
  const apiRoot = process.env.REACT_APP_AUTH_API_URL;
  const url = apiRoot + `/users/${userId}/favorites`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const favorites = await response.json();
    const cleanFavorites = favorites.data.favorites.map(favorite => {
      return {
        id: favorite.id,
        user_id: favorite.user_id,
        movie_id: parseInt(favorite.movie_id, 10),
        created_at: favorite.created_at
      };
    });
    return cleanFavorites;
  } catch (error) {
    throw new Error("Error getting favorites");
  }
};
