import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

export const Container = styled.View`
  margin: 15px;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
`;

export const Product = styled.View`
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
 height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 17px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ProductDelete = styled.TouchableOpacity`
`;

export const ProductControls = styled.View`
 flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;
export const ProductControlButton = styled.TouchableOpacity`
`;
export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const ContainerCartOff = styled.View`
  align-items: center
`;

export const TextCartOff = styled.Text`
  font-size: 25px;
  color: #999;
  margin: 15px 0 0 0;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  text-align: center;
  font-size: 17px;
  color: #999;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const Order = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 4px;
  background: #7159c1;
  align-items: center;
`;

export const OrderText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 17px;
`;

export const LoadingIcon = styled(Lottie)`
  width: 20px;
  height: 20px;
`;
