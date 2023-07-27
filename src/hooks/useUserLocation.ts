import { useEffect, useState } from "react";

const useUserLocation = () => {
  const [userCountry, setUserCountry] = useState({ country: "", code: "" });

  useEffect(() => {
    const fetchUserCountry = async (): Promise<void> => {
      interface CountryData {
        countryCode: string;
        countryName: string;
      }

      try {
        if ("geolocation" in navigator) {
          const position = await new Promise<GeolocationPosition>(
            (resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            }
          );

          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          if (!response.ok) {
            throw new Error("Unable to fetch user's country.");
          }
          const data: CountryData = (await response.json()) as CountryData;

          setUserCountry({ country: data.countryName, code: data.countryCode });
        } else {
          console.error("Geolocation is not available in this browser.");
        }
      } catch (error) {
        console.error("Error fetching user's country:", error);
      }
    };

    fetchUserCountry().catch((error) => {
      console.error("Error fetching user's country:", error);
    });
  }, []);

  return userCountry;
};

export default useUserLocation;
