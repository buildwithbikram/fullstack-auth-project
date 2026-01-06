import axios from "axios";

const API_URL = "https://auth-backend-b2ep.onrender.com/api/auth";

export const registerUser = async (data) => {
  const res = await axios.post(`${API_URL}/register`, data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await axios.post(`${API_URL}/login`, data);
  return res.data;
};

export const getMe = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};

