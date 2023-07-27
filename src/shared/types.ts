interface IImages {
  url: string;
}

interface IDates {
  start: {
    localDate: string;
    localTime: string;
  };
}

interface IClassifications {
  genre: {
    name: string;
  };
  segment: {
    name: string;
  };
}

interface IAccessibility {
  info: string;
  ticketLimit: number;
}

export interface IEvent {
  name: string;
  info: string;
  tpe: string;
  images: Array<IImages>;
  dates: IDates;
  accessibility: IAccessibility;
  classifications: Array<IClassifications>;
}

export interface IData {
  data: {
    _embedded: {
      events: IEvent[];
    };
  };
}
