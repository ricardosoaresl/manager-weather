import GetLocation from 'react-native-get-location';

export const getLocation = async () => {
  try {
    return await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });
  } catch (err) {
    return false;
  }
};
