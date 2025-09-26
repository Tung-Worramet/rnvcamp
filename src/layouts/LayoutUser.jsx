import HeaderUser from "@/components/user/HeaderUser";
import SidebarUser from "@/components/user/SidebarUser";
import { Outlet, useLocation } from "react-router-dom";
import {
  Calendar,
  Car,
  MapPin,
  CreditCard,
  Gift,
  Settings,
  Bot,
} from "lucide-react";
import { useMemo, useState } from "react";

const LayoutUser = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = useMemo(
    () => [
      {
        id: "ai-plan",
        label: "วางแผนทริปด้วย AI",
        icon: Bot,
        path: "/user/ai-plan",
      },
      { id: "plans", label: "แผนของฉัน", icon: Calendar, path: "/user" },
      {
        id: "trip-detail",
        label: "รายละเอียดทริป",
        icon: MapPin,
        path: "/user/trip-detail",
      },
      {
        id: "rv-bookings",
        label: "การจองรถบ้าน",
        icon: Car,
        path: "/user/rv-bookings",
      },
      {
        id: "camp-bookings",
        label: "การจองที่พัก",
        icon: MapPin,
        path: "/user/camp-bookings",
      },
      {
        id: "payments",
        label: "การชำระเงิน",
        icon: CreditCard,
        path: "/user/payments",
      },
      {
        id: "promotions",
        label: "โปรโมชันของฉัน",
        icon: Gift,
        path: "/user/promotions",
      },
      {
        id: "account",
        label: "ข้อมูลบัญชี",
        icon: Settings,
        path: "/user/account",
      },
    ],
    []
  );

  const activeItem = useMemo(() => {
    const pathname = location.pathname;
    const candidates = menuItems
      .filter((m) => pathname === m.path || pathname.startsWith(m.path + "/"))
      .sort((a, b) => b.path.length - a.path.length);

    if (candidates.length > 0) return candidates[0];

    return menuItems.find((m) => m.path === "/user") ?? menuItems[0];
  }, [location.pathname, menuItems]);

  const handleLogout = () => {
    // TODO: ใส่ logic ออกจากระบบจริง
    // window.location.href = "https://preview--rvn-camp.lovable.app/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex font-kanit">
      <SidebarUser
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={menuItems}
        currentPath={location.pathname}
        activePath={activeItem?.path}
      />
      <main className="flex-1">
        <HeaderUser
          title={activeItem?.label || ""}
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
