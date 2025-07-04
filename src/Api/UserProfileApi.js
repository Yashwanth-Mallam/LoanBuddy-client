import axios from "axios";

const PROFILE_API_URL = process.env.REACT_APP_PROFILE_API_URL; //using env vars.
const getUserIdFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));

    console.log("Decoded Payload in Frontend:", decodedPayload); // Debugging step

    return decodedPayload.userId || decodedPayload.sub || null; // Extract userId (which is email)
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

export const getUserProfile = async () => {
  try {
    const userEmail = getUserIdFromToken(); // Get email as user ID
    if (!userEmail) throw new Error("User identifier not found in token");

    const token = localStorage.getItem("token");

    const response = await axios.get(`${PROFILE_API_URL}/userprofile/${userEmail}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user profile:",
      error.response ? error.response.data : error.message
    );
    return {};
  }
};

export const getAllLendersUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${PROFILE_API_URL}/userprofile/lenders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user profile:",
      error.response ? error.response.data : error.message
    );
    return {};
  }
};
