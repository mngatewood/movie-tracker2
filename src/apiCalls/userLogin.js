export const userLogin = async credentials => {
  const apiRoot = process.env.REACT_APP_AUTH_API_URL;
  const url = apiRoot + "/auth/login";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    });
    const userData = await response.json();
    sessionStorage.setItem("accessToken", userData.data.user.accessToken);
    return userData;
  } catch (error) {
    throw new Error("Error logging in");
  }
};
