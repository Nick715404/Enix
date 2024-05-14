import { createStore } from "effector";
import { IProduct } from "../interfaces/interfaces";
import { GetAllProductsFX } from "../api/server/products";

export const $products = createStore<IProduct[]>([]);
$products.on(GetAllProductsFX.doneData, (state, products) => [...state, ...products])