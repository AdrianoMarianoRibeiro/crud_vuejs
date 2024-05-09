import axios, { CreateAxiosDefaults } from 'axios';

const defaultOptions: CreateAxiosDefaults = {
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const httpClient = axios.create(defaultOptions);
