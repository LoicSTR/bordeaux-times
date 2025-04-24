export const writeUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const readUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : "";
};
