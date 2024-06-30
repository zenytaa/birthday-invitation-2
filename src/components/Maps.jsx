import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const Maps = () => {
  const [open, setOpen] = useState(false);

  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  };

  const center = {
    lat: -7.425371021888438,
    lng: 109.2484794810789,
  };

  const api = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

  return (
    <LoadScript googleMapsApiKey={api}>
      <GoogleMap
        fullscreenControl={false}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        <MarkerF position={center} />
        {open && (
          <InfoWindow onCloseClick={() => setOpen(false)}>
            <p>Test</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
