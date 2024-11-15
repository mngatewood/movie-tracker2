export const userLogout = async () => {
  const apiRoot = process.env.REACT_APP_AUTH_API_URL;
  const url = apiRoot + "/auth/logout";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const loggedOut = await response.json();
    if (loggedOut.message === "Logged out") {
      sessionStorage.clear();
    }
    return true;
  } catch (error) {
    throw new Error("Error logging out");
  }
};
