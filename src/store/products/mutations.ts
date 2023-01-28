import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { IProductsState } from "./state";

const mutations: MutationTree<IProductsState> = {
    setProducts(state: IProductsState, products: Product[]) {
        state.products = products;
    },
    setIsLoading(state: IProductsState, value: boolean) {
        state.isLoading = value;
    },
    setSelectedProduct(state, product: Product) {
        state.selectedProduct = product;
    },
};

export default mutations;
