import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Share,
  Heart,
  MapPin,
  Users,
  Car,
  Snowflake,
  Zap,
  Wifi,
  Bath,
  Utensils,
  Calendar,
  Clock,
  Shield,
  PawPrint,
  PartyPopper,
  Thermometer,
  Sun,
  Wind,
  Bed,
  ChefHat,
  Coffee,
  TreePine,
  CheckCircle,
  Fuel,
  Gauge,
  Car as CarIcon,
} from "lucide-react";
import { Button } from "../ui/button";

const HeaderCampervanDetail = () => {
  return (
    <div>
      {" "}
      <header className="bg-background border-b sticky top-0 z-40 backdrop-blur-sm bg-background/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to search
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default HeaderCampervanDetail;
