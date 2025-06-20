import axios from "axios";
import router from "../router";
import { BASE_URL } from "../base.url.utils";

const api = axios.create({
  baseURL: BASE_URL,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

// Automatically add access_token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors and refresh access_token using refresh_token in Authorization header
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      error.config &&
      !error.config._retry
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh_token");
      // if (!refreshToken) {
      //   router.push({ name: "login" });
      //   return Promise.reject(error);
      // }

      if (!refreshToken) {
        setTimeout(() => {
          router.push({ name: "login" });
        }, 0); // next tick
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return (
          new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            // .then((token) => {
            //   originalRequest.headers = {
            //     ...originalRequest.headers,
            //     Authorization: "Bearer " + newAccessToken,
            //   };
            //   return api(originalRequest);
            // })

            .then((token) => {
              originalRequest.headers = {
                ...originalRequest.headers,
                Authorization: "Bearer " + token,
              };
              return api(originalRequest);
            })
            .catch((err) => Promise.reject(err))
        );
      }

      isRefreshing = true;

      try {
        // Make refresh token request with Authorization header
        const res = await axios.post(
          BASE_URL + "auth/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );

        const newAccessToken = res.data.access_token;
        const newRefreshToken = res.data.refresh_token;
        localStorage.setItem("access_token", newAccessToken);
        localStorage.setItem("refresh_token", newRefreshToken);

        processQueue(null, newAccessToken);

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: "Bearer " + newAccessToken,
        };
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        
        router.push({ name: "login" });
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
