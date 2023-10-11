export const addTokenToLocalStorage = (token: string) => {
  window.localStorage.setItem("AUTH_TOKEN", token);
};

export const checkTokenExistance = () => {
  return !!window.localStorage.getItem("AUTH_TOKEN");
};

export const removeTokenFromLocalStorage = () => {
  if (window.localStorage.getItem("AUTH_TOKEN")) {
    window.localStorage.removeItem("AUTH_TOKEN");
  }
};
