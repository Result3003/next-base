import Cookies from "js-cookie";

const getValueLocalHost = (key: string) => {
  return localStorage.getItem(key);
};
const setValueLocalHost = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

const setClientCookie = (key: string, value: string) => {
  Cookies.set(key, value, { expires: 3, path: "/" });
};

const getClientCookie = (key: string) => {
  return Cookies.get(key);
};

export {
  getValueLocalHost,
  setValueLocalHost,
  setClientCookie,
  getClientCookie,
};
