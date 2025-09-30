import { MapPin } from "lucide-react";

const TitleSection = ({ campsiteData }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {campsiteData?.Name}
      </h1>
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        {/* <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span className="font-medium">{campingData.rating}</span>
          <span className="ml-1">({campingData.reviewCount} reviews)</span>
        </div> */}
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{campsiteData?.Address}</span>
        </div>
      </div>
    </div>
  );
};
export default TitleSection;
