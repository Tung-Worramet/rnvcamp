import { Car } from "lucide-react";

const VehicleInfo = ({ campervanData }) => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <Car className="text-primary-foreground h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            {campervanData?.Brand} {campervanData?.Model}
          </h3>
          {/* <p className="text-muted-foreground text-sm">
            Luxury campervan • Fully equipped • Perfect for road trips
          </p> */}
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-foreground leading-relaxed">
          {campervanData?.Detail}
        </p>
      </div>
    </div>
  );
};
export default VehicleInfo;
