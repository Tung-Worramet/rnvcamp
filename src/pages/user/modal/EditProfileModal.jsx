// src/components/EditProfileModal.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditProfileModal = ({ open, onOpenChange, initial = {}, onSave }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      id: initial.id || "",
      fullname: initial.fullname || "",
      email: initial.username || "", // อีเมล
      tel: initial.tel || "",
    },
  });

  // เมื่อเปิดโมดัลใหม่/ค่า initial เปลี่ยน → เติมค่าในฟอร์ม
  useEffect(() => {
    reset({
      id: initial.id || "",
      fullname: initial.fullname || "",
      email: initial.username || "",
      tel: initial.tel || "",
    });
  }, [initial, reset, open]);

  const onSubmit = async (data) => {
    console.log("data", data);
    await onSave?.(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>แก้ไขข้อมูลส่วนตัว</DialogTitle>
          <DialogDescription>
            กรอกข้อมูลใหม่แล้วกดบันทึกเพื่ออัปเดตโปรไฟล์ของคุณ
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label>ชื่อ-นามสกุล</Label>
            <Input
              {...register("fullname", { required: "กรุณากรอกชื่อ-นามสกุล" })}
              placeholder="สมชาย ใจดี"
            />
            {errors.fullname && (
              <p className="text-sm text-red-600">{errors.fullname.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>อีเมล</Label>
            <Input
              {...register("email", {
                required: "กรุณากรอกอีเมล",
                // pattern: {
                //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                //   message: "รูปแบบอีเมลไม่ถูกต้อง",
                // },
              })}
              // type="email"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>เบอร์โทรศัพท์</Label>
            <Input
              {...register("tel", {
                required: "กรุณากรอกเบอร์โทรศัพท์",
                minLength: { value: 9, message: "ความยาวไม่ถูกต้อง" },
              })}
              placeholder="0812345678"
              inputMode="tel"
            />
            {errors.tel && (
              <p className="text-sm text-red-600">{errors.tel.message}</p>
            )}
          </div>

          <DialogFooter className="gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              ยกเลิก
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              บันทึกการเปลี่ยนแปลง
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
