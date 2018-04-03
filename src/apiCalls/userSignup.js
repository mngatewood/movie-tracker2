export const userSignup = async accountInfo => {
  const url = "api/users/new";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(accountInfo),
      headers: { "Content-Type": "application/json" }
    });
    const userId = await response.json();
    return userId;
  } catch (error) {
    throw new Error("Error signing up");
  }
};
