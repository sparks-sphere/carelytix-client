export interface User {
  id: string;
  email: string;
  name: string;
  isVerified: boolean;
  createdAt?: string;
}

export interface DashboardData {
  totalUsers: number;
  totalSalons: number;
  totalBranches: number;
  avgBranchesPerSalon: number;
  revenue: {
    allTime: number;
    lastMonth: number;
  };
  activeSubscriptions: number;
  recentUsers: User[]
}