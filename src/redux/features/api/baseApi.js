import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getUser: builder.query({
      query:()=> '/users'
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});
export const { useGetPostsQuery,useGetPostByIdQuery,useGetUserQuery } = baseApi;
export default baseApi;
