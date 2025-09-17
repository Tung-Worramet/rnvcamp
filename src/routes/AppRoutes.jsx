import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutUser from "../layouts/LayoutUser";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import Contact from "@/pages/Contact";
import ManageTrip from "@/pages/ManageTrip";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutUser />,
    children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "manage-trip", element: <ManageTrip /> },
      { path: "contact", element: <Contact /> },
    ],
    // children: [{ index: true, element: <Login /> }],
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
