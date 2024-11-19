export const userSignup = async accountInfo => {
  const apiRoot = process.env.REACT_APP_AUTH_API_URL;
  const url = apiRoot + "/users";
  console.log("accountInfo", JSON.stringify(accountInfo));
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(accountInfo),
      headers: { "Content-Type": "application/json" }
    });
    const userData = await response.json();
    console.log("userData", userData);
    const userId = userData.data.user.id;
    return userId;
  } catch (error) {
    throw new Error("Error signing up");
  }
};
