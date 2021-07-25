import Config from 'react-native-config';

export type AvailableThemes = 'default' | 'sugestion01';

const ENV = {
  THEME: Config.THEME as AvailableThemes,
  GOOGLE_MAPS_API_KEY: Config.GOOGLE_MAPS_API_KEY,
  OPEN_WEATHER_KEY: Config.OPEN_WEATHER_KEY,
  OPEN_WEATHER_URL: Config.OPEN_WEATHER_URL,
};

export default ENV;
