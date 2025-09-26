import React from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

/**
 * SidebarUser
 * - ไฮไลต์เมนูจาก currentPath (อิง URL จริง)
 * - ทุกเมนูควรมี path ชัดเจน
 */
const SidebarUser = ({
  open,
  onClose,
  items = [],
  currentPath,
  activePath,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/95 backdrop-blur-xl shadow-2xl border-r border-slate-200/50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 ease-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200/50 bg-gradient-to-r from-blue-600 to-indigo-600">
          <img
            src="/lovable-uploads/3f3fbff9-a212-433a-883f-7d6b1a15af72.png"
            alt="RVnCamp"
            className="h-10 brightness-0 invert"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          {items.map(({ id, label, icon: Icon, path }) => {
            const isActive = activePath
              ? path === activePath
              : currentPath === path;

            return (
              <button
                key={id}
                onClick={() => {
                  navigate(path ?? `/user/${id}`);
                  onClose?.();
                }}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`h-5 w-5 transition-transform duration-200 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />
                )}
                <span className="font-medium text-sm">{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200/50 bg-white/50">
          <div className="text-center text-xs text-slate-500">
            <p>© 2024 RVnCamp</p>
            <p>เวอร์ชัน 1.0.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarUser;
