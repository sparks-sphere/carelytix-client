"use client"

import * as React from "react"
import {
  AudioWaveform,
  BadgePercent,
  BarChart3,
  BookOpen,
  Boxes,
  Building2,
  CalendarCheck2,
  Command,
  CreditCard,
  GalleryVerticalEnd,
  LayoutDashboard,
  PackageCheck,
  ScissorsSquare,
  Settings2,
  UserCheck2,
  UserCog,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { TeamSwitcher } from "./team-switcher"
import { NavUser } from "./nav-user"

const data = {
  user: {
    name: "Test User",
    email: "test@test.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Carelytix(Admin)",
      logo: GalleryVerticalEnd,
      plan: "By Sparks Sphere Softwares",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart3,
      isActive: false,
    },
    {
      title: "Members",
      url: "/dashboard/members",
      icon: Users,
      isActive: false,
    },
    {
      title: "Billing",
      url: "/dashboard/billing",
      icon: CreditCard,
      isActive: false,
    },
    {
      title: "Bookings",
      url: "/dashboard/bookings",
      icon: CalendarCheck2,
      isActive: false,
    },
    {
      title: "Inventory",
      url: "/dashboard/inventory/products",
      icon: Boxes,
      items: [
        {
          title: "Products",
          url: "/dashboard/inventory/products",
        },
        {
          title: "Stock Register",
          url: "/dashboard/inventory/stock-register",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "Salon/Branch",
          url: "/dashboard/settings/salon",
          icon: Building2,
        },
        {
          title: "Services",
          url: "/dashboard/settings/services",
          icon: ScissorsSquare, 
        },
        {
          title: "Combo Plans",
          url: "/dashboard/settings/combo-plans",
          icon: PackageCheck,
        },
        {
          title: "Subscriptions",
          url: "/dashboard/settings/subscriptions",
          icon: BookOpen,
        },
        {
          title: "Staff",
          url: "/dashboard/settings/staff",
          icon: UserCog,
        },
        {
          title: "Coupons",
          url: "/dashboard/settings/coupons",
          icon: BadgePercent,
        },
      ],
    },
  ],
  navMainData: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Pricing",
      url: "/pricing",
      icon: CreditCard,
      isActive: true,
    },
    {
      title: "Blog",
      url: "/blog",
      icon: UserCheck2,
      isActive: true,
    },
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = "Admin";
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={user !== "Admin" ? data.navMain : data.navMainData} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
