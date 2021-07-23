import Config from 'react-native-config';

export type AvailableThemes = 'default' | 'sugestion01';

const ENV = {
  THEME: Config.THEME as AvailableThemes,
};

export default ENV;
