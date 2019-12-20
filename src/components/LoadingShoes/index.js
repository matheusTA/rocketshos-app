import React from 'react';
import Protypes from 'prop-types';

import shoesAnimated from '../../../shoesAnimeted.json';
import { Container, LoadingText, ContainerLottier } from './styles';

export default function LoadingShoes({ loading }) {
  return (
    <Container>
      <ContainerLottier source={shoesAnimated} resizeMode="contain" autoSize autoPlay={loading} loop={loading} />
      <LoadingText>Carregando...</LoadingText>
    </Container>

  );
}

LoadingShoes.propTypes = {
  loading: Protypes.bool.isRequired,
};
