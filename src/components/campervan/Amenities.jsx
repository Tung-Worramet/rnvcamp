import { CheckCircle } from "lucide-react";

const Amenities = ({ campervanData }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {campervanData?.FeatureList?.map((amenity, index) => {
          //   const IconComponent = amenity.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg border"
            >
              {/* <IconComponent className="h-5 w-5 text-primary" /> */}
              <span className="text-sm font-medium">{amenity}</span>

              <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Amenities;
