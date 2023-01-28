import tokenUser from "@/router/role-guard";
import axios, { AxiosHeaders } from "axios";

const fakeShopApi = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
    // params: {
    //     key: 'lasdkfjlsdkjfgñslkhjgvlfdskhgñ349u039dfv8fhrh0943'
    // },
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

fakeShopApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token") ?? "";
    if (token) {
        (config.headers as AxiosHeaders).set(
            "Authorization",
            `Bearer ${token}`
        ); // JWT
    }
    // Cuando devuelva erro 404, redirigir al login, con las role-guards
    return config;
});

export default fakeShopApi;
