import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

/**
 * props:
 *  - coordinates: { lat: number, lng: number }
 *  - onCoordinatesChange: ({lat, lng}) => void
 */
const DraggableMarker = ({ coordinates, onCoordinatesChange }) => {
  // ใช้ hook จับคลิกบนแผนที่ -> ย้ายหมุด
  useMapEvents({
    click(e) {
      onCoordinatesChange({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });

  return (
    <Marker
      position={[coordinates.lat, coordinates.lng]}
      draggable={true}
      eventHandlers={{
        dragend: (e) => {
          const p = e.target.getLatLng();
          onCoordinatesChange({ lat: p.lat, lng: p.lng });
        },
      }}
    />
  );
};

const InteractiveMap = ({ coordinates, onCoordinatesChange }) => {
  const center = useMemo(
    () => [coordinates.lat, coordinates.lng],
    [coordinates]
  );

  return (
    <div className="space-y-2">
      <div className="h-64 md:h-80 rounded-lg overflow-hidden border">
        <MapContainer
          center={center}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
        >
          {/* แผนที่จาก OpenStreetMap (ฟรี) */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <DraggableMarker
            coordinates={coordinates}
            onCoordinatesChange={onCoordinatesChange}
          />
        </MapContainer>
      </div>

      <p className="text-xs text-gray-500 text-center">
        💡 คลิกบนแผนที่หรือ “ลากหมุด” เพื่อเปลี่ยนพิกัด
      </p>
    </div>
  );
};

export default InteractiveMap;
