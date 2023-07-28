import axios from "axios";
import { API_BASE_URL } from "@/configs";

function requestInterceptor(configs) {
  // Configure axios before sending request
  return configs;
}

function responseError(error) {
  // Do something if response has error
  return Promise.reject(error);
}

function responseOK(response) {
  // Do something before return data to caller
  return response;
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseOK, responseError);

export default axiosInstance;
