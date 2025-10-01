import { Bell, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const HeaderAdmin = () => {
  const isMobile = useIsMobile();

  const handleLogout = () => {};

  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-3 lg:px-6">
      <div className="flex items-center gap-2 lg:gap-4">
        <SidebarTrigger className="lg:hidden" />
        {!isMobile && (
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="ค้นหา..." className="pl-10 font-thai" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {isMobile && (
          <Button variant="ghost" size="sm">
            <Search className="w-4 h-4" />
          </Button>
        )}

        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-4 h-4" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">
            3
          </Badge>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              {!isMobile && <span className="font-thai">แอดมิน</span>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 mt-1 bg-white">
            <DropdownMenuItem className="font-thai">โปรไฟล์</DropdownMenuItem>
            <DropdownMenuItem className="font-thai">
              การตั้งค่า
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-b" />
            <DropdownMenuItem
              className="font-thai text-red-600 cursor-pointer"
              onClick={handleLogout}
            >
              ออกจากระบบ
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
export default HeaderAdmin;
