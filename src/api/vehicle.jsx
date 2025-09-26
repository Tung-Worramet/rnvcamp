import axios from "axios";

export const getVehicleType = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/vehicle/getvehicletype`
  );
  return res.data;
};

export const getVehicleList = async (fromDate, toDate) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/vehicle/getvehiclelist`,
    { params: { fromDate, toDate } }
  );
  return res.data;
};

export const getVehicleDetailById = async (id) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/vehicle/getvehicledetailbyid`,
    { params: { id } }
  );
  return res.data;
};
