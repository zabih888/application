import { getCookie } from "cookies-next";

const useAuthentication = () => {
  const token = getCookie("token");
  if (token) {
    return true;
  }
  return false;
};

export default useAuthentication;
