import { configureStore } from '@reduxjs/toolkit';

import GeneralSlice from './Slices/GeneralSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    slice: GeneralSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
