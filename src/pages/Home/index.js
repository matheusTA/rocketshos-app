import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import LoadingShoes from '../../components/LoadingShoes';
import ProductList from '../../components/ProductList';
import { Container } from './styles';
import { formatPrice } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/products')
      .then((response) => {
        const data = response.data.map((product) => ({
          ...product,
          priceFormat: formatPrice(product.price),
        }));

        setProducts(data);
        setLoading(false);
      })
      .catch();
  }, []);

  return (
    <Container>
      {loading ? (<LoadingShoes loading={loading} />) : (<ProductList products={products} />)}
    </Container>
  );
}
