import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import api from '../../services/api';
import LoadingShoes from '../../components/LoadingShoes';
import { Container } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPorducts() {
      const response = await api.get('/products');

      setProducts(response.data);
      setLoading(false);
    }

    loadPorducts();
  }, []);

  return (
    <Container>
      {loading ? (<LoadingShoes loading={loading} />)
        : (<Text>Olaasdfasd asd</Text>)}
    </Container>
  );
}
