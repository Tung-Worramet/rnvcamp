import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/authStore";
import { useCallback, useEffect, useState } from "react";
import EditProfileModal from "./modal/EditProfileModal";
import { getUserDetailById, updatePassword, updateUser } from "@/api/user";
import { useToast } from "@/hooks/use-toast";
import ChangePasswordModal from "./modal/ChangePasswordModal";
import { uploadIdCardFile } from "@/api/file";

const Account = () => {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);

  const { toast } = useToast();

  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);

  const [idCardFile, setIdCardFile] = useState(null);
  const [idCardUrl, setIdCardUrl] = useState(null); // เก็บรูปที่เคยอัปไว้แล้ว
  const [licenseFile, setLicenseFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  // ฟังก์ชันโหลดข้อมูลผู้ใช้ (เอาไปใช้ซ้ำหลังจาก save)
  const fetchUser = useCallback(async () => {
    if (!token || !user?.id) return;
    try {
      // setLoading(true);
      const res = await getUserDetailById(token, user.id); // ต้องส่ง token ด้วย

      if (res.success) {
        setIdCardUrl(res.data.idcardFile);
      }

      return res;
    } catch (error) {
      toast({
        title: "ข้อผิดพลาด",
        description: "โหลดข้อมูลผู้ใช้ไม่สำเร็จ",
        variant: "destructive",
      });
    } finally {
      // setLoading(false);
    }
  }, [token, user?.id]);

  // โหลดครั้งแรกเมื่อเข้าเพจ และเมื่อ token/user.id เปลี่ยน
  useEffect(() => {
    let alive = true;
    (async () => {
      await fetchUser();
    })();
    return () => {
      alive = false;
    };
  }, [fetchUser]);

  // กดบันทึกแล้ว อัปเดต -> ถ้าสำเร็จ -> โหลดข้อมูลใหม่
  const handleSaveEditProfile = async (form) => {
    if (!token) return;
    try {
      const res = await updateUser(token, form);
      if (res.data?.success === true) {
        toast({ title: "บันทึกแล้ว", description: "อัปเดตข้อมูลสำเร็จ" });
        const res = await fetchUser(); // รีเฟรชข้อมูลแสดงผล
        setUser(res.data);
        setOpenEditProfile(false); // ปิด modal ถ้ามี
      } else {
        toast({
          title: "บันทึกไม่สำเร็จ",
          description: res.data?.message ?? "โปรดลองอีกครั้ง",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "ข้อผิดพลาด",
        description: error?.message ?? "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
        variant: "destructive",
      });
    }
  };

  const handleSaveChangePassword = async (form) => {
    if (!token) return;
    try {
      const res = await updatePassword(token, form);
      if (res.data?.success === true) {
        toast({ title: "บันทึกแล้ว", description: "อัปเดตข้อมูลสำเร็จ" });
      } else {
        toast({
          title: "บันทึกไม่สำเร็จ",
          description: res.data?.message ?? "โปรดลองอีกครั้ง",
          variant: "destructive",
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    let objectUrl;
    if (idCardFile) objectUrl = URL.createObjectURL(idCardFile);
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [idCardFile]);

  const handleUploadIdCard = async () => {
    if (!idCardFile) return;

    if (!idCardFile.type.startsWith("image/")) {
      return toast({
        title: "ไฟล์ไม่ถูกต้อง",
        description: "กรุณาเลือกรูปภาพเท่านั้น",
        variant: "destructive",
      });
    }
    if (idCardFile.size > 5 * 1024 * 1024) {
      return toast({
        title: "ไฟล์ใหญ่เกินไป",
        description: "จำกัดขนาดไม่เกิน 5MB",
        variant: "destructive",
      });
    }

    const formData = new FormData();
    formData.append("file", idCardFile);
    formData.append("userId", String(user?.id ?? ""));

    try {
      setUploading(true);
      const res = await uploadIdCardFile(token, formData);

      if (res.data?.success) {
        setIdCardUrl(res.data.url); //  เซ็ต URL ที่หลังบ้านให้มา

        setIdCardFile(null); // เคลียร์ไฟล์เลือกไว้ (ใช้รูปจากเซิร์ฟเวอร์แทน)
        toast({
          title: "อัปโหลดสำเร็จ",
          description: "บันทึกรูปบัตรประชาชนเรียบร้อย",
        });
      } else {
        toast({
          title: "อัปโหลดไม่สำเร็จ",
          description: res.data?.message ?? "โปรดลองอีกครั้ง",
          variant: "destructive",
        });
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message ?? err?.message ?? "เกิดข้อผิดพลาด";
      toast({ title: "ข้อผิดพลาด", description: msg, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-800">ข้อมูลบัญชี</h2>
        <p className="text-slate-600 mt-2">
          จัดการข้อมูลส่วนตัวและการตั้งค่าบัญชี
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* Profile Information */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-slate-800">
              ข้อมูลส่วนตัว
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ชื่อ-นามสกุล
                </label>
                <p className="text-slate-900 bg-slate-50 px-4 py-3 rounded-lg">
                  {user?.fullname}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  อีเมล
                </label>
                <p className="text-slate-900 bg-slate-50 px-4 py-3 rounded-lg">
                  {user?.username}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  เบอร์โทรศัพท์
                </label>
                <p className="text-slate-900 bg-slate-50 px-4 py-3 rounded-lg">
                  {user?.tel}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setOpenEditProfile(true)}
              variant="outline"
              className="w-full border-slate-300 hover:bg-slate-50"
            >
              แก้ไขข้อมูล
            </Button>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-slate-800">
              เอกสารประกอบ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* บัตรประชาชน */}
            <div>
              <label className="flex justify-between text-sm font-medium text-slate-700 mb-3">
                บัตรประชาชน
                <span className="text-xs text-slate-500">
                  {idCardFile || user?.idcardFile ? "1/1" : "0/1"}
                </span>
              </label>

              <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-slate-50/50 hover:bg-slate-100/50 transition-colors">
                {/* input file ซ่อน (มีแค่ตัวเดียวใช้ร่วมกันทั้ง "เลือก" และ "เปลี่ยน") */}
                <input
                  id="idcard-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setIdCardFile(file);
                    // ถ้าอยากเลือกไฟล์ชื่อเดิมซ้ำ ๆ ให้คลิกได้ทุกครั้ง
                    e.currentTarget.value = null;
                  }}
                />

                {/* preview: ถ้ามีไฟล์ใหม่ให้พรีวิวไฟล์ใหม่, ไม่งั้นโชว์รูปเดิมจากเซิร์ฟเวอร์ */}
                {idCardFile || user?.idcardFile ? (
                  <div className="mt-2 relative inline-block">
                    <img
                      src={
                        idCardFile ? URL.createObjectURL(idCardFile) : idCardUrl
                      }
                      alt="ID Card Preview"
                      className="mx-auto max-h-40 rounded-md border"
                    />
                    {/* ล้างเฉพาะไฟล์ใหม่ที่เลือก (ไม่ลบของเดิมบนเซิร์ฟเวอร์) */}
                    {idCardFile && (
                      <button
                        type="button"
                        onClick={() => setIdCardFile(null)}
                        className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
                        aria-label="ลบไฟล์ที่เลือก"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="text-sm text-slate-500 mb-3">
                    อัปโหลดรูปบัตรประชาชน
                  </div>
                )}

                {/* ปุ่มเลือก/เปลี่ยนไฟล์ (ใช้ label ผูกกับ input เดิมตัวเดียว) */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-slate-300 cursor-pointer w-28"
                  >
                    <label
                      htmlFor="idcard-input"
                      className="flex items-center justify-center h-[36px]"
                    >
                      {idCardFile || user?.idcardFile
                        ? "เปลี่ยนไฟล์"
                        : "เลือกไฟล์"}
                    </label>
                  </Button>

                  {/* ปุ่มบันทึก: โชว์เมื่อมีไฟล์ “ใหม่” เท่านั้น */}
                  {idCardFile && (
                    <Button
                      onClick={handleUploadIdCard}
                      disabled={!idCardFile || uploading}
                      className="w-28"
                      size="sm"
                    >
                      {uploading ? "กำลังบันทึก..." : "บันทึก"}
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* ใบขับขี่ */}
            <div>
              <label className="flex justify-between text-sm font-medium text-slate-700 mb-3">
                ใบขับขี่
                <span className="text-xs text-slate-500">
                  {licenseFile ? "1/1" : "0/1"}
                </span>
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-slate-50/50 hover:bg-slate-100/50 transition-colors">
                <p className="text-sm text-slate-500 mb-3">
                  อัปโหลดรูปใบขับขี่
                </p>
                <input
                  id="upload-license" // <- id คนละตัวกับด้านบน
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    setLicenseFile(file || null);
                    if (file) console.log("License:", file.name);
                  }}
                />

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-slate-300 cursor-pointer"
                >
                  <label htmlFor="upload-license">เลือกไฟล์</label>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-slate-800">
              ความปลอดภัย
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={() => setOpenChangePassword(true)}
              variant="outline"
              className="w-full border-slate-300 hover:bg-slate-50"
            >
              เปลี่ยนรหัสผ่าน
            </Button>
            {/* <Button
              variant="outline"
              className="w-full border-slate-300 hover:bg-slate-50"
            >
              ตั้งค่าความเป็นส่วนตัว
            </Button> */}
          </CardContent>
        </Card>

        {/* Connected Accounts */}
        {/* <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-slate-800">
              บัญชีที่เชื่อมต่อ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <span className="font-medium text-slate-700">Google</span>
              <Button size="sm" variant="outline" className="border-slate-300">
                เชื่อมต่อ
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <span className="font-medium text-slate-700">Facebook</span>
              <Button size="sm" variant="outline" className="border-slate-300">
                เชื่อมต่อ
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>

      {/* Modal */}
      <EditProfileModal
        open={openEditProfile}
        onOpenChange={setOpenEditProfile}
        initial={{
          id: user?.id,
          fullname: user?.fullname,
          username: user?.username,
          tel: user?.tel,
        }}
        onSave={handleSaveEditProfile}
      />

      <ChangePasswordModal
        open={openChangePassword}
        onOpenChange={setOpenChangePassword}
        initial={{ id: user?.id }}
        onSave={handleSaveChangePassword}
      />
    </div>
  );
};
export default Account;
