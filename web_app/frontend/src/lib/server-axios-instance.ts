/**
 * Reusable axios instance with cookie attached on headers
 */
import { cookies } from "next/headers";
import axios from "axios";

import "server-only";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const cookieStore = cookies();
    // TODO:- Update the key to the actual key where the token is stored
    const token =
      "726f8410c3bc57f5b5f29fc46bab2bedff8e94ebdeb877797d9d341af668223138671f62f27e95eee993b41da7c1bfc968aeafdc5148e11ddfe2a949437839807d9df71082f190ad532a4430fc86127ac665821dfe7ec9572b4260362c6ea2a39174f38d2f3b93664861f473c0597f326d8cb9bdf733aca40c9fcf63e64c47bf";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// No need to use response interceptor as we are not handling any error globally (for now)
