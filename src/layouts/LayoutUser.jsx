import HeaderUser from "@/components/user/HeaderUser";
import SidebarUser from "@/components/user/SidebarUser";
import { Outlet } from "react-router-dom";
import {
  Calendar,
  Car,
  MapPin,
  CreditCard,
  Gift,
  Settings,
  Bot,
  Home,
} from "lucide-react";
import { useState } from "react";

const LayoutUser = () => {
  const [activeTab, setActiveTab] = useState("plans");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: "ai-plan", label: "วางแผนทริปด้วย AI", icon: Bot },
    { id: "plans", label: "แผนของฉัน", icon: Calendar },
    { id: "trip-detail", label: "รายละเอียดทริป", icon: MapPin },
    { id: "rv-bookings", label: "การจองรถบ้าน", icon: Car },
    { id: "camp-bookings", label: "การจองที่พัก", icon: MapPin },
    { id: "payments", label: "การชำระเงิน", icon: CreditCard },
    { id: "promotions", label: "โปรโมชันของฉัน", icon: Gift },
    {
      id: "account",
      label: "ข้อมูลบัญชี",
      icon: Settings,
      path: "/user/account",
    },
  ];

  const handleLogout = () => {
    // window.location.href = "https://preview--rvn-camp.lovable.app/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex font-kanit">
      <SidebarUser
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={menuItems}
        activeId={activeTab}
        onSelect={(id) => {
          setActiveTab(id);
          setSidebarOpen(false);
        }}
      />
      <main className="flex-1">
        <HeaderUser
          title={menuItems.find((i) => i.id === activeTab)?.label || ""}
          onToggleSidebar={() => setSidebarOpen((v) => !v)}
          onLogout={handleLogout}
          notifCount={3}
          userName="สมชาย ใจดี"
        />
        <div className="p-6 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default LayoutUser;
