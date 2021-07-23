import React from 'react';
import Screens from './src/screens';
import * as S from './src/global-styles';
import theme from './src/themes';
import { ThemeProvider } from 'styled-components';

const App: React.FC<React.ReactNode> = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.ContainerFlex>
        <Screens />
      </S.ContainerFlex>
    </ThemeProvider>
  );
};

export default App;
