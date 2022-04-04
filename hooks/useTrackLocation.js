import { useState } from "react";

const useTrackLocation = () => {
  const [locationErrorMsg, setlocationErrorMsg] = useState("");
  const [latLong, setLatLong] = useState("");

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(`${latitude},${longitude}`);
    setlocationErrorMsg("");
  };

  const error = () => {
    setlocationErrorMsg("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      setlocationErrorMsg("Geolocation is not supported by your browser");
    } else {
      //   status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    latLong,
    handleTrackLocation,
    locationErrorMsg,
  };
};

export default useTrackLocation;
