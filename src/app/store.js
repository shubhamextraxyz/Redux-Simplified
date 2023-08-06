// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
// export default configureStore({
//   reducer: { counter: counterReducer}
// })

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../ActionCreatorsandReducers/reducers'
export default configureStore({
  reducer: {
     counter: counterReducer
    }
})