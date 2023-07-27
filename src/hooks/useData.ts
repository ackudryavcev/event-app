import axios from "axios";
import { useEffect, useState } from "react";
import { IData, IEvent } from "../shared/types";

const useData = (requestToServer: string) => {
  const [dataEvent, setDataEvent] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response: IData = await axios.get(requestToServer);
        setDataEvent(response.data._embedded.events);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchEvents().catch((error) => {
      console.error("Error fetching data events:", error);
    });
  }, [requestToServer]);
  return dataEvent;
};

export default useData;
