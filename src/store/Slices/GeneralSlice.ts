import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Reg {
  id: string | null;
  token: string | null;
}

const initialState: Reg = {
  id: null,
  token: null,
};

const GeneralSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string; token: string }>) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: action.payload.id,
          token: action.payload.token,
        }),
      );
    },
    logOut: (state) => {
      state.id = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = GeneralSlice.actions;

export default GeneralSlice.reducer;

export const selectState = (state: RootState) => state.slice;
