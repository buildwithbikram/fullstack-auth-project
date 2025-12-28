import axios from "axios";

const API_URL = "https://auth-backend-b2ep.onrender.com";

export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  return res.data;
};

export const getMe = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get("https://auth-backend-b2ep.onrender.com", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.data;
};
