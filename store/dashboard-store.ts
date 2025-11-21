import { DashboardData } from "@/types"
import {create} from "zustand"

const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || ""

interface DashboardStore {
  isFetchingData: boolean,
  dashboardData: DashboardData | null,
  error: string | null,
  fetchDashboardData: () => Promise<void>,
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  isFetchingData: false,
  dashboardData: null,
  error: null,
  fetchDashboardData: async () => {
    set({ isFetchingData: true });
    try {
      const response = await fetch(`${BACKEND_API_URL}/admin/get-dashboard-data`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched Dashboard Data:", data);
      set({ dashboardData: data.data, isFetchingData: false });
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      set({ 
        error: error instanceof Error ? error.message : "Failed to fetch data",
        isFetchingData: false 
      });
    } finally {
      set({ isFetchingData: false });
    }
  }
}))