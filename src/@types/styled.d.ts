interface AppThemeFont {
  fontSize: number;
  fontFamily: string;
  fontWeight: string;
}

type ThemeFontTypes = 'regular' | 'medium' | 'light' | 'thin';

type AppThemeFonts = {
  [keys in ThemeFontTypes]: AppThemeFont;
};

interface DefaultThemeColors {
  primary: string;
  background: string;
  surface: string;
  accent: string;
  error: string;
  text: string;
  onSurface: string;
  onBackground: string;
  disabled: string;
  placeholder: string;
  backdrop: string;
  notification: string;
}

export interface AppThemeColors extends DefaultThemeColors {
  primary80: string;
  primary60: string;
  primary40: string;
  accent80: string;
  accent60: string;
  accent40: string;
  textAccent: string;
  gray300: string;
  gray200: string;
  gray100: string;
  error: string;
  success: string;
  pageBackground: string;
  headerText: string;
  absolutes: {
    black: string;
    white: string;
  };
}

declare type Mode = 'adaptive' | 'exact';

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: boolean;
    mode?: Mode;
    roundness: number;
    colors: AppThemeColors;
    fonts: AppThemeFonts;
  }
}
