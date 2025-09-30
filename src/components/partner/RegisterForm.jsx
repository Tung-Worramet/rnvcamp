import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Upload, Send, X } from "lucide-react";
// import { InteractiveMap } from "./InteractiveMap";

const RegisterForm = () => {
  const [accommodationTypes, setAccommodationTypes] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 13.7563,
    lng: 100.5018,
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [checkinTime, setCheckinTime] = useState("");
  const [checkoutTime, setCheckoutTime] = useState("");

  const accommodationOptions = [
    {
      value: "tent-area",
      label: "ลานกางเต็นท์ (Bring your own tent)",
      description: "พื้นที่โล่งสำหรับลูกค้านำเต็นท์มาเอง",
    },
    {
      value: "rv-site",
      label: "จุดจอดรถบ้าน / คาราวาน (RV / Campervan site)",
      description: "รองรับการจอดรถบ้าน พร้อมระบบไฟ/น้ำ",
    },
    {
      value: "cabin",
      label: "บ้านพัก / Cabin / Cottage",
      description: "ที่พักแบบบ้านไม้ หรือบ้านสำเร็จรูป",
    },
  ];

  // Generate time options for dropdowns
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAccommodationTypeSelect = (e) => {};

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600 mt-4">
          กรุณากรอกข้อมูลรายละเอียดของที่พักของคุณอย่างครบถ้วนและชัดเจน
          เพื่อให้เราสามารถตรวจสอบและอนุมัติเป็นพาร์ทเนอร์ได้อย่างรวดเร็ว
          รวมถึงกำหนดตำแหน่งที่ตั้งที่พักบนแผนที่
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ข้อมูลผู้สมัคร */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              1. ข้อมูลผู้สมัคร
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">ชื่อ-นามสกุล / ชื่อธุรกิจ *</Label>
                <Input id="name" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                <Input id="phone" type="tel" required className="mt-1" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">อีเมล *</Label>
                <Input id="email" type="email" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="website">เว็บไซต์ (ถ้ามี)</Label>
                <Input id="website" type="url" className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="address">ที่อยู่ติดต่อ *</Label>
              <Textarea id="address" required className="mt-1" rows={3} />
            </div>
          </CardContent>
        </Card>

        {/* ประเภทที่พักและรายละเอียด */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              2. ประเภทที่พักและรายละเอียด
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-base font-medium">
                ประเภทที่พัก * (เลือกได้หลายประเภท)
              </Label>
              <Select onValueChange={handleAccommodationTypeSelect}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="เลือกประเภทที่พัก" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {accommodationOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      disabled={accommodationTypes.includes(option.value)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{option.label}</span>
                        <span className="text-xs text-gray-600">
                          {option.description}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* แสดงรายการที่เลือกแล้ว */}
              {accommodationTypes.length > 0 && (
                <div className="mt-4 space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    ประเภทที่พักที่เลือก:
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {accommodationTypes.map((type) => {
                      const option = getSelectedOption(type);
                      return (
                        <div
                          key={type}
                          className="flex items-center bg-red-50 border border-red-200 rounded-lg px-3 py-2"
                        >
                          <span className="text-sm font-medium text-red-700">
                            {option?.label}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeAccommodationType(type)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* รายละเอียดสำหรับแต่ละประเภทที่เลือก */}
            {accommodationTypes.map((type) => {
              const option = getSelectedOption(type);
              if (!option) return null;

              // Glamping, Cabin, Safari Tent, Tiny House
              if (
                ["glamping", "cabin", "safari-tent", "tiny-house"].includes(
                  type
                )
              ) {
                return (
                  <div key={type} className="border-t pt-6">
                    <h4 className="text-lg font-medium text-red-700 mb-4">
                      🏕️ รายละเอียด: {option.label}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`${type}-units`}>
                          จำนวนยูนิต / หลัง *
                        </Label>
                        <Input
                          id={`${type}-units`}
                          type="number"
                          min="1"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`${type}-size`}>
                          ขนาดที่พักโดยประมาณ (กว้าง x ยาว เมตร)
                        </Label>
                        <Input
                          id={`${type}-size`}
                          placeholder="เช่น 4 x 6 เมตร"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`${type}-bathroom`} />
                        <Label htmlFor={`${type}-bathroom`}>
                          แต่ละยูนิตมีห้องน้ำในตัว
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`${type}-ac`} />
                        <Label htmlFor={`${type}-ac`}>มีเครื่องปรับอากาศ</Label>
                      </div>
                    </div>
                  </div>
                );
              }

              // RV Site, Car Camping
              if (["rv-site", "car-camping"].includes(type)) {
                return (
                  <div key={type} className="border-t pt-6">
                    <h4 className="text-lg font-medium text-red-700 mb-4">
                      🚐 รายละเอียด: {option.label}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`${type}-spots`}>
                          จำนวนจุดจอดที่รองรับ *
                        </Label>
                        <Input
                          id={`${type}-spots`}
                          type="number"
                          min="1"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`${type}-spot-size`}>
                          ขนาดพื้นที่ต่อ 1 จุดจอด
                        </Label>
                        <Input
                          id={`${type}-spot-size`}
                          placeholder="เช่น 8 x 15 เมตร"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`${type}-electricity`} />
                        <Label htmlFor={`${type}-electricity`}>
                          มีจุดเชื่อมต่อไฟฟ้า
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`${type}-water`} />
                        <Label htmlFor={`${type}-water`}>
                          มีน้ำดี / น้ำเสียให้เชื่อมต่อ
                        </Label>
                      </div>
                    </div>
                  </div>
                );
              }

              // Tent Area, Tent Rental
              if (["tent-area", "tent-rental"].includes(type)) {
                return (
                  <div key={type} className="border-t pt-6">
                    <h4 className="text-lg font-medium text-red-700 mb-4">
                      ⛺ รายละเอียด: {option.label}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`${type}-tent-spots`}>
                          จำนวนแปลงเต็นท์ / จุดกางเต็นท์ที่รองรับ *
                        </Label>
                        <Input
                          id={`${type}-tent-spots`}
                          type="number"
                          min="1"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`${type}-tent-size`}>
                          ขนาดพื้นที่ต่อแปลง
                        </Label>
                        <Input
                          id={`${type}-tent-size`}
                          placeholder="เช่น 4 x 4 เมตร"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`${type}-shade`} />
                        <Label htmlFor={`${type}-shade`}>
                          มีพื้นที่ร่มไม้หรือหลังคา
                        </Label>
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}

            <div>
              <Label htmlFor="description">รายละเอียดที่พัก *</Label>
              <Textarea
                id="description"
                placeholder="เน้นจุดเด่น, สิ่งอำนวยความสะดวก, ความปลอดภัย, บรรยากาศ"
                required
                className="mt-1"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* สิ่งอำนวยความสะดวกสำหรับรถบ้าน */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              3. สิ่งอำนวยความสะดวกสำหรับรถบ้าน
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "มีไฟฟ้าให้เชื่อมต่อ",
                "ระบบน้ำประปา",
                "จุดทิ้งน้ำเสีย (Sewage disposal)",
                "บริการอินเทอร์เน็ต (Wi-Fi)",
                "ระบบระบายน้ำฝนและพื้นที่สะอาด",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={amenities.includes(amenity)}
                    onCheckedChange={(checked) =>
                      handleAmenityChange(amenity, !!checked)
                    }
                  />
                  <Label htmlFor={amenity}>{amenity}</Label>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="electric-power">
                  รายละเอียดระบบไฟฟ้า (แอมป์/โวลต์)
                </Label>
                <Input
                  id="electric-power"
                  placeholder="เช่น 30A/220V"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="water-system">รายละเอียดระบบน้ำประปา</Label>
                <Input
                  id="water-system"
                  placeholder="เช่น มีจุดเติมน้ำสะอาด"
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* สิ่งอำนวยความสะดวกทั่วไป */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              4. สิ่งอำนวยความสะดวกทั่วไป
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "ห้องน้ำและห้องอาบน้ำ",
                "ห้องสุขา/สุขภัณฑ์สำหรับคนพิการ",
                "จุดทำอาหาร (ครัวกลาง/เตาปิ้งย่าง)",
                "บริเวณพักผ่อน/ลานกางเต็นท์",
                "พื้นที่สำหรับจอดรถยนต์เสริม",
                "จุดทิ้งขยะและระบบจัดการขยะ",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={amenities.includes(amenity)}
                    onCheckedChange={(checked) =>
                      handleAmenityChange(amenity, !!checked)
                    }
                  />
                  <Label htmlFor={amenity}>{amenity}</Label>
                </div>
              ))}
            </div>

            <div>
              <Label htmlFor="bathroom-details">
                รายละเอียดห้องน้ำและห้องสุขา
              </Label>
              <Input
                id="bathroom-details"
                placeholder="เช่น จำนวน 4 ห้อง, สะอาด, มีน้ำร้อน"
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* ความปลอดภัยและการรักษาความปลอดภัย */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              5. ความปลอดภัยและการรักษาความปลอดภัย
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "ระบบรักษาความปลอดภัย (กล้อง CCTV, รปภ.)",
                "แสงสว่างในพื้นที่จอดรถและทางเดิน",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={amenities.includes(amenity)}
                    onCheckedChange={(checked) =>
                      handleAmenityChange(amenity, !!checked)
                    }
                  />
                  <Label htmlFor={amenity}>{amenity}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* บริการเสริมและสิ่งอำนวยความสะดวกอื่นๆ */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              6. บริการเสริมและสิ่งอำนวยความสะดวกอื่นๆ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "ร้านค้าหรือร้านอาหารใกล้เคียง",
                "บริการซักรีด",
                "จุดชาร์จไฟฟ้าสำหรับรถยนต์ไฟฟ้า",
                "จุดเชื่อมต่อกับกิจกรรมท้องถิ่นหรือการท่องเที่ยว",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={amenities.includes(amenity)}
                    onCheckedChange={(checked) =>
                      handleAmenityChange(amenity, !!checked)
                    }
                  />
                  <Label htmlFor={amenity}>{amenity}</Label>
                </div>
              ))}
            </div>

            <div>
              <Label htmlFor="additional-services">บริการเสริมอื่นๆ</Label>
              <Textarea
                id="additional-services"
                placeholder="ระบุบริการเสริมอื่นๆ"
                className="mt-1"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* บรรยากาศและสิ่งแวดล้อม */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              7. บรรยากาศและสิ่งแวดล้อม
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "ความเงียบสงบและความเป็นส่วนตัว",
                "มีพื้นที่สีเขียวหรือสวน",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={amenities.includes(amenity)}
                    onCheckedChange={(checked) =>
                      handleAmenityChange(amenity, !!checked)
                    }
                  />
                  <Label htmlFor={amenity}>{amenity}</Label>
                </div>
              ))}
            </div>

            <div>
              <Label htmlFor="location-features">ลักษณะพื้นที่</Label>
              <Input
                id="location-features"
                placeholder="เช่น ริมแม่น้ำ, ภูเขา, ใกล้ทะเล"
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* ราคาที่พัก */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              8. ราคาที่พัก
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="price-range">ช่วงราคาต่อคืน *</Label>
              <Input
                id="price-range"
                placeholder="เช่น 500-1,200 บาท"
                required
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* เอกสารและรูปภาพ */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              9. เอกสารและรูปภาพ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="photos">อัปโหลดรูปภาพที่พัก *</Label>
              <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Upload className="h-8 w-8 mx-auto text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  คลิกเพื่อเลือกรูปภาพหรือลากไฟล์มาวาง
                </p>
                <input
                  type="file"
                  id="photos"
                  multiple
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="documents">
                อัปโหลดเอกสารจดทะเบียนธุรกิจ หรือใบอนุญาต (ถ้ามี)
              </Label>
              <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Upload className="h-8 w-8 mx-auto text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  คลิกเพื่อเลือกเอกสารหรือลากไฟล์มาวาง
                </p>
                <input
                  type="file"
                  id="documents"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  className="hidden"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* แผนที่และตำแหน่งที่ตั้ง */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              10. แผนที่และตำแหน่งที่ตั้ง
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              กรุณาลากหมุดบนแผนที่เพื่อระบุตำแหน่งที่ตั้งที่พักของคุณ
            </p>
            {/* <InteractiveMap
              coordinates={coordinates}
              onCoordinatesChange={setCoordinates}
            /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="latitude">ละติจูด</Label>
                <Input
                  id="latitude"
                  value={coordinates.lat.toFixed(6)}
                  readOnly
                  className="mt-1 bg-gray-50"
                />
              </div>
              <div>
                <Label htmlFor="longitude">ลองจิจูด</Label>
                <Input
                  id="longitude"
                  value={coordinates.lng.toFixed(6)}
                  readOnly
                  className="mt-1 bg-gray-50"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* กฎระเบียบในการเข้าพัก */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              11. กฎระเบียบในการเข้าพัก
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="checkin-time">เวลาเช็คอิน</Label>
                <Select value={checkinTime} onValueChange={setCheckinTime}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="เลือกเวลาเช็คอิน" />
                  </SelectTrigger>
                  <SelectContent className="bg-white max-h-60">
                    {timeOptions.map((time) => (
                      <SelectItem key={`checkin-${time}`} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="checkout-time">เวลาเช็คเอ๊าท์</Label>
                <Select value={checkoutTime} onValueChange={setCheckoutTime}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="เลือกเวลาเช็คเอ๊าท์" />
                  </SelectTrigger>
                  <SelectContent className="bg-white max-h-60">
                    {timeOptions.map((time) => (
                      <SelectItem key={`checkout-${time}`} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="pet-policy">กฎเกี่ยวกับสัตว์เลี้ยง</Label>
              <Textarea
                id="pet-policy"
                placeholder="ระบุนโยบายเกี่ยวกับสัตว์เลี้ยง"
                className="mt-1"
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="noise-policy">
                การจัดการเสียงและกิจกรรมต่างๆ
              </Label>
              <Textarea
                id="noise-policy"
                placeholder="ระบุกฎเกี่ยวกับเสียงและกิจกรรม เช่น เวลาเงียบ"
                className="mt-1"
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="booking-policy">นโยบายการจองและยกเลิก</Label>
              <Textarea
                id="booking-policy"
                placeholder="ระบุนโยบายการจองและยกเลิก เช่น ต้องจองล่วงหน้า ค่าธรรมเนียมยกเลิก เป็นต้น"
                className="mt-1"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* ยอมรับเงื่อนไข */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              12. ยอมรับเงื่อนไข
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm leading-6">
                ข้าพเจ้าขอยืนยันว่าข้อมูลทั้งหมดที่กรอกเป็นความจริงและขอรับรองเงื่อนไขการเป็นพาร์ทเนอร์
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* ปุ่มส่งใบสมัคร */}
        <div className="flex justify-center pt-6">
          <Button
            type="submit"
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
          >
            <Send className="h-5 w-5 mr-2" />
            ส่งใบสมัคร
          </Button>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
