/**
 * Reference
 * https://github.com/rrebase/cra-template-typekit/blob/master/template/src/store.ts
 */

import { configureStore, Action, combineReducers } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import counterReducer from './feature/counter/CounterSlice'

export const rootReducer = combineReducers({
  counter: counterReducer
})

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export type AppDispatch = typeof store.dispatch

export default store
