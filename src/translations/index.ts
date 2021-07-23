/* eslint-disable @typescript-eslint/no-non-null-assertion */
//Removendo um warning desnecessario na linha 41
import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';
import es from './es';
import { TranslationKeys } from './translations.interface';

type NormalizedTranslations = {
  [key: string]: string;
};

const NORMALIZED_TRANSALATIONS: NormalizedTranslations = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
  es: 'es',
};

const DEFAULT_LANGUAGE = NORMALIZED_TRANSALATIONS.en;

const IOSDeviceLanguage =
  NativeModules.SettingsManager?.settings?.AppleLocale ||
  NativeModules.SettingsManager?.settings?.AppleLanguages[0] ||
  DEFAULT_LANGUAGE;

const androidDeviceLanguage = NativeModules.I18nManager.localeIdentifier || DEFAULT_LANGUAGE;

const deviceLanguage: string = Platform.select({ ios: IOSDeviceLanguage, android: androidDeviceLanguage });

I18n.translations = {
  en_US: en,
  pt_BR: pt,
  es,
};

const getCurrentLanguage = () => {
  const languageLabel = Object.keys(NORMALIZED_TRANSALATIONS).find((x) => deviceLanguage.includes(x));
  return NORMALIZED_TRANSALATIONS[languageLabel!] || NORMALIZED_TRANSALATIONS.en;
};

const setLanguageToI18n = () => {
  const currentLanguage = getCurrentLanguage();
  if (!I18n.translations[currentLanguage]) {
    I18n.defaultLocale = 'en_US';
    return;
  }
  I18n.locale = currentLanguage;
};

setLanguageToI18n();

export const translate = (key: TranslationKeys): string => I18n.t(key);
export const currentLanguage = getCurrentLanguage();
