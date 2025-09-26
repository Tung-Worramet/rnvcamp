import { Link, useNavigate } from "react-router-dom";
import { Menu, Globe, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

// ใช้ Zustand i18n store ที่สร้างไว้
import { useI18n } from "@/store/i18n";
import useAuthStore from "@/store/authStore";
import { useEffect } from "react";

const Header = () => {
  const t = useI18n((s) => s.t);
  const lang = useI18n((s) => s.lang);
  const setLang = useI18n((s) => s.setLang);

  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const navigate = useNavigate();

  useEffect(() => {}, [token, user]);

  const { toast } = useToast();

  const name = user?.Email.charAt(0).toUpperCase();

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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="RVnCamp Logo" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center space-x-4 lg:flex lg:space-x-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/manage-trip"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("header.manage_trip")}
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("header.contact_us")}
          </Link>
          <Link
            to="/travel-guide"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("header.travel_guide")}
          </Link>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {lang === "en" ? "ENG" : "ไทย"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-[9px] bg-white">
                <DropdownMenuItem onClick={() => setLang("en")}>
                  <Globe className="h-4 w-4 mr-2" />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("th")}>
                  <Globe className="h-4 w-4 mr-2" />
                  ไทย
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {token ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {/* ปุ่มวงกลมแสดงตัวอักษรแรก */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="w-9 h-9 rounded-full font-semibold"
                    aria-label="User menu"
                  >
                    {name}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="w-30 bg-white mt-2.5"
                >
                  <DropdownMenuItem asChild>
                    <Link to="/user">{t("header.manage")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="text-red-600 focus:text-red-600"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {t("header.signout")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="default" size="sm">
                <Link to="/signin">{t("header.signin")}</Link>
              </Button>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <img
                    src="/lovable-uploads/185d641b-79c4-4ff4-8a62-6492f5109a4e.png"
                    alt="RVnCamp Logo"
                    className="h-8"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {t("header.home")}
                </Link>
                <Link
                  to="/manage-trip"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {t("header.manage_trip")}
                </Link>
                <Link
                  to="/contact"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {t("header.contact_us")}
                </Link>
                <Link
                  to="/travel-guide"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {t("header.travel_guide")}
                </Link>
                <div className="flex flex-col space-y-4 pt-4 border-t">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 justify-start"
                      >
                        <Globe className="h-4 w-4" />
                        {lang === "en" ? "ENG" : "ไทย"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setLang("en")}>
                        <Globe className="h-4 w-4 mr-2" />
                        English
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLang("th")}>
                        <Globe className="h-4 w-4 mr-2" />
                        ไทย
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link to="/signin">
                    <Button variant="default" size="sm" className="w-full">
                      {t("header.signin")}
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
