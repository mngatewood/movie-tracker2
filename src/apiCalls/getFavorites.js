export const getFavorites = async userId => {
  const url = `api/users/${userId}/favorites`;
  try {
    const response = await fetch(url);
    const favorites = await response.json();
    return favorites.data;
  } catch (error) {
    throw new Error("Error getting favorites");
  }
};
