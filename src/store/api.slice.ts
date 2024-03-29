import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const baseApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
  }),
  endpoints: (builder) => ({
    getListHero: builder.query<any, void>({
      query: () => ({
        url: "/hero",
        method: "GET",
      }),
    }),
    getListActivity: builder.query<any, void>({
      query: () => ({
        url: "/activity",
        method: "GET",
      }),
    }),
    getListGallery: builder.query<any, void>({
      query: () => ({
        url: "/gallery",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetListHeroQuery,
  useGetListGalleryQuery,
  useGetListActivityQuery,
} = baseApi;
