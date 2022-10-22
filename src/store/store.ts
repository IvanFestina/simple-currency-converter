import { configureStore } from '@reduxjs/toolkit';

import currencyReducer from './currencyReducer';

export const store = configureStore({
  reducer: {
    request: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type NullableType<T> = null | T;
