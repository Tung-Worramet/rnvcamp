import { getCampDetailById } from "@/api/campsite";
import HeroImageGallery from "@/components/campsite/HeroImageGallery";
import HostDescription from "@/components/campsite/HostDescription";
import TitleSection from "@/components/campsite/TitleSection";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import Location from "@/components/campsite/Location";

const CampsiteDetail = () => {
  const { id } = useParams();

  const [campsiteData, setCampsiteData] = useState();

  console.log("campsiteData", campsiteData);

  useEffect(() => {
    (async () => {
      const res = await getCampDetailById(id);
      setCampsiteData(res.data);
    })();
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TitleSection campsiteData={campsiteData} />
        <HeroImageGallery campsiteData={campsiteData} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <HostDescription campsiteData={campsiteData} />
            <Separator />
            <Location campsiteData={campsiteData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CampsiteDetail;
