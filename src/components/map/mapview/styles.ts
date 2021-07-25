import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components/native';
import MapStyle from './mapstyle.json';

export const CustomMapView = styled(MapView).attrs(({ onPress }) => ({
  showsBuildings: false,
  showsCompass: false,
  showsPointsOfInterest: false,
  showsScale: false,
  showsTraffic: false,
  showsIndoors: false,
  showsIndoorLevelPicker: false,
  showsMyLocationButton: false,
  customMapStyle: MapStyle,
  provider: PROVIDER_GOOGLE,
  onPress: onPress,
}))`
  flex: 1;
`;
