import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


// يعرض الخريطة مع النقاط في مدينة الرياض 
const center = [24.7136, 46.6753];

const MapComponent = (prop) => {
  return (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        onClick={() => prop.setShowList(false)}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {prop.fakeData.map((property) => (
          <Marker
            key={property.id}
            position={property.position}
            eventHandlers={{
              click: () => {
                prop.setSelectedProperty(property);
                prop.setShowList(true);
              },
            }}
          >
            <Popup>{property.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
