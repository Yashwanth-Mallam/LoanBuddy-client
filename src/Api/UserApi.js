import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;//using env vars.

export const registerUser = async userData => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

//the code to login the user
export const loginUser = async userData => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
