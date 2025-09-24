import React from "react";
import {
  Menu,
  Bell,
  User,
  Bot,
  Calendar,
  MapPin,
  Car,
  CreditCard,
  Gift,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import useAuthStore from "@/store/authStore";

const HeaderUser = ({
  title = "",
  onToggleSidebar,
  onLogout,
  notifCount = 3,
}) => {
  const [activeTab, setActiveTab] = useState("account");

  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/signin");
      // toast({ title: "test" });
    } catch (error) {
      // toast({
      //   title: t("common.error") || "Error",
      //   description: t("header.signout_failed") || "Sign out failed",
      //   variant: "destructive",
      // });
    }
  };

  const menuItems = [
    { id: "ai-plan", label: "วางแผนทริปด้วย AI", icon: Bot },
    { id: "plans", label: "แผนของฉัน", icon: Calendar },
    { id: "trip-detail", label: "รายละเอียดทริป", icon: MapPin },
    { id: "rv-bookings", label: "การจองรถบ้าน", icon: Car },
    { id: "camp-bookings", label: "การจองที่พัก", icon: MapPin },
    { id: "payments", label: "การชำระเงิน", icon: CreditCard },
    { id: "promotions", label: "โปรโมชันของฉัน", icon: Gift },
    { id: "account", label: "ข้อมูลบัญชี", icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="lg:hidden hover:bg-slate-100"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
            <p className="text-sm text-slate-500 mt-1">
              จัดการข้อมูลและการจองของคุณ
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="relative hover:bg-slate-100"
          >
            <Bell className="h-5 w-5" />
            {notifCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                {notifCount}
              </span>
            )}
          </Button>

          <div className="flex items-center space-x-3 px-3 py-2 rounded-xl bg-slate-100">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium text-slate-700 hidden sm:block">
              {user?.fullname}
            </span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-red-50 hover:text-red-600"
            onClick={handleSignOut}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
