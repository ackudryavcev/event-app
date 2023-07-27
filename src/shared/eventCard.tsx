import getDayOfWeek from "./getDayOfWeek";
import { IEvent } from "./types";

type Props = {
  event: IEvent;
};

const EventCard = ({ event }: Props) => {
  return (
    <div className="border-2  flex border-primary-100 w-3/4 my-2 mx-auto rounded-lg h-[400px]">
      <div className="flex-col my-auto w-1/4 h-[200px] border-r-4">
        <div className="mt-12 text-2xl font-bold text-primary-300">
          {getDayOfWeek(event.dates.start.localDate)}
        </div>
        <div className="mt-12 text-primary-300 text-xl">
          {event.dates.start.localDate.slice(5)}
        </div>
      </div>
      <div className="flex-col h-[350px] w-3/4">
        <h2 className="mt-4 text-primary-300 text-2xl text-center font-bold">
          {event.name}
        </h2>
        {event.images.length > 0 && (
          <img
            src={event.images[0].url}
            alt={event.name}
            className="w-[300px] mx-auto mt-4"
          />
        )}

        {event.dates.start.localTime && (
          <p className="text-primary-300 mt-2">
            Time: {event.dates.start.localTime.slice(0, 5)}
          </p>
        )}
        <p className="text-primary-300 mt-2">
          Genre: {event.classifications[0].genre.name}
        </p>
        <p className="text-primary-300 font-bold mt-2">
          {event.classifications[0].segment.name}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
