import { useContext, useState } from "react";
import { ACTION_TYPES, StoreContext } from "../pages/_app";

const useTrackLocation = () => {
  const [locationErrorMsg, setlocationErrorMsg] = useState("");
  // const [latLong, setLatLong] = useState("");

  const { dispatch } = useContext(StoreContext);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // setLatLong(`${latitude},${longitude}`);
    dispatch({
      type: ACTION_TYPES.SET_LAT_LONG,
      payload: { latLong: `${latitude},${longitude}` },
    });
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
    // latLong,
    handleTrackLocation,
    locationErrorMsg,
  };
};

export default useTrackLocation;
