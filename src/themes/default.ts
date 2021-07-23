import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  dark: false,
  mode: 'exact',
  fonts: {
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '400',
      fontSize: 14,
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '500',
      fontSize: 14,
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '300',
      fontSize: 14,
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '100',
      fontSize: 14,
    },
  },
  roundness: 4,
  colors: {
    primary: '#EC7000',
    primary80: '#F08D33',
    primary60: '#F4A966',
    primary40: '#F7C699',
    accent: '#003399',
    accent80: '#335CAD',
    accent60: '#6685C2',
    accent40: '#99ADD6',
    text: '#535161',
    textAccent: '#A4A3AF',
    gray300: '#535161',
    gray200: '#A4A3AF',
    gray100: '#EEEDF1',
    error: '#E02020',
    success: '#43A047',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    surface: '#FFFFFF',
    onSurface: '#EC7000',
    onBackground: '#FFFFFF',
    background: '#FFFFFF',
    notification: '#EC7000',
    placeholder: '#A4A3AF',
    disabled: '#F7C699',
    pageBackground: '#E5E5E5',
    headerText: '#545162',
    absolutes: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
};

export default defaultTheme;
