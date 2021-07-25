import React from 'react';
import { CustomMapView } from './styles';
import { Region } from 'react-native-maps';
import { IMapBody } from '../../../interfaces/weather.interface';

interface MapViewProps {
  mapRef: React.MutableRefObject<any>;
  initialRegion?: Region;
  onRegionChange: (mapBody: IMapBody) => void;
}

const MapView: React.FC<MapViewProps> = ({ children, mapRef, initialRegion, onRegionChange }) => {
  const handleRegionChange = async (region: Region) => {
    const boundBox = {
      minLng: region.longitude - region.longitudeDelta / 2,
      minLat: region.latitude - region.latitudeDelta / 2,
      maxLng: region.longitude + region.longitudeDelta / 2,
      maxLat: region.latitude + region.latitudeDelta / 2,
    };

    const zoom = Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);

    const apiBody = {
      nearLeft: { lat: boundBox.minLat, lon: boundBox.minLng },
      nearRight: { lat: boundBox.maxLat, lon: boundBox.minLng },
      farLeft: { lat: boundBox.minLat, lon: boundBox.maxLng },
      farRight: { lat: boundBox.maxLat, lon: boundBox.maxLng },
      zoom,
    };

    if (onRegionChange) onRegionChange(apiBody);
  };

  return (
    <CustomMapView
      showsUserLocation
      ref={mapRef}
      initialRegion={initialRegion}
      onRegionChangeComplete={handleRegionChange}
    >
      {children}
    </CustomMapView>
  );
};

export default MapView;
