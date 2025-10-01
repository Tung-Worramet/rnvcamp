import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Car,
  Calendar,
  Settings,
  Bell,
  Users,
  CreditCard,
  Star,
  FileText,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Bell,
  },
  {
    title: "รถทั้งหมด",
    url: "/admin/cars",
    icon: Car,
  },
  {
    title: "การจอง",
    url: "/admin/bookings",
    icon: Calendar,
  },
  {
    title: "ลูกค้า",
    url: "/admin/customers",
    icon: Users,
  },
  {
    title: "การชำระเงิน",
    url: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "รีวิว",
    url: "/admin/reviews",
    icon: Star,
  },
  {
    title: "รายงาน",
    url: "/admin/reports",
    icon: FileText,
  },
  {
    title: "ตั้งค่า",
    url: "/admin/settings",
    icon: Settings,
  },
];

const SidebarAdmin = () => {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-gray-200 ">
      <SidebarHeader className="p-4 lg:p-6 border-b border-gray-200">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-6 h-6 lg:w-8 lg:h-8  rounded-lg flex items-center justify-center">
            <Car className="w-9 h-9 lg:w-15 lg:h-15" />
          </div>
          <div className="hidden lg:block">
            <h2 className="text-lg font-bold font-thai">RentCar Admin</h2>
            <p className="text-sm font-thai">จัดการระบบเช่ารถ</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium px-3 py-2 font-thai hidden lg:block">
            เมนูหลัก
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    className="h-10 mt-1 hover:text-white hover:bg-blue-600 data-[active=true]:bg-blue-600 data-[active=true]:text-white"
                  >
                    <Link
                      to={item.url}
                      className="flex items-center gap-2 lg:gap-3 px-2 lg:px-3 py-2 rounded-md"
                    >
                      <item.icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                      <span className="font-medium font-thai text-sm lg:text-base">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* <SidebarFooter className="p-3 lg:p-4 border-t border-blue-600">
        <div className="text-center hidden lg:block">
          <p className="text-xs text-blue-100 font-thai">
            © 2024 RentCar System
          </p>
          <p className="text-xs text-blue-200">v1.0.0</p>
        </div>
      </SidebarFooter> */}
    </Sidebar>
  );
};
export default SidebarAdmin;
