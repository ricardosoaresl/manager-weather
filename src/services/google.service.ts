import axios from 'axios';
import { GOOGLE_API } from '../constants/api.constants';
import { translate } from '../translations';
import ENV from '../utils/env.utils';

const baseURL = ENV.OPEN_WEATHER_URL;

const instance = axios.create({
  baseURL,
});

export async function getGoogle<T>(url: GOOGLE_API, headers?: unknown): Promise<T> {
  try {
    const userInfos = await instance.get<T>(url, {
      headers,
    });
    return userInfos.data;
  } catch (error) {
    throw new Error(translate('RequestError'));
  }
}
