import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

interface Reg {
  id: string | null;
  accessToken: string | null;
}

const initialState: Reg = {
  id: null,
  accessToken: null,
};

const GeneralSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    AuthUser: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('token', action.payload.accessToken);
      cookies.set('refresh', action.payload.refreshToken, { maxAge: 604800 });
    },
    RegUser: (state, action: PayloadAction<{ id: string }>) => {
      state.id = action.payload.id;
      state.accessToken = null;
    },

    LogOut: (state) => {
      cookies.remove('refresh');
      localStorage.clear();
      state.id = null;
      state.accessToken = null;
    },
  },
});

export const { AuthUser, RegUser, LogOut } = GeneralSlice.actions;

export default GeneralSlice.reducer;

export const selectState = (state: RootState) => state.slice;
