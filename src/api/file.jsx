import axios from "axios";

export const uploadIdCardFile = async (token, form) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/file/uploadidcardfile`,
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const uploadDrivingLicenseFile = async (token, form) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/file/uploaddrivinglicensefile`,
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
