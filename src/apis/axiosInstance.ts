import axios from "axios";

import { BASE_URL, NETWORK } from "@constants/api";

import { setAuthorization } from "./interceptors";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: NETWORK.TIMEOUT,
  useAuth: true
});

axiosInstance.interceptors.request.use(setAuthorization);
