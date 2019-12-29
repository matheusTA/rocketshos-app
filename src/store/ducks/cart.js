/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

export const { Types, Creators } = createActions({
  addCartRequest: ['id'],
  addCartSuccess: ['product'],
  addCartError: [],
  removeCart: ['id'],
  updateAmountRequest: ['id', 'amount'],
  updateAmountSuccess: ['id', 'amount'],
  updateAmountError: [],
});

const INITIAL_STATE = {
  loading: false,
  products: [],
};

const addCartRequest = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  draft.loading = true;
});

const addCartSuccess = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  const { product } = action;

  draft.products.push(product);
  draft.loading = false;
});

const addCartError = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  draft.loading = false;
});

const removeCart = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  const productIndex = draft.products.findIndex((p) => p.id === action.id);

  if (productIndex >= 0) {
    draft.products.splice(productIndex, 1);
  }
});

const updateAmountRequest = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  draft.loading = true;
});

const updateAmountSuccess = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  const productIndex = draft.products.findIndex((p) => p.id === action.id);

  if (productIndex >= 0) {
    draft.products[productIndex].amount = Number(action.amount);
  }
  draft.loading = false;
});

const updateAmountError = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  draft.loading = false;
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_CART_REQUEST]: addCartRequest,
  [Types.ADD_CART_SUCCESS]: addCartSuccess,
  [Types.ADD_CART_ERROR]: addCartError,
  [Types.REMOVE_CART]: removeCart,
  [Types.UPDATE_AMOUNT_REQUEST]: updateAmountRequest,
  [Types.UPDATE_AMOUNT_SUCCESS]: updateAmountSuccess,
  [Types.UPDATE_AMOUNT_ERROR]: updateAmountError,
});
