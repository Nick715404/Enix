import axios from "axios";

export const api = axios.create({
  baseURL: 'https://буккросинг.рф:3200/api'
})