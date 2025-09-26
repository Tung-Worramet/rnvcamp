import { Card, CardContent } from "../ui/card";

const FloorPlan = ({ campervanData }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Floor Plan</h3>
      <Card>
        <CardContent className="p-6">
          <div className="w-full">
            <img
              src={campervanData?.DetailImageList}
              alt="Toyota Slide-in Camper Floor Plan"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default FloorPlan;
