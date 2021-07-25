import React from 'react';
import { CustomMapView } from './styles';
import { Region } from 'react-native-maps';

interface MapViewProps {
  mapRef: React.MutableRefObject<any>;
  initialRegion?: Region;
}

const MapView: React.FC<MapViewProps> = ({ children, mapRef, initialRegion }) => {
  return (
    <CustomMapView showsUserLocation ref={mapRef} initialRegion={initialRegion}>
      {children}
    </CustomMapView>
  );
};

export default MapView;
