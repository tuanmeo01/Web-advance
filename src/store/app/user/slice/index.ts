import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { UserState } from './types';
import useUserFromSaga from './saga';
import { getLocal } from 'utils/getLocal';
import { stringify } from 'querystring';

export const initialState: UserState = getLocal('users') || {
  user: false,
  loading: false,
  username: '',
  password: '',
  id: 0,
  message: '',
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (
      state: UserState,
      action: {
        payload: {
          username: string;
          password: string;
        };
      },
    ) => {
      state.loading = true;
    },
    loginSuccess(state: UserState, action: { payload: UserState }) {
      state.loading = false;
      state.user = true;
      state.message = 'success';
      localStorage.setItem('users', JSON.stringify(state));
    },
    loginFail: (state: UserState) => {
      state.loading = false;
    },
    logout: state => {
      state.user = false;
    },
  },
});

export const { actions: useAction, reducer } = slice;

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: useUserFromSaga });
  return { actions: slice.actions };
};
