import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://1wk2xps2l4.execute-api.eu-west-1.amazonaws.com/default/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})