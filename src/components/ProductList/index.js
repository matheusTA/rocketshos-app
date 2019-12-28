import React from 'react';
import { FlatList } from 'react-native';
import Protypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default function ProductList({ products }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Product>
          <ProductImage
            source={{ uri: item.image }}
          />

          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.priceFormat}</ProductPrice>

          <ProductAddButton>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
              <ProductAmountText>0</ProductAmountText>
            </ProductAmount>

            <AddButtonText>ADICIONAR</AddButtonText>
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
