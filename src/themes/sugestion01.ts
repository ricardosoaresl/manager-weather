import { DefaultTheme } from 'styled-components';

const sugestion01Theme: DefaultTheme = {
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
    primary: '#F90083',
    primary80: '#FA339C',
    primary60: '#FB66B5',
    primary40: '#FD99CD',
    accent: '#0045DD',
    accent80: '#336AE4',
    accent60: '#668FEB',
    accent40: '#99B5F1',
    text: '#535161',
    textAccent: '#A4A3AF',
    gray300: '#535161',
    gray200: '#A4A3AF',
    gray100: '#EEEDF1',
    error: '#E02020',
    success: '#43A047',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    surface: '#FFFFFF',
    onSurface: '#F90083',
    onBackground: '#FFFFFF',
    background: '#FFFFFF',
    notification: '#F90083',
    placeholder: '#A4A3AF',
    disabled: '#FD99CD',
    pageBackground: '#E5E5E5',
    headerText: '#545162',
    absolutes: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
};

export default sugestion01Theme;
