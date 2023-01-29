<template>
    <div class="home">
        <div class="hello">
            <h2 class="row">
                <b>Hi there {{ nombre }}!</b>
            </h2>
            <form class="row" @submit.prevent="fecthProductSearch">
                <div class="col-auto">
                    <input
                        type="text"
                        class="form-control"
                        v-model.lazy="searchInput"
                        placeholder="Search for products"
                        minlength="3"
                    />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn mb-3">
                        <img src="@/assets/imgs/search.png" alt="Seach" />
                    </button>
                </div>
            </form>
        </div>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <div class="product-list">
                <ProductItem
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    @addCart="addElementToCart"
                    @goDetail="goDetail"
                />
            </div>
        </div>
    </div>
    <!-- <div>
        <button @click="loadMore()"></button>
    </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useProducts from "@/composables/useProducts";
import ProductItem from "@/components/ProductItem.vue";
import { useCart } from "@/composables/useCart";
import { Product } from "@/models/product";
import { useRouter } from "vue-router";
import { controlledComputed } from "@vueuse/core";

export default defineComponent({
    name: "ProductSection",
    components: {
        ProductItem,
    },

    setup() {
        const { products, isLoading, fetchProducts } = useProducts();
        const { addElementToCart } = useCart();
        const router = useRouter();
        const nombre = localStorage.getItem("nameUser");
        const searchInput = ref<string>("");

        const fecthProductSearch = () => {
            fetchProducts([1, 12, searchInput.value]);
        };
        fetchProducts();

        return {
            fecthProductSearch,
            searchInput,
            nombre,
            products,
            isLoading,
            addElementToCart,
            goDetail: (product: Product) =>
                router.push({ name: "detail", params: { id: product.id } }),
        };
    },
});
</script>
<style scoped>
.home {
    padding: 0px 40px;
}
.row,
b {
    padding: 20px 20px 10px 20px;
    display: flex !important;
    justify-content: center;
}
.product-list {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    gap: 1rem 1rem;
}
.hello {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.btn {
    padding: 5px 5px;
    background-color: #d59c86;
    color: #454851;
    font-weight: bolder;
    text-shadow: #b39f9f 1px 1px 2px;
}
.btn img {
    height: 25px;
}

.form-control {
    width: 500px;
    border-right: 0px;
}
.form-control:hover {
    background-color: #f5f3e0;
    border: solid 1px #f3f3f4;
    box-shadow: 0 0 4px #d59c86;
}
.form-control:focus {
    background-color: white;
    border: solid 1px #f3f3f4;
    box-shadow: 0 0 4px #d59c86;
}

.btn:hover {
    color: #ffffff;
    font-weight: bolder;
    text-shadow: #454851 1px 1px 2px;
}
searchBar-input {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}
</style>
