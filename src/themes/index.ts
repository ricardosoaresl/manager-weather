import defaultTheme from './default';
import sugestion01Theme from './sugestion01';
import ENV from '../utils/env.utils';

const availablesThemes = {
  default: defaultTheme,
  sugestion01: sugestion01Theme,
};

export default availablesThemes[ENV.THEME];
