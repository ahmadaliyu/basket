import {User, UsersResponse} from '@/interfaces';
import {RootState} from '@/store';
import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dummyjson.com/', // strictly for the purpose of this test, should be in env
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).user.accessToken;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: retry(baseQuery, {maxRetries: 4}),
  tagTypes: ['USERS'],
  endpoints: builder => ({
    getUsers: builder.query<UsersResponse, void>({
      query(arg) {
        return {
          url: 'users',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetUsersQuery} = appApi;
