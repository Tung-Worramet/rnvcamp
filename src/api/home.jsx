import axios from "axios";

export const getVehicleType = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/vehicle/getvehicletype`
  );
  return res.data;
};

export const getPickupPoint = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/booking/getpickuppoint`
  );
  return res.data;
};

export const getCampType = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/campsite/getcamptype`
  );
  return res.data;
};
