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
        // headers: {
        //   "Access-Control-Allow-Origin": "https://dashboard.asy-syifa.site/",
        //   "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
        //   "Access-Control-Allow-Headers": "origin, x-api-key, x-requested-with, content-type, accept, access-control-request-method, access-control-allow-headers, authorization, observe, enctype, content-length, x-csrf-token",
        //   "Access-Control-Allow-Credentials": true,
        // },
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
