import ApiService from "@/utils/apiService";

export const getHomeData = async () => {
  return await ApiService.get("/");
};

export const getBlogs = async () => {
  return await ApiService.get("/blogs");
};

export const getMyRecord = async () => {
  return await ApiService.get("/my-record");
};