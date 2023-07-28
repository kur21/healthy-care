import axiosInstance from '@/libs/axios/apiConfig'

class ApiService {
  // GET request
  static async get(url, params = {}) {
    try {
      const response = await axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  // POST request
  static async post(url, data = {}) {
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  // PUT request
  static async put(url, data = {}) {
    try {
      const response = await axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  // DELETE request
  static async delete(url) {
    try {
      const response = await axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ApiService;
