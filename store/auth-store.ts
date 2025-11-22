import axiosInstance from "@/lib/axiosInstance";
import { User } from "@/types"
import {create} from "zustand"

interface LoginSchema {
  email: string,
  password: string,
}

interface AuthStore {
  isLoading: boolean,
  isError: boolean,
  authUser: User | null;
  loginUser: (credentials: LoginSchema) => Promise<void>,
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoading: false,
  isError: false,
  authUser: null,
  loginUser: async (credentials: LoginSchema) => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.post("/auth/login-user", credentials);
      const data = response.data.date;
      set({ authUser: data });
    } catch (error) {
      set({ isError: true });
      console.error("Login failed:", error);
    } finally {
      set({ isLoading: false });
    }
  }
}))