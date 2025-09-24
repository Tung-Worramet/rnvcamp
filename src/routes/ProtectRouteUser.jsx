// src/components/ProtectRouteUser.jsx
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";
// ถ้าใช้ jwt-decode ได้:  npm i jwt-decode
// import { jwtDecode } from "jwt-decode";

const CLOCK_SKEW_MS = 15 * 1000; // กันเผื่อเวลา 15 วิ

// ถอด JWT (base64url) แบบไม่ใช้ไลบรารี
function decodeJwt(token) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(
      atob(payload)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function isTokenValid(token) {
  if (!token) return false;

  // ถ้าเป็น opaque token (ไม่ใช่ JWT) จะเช็กอะไรไม่ได้มากนัก
  // เลือก policy ง่ายๆ: แค่มี token ก็ผ่าน
  // แต่ถ้าเป็น JWT เราจะเช็ก exp
  const payload = decodeJwt(token); // หรือใช้ jwtDecode(token)
  if (!payload) return !!token;

  if (typeof payload.exp === "number") {
    const now = Date.now();
    const exp = payload.exp * 1000;
    if (now > exp - CLOCK_SKEW_MS) return false; // หมดอายุ/ใกล้หมด
  }
  return true;
}

const ProtectRouteUser = ({ element }) => {
  const user = useAuthStore((s) => s.user);
  const token = useAuthStore((s) => s.token);
  const setUser = useAuthStore((s) => s.setUser); // มีใน store จะดีมาก
  const logout = useAuthStore((s) => s.logout); // มีใน store จะดีมาก

  const [status, setStatus] = useState("checking"); // checking | allowed | denied

  const navigate = useNavigate();
  useEffect(() => {
    // ไม่มี token → denied เลย
    if (!token) {
      setStatus("denied");
      return;
    }

    // เช็กอายุ token (ถ้าเป็น JWT)
    const ok = isTokenValid(token);
    if (!ok) {
      logout?.(); // ล้างสโตร์ถ้ามีเมธอดนี้
      setStatus("denied");
      return;
    }

    // ถ้า user ยังไม่มี ให้ลอง hydrate จาก JWT claim
    // if (!user) {
    //   const payload = decodeJwt(token);
    //   if (payload) {
    //     // ปรับ mapping ให้ตรงระบบคุณ
    //     const hydrated = {
    //       id: payload.sub || payload.userId,
    //       email: payload.email,
    //       name: payload.name || payload.fullName,
    //       role: payload.role,
    //     };
    //     // มีค่าอย่างน้อย 1 ฟิลด์ค่อยเซ็ต
    //     if (Object.values(hydrated).some(Boolean)) {
    //       setUser?.(hydrated);
    //     }
    //   }
    // }

    setStatus("allowed");
  }, [token, user, setUser, logout]);

  if (status === "checking") return null; // หรือ spinner
  if (status === "denied") return <Navigate to="/signin" replace />;

  return element;
};

export default ProtectRouteUser;
