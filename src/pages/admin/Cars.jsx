import { getVehicleList } from "@/api/vehicle";
import DetailCarCard from "@/components/admin/DetailCarCard";
import AddCarModal from "@/components/admin/modal/AddCarModal";
import StatsCarGrid from "@/components/admin/StatsCarGrid";
import { useEffect, useState } from "react";

const Cars = () => {
  const [openAddCar, setOpenAddCar] = useState(false);
  const [cars, setCars] = useState([]);

  console.log("cars", cars);
  useEffect(() => {
    setOpenAddCar(false);
    (async () => {
      await getVehicleList().then((res) => setCars(res));
    })();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-thai">
            จัดการรถ
          </h1>
          <p className="text-gray-600 mt-1 font-thai">
            จัดการข้อมูลรถทั้งหมดในระบบ
          </p>
        </div>

        <AddCarModal open={openAddCar} onOpenChange={setOpenAddCar} />
      </div>

      <StatsCarGrid cars={cars} />

      <DetailCarCard cars={cars} />
    </div>
  );
};
export default Cars;
