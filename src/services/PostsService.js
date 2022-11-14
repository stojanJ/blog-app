import { axiosInstance } from "./AxiosService";

class PostsService{
     async getAll() {
            const response = await axiosInstance.get("/api/posts");
            return response.data;
          }

}

export default new PostsService();