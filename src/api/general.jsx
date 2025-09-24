import axios from "axios";

export const getInfo = async (token) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/general/getinfo`,
    {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    }
  );
  return res.data ?? "Error";
};

export const getMessageSubject = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/general/getmessagesubjectlist`
  );
  return res.data;
};
