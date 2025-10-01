import { getVehicleDetailById } from "@/api/vehicle";
import VehicleSpecification from "@/components/campervan/VehicleSpecification";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import Dimension from "@/components/campervan/Dimension";
import FloorPlan from "@/components/campervan/FloorPlan";
import Amenities from "@/components/campervan/Amenities";
import HeroImageGallery from "@/components/campervan/HeroImageGallery";
import TitleAndPrice from "@/components/campervan/TitleAndPrice";
import VehicleInfo from "@/components/campervan/VehicleInfo";
import BookingCard from "@/components/campervan/BookingCard";

const CampervanDetail = () => {
  const { id } = useParams();

  const [campervanData, setCampervanData] = useState();
  console.log("campervanData", campervanData);

  useEffect(() => {
    (async () => {
      const res = await getVehicleDetailById(id);
      setCampervanData(res.data);
    })();
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <TitleAndPrice campervanData={campervanData} />
        <HeroImageGallery campervanData={campervanData} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mt-[180px] mt-[100px]">
          <div className="lg:col-span-2 space-y-8">
            <VehicleInfo campervanData={campervanData} />
            <Separator />
            <VehicleSpecification campervanData={campervanData} />
            <Separator />
            <Dimension campervanData={campervanData} />
            <Separator />
            <FloorPlan campervanData={campervanData} />
            <Separator />
            <Amenities campervanData={campervanData} />
            {/* <Separator /> */}
          </div>
          <div className="lg:col-span-1">
            <BookingCard campervanData={campervanData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CampervanDetail;
