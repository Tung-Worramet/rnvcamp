import { Button } from "../ui/button";

const HostDescription = ({ campsiteData }) => {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            Hosted by {campsiteData?.hostName}
          </h3>
          {/* <p className="text-gray-600 text-sm">
            {campsiteData?.hostExperience}
          </p> */}
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        {campsiteData?.Detail}
      </p>
      <Button variant="link" className="p-0 h-auto text-sm">
        Show more →
      </Button>
    </div>
  );
};
export default HostDescription;
