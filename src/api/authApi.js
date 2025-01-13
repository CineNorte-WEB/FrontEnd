import api from "./axios";
export const authApi = {
  signup: async (signupData) => {
    try {
      const response = await api.post("/v1/normal/signup", signupData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (loginData) => {
    try {
      const response = await api.post("/v1/normal/login", loginData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
