import axios from "axios";
import Cookies from "js-cookie";

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    const { config, data } = response;
    return Promise.resolve(response);
  },
  async function (error) {
    const { response } = error;
    return Promise.reject(error);
  }
);

function getToken() {
  return Cookies.get("token-user");
}

export const axiosInterceptor = axios;
