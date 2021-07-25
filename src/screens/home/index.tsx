import { HomeScreenContainer } from './styles';
import React, { useEffect, useRef, useState } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import MapView from '../../components/map/mapview';
import { RouteDrawerParamList } from '../homeDrawer';
import { DELTA_LOCATION, SOUTH_AMERICA } from '../../constants/map.constants';
import { Region } from 'react-native-maps';
import { getLocation } from '../../config/location.config';

const HomeScreen: React.FC<DrawerScreenProps<RouteDrawerParamList, 'HomeScreen'>> = () => {
  const mapRef = useRef<any>(null);
  const [initialRegion, setInitialRegion] = useState<Region | undefined>(undefined);

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

  useEffect(() => {
    handleInitialRegion();
  }, []);

  return (
    <HomeScreenContainer>
      <MapView mapRef={mapRef} initialRegion={initialRegion}></MapView>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
