import axios from "axios";

export const sendMessage = async (token, form) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/user/sendmessage`,
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateUser = async (token, form) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/user/updateuser`,
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updatePassword = async (token, form) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/user/updatepassword`,
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getUserDetailById = async (token, userid) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/user/getuserdetailbyid?userid=${userid}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
