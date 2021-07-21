import React, {useEffect} from 'react';
import Screens from './src/screens';
import * as S from './src/global-styles';

const App: React.FC<React.ReactNode> = () => {
  return (
    <S.ContainerFlex>
      <Screens />
    </S.ContainerFlex>
  );
};

export default App;
