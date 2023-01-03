import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const instance = axios.create({
  baseURL: process.env.BASE_URL
});

export default instance;
