import { getTokenData } from "./getTokenData";

export const getAccessToken = async () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const decodedToken = accessToken ? getTokenData(accessToken) : null;
  const expirationTime = decodedToken ? decodedToken.exp : null;
  const now = Math.trunc(Date.now() / 1000);

  // Token is expired or doesn't exist
  if (expirationTime && now >= expirationTime) {
    const apiRoot = process.env.REACT_APP_AUTH_API_URL;
    const url = apiRoot + "/auth/refresh";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      const tokens = await response.json();
      sessionStorage.setItem("accessToken", tokens.accessToken);
      return tokens.accessToken;
    } catch (error) {
      throw new Error("Error getting access token");
    }
  // Token is not expired
  } else if (now < expirationTime) {
    return accessToken;
  }
};