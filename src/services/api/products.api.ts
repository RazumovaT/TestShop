import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_QUERY } from "../lib/constants";
import {
  ProductDataList,
  SingleProduct,
} from "../../types/products/productsTypes";

type Cart = {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
};

export const productsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_QUERY }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductDataList, string | void>({
      query: (category) =>
        category ? `products/category/${category}` : "products",
    }),
    getSingleProduct: builder.query<SingleProduct, number>({
      query: (productId) => `products/${productId}`,
    }),
    addProductToCart: builder.mutation<
      {
        date: string;
        id: number;
        products: { productId: number; quantity: number }[];
        userId: number;
      },
      {
        userId: number;
        date: string;
        products: { productId: number; quantity: number }[];
      }
    >({
      query: (newCart) => ({ url: "carts", method: "POST", body: newCart }),
    }),

    getSingleCart: builder.query<Cart | undefined, number>({
      query: (cartId) => `carts/${cartId}`,
      providesTags: (result, _, cartId) =>
        result ? [{ type: "Cart", id: cartId }] : [],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductToCartMutation,
  useGetSingleCartQuery,
} = productsApi;
