/* eslint-disable camelcase */
import { getAccessToken } from "./getAccessToken";

export const getFavorites = async userId => {
  const token = await getAccessToken();
  if (!token) {
    return null;
  }
  console.log("token", token);
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
    return favorites.data.favorites;
  } catch (error) {
    throw new Error("Error getting favorites");
  }
};
