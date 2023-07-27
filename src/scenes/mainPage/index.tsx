import useUserLocation from "../../hooks/useUserLocation";
import useData from "../../hooks/useData";
import EventCard from "../../shared/eventCard";

const MainPage = () => {
  const userCountry = useUserLocation();
  interface ImportMetaEnv {
    VITE_CONSUMER_KEY: string;
  }
  const API_KEY = import.meta.env.VITE_CONSUMER_KEY as ImportMetaEnv;
  const dataEvent = useData(
    `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${userCountry.code}&apikey=${API_KEY}`
  );
  console.log("dataEvent", dataEvent);
  return (
    <div>
      {userCountry ? (
        <div>
          <p>Latest events for {userCountry.country}</p>
          {dataEvent.length > 0 &&
            dataEvent.map((event, index) => {
              return <EventCard key={index} event={event} />;
            })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MainPage;
