import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DetailCarCard = ({ cars }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const filteredCars = cars?.Data?.filter((car) => {
    const matchesSearch = car.Name.toLowerCase().includes(
      searchTerm.toLowerCase()
    );
    //   ||
    //   car.license.includes(searchTerm);
    // const matchesStatus = statusFilter === "all" || car.status === statusFilter;
    // const matchesType = typeFilter === "all" || car.type === typeFilter;
    return matchesSearch;
  });

  const handleViewDetails = (car) => {
    setSelectedCar(car);
    setIsDetailModalOpen(true);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="font-thai">รายการรถ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="ค้นหาด้วยชื่อรถหรือทะเบียน..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="font-thai"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              {/* <Select value={statusFilter} onValueChange={setStatusFilter}> */}
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="สถานะ" className="font-thai" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="font-thai">
                    ทุกสถานะ
                  </SelectItem>
                  <SelectItem value="available" className="font-thai">
                    ว่าง
                  </SelectItem>
                  <SelectItem value="rented" className="font-thai">
                    ถูกจอง
                  </SelectItem>
                  <SelectItem value="maintenance" className="font-thai">
                    ซ่อมบำรุง
                  </SelectItem>
                </SelectContent>
              </Select>
              {/* <Select value={typeFilter} onValueChange={setTypeFilter}> */}
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="ประเภทรถ" className="font-thai" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="font-thai">
                    ทุกประเภท
                  </SelectItem>
                  <SelectItem value="campervan" className="font-thai">
                    รถบ้าน
                  </SelectItem>
                  <SelectItem value="suv" className="font-thai">
                    SUV
                  </SelectItem>
                  <SelectItem value="sedan" className="font-thai">
                    รถเก๋ง
                  </SelectItem>
                  <SelectItem value="pickup" className="font-thai">
                    กระบะ
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile Card View */}
          {/* <div className="block lg:hidden">
            {filteredCars?.map((car) => (
              <MobileCarCard
                key={car.Id}
                car={car}
                onViewDetails={handleViewDetails}
                getStatusBadge={getStatusBadge}
                getTypeBadge={getTypeBadge}
              />
            ))}
          </div> */}

          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-thai">รูปรถ</TableHead>
                  <TableHead className="font-thai">ข้อมูลรถ</TableHead>
                  <TableHead className="font-thai">ประเภท</TableHead>
                  <TableHead className="font-thai">ข้อมูลเทคนิค</TableHead>
                  <TableHead className="font-thai">ราคา/วัน</TableHead>
                  <TableHead className="font-thai">สถานะ</TableHead>
                  <TableHead className="font-thai">การบำรุงรักษา</TableHead>
                  <TableHead className="font-thai">แจ้งเตือน</TableHead>
                  <TableHead className="font-thai">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCars?.map((car) => (
                  <TableRow key={car.Id}>
                    <TableCell>
                      <img
                        src={car.MainImage}
                        alt={car.Name}
                        className="w-20 h-14 object-cover rounded-lg"
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium font-thai">{car.Name}</p>
                        <p className="text-sm text-gray-600 font-thai">
                          {car.Year}
                          {/* | {car.license} */}
                        </p>
                        {/* <p className="text-sm text-gray-500 font-thai">
                        {car.seats} ที่นั่ง | {car.doors} ประตู
                      </p> */}
                      </div>
                    </TableCell>
                    <TableCell>{/* {getTypeBadge(car.type)} */}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p className="font-thai">
                          {car.Fuel} | {car.Gear}
                        </p>
                        {/* <p className="text-gray-600 font-thai">
                        {car.mileage} กม.
                      </p> */}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-primary font-thai">
                      ฿{car.PriceBath.toLocaleString("th-TH")}
                    </TableCell>
                    <TableCell>{/* {getStatusBadge(car.status)} */}</TableCell>
                    <TableCell>
                      {/* <div className="text-sm">
                        <p className="font-thai">ตรวจสอบถัดไป:</p>
                        <p className="font-medium font-thai">
                          {car.nextMaintenance}
                        </p>
                        {car.damages > 0 && (
                          <div className="flex items-center gap-1 text-orange-600 mt-1">
                            <AlertTriangle className="w-3 h-3" />
                            <span className="font-thai">{car.damages} จุด</span>
                          </div>
                        )}
                      </div> */}
                    </TableCell>
                    <TableCell>
                      {/* {car.alerts.length > 0 ? (
                      <div className="space-y-1">
                        {car.alerts.map((alert, index) => (
                          <Badge
                            key={index}
                            variant="destructive"
                            className="text-xs block font-thai"
                          >
                            {alert}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <Badge variant="secondary" className="text-xs font-thai">
                        ไม่มี
                      </Badge>
                    )} */}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewDetails(car)}
                          className="font-thai"
                        >
                          รายละเอียด
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="font-thai"
                        >
                          แก้ไข
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Car Detail Modal */}
      {/* <CarDetailModal
        open={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
        car={selectedCar}
      /> */}
    </div>
  );
};
export default DetailCarCard;
