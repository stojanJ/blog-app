import { axiosInstance } from "./AxiosService";

class PostsService {
  async getAll() {
    const response = await axiosInstance.get("/api/posts");
    return response.data;
  }

  async get(id) {
    const response = await axiosInstance.get(`/api/posts/${id}`);
    return response.data;
  }
  async add(newPost) {
    const response = await axiosInstance.post('/api/posts', newPost);
      return response.data;
    } 


}

export default new PostsService();