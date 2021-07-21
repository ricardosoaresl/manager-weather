import styled from 'styled-components/native';

export const ContainerFlex = styled.SafeAreaView.attrs(() => ({
  forceInset: { top: 'always' },
}))`
  flex: 1;
  background-color: #fff;
`;
