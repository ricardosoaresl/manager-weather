import * as S from './styles';
import React, { useEffect, useRef, useState } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import MapView from '../../components/map/mapview';
import { RouteDrawerParamList } from '../homeDrawer';
import { DELTA_LOCATION, SOUTH_AMERICA } from '../../constants/map.constants';
import { Region } from 'react-native-maps';
import { getLocation } from '../../config/location.config';
import { getOpenWeather } from '../../services/openweather.service';
import { formatUrl } from '../../utils/url.utils';
import { GOOGLE_API, OPEN_WEATHER } from '../../constants/api.constants';
import ENV from '../../utils/env.utils';
import { getGoogle } from '../../services/google.service';
import { IAddressComplete, IMapBody, IWeather } from '../../interfaces/weather.interface';

console.disableYellowBox = true;

const HomeScreen: React.FC<DrawerScreenProps<RouteDrawerParamList, 'HomeScreen'>> = () => {
  const mapRef = useRef<any>(null);
  const [initialRegion, setInitialRegion] = useState<Region | undefined>(undefined);
  const [weather, setWeather] = useState<IWeather>();
  const [apiBody, setApiBody] = useState<IMapBody>();

  const handleInitialRegion = async () => {
    const location = await getLocation();

    let coordinates = SOUTH_AMERICA;

    if (location) {
      coordinates = {
        latitudeDelta: DELTA_LOCATION,
        longitudeDelta: DELTA_LOCATION,
        latitude: location?.latitude,
        longitude: location?.longitude,
      };
    }

    setInitialRegion(coordinates);
  };

  const handleGetWeather = async () => {
    const location = await getLocation();

    if (location) {
      const urlGoogle = formatUrl(GOOGLE_API.GEOCODE, [
        ENV.GOOGLE_MAPS_API_KEY,
        location?.latitude,
        location?.longitude,
      ]) as GOOGLE_API.GEOCODE;

      const resultGoogleApi: IAddressComplete = await getGoogle(urlGoogle);
      const city = resultGoogleApi.results[0].formatted_address.split(',')[2].split('-')[0];

      const url = formatUrl(OPEN_WEATHER.GET, [ENV.OPEN_WEATHER_KEY, city]) as OPEN_WEATHER.GET;
      const resultWeather: IWeather = await getOpenWeather(url);
      setWeather(resultWeather);
    }
  };

  const handleGetCityByCoordenates = async (lat: number | undefined, lon: number | undefined) => {
    const urlGoogle = formatUrl(GOOGLE_API.GEOCODE, [ENV.GOOGLE_MAPS_API_KEY, lat, lon]) as GOOGLE_API.GEOCODE;

    const resultGoogleApi: IAddressComplete = await getGoogle(urlGoogle);
    const city = resultGoogleApi.results[0].address_components[1].long_name;

    return city;
  };

  const handleGetWeatherByPosition = async () => {
    const city = await handleGetCityByCoordenates(apiBody?.nearLeft.lat, apiBody?.nearLeft.lon);

    const url = formatUrl(OPEN_WEATHER.GET, [ENV.OPEN_WEATHER_KEY, city]) as OPEN_WEATHER.GET;
    const resultWeather: IWeather = await getOpenWeather(url);

    setWeather(resultWeather);
  };
  useEffect(() => {
    handleGetWeatherByPosition();
  }, [apiBody]);

  useEffect(() => {
    handleInitialRegion();
    handleGetWeather();
  }, []);

  return (
    <S.HomeScreenContainer>
      <MapView mapRef={mapRef} initialRegion={initialRegion} onRegionChange={setApiBody} />
      {weather && (
        <S.WeatherDetailsContainer>
          <S.WeatherDetailsText>Tempo: {weather.weather[0].description}</S.WeatherDetailsText>
          <S.WeatherDetailsText>Cidade: {weather.name}</S.WeatherDetailsText>
        </S.WeatherDetailsContainer>
      )}
    </S.HomeScreenContainer>
  );
};

export default HomeScreen;
