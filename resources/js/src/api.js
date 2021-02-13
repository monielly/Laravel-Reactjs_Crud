const axios = window.axios;

const BASE_API_URL = "http://127.0.0.1:8000/api"
const BASE_API_URL_POSTS = "http://127.0.0.1:8000/api/posts"

export default {
  getAllPosts: () =>
    axios.get(`${BASE_API_URL_POSTS}`),
  getOnePost: (id) =>
    axios.get(`${BASE_API_URL_POSTS}/${id}/edit`),
  addPost: (post) =>
    axios.post(`${BASE_API_URL_POSTS}`, post),
  updatePost: (post, id) =>
    axios.put(`${BASE_API_URL_POSTS}/${id}`, post),
  deletePost: (id) =>
    axios.delete(`${BASE_API_URL_POSTS}/${id}`),

  testPost: () =>
    axios.get(`${BASE_API_URL}/test`),

  submitPost: () =>
    axios.post(`${BASE_API_URL}/submit`),
}