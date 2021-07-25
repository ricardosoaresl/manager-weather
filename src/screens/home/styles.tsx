import styled from 'styled-components/native';

export const HomeScreenContainer = styled.View`
  flex: 1;
`;

export const WeatherDetailsContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const WeatherDetailsText = styled.Text`
  color: ${({ theme }) => theme.colors.absolutes.white};
  font-size: 25px;
  font-weight: bold;
`;
