import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getMembers, getMessages } from "./data";

export const reduxApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    fetchMembers: builder.query<any, void>({
      queryFn(arg, queryApi, extraOptions, baseQuery) {
        return {
          data: getMembers().then(function (response: any) {
            return response;
          }),
        };
      },
    }),
    fetchMessages: builder.query<any, void>({
      queryFn(arg, queryApi, extraOptions, baseQuery) {
        return {
          data: getMessages().then(function (response: any) {
            const sortedMessages = [
              ...response.sort((a: { timestamp: string; }, b: { timestamp: string; }) => {
                const newDate = new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();

                return newDate;
              }),
            ];
            return sortedMessages;
          }),
        };
      },
    }),
  }),
});

export const { useFetchMembersQuery, useFetchMessagesQuery } = reduxApi;
