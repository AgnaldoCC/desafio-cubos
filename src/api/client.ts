import axios from "axios";
import getConfig from 'next/config';

export const baseURL = "https://api.themoviedb.org/3";
const { publicRuntimeConfig } = getConfig();

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: publicRuntimeConfig.api_key,
    language: 'pt-BR'
  }
});

export default apiClient;
