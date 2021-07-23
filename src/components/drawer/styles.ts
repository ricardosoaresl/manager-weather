import { DrawerItem } from '@react-navigation/drawer';
import styled from 'styled-components/native';

export const DrawerContainer = styled.View`
  flex: 1;
`;

export const DrawerHeaderContainer = styled.View`
  flex-direction: row;
  padding: 40px 0 40px 16px;
  border-bottom-color: ${({ theme }) => theme.colors.textAccent};
  border-bottom-width: 1px;
`;

const AVATAR_SIZE = 70;
export const DrawerHeaderAvatarContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${AVATAR_SIZE / 2}px;
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const DrawerHeaderIconAvatar = styled.View``;

export const DrawerHeaderProfileInfoContainer = styled.View`
  align-self: center;
`;

export const DrawerHeaderProfileName = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const DrawerHeaderProfileEmail = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

export const DrawerItemContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
`;

export const DrawerItemMenu = styled(DrawerItem).attrs(({ theme }) => ({
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 16,
    paddingTop: 16,
  },
  pressColor: theme.colors.text,
}))``;

export const DrawerFooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
`;

export const DrawerFooterAppNameText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const DrawerFooterAppVersionText = styled.Text`
  justify-content: flex-end;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
`;
