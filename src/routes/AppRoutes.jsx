import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import Contact from "@/pages/Contact";
import ManageTrip from "@/pages/ManageTrip";
import Home from "@/pages/Home";
import Campervan from "@/pages/managetrip/Campervan";
import Layout from "@/layouts/Layout";
import LayoutUser from "@/layouts/LayoutUser";
import Account from "@/pages/user/Account";
import ProtectRouteUser from "./ProtectRouteUser";
import Plans from "@/pages/user/Plans";
import CampervanDetail from "@/pages/managetrip/CampervanDetail";
import Campsite from "@/pages/managetrip/Campsite";
import CampsiteDetail from "@/pages/managetrip/CampsiteDetail";
import PartnerRegistration from "@/pages/partner/PartnerRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "manage-trip", element: <ManageTrip /> },
      { path: "contact", element: <Contact /> },
      { path: "campervan", element: <Campervan /> },
      { path: "campervan/:id", element: <CampervanDetail /> },
      { path: "campsite", element: <Campsite /> },
      { path: "campsite/:id", element: <CampsiteDetail /> },
      { path: "partner-registration", element: <PartnerRegistration /> },
    ],
    // children: [{ index: true, element: <Login /> }],
  },
  {
    path: "/user",
    element: <ProtectRouteUser element={<LayoutUser />} />,
    children: [
      {
        index: true,
        element: <Plans />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
  {
    path: "/admin",
    // element: <ProtectRouteAdmin element={<LayoutAdmin />} />,
    children: [
      // { index: true, element: <Dashboard /> },
      //   { index: true, element: <Categories /> },
      //   { path: "productModels", element: <ProductModels /> },
      //   { path: "cars", element: <Cars /> },
      //   { path: "products", element: <Products /> },
      //   { path: "documents", element: <Documents /> },
      //   { path: "users", element: <Users /> },
    ],
  },
  {
    // path: "/home",
    // element: <ProtectRouteUser element={<LayoutUser />} />,
    // children: [{ index: true, element: <HomeUser /> }],
  },
]);

const AppRoutes = () => {
  return (
    <>
      {/* RouterProvider ใช้สำหรับให้ Router ที่สร้างขึ้นมาอยู่ในบริบทของแอป */}
      <RouterProvider router={router} />
      {/* <Toaster richColors position="top-right" /> */}
    </>
  );
};

export default AppRoutes;
