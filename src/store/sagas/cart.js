import { Alert } from 'react-native';
import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Creators as CartActions } from '../ducks/cart';

export function* addToCart({ id }) {
  const productExists = yield select(
    (state) => state.cart.products.find((p) => p.id === id),
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque!');
    yield put(CartActions.updateAmountError());
    return;
  }

  if (productExists) {
    yield put(CartActions.updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(CartActions.addCartSuccess(data));
  }
}

export function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque!');
    yield put(CartActions.updateAmountError());
    return;
  }

  yield put(CartActions.updateAmountSuccess(id, amount));
}
