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
  async edit(id, newPost) {
    try {
      const { data } = await axiosInstance.put(`/api/posts/${id}`, newPost);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async delete(id) {
    const response = await axiosInstance.delete(`/api/posts/${id}`);
    return response.data;
  }
 
}

export default new PostsService();