import { createEffect } from "effector";
import { api } from "../axios/axiosInstance";

export const GetAllProductsFX = createEffect(async () => {
  try {
    const { data } = await api.get('/product/all');
    return data;
  }
  catch (error) {
    throw error
  }
});