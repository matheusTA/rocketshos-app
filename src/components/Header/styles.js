import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom-color: #f4f4f4;
  border-bottom-width: 1px;
  margin: 0 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 230px;
  height: 30px;
`;
