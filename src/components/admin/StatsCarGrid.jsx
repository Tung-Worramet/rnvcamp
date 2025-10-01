import React, { useMemo } from "react";
import StatCard from "@/components/admin/StatCard";
import { Car, Calendar, Settings, Bell, Check } from "lucide-react";

const StatsCarGrid = ({ cars }) => {
  // คำนวณค่าต่าง ๆ ล่วงหน้า
  const stats = useMemo(() => {
    const total = cars?.TotalCount;
    // const available = cars.filter((c) => c.status === "available").length;
    // const rented = cars.filter((c) => c.status === "rented").length;
    // const maintenance = cars.filter((c) => c.status === "maintenance").length;
    // const alerts = cars.reduce((acc, c) => acc + (c.alerts?.length || 0), 0);

    return { total };
  }, [cars]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
      {/* รถทั้งหมด */}
      <StatCard
        title="รถทั้งหมด"
        value={stats.total}
        valueClassName="text-gray-900"
        icon={<Car className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />}
      />

      {/* รถว่าง */}
      <StatCard
        title="รถว่าง"
        // value={stats.available}
        valueClassName="text-green-600"
        icon={
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="text-green-600 w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        }
      />

      {/* รถถูกจอง / ให้เช่าอยู่ */}
      <StatCard
        title="รถถูกจอง"
        // value={stats.rented}
        valueClassName="text-blue-600"
        icon={<Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />}
      />

      {/* ซ่อมบำรุง */}
      <StatCard
        title="ซ่อมบำรุง"
        // value={stats.maintenance}
        valueClassName="text-red-600"
        icon={<Settings className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />}
      />

      {/* แจ้งเตือน */}
      <StatCard
        title="แจ้งเตือน"
        // value={stats.alerts}
        valueClassName="text-orange-600"
        className="col-span-2 sm:col-span-1"
        icon={<Bell className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />}
      />
    </div>
  );
};
export default StatsCarGrid;
