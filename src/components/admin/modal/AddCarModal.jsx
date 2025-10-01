import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddCarModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 font-thai">
          <Car className="w-4 h-4" />
          เพิ่มรถใหม่
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-thai">เพิ่มรถใหม่</DialogTitle>
          <DialogDescription className="font-thai">
            กรอกข้อมูลรถที่ต้องการเพิ่มเข้าสู่ระบบ
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="carName" className="font-thai">
                ชื่อรถ
              </Label>
              <Input id="carName" placeholder="Toyota Camry" />
            </div>
            <div>
              <Label htmlFor="carModel" className="font-thai">
                รุ่น
              </Label>
              <Input id="carModel" placeholder="2023" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="license" className="font-thai">
                ทะเบียน
              </Label>
              <Input id="license" placeholder="กข 1234" />
            </div>
            <div>
              <Label htmlFor="carType" className="font-thai">
                ประเภทรถ
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue
                    placeholder="เลือกประเภท"
                    className="font-thai"
                  />
                </SelectTrigger>
                <SelectContent>
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price" className="font-thai">
                ราคา/วัน
              </Label>
              <Input id="price" placeholder="1500" type="number" />
            </div>
            <div>
              <Label htmlFor="seats" className="font-thai">
                จำนวนที่นั่ง
              </Label>
              <Input id="seats" placeholder="4" type="number" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fuel" className="font-thai">
                ประเภทเชื้อเพลิง
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue
                    placeholder="เลือกเชื้อเพลิง"
                    className="font-thai"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrol" className="font-thai">
                    เบนซิน
                  </SelectItem>
                  <SelectItem value="diesel" className="font-thai">
                    ดีเซล
                  </SelectItem>
                  <SelectItem value="electric" className="font-thai">
                    ไฟฟ้า
                  </SelectItem>
                  <SelectItem value="hybrid" className="font-thai">
                    ไฮบริด
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="transmission" className="font-thai">
                ระบบเกียร์
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue
                    placeholder="เลือกระบบเกียร์"
                    className="font-thai"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto" className="font-thai">
                    อัตโนมัติ
                  </SelectItem>
                  <SelectItem value="manual" className="font-thai">
                    ธรรมดา
                  </SelectItem>
                  <SelectItem value="4wd" className="font-thai">
                    4WD
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="font-thai"
          >
            ยกเลิก
          </Button>
          <Button onClick={() => onOpenChange(false)} className="font-thai">
            บันทึก
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default AddCarModal;
