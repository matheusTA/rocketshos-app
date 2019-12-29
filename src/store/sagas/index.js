import { all, takeLatest } from 'redux-saga/effects';
import { addToCart, updateAmount } from './cart';
import { Types } from '../ducks/cart';

export default function* rootSaga() {
  yield all([
    takeLatest(Types.ADD_CART_REQUEST, addToCart),
    takeLatest(Types.UPDATE_AMOUNT_REQUEST, updateAmount),
  ]);
}
