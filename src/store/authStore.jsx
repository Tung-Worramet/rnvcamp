import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const authStore = (set, get) => ({
  user: null,
  token: null,
  logout: () => {
    set({ user: null, token: null });
  },
  actionLogin: async (form) => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/login`,
      form
    );

    set({
      user: res.data.data,
      token: res.data.token,
    });

    return res;
  },
});

const usePersist = {
  name: "rvncamp",
  storage: createJSONStorage(() => localStorage),
  onRehydrateStorage: () => (state) => {
    state.hasHydrated = true;
  },
};

const useAuthStore = create(persist(authStore, usePersist));

export default useAuthStore;
