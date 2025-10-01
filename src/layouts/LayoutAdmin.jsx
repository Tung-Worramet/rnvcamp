import HeaderAdmin from "@/components/admin/HeaderAdmin";
import SidebarAdmin from "@/components/admin/SidebarAdmin";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const LayoutAdmin = () => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <SidebarAdmin />
        <main className="flex-1 flex flex-col min-w-0">
          <HeaderAdmin />
          <div
            className={`flex-1 overflow-auto ${
              isMobile ? "p-3" : "p-3 lg:p-6"
            }`}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
export default LayoutAdmin;
