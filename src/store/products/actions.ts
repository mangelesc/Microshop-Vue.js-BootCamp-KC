import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const actions: ActionTree<IProductsState, IState> = {
    async fetchProducts({ commit }, pag: any[]) {
        // uso un array para mandar la información para filtar en la petición http
        // usamos la mutación para poner isLoading = true
        commit("setIsLoading", true);

        // obtenemos los datos de manera asíncrona, array de usuarios
        const { data } = await fakeShopApi.get<
            unknown,
            AxiosResponse<Product[]>
        >(`/products?offset=${pag[0]}&limit=${pag[1]}&title=${pag[2]}`);

        // usamos la mutación para poner isLoading = false
        commit("setIsLoading", false);

        // usamos la mutación para volcar los datos obtenidos en la variable del state products
        commit("setProducts", data);
    },
    async fetchProductById({ commit }, productId: number) {
        // usamos la mutación para poner isLoading = true
        commit("setIsLoading", true);

        // obtenemos los datos de manera asíncrona
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
            `/products/${productId}`
        );

        // usamos la mutación para poner isLoading = false
        commit("setIsLoading", false);

        // usamos la mutación para volcar los datos obtenidos en la variable del state products
        commit("setSelectedProduct", data);
    },
};

export default actions;
