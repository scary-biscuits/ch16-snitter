export const storeUsers = (state) => {
  localStorage.setItem("users", JSON.stringify(state));
};

export const storeSneets = (state) => {
  localStorage.setItem("sneets", JSON.stringify(state));
};

export const getStoredUsers = () => {
  return JSON.parse(localStorage.getItem("users"));
};

export const getStoredSneets = () => {
  return JSON.parse(localStorage.getItem("sneets"));
};