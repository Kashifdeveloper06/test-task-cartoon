import axios from 'axios';

const ROOT_URL = "https://rickandmortyapi.com";
const BASE_URL = `${ROOT_URL}/api/`;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export {
  ROOT_URL,
  BASE_URL,
  client,
};
