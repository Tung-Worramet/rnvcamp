import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  MapPin,
  Star,
  Wifi,
  Car,
  Tent,
  Home,
  Users,
  Heart,
  Fish,
  Mountain,
  Eye,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getCampList } from "@/api/campsite";

const Campsite = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from");
  const to = params.get("to");

  const initial = location.state?.vehicles ?? [];
  const [campsites, setCampsites] = useState(initial);
  const [total, setTotal] = useState({});

  useEffect(() => {
    (async () => {
      if (from && to) {
        await getCampList(from, to).then((res) => {
          setCampsites(res.Data), setTotal(res);
        });
      } else {
        await getCampList().then((res) => {
          setCampsites(res.Data), setTotal(res);
        });
      }
    })();
  }, [from, to]);
  console.log(campsites);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              {total.TotalCount} Camping spots found
            </h2>
            {/* <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-auto">
              <option>Sort by: Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select> */}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid gap-6">
          {campsites.map((result) => (
            <Link key={result?.Id} to={`/campsite/${result?.Id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-80 h-48 bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden">
                      <img
                        src={result?.MainImage}
                        alt={result?.Name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {result?.Name}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">
                              {result?.PickuppointName}
                            </span>
                          </div>
                        </div>
                        <div className="flex sm:flex-col sm:text-right items-center sm:items-end gap-2">
                          {/* <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-sm font-medium">
                              {result?.rating}
                            </span>
                          </div>
                          <Badge variant="secondary">{result.type}</Badge> */}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {result?.FeatureList.map((feature) => (
                          <Badge
                            key={feature}
                            variant="outline"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-600">
                            Up to 4 guests
                          </span>
                        </div>
                        <div className="flex items-center sm:block sm:text-right">
                          <div className="text-xl sm:text-2xl font-bold text-gray-900 mr-2 sm:mr-0">
                            ${result?.PriceBath}
                          </div>
                          <div className="text-sm text-gray-600">per night</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Load More Results
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Campsite;
