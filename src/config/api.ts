import axios from 'axios';
import { CamelcaseSerializer } from 'cerealizr';

const camelSerializer = new CamelcaseSerializer();

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  transformResponse: [data => camelSerializer.serialize(JSON.parse(data))]
});

export default api;
