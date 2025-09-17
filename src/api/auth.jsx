import axios from "axios";

export const register = async (form) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/user/registeruser`,
    form
  );
};
