export const userLogin = async credentials => {
  const url = "api/users";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" }
    });
    const user = await response.json();
    return user.data;
  } catch (error) {
    throw new Error("Error logging in");
  }
};
