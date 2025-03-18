import axios from "axios";

const API_BASE_URL = "http://172.20.192.1:3333";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const apiClient = {
  login: async (email: string, password: string) => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token } = response.data;
      setAuthToken(token);
      return response.data;
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  },

  register: (name: string, email: string, password: string) =>
    api.post("/users", { name, email, password }),

  updateUser: (
    name: string,
    email: string,
    oldPassword: string,
    password: string,
    confirmPassword: string
  ) =>
    api.put("/users", { name, email, oldPassword, password, confirmPassword }),

  getTasks: () => api.get("/tasks"),

  updateTask: (taskId: number, check: boolean) =>
    api.put(`/tasks/${taskId}`, { check }),

  deleteTask: (taskId: number) => {
    api.delete(`/tasks/${taskId}`);
    return true;
  },

  createTask: async (task: string) => {
    const response = await api.post("/tasks", { task });
    return response.data; // ✅ Retorna os dados corretamente
  },
};

export default api;
