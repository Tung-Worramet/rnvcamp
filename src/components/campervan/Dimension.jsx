import { Gauge } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const Dimension = ({ campervanData }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Gauge className="h-5 w-5 mr-2" />
        Dimensions
      </h3>
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">
                {campervanData?.Length}
              </div>
              <div className="text-sm text-muted-foreground">Length</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {campervanData?.Width}
              </div>
              <div className="text-sm text-muted-foreground">Width</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {campervanData?.Height}
              </div>
              <div className="text-sm text-muted-foreground">Height</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {campervanData?.InteriorHeight}
              </div>
              <div className="text-sm text-muted-foreground">
                Interior Height
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Dimension;
