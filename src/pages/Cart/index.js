import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import loadingAnimeted from '../../../loadingAnimeted.json';
import { Creators as CartActions } from '../../store/ducks/cart';
import { formatPrice } from '../../util/format';

import {
  Container,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  ContainerCartOff,
  TextCartOff,
  TotalContainer,
  TotalText,
  TotalPrice,
  Order,
  OrderText,
  LoadingIcon,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const loadingAddToCart = useSelector((state) => state.cart.loading);
  const totalPrice = useSelector((state) => formatPrice(
    state.cart.products.reduce((totalSum, product) => totalSum + product.amount * product.price, 0),
  ));
  const products = useSelector((state) => state.cart.products.map((product) => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })));

  function incrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {products.length
        ? (
          <>
            {products.map((product) => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete onPress={() => dispatch(CartActions.removeCart(product.id))}>
                    <Icon
                      name="delete-forever"
                      size={24}
                      color="#7159c1"
                    />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => decrementAmount(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton onPress={() => incrementAmount(product)}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductControlButton>
                  <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                </ProductControls>
              </Product>
            ))}
            <TotalContainer>
              <TotalText>Total</TotalText>
              <TotalPrice>{totalPrice}</TotalPrice>
              <Order>
                {loadingAddToCart
                  ? (
                    <LoadingIcon
                      source={loadingAnimeted}
                      autoPlay={loadingAddToCart}
                      loop={loadingAddToCart}
                    />
                  )
                  : (<OrderText>FINALIZAR PEDIDO</OrderText>)}
              </Order>
            </TotalContainer>
          </>
        )
        : (
          <ContainerCartOff>
            <Icon name="remove-shopping-cart" color="#999" size={100} />
            <TextCartOff>Sem itens no carrinho</TextCartOff>
          </ContainerCartOff>
        )}
    </Container>
  );
}
