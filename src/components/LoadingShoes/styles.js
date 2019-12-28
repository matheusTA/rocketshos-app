import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

export const Container = styled.SafeAreaView`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  color: #fff;
  font-size: 20px
`;

export const ContainerLottier = styled(Lottie)`
  width: 150px;
  height: 150px;
`;
