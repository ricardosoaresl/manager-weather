import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import * as S from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { translate } from '../../translations';

const DrawerComponent: React.FC<DrawerContentComponentProps> = () => {
  return (
    <S.DrawerContainer>
      <S.DrawerHeaderContainer>
        <S.DrawerHeaderAvatarContainer>
          <S.DrawerHeaderIconAvatar />
        </S.DrawerHeaderAvatarContainer>
        <S.DrawerHeaderProfileInfoContainer>
          <S.DrawerHeaderProfileName>Ricardo Soares</S.DrawerHeaderProfileName>
          <S.DrawerHeaderProfileEmail>ricardo.soaresl@gmail.com</S.DrawerHeaderProfileEmail>
        </S.DrawerHeaderProfileInfoContainer>
      </S.DrawerHeaderContainer>
      <S.DrawerItemContainer>
        <ScrollView>
          <S.DrawerItemMenu label={translate('DrawerItemMenu01')} onPress={() => console.log('link menu 01')} />
          <S.DrawerItemMenu label={translate('DrawerItemMenu02')} onPress={() => console.log('link menu 02')} />
          <S.DrawerItemMenu label={translate('DrawerItemMenu03')} onPress={() => console.log('link menu 03')} />
          <S.DrawerItemMenu label={translate('DrawerItemMenu04')} onPress={() => console.log('link menu 04')} />
        </ScrollView>
      </S.DrawerItemContainer>
      <S.DrawerFooterContainer>
        <S.DrawerFooterAppNameText>Weather Manager</S.DrawerFooterAppNameText>
        <S.DrawerFooterAppVersionText>{translate('DrawerVersion')} 0.0.1</S.DrawerFooterAppVersionText>
      </S.DrawerFooterContainer>
    </S.DrawerContainer>
  );
};

export default DrawerComponent;
