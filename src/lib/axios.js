import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://flask-production-358d.up.railway.app"
})