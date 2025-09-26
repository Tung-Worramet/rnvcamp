import { Card, CardContent } from "../ui/card";
import { CarIcon } from "lucide-react";

const VehicleSpecification = ({ campervanData }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <CarIcon className="h-5 w-5 mr-2" />
        Vehicle Specifications
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <h4 className="font-medium mb-3">Basic Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Brand:</span>
                <span className="font-medium">{campervanData?.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Model:</span>
                <span className="font-medium">{campervanData?.Model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Year:</span>
                <span className="font-medium">{campervanData?.Year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fuel:</span>
                <span className="font-medium">{campervanData?.Fuel}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h4 className="font-medium mb-3">Performance</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Engine:</span>
                <span className="font-medium">{campervanData?.Engine}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transmission:</span>
                <span className="font-medium">{campervanData?.Gear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mileage:</span>
                <span className="font-medium">{campervanData?.Mileage}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default VehicleSpecification;
