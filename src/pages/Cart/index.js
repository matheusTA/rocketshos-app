import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';

import { Container, ContainerCartOff, TextCartOff } from './styles';

export default function Cart() {
  const products = useSelector((state) => state.cart.products);

  return (
    <Container>
      {products.length > 0
        ? <Text>Itens</Text>
        : (
          <ContainerCartOff>
            <Icon name="cart-off" color="#FFF" size={100} />
            <TextCartOff>Sem itens no carrinho</TextCartOff>
          </ContainerCartOff>
        )}
    </Container>
  );
}
