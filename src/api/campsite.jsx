import axios from "axios";

export const getCampType = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/campsite/getcamptype`
  );
  return res.data;
};

export const getCampList = async (checkinDate, checkoutDate) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/campsite/getcamplist`,
    { params: { checkinDate, checkoutDate } }
  );
  return res.data;
};

export const getCampDetailById = async (id) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/campsite/getcampdetailbyid`,
    { params: { id } }
  );
  return res.data;
};
