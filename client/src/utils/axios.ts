import axios from "axios/index";

export const api = axios.create({
    baseURL: 'http://localhost:8000',
});