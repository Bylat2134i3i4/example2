import { configureStore } from '@reduxjs/toolkit';
import { userAPI } from '../http';
import GeneralSlice from './Slices/GeneralSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    slice: GeneralSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
