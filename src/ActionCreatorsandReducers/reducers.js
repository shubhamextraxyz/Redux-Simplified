import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement, incrementByAmount } from './actioncreators';

const initialState = {
  value: 0
};

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {// yha pe jo state use ho rha, wo initial value ke equal hai
      state.value += 1;
    })
    .addCase(decrement, (state) => {
      state.value -= 1;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;// ek parameter lega "dispatch(incrementByAmount(5))" phir state ka present value aur payload add ho jaega
    });
});

export default counterReducer;
