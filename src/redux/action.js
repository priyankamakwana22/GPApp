// Actions tell what to do

import {ADD_TO_CART} from './constants';

export function addToCart(item) {
    console.log('addToCart',item);
  return {
    type: ADD_TO_CART,
    data: item,
  };
}
