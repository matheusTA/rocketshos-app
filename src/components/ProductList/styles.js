import styled from 'styled-components/native';

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 17px;
`;

export const ProductPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0 20px 0;
`;

export const ProductAddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
