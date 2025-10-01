import { Toaster } from "./components/ui/toaster";
import AppRoutes from "./routes/AppRoutes";

import "leaflet/dist/leaflet.css";

// ✅ แก้ path ไอคอนให้ทำงานกับ Vite/webpack
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function App() {
  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  );
}

export default App;
