import axios from "axios";

export const getPickupPoint = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/booking/getpickuppoint`
  );
  return res.data;
};

export const createBooking = async (token, form) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/booking/createbooking`,
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
