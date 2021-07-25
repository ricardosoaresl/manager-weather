interface IAddressComponents {
  long_name: string;
  short_name: string;
}

interface IAddress {
  address_components: IAddressComponents[];
  formatted_address: string;
  place_id: string;
  types: [];
}

export interface IAddressComplete {
  results: [IAddress];
}

export interface IWeather {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    },
  ];
  wind: {
    deg: number;
    speed: number;
  };
}

export interface IMapBody {
  nearLeft: {
    lat: number;
    lon: number;
  };
  nearRight: {
    lat: number;
    lon: number;
  };
  farLeft: {
    lat: number;
    lon: number;
  };
  farRight: {
    lat: number;
    lon: number;
  };
  zoom: number;
}
