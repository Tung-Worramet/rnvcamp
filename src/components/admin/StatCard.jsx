// src/components/StatCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const StatCard = ({
  title,
  value,
  icon, // React node (เช่น <Car className="..." />)
  valueClassName = "", // สี/ขนาดตัวเลข
  className = "", // เพิ่มคลาสการ์ด
  contentClassName = "p-3 lg:p-4", // padding ข้างใน
  titleClassName = "text-xs sm:text-sm text-gray-600 font-thai",
}) => {
  return (
    <Card className={className}>
      <CardContent className={contentClassName}>
        <div className="flex items-center justify-between">
          <div>
            <p className={titleClassName}>{title}</p>
            <p className={`text-xl sm:text-2xl font-bold ${valueClassName}`}>
              {value}
            </p>
          </div>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
