// Actions tells us what to do but reducers perform that operation

import {ADD_TO_CART} from './constants';

const initialState = {
  addToCartData :{}
};

const storeReducer = (state = initialState, action) => {
  console.log('storeReducer action',action);
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, 
        addToCartData:action.data};
    default:
      return state;
  }
};
export default storeReducer;
