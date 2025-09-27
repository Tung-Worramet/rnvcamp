import { MapPin } from "lucide-react";
import { Badge } from "../ui/badge";

const TitleAndPrice = ({ campervanData }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
          {campervanData?.Brand} {campervanData?.Model}
        </h1>
        <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground">
          {/* <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
            <span className="font-medium text-foreground">
              {campervanData.rating}
            </span>
            <span className="ml-1">({campervanData.reviewCount} reviews)</span>
          </div> */}
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{campervanData?.PickuppointName}</span>
          </div>
          <Badge variant="secondary">{campervanData?.VehicletypeName}</Badge>
        </div>
      </div>
      <div className="mt-4 lg:mt-0 text-right">
        <div className="text-3xl font-bold text-foreground">
          ฿{campervanData?.PriceBath}
          <span className="text-lg font-normal text-muted-foreground">
            /day
          </span>
        </div>
      </div>
    </div>
  );
};
export default TitleAndPrice;
