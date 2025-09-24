import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVehicleList } from "@/api/vehicle";

const Campervan = () => {
  const [params] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (from && to) {
      getVehicleList(from, to).then((res) => setVehicles(res.data));
    }
  }, [from, to]);

  console.log("vehicles", vehicles);
  return <div>Campervan</div>;
};
export default Campervan;
