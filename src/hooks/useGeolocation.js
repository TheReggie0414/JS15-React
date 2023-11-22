import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const long = pos.coords.longitude;
      const lat = pos.coords.latitude;
      setLocation({ long, lat });
    });
  }, []);

  return location;
};
