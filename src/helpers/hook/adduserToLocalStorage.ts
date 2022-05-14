export const addToLocalStorage = <T>(data: T) => {
  localStorage.setItem("user", JSON.stringify({ ...data }));
};
