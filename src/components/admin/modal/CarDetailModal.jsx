import { useIsMobile } from "@/hooks/use-mobile";

const CarDetailModal = ({ open, onOpenChange, car }) => {
  const isMobile = useIsMobile();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`${
          isMobile
            ? "max-w-[95vw] max-h-[95vh] w-full h-full m-0 rounded-t-xl rounded-b-none"
            : "max-w-6xl max-h-[90vh]"
        } overflow-y-auto`}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Car className="w-4 h-4 sm:w-5 sm:h-5" />
            รายละเอียดรถ: {car.name}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList
            className={`grid w-full ${
              isMobile ? "grid-cols-3" : "grid-cols-7"
            } text-xs`}
          >
            <TabsTrigger value="basic" className="text-xs">
              ข้อมูลพื้นฐาน
            </TabsTrigger>
            {!isMobile && (
              <TabsTrigger value="specs" className="text-xs">
                ข้อมูลเทคนิค
              </TabsTrigger>
            )}
            <TabsTrigger value="maintenance" className="text-xs">
              บำรุงรักษา
            </TabsTrigger>
            {!isMobile && (
              <TabsTrigger value="damage" className="text-xs">
                ตำหนิ/ความเสียหาย
              </TabsTrigger>
            )}
            {!isMobile && (
              <TabsTrigger value="availability" className="text-xs">
                ความพร้อมใช้
              </TabsTrigger>
            )}
            <TabsTrigger value="gps" className="text-xs">
              ตำแหน่ง GPS
            </TabsTrigger>
            {!isMobile && (
              <TabsTrigger value="notes" className="text-xs">
                โน้ต/เอกสาร
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="basic" className="space-y-4 sm:space-y-6">
            <div
              className={`grid grid-cols-1 ${
                isMobile ? "" : "md:grid-cols-2"
              } gap-4 sm:gap-6`}
            >
              {/* รูปรถ */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <Camera className="w-4 h-4" />
                    รูปรถ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9} className="mb-3 sm:mb-4">
                    <img
                      src={carImages[selectedImageIndex]}
                      alt="รถ"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </AspectRatio>
                  <div className="grid grid-cols-4 gap-1 sm:gap-2">
                    {carImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`รถมุม ${index + 1}`}
                        className={`w-full h-12 sm:h-16 object-cover rounded cursor-pointer border-2 ${
                          selectedImageIndex === index
                            ? "border-primary"
                            : "border-gray-200"
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ข้อมูลพื้นฐาน */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">
                    ข้อมูลพื้นฐาน
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        ยี่ห้อ/รุ่น
                      </label>
                      <p className="font-medium text-sm sm:text-base">
                        {car.name}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        ปี
                      </label>
                      <p className="font-medium text-sm sm:text-base">
                        {car.model}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        ประเภท
                      </label>
                      <Badge variant="secondary" className="text-xs">
                        รถบ้าน
                      </Badge>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        ทะเบียน
                      </label>
                      <p className="font-medium text-sm sm:text-base">
                        {car.license}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        สีรถ
                      </label>
                      <p className="font-medium text-sm sm:text-base">ขาว</p>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        จำนวนที่นั่ง
                      </label>
                      <p className="font-medium text-sm sm:text-base">
                        4 ที่นั่ง
                      </p>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        จำนวนประตู
                      </label>
                      <p className="font-medium text-sm sm:text-base">
                        4 ประตู
                      </p>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-600">
                        พื้นที่เก็บสัมภาระ
                      </label>
                      <p className="font-medium text-sm sm:text-base">
                        500 ลิตร
                      </p>
                    </div>
                  </div>

                  {/* Mobile specs section */}
                  {isMobile && (
                    <div className="border-t pt-4 mt-4">
                      <h4 className="font-medium text-sm mb-3">ข้อมูลเทคนิค</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-medium text-gray-600">
                            ประเภทเชื้อเพลิง
                          </label>
                          <p className="font-medium text-sm">เบนซิน</p>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-600">
                            ระบบเกียร์
                          </label>
                          <p className="font-medium text-sm">อัตโนมัติ</p>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-600">
                            เลขไมล์ปัจจุบัน
                          </label>
                          <p className="font-medium text-sm">47,320 กม.</p>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-600">
                            อัตราการกินน้ำมัน
                          </label>
                          <p className="font-medium text-sm">12 กม./ลิตร</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* อุปกรณ์ในรถ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm sm:text-base">
                  อุปกรณ์ในรถ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`grid ${
                    isMobile ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"
                  } gap-2`}
                >
                  {equipmentList.map((equipment, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="justify-center text-xs"
                    >
                      {equipment}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mobile damage reports */}
            {isMobile && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    จุดตำหนิ / ความเสียหาย
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {damageReports.map((damage, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium text-sm">
                              {damage.location}
                            </p>
                            <p className="text-xs text-gray-600">
                              {damage.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={
                                damage.severity === "เล็กน้อย"
                                  ? "secondary"
                                  : "destructive"
                              }
                              className="text-xs"
                            >
                              {damage.severity}
                            </Badge>
                            <p className="text-xs text-gray-500 mt-1">
                              {damage.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Desktop only tabs */}
          {!isMobile && (
            <>
              <TabsContent value="specs" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      ข้อมูลทางเทคนิค
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          ประเภทเชื้อเพลิง
                        </label>
                        <p className="font-medium">เบนซิน</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          ความจุถังน้ำมัน
                        </label>
                        <p className="font-medium">60 ลิตร</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          อัตราการกินน้ำมัน
                        </label>
                        <p className="font-medium">12 กม./ลิตร</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          ระบบเกียร์
                        </label>
                        <p className="font-medium">อัตโนมัติ</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          ระบบขับเคลื่อน
                        </label>
                        <p className="font-medium">2 ล้อ</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          เลขไมล์ปัจจุบัน
                        </label>
                        <p className="font-medium">47,320 กม.</p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-600">
                          VIN (หมายเลขตัวถัง)
                        </label>
                        <p className="font-medium">1HGBH41JXMN109186</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="damage" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      จุดตำหนิ / ความเสียหาย
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {damageReports.map((damage, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{damage.location}</p>
                              <p className="text-sm text-gray-600">
                                {damage.description}
                              </p>
                            </div>
                            <Badge
                              variant={
                                damage.severity === "เล็กน้อย"
                                  ? "secondary"
                                  : "destructive"
                              }
                            >
                              {damage.severity}
                            </Badge>
                            <p className="text-sm text-gray-500 mt-1">
                              {damage.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="availability" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      ความพร้อมใช้งาน
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          สถานะปัจจุบัน
                        </label>
                        <div className="mt-1">
                          <Badge className="bg-green-100 text-green-700">
                            พร้อมใช้งาน
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline">ดูปฏิทินการจอง</Button>
                        <Button variant="outline">ปิดการจองชั่วคราว</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        โน้ตภายในทีม
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {teamNotes.map((note, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-blue-200 pl-4 pb-4"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <p className="font-medium text-sm">
                                {note.author}
                              </p>
                              <Badge variant="outline" className="text-xs">
                                {note.date}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-700">
                              {note.message}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        เอกสารประกอบ
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 border rounded">
                          <span className="text-sm">ใบจดทะเบียน</span>
                          <Button variant="outline" size="sm">
                            ดู
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 border rounded">
                          <span className="text-sm">กรมธรรม์ประกัน</span>
                          <Button variant="outline" size="sm">
                            ดู
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 border rounded">
                          <span className="text-sm">เอกสาร พรบ.</span>
                          <Button variant="outline" size="sm">
                            ดู
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 border rounded">
                          <span className="text-sm">รับรองความปลอดภัย</span>
                          <Button variant="outline" size="sm">
                            ดู
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </>
          )}

          <TabsContent value="maintenance" className="space-y-4 sm:space-y-6">
            <div
              className={`grid grid-cols-1 ${
                isMobile ? "" : "md:grid-cols-2"
              } gap-4 sm:gap-6`}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">
                    ข้อมูลการบำรุงรักษา
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">
                      วันที่เข้าศูนย์ล่าสุด
                    </label>
                    <p className="font-medium text-sm sm:text-base">
                      15 มกราคม 2024
                    </p>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">
                      วันที่เปลี่ยนน้ำมันล่าสุด
                    </label>
                    <p className="font-medium text-sm sm:text-base">
                      15 มกราคม 2024
                    </p>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">
                      กำหนดเช็คระยะถัดไป
                    </label>
                    <p className="font-medium text-orange-600 text-sm sm:text-base">
                      15 เมษายน 2024
                    </p>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">
                      สถานะประกันภัย
                    </label>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      หมดอายุ: 30 ธันวาคม 2024
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">
                    ประวัติการบำรุงรักษา
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {maintenanceHistory.map((record, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-blue-200 pl-3 sm:pl-4 pb-3 sm:pb-4"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-sm">{record.type}</p>
                            <p className="text-xs text-gray-600">
                              {record.mileage}
                            </p>
                            <p className="text-xs text-gray-500">
                              โดย: {record.technician}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {record.date}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gps" className="space-y-4 sm:space-y-6">
            <div className="space-y-4 sm:space-y-6">
              {/* GPS Location Header */}
              <Card className="bg-gradient-to-r from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800 text-sm sm:text-base">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    ตำแหน่ง GPS ล่าสุดของรถ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className={`flex ${
                      isMobile
                        ? "flex-col gap-3"
                        : "items-center justify-between"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {getGPSStatusBadge(gpsData.status)}
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 text-xs"
                      >
                        <Car className="w-3 h-3" />
                        {car.status === "available"
                          ? "พร้อมใช้งาน"
                          : car.status === "rented"
                          ? "ถูกจอง"
                          : "ซ่อมบำรุง"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      อัปเดตล่าสุด: {gpsData.lastUpdated}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div
                className={`grid grid-cols-1 ${
                  isMobile ? "" : "lg:grid-cols-2"
                } gap-4 sm:gap-6`}
              >
                {/* Map Card */}
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                      <Navigation className="w-4 h-4" />
                      แผนที่ตำแหน่งปัจจุบัน
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AspectRatio ratio={16 / 12} className="mb-3 sm:mb-4">
                      <div className="w-full h-full bg-blue-50 rounded-xl border-2 border-blue-100 flex items-center justify-center relative overflow-hidden">
                        {/* Mock Google Maps */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100"></div>
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4">
                          <div className="bg-white rounded-lg p-1 sm:p-2 shadow-sm text-xs">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-red-500" />
                              <span className="font-medium">ตำแหน่งรถ</span>
                            </div>
                          </div>
                        </div>
                        <div className="relative z-10">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <Car className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 sm:p-2 text-xs">
                            <p className="font-medium truncate">
                              {gpsData.address}
                            </p>
                          </div>
                        </div>
                        {/* Grid pattern overlay */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                            {Array.from({ length: 48 }).map((_, i) => (
                              <div
                                key={i}
                                className="border border-gray-400"
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AspectRatio>
                    <Button
                      variant="outline"
                      className="w-full text-xs sm:text-sm"
                    >
                      เปิดใน Google Maps
                    </Button>
                  </CardContent>
                </Card>

                {/* Location Details Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                      <Radio className="w-4 h-4" />
                      รายละเอียดตำแหน่ง
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-600">
                          ละติจูด
                        </label>
                        <p className="font-mono text-xs bg-gray-50 p-2 rounded">
                          {gpsData.latitude}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-600">
                          ลองจิจูด
                        </label>
                        <p className="font-mono text-xs bg-gray-50 p-2 rounded">
                          {gpsData.longitude}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-600">
                        ที่อยู่
                      </label>
                      <p className="text-xs bg-gray-50 p-2 rounded">
                        {gpsData.address}
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                      <Button variant="outline" className="w-full text-xs">
                        ดูประวัติตำแหน่งย้อนหลัง
                      </Button>
                      <Button variant="outline" className="w-full text-xs">
                        ตั้งค่าแจ้งเตือนพื้นที่
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div
          className={`flex ${
            isMobile ? "flex-col gap-2" : "justify-end gap-2"
          } pt-4 border-t`}
        >
          <Button variant="outline" className="text-xs sm:text-sm">
            แก้ไขข้อมูล
          </Button>
          {!isMobile && (
            <Button variant="outline" className="text-xs sm:text-sm">
              อัปโหลดภาพใหม่
            </Button>
          )}
          {!isMobile && (
            <Button variant="outline" className="text-xs sm:text-sm">
              ตั้งเตือนเช็คระยะ
            </Button>
          )}
          <Button variant="destructive" className="text-xs sm:text-sm">
            ปิดการใช้งานชั่วคราว
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CarDetailModal;
