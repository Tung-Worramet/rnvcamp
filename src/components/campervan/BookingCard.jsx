import { Card, CardHeader, CardContent, CardDescription } from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Clock, Shield, Calendar } from "lucide-react";
import { useState } from "react";
import { Calendar as CalendarComponent } from "../ui/calendar";
import { Separator } from "../ui/separator";
import { format } from "date-fns";
import useAuthStore from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import { createBooking } from "@/api/booking";

const BookingCard = ({ campervanData }) => {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [pickUp, setPickUp] = useState(today);
  const [dropOff, setDropOff] = useState(tomorrow);
  console.log("campervanData", campervanData);

  const handleBooking = async () => {
    try {
      const form = {
        UserId: user.Id,
        Vehicle: [
          {
            Id: campervanData.Id,
            Pickup_Date: pickUp,
            Dropoff_Date: dropOff,
          },
        ],
      };
      console.log("form", form);

      const res = await createBooking(token, form);
      console.log("res", res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const countDays = (date1, date2) => {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calPrice = campervanData?.PriceBath * countDays(pickUp, dropOff);
  const totalPrice = calPrice.toLocaleString("th-TH");

  return (
    <div>
      <Card className="sticky top-24 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-primary">
                {totalPrice}
              </span>
              <span className="text-sm text-muted-foreground ml-1">THB</span>
              <div className="text-sm text-muted-foreground">
                for{" "}
                {countDays(pickUp, dropOff) > 1
                  ? `${countDays(pickUp, dropOff)} days`
                  : `${countDays(pickUp, dropOff)} day`}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-muted-foreground">
                Pick-up date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-10"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {pickUp ? format(pickUp, "dd/MM/yyyy") : ""}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={pickUp}
                    onSelect={setPickUp}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0); // reset เวลาเป็น 00:00
                      return date < today;
                    }}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="text-xs text-muted-foreground">
                Drop-off date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-10"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {dropOff ? format(dropOff, "dd/MM/yyyy") : ""}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={dropOff}
                    onSelect={setDropOff}
                    disabled={(date) =>
                      date < new Date() || (pickUp && date <= pickUp)
                    }
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-muted-foreground">
                Pick-up time
              </label>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal h-10"
              >
                <Clock className="mr-2 h-4 w-4" />
                3:00 PM
              </Button>
            </div>

            <div>
              <label className="text-xs text-muted-foreground">
                Drop-off time
              </label>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal h-10"
              >
                <Clock className="mr-2 h-4 w-4" />
                11:00 AM
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-3 text-sm">
            {/* <div className="flex justify-between">
              <span className="font-medium">15 days rental</span>
              <span className="font-medium">97,897.75 THB</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-green-600" />
                <span>Comfort</span>
              </div>
              <span>22,742.70 THB</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span>Service (Premium)</span>
                <div className="w-4 h-4 ml-1 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs">i</span>
                </div>
              </div>
              <span className="text-green-600">Included</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span>Insurance (Premium)</span>
                <div className="w-4 h-4 ml-1 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs">i</span>
                </div>
              </div>
              <span className="text-green-600">Included</span>
            </div>

            <Separator />

            <div className="flex justify-between">
              <span>Minimum Age</span>
              <span>21</span>
            </div>

            <div className="flex justify-between text-red-600">
              <span>5% Discount</span>
              <span>-6,092.10 THB</span>
            </div>

            <div className="flex justify-between font-medium">
              <span>Subtotal to campstar</span>
              <span>115,745.55 THB</span>
            </div>

            <div className="flex justify-between">
              <span>Payable at station</span>
              <span>0.00 THB</span>
            </div> */}

            {/* <Separator /> */}

            <div className="flex justify-between text-lg font-bold">
              <span>Total price:</span>
              <span>{totalPrice} THB</span>
            </div>

            <div className="flex justify-between items-center text-lg font-bold text-primary">
              <div className="flex items-center">
                <span>Pay now:</span>
                <div className="w-4 h-4 ml-1 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs">i</span>
                </div>
              </div>
              <span>{totalPrice} THB</span>
            </div>
          </div>

          {token ? (
            <Button
              onClick={handleBooking}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
            >
              BOOK NOW →
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/signin")}
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
            >
              Sign In
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
export default BookingCard;
