import {SET_USER_NAME, SET_USER_AGE, INCREASE_AGE} from './actions';

const initialState = {
  name: '',
  age: 0,
};

function userReducer(state = initialState, action) {
  console.log('action__--->', action);
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, name: action.payload};
    case SET_USER_AGE:
      return {...state, age: action.payload};
    case INCREASE_AGE:
      return {...state, age: Number(state.age) + 1};

    default:
      return state;
  }
}

export default userReducer;
