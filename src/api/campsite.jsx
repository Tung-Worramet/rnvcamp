import axios from "axios";

export const getCampType = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/campsite/getcamptype`
  );
  return res.data;
};
