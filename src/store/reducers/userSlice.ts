import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/store';
import {authAPI} from '@/service/auth';
import {LoginResponse} from '@/interfaces';

interface UserState extends Partial<LoginResponse> {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
}

const initialState: UserState = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  accessToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.accessToken = '';
    },
    loadUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      authAPI.endpoints.login.matchFulfilled,
      (state, {payload}) => {
        state.accessToken = payload.accessToken;
        (state.firstName = payload.firstName),
          (state.lastName = payload.lastName);
      },
    );
  },
});

export const selectUserStore = (state: RootState) => state.user;
export const {logout, loadUser} = userSlice.actions;
export default userSlice.reducer;
