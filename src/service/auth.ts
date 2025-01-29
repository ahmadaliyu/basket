import {LoginRequest, LoginResponse} from '@/interfaces';
import {appApi} from './appApi';

export const authAPI = appApi.injectEndpoints({
  overrideExisting: true,
  endpoints(build) {
    return {
      login: build.mutation<LoginResponse, LoginRequest>({
        query(arg) {
          return {
            url: 'auth/login',
            method: 'POST',
            body: arg,
          };
        },
      }),
    };
  },
});

export const {useLoginMutation} = authAPI;
