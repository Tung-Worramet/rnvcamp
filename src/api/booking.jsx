import axios from "axios";

export const getPickupPoint = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/booking/getpickuppoint`
  );
  return res.data;
};
