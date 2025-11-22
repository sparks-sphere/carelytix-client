export interface User {
  id: string;
  email: string;
  name: string;
  isVerified: boolean;
  createdAt?: string | null;
  primaryContactNo?: string | null;
  userMeta?: Record<string, any> | null;
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