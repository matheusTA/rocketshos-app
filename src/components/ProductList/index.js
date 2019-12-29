/* eslint-disable no-param-reassign */
import React from 'react';
import { FlatList } from 'react-native';
import Lottie from 'lottie-react-native';
import Protypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Creators as CartActions } from '../../store/ducks/cart';
import {
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';
import loadingAnimeted from '../../../loadingAnimeted.json';

export default function ProductList({ products }) {
  const dispatch = useDispatch();
  const loadingAddToCart = useSelector((state) => state.cart.loading);
  const amount = useSelector((state) => state.cart.products.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;

    return sumAmount;
  }, {}));

  return (
    <FlatList
      data={products}
      keyExtractor={(product) => `${product.id}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Product>
          <ProductImage
            source={{ uri: item.image }}
          />

          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.priceFormat}</ProductPrice>

          <ProductAddButton onPress={() => dispatch(CartActions.addCartRequest(item.id))}>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
              <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
            </ProductAmount>
            {loadingAddToCart
              ? (
                <Lottie
                  source={loadingAnimeted}
                  autoPlay={loadingAddToCart}
                  loop={loadingAddToCart}
                />
              )
              : (<AddButtonText>ADICIONAR</AddButtonText>)}
          </ProductAddButton>
        </Product>
      )}
    />
  );
}

ProductList.propTypes = {
  products: Protypes.arrayOf(Protypes.shape({
    id: Protypes.number,
    title: Protypes.string,
    image: Protypes.string,
    price: Protypes.number,
    priceFormat: Protypes.string,
  })).isRequired,
};
