import { createStore } from "effector";
import { IProduct } from "../interfaces/interfaces";

export const $products = createStore<IProduct[]>([]);