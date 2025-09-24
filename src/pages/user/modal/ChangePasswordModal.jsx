import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

import useAuthStore from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// validation schema
const schema = z
  .object({
    id: z.string().optional(),
    oldPassword: z.string().min(4),
    newPassword: z.string().min(4, "รหัสผ่านใหม่อย่างน้อย 4 ตัวอักษร"),
    confirmPassword: z.string().min(4, "ยืนยันรหัสผ่านอย่างน้อย 4 ตัวอักษร"),
  })
  .refine((d) => d.newPassword === d.confirmPassword, {
    path: ["confirmPassword"],
    message: "รหัสผ่านใหม่และยืนยันไม่ตรงกัน",
  });

const ChangePasswordModal = ({ open, onOpenChange, initial = {}, onSave }) => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      id: initial.id || "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // รีเซ็ตเมื่อ modal ถูกปิด
  useEffect(() => {
    if (!open) {
      reset({
        id: initial.id || "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [open, reset, initial.id]);

  const onSubmit = async (data) => {
    await onSave?.(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md bg-white"
        aria-describedby="change-password-desc"
      >
        <DialogHeader>
          <DialogTitle>เปลี่ยนรหัสผ่าน</DialogTitle>
          <DialogDescription>
            กรอกรหัสผ่านเดิม และกำหนดรหัสผ่านใหม่ จากนั้นกดบันทึกเพื่ออัปเดต
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="hidden"
            {...register("id")}
            defaultValue={initial.id || ""}
          />

          {/* old password */}
          <div className="space-y-2">
            <Label htmlFor="oldPassword">รหัสผ่านเดิม</Label>
            <div className="relative">
              <Input
                id="oldPassword"
                type={showOld ? "text" : "password"}
                placeholder="••••••••"
                {...register("oldPassword")}
                className="w-full border rounded-md px-3 py-2"
              />
              {/* <button
                type="button"
                onClick={() => setShowOld((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showOld ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button> */}
            </div>
            {errors.oldPassword && (
              <p className="text-sm text-red-600">
                {errors.oldPassword.message}
              </p>
            )}
          </div>

          {/* new password */}
          <div className="space-y-2">
            <Label htmlFor="newPassword">รหัสผ่านใหม่</Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showNew ? "text" : "password"}
                placeholder="••••••••"
                {...register("newPassword")}
                className="w-full border rounded-md px-3 py-2"
              />
              {/* <button
                type="button"
                onClick={() => setShowNew((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showNew ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button> */}
            </div>
            {errors.newPassword && (
              <p className="text-sm text-red-600">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* confirm password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">ยืนยันรหัสผ่านใหม่</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                {...register("confirmPassword")}
                className="w-full border rounded-md px-3 py-2"
              />
              {/* <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirm ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button> */}
            </div>

            {errors.confirmPassword && (
              <p className="text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
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
              {isSubmitting ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
