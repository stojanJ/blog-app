import { axiosInstance } from "./AxiosService";

class PostsService {
  async getAll() {
    const response = await axiosInstance.get("/api/posts");
    return response.data;
  }

  async get(id) {
    console.log(id);
    const response = await axiosInstance.get(`/api/posts/${id}`);
    console.log(response)
    return response.data;
  }
  
}

export default new PostsService();