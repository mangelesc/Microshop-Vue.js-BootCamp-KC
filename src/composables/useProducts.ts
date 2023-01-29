import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
    const store = useStore();

    return {
        // GETTERS
        products: computed(() => store.getters["products/getProducts"]),
        isLoading: computed(() => store.getters["products/getIsLoading"]),
        product: computed(() => store.getters["products/getProduct"]),

        // ACTIONS
        // Por defecto para que busque los 12 primeros productos, sin flto de título
        fetchProducts: (pag: any[] = [0, 12, ""]) =>
            store.dispatch("products/fetchProducts", pag),
        fetchProductById: (productId: number) =>
            store.dispatch("products/fetchProductById", productId),
    };
};

export default useProducts;
