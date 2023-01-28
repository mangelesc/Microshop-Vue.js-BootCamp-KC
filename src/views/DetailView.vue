<template>
    <div v-if="!isLoading">
        <h1>{{ product.title }}</h1>
        <h2>Description: {{ product.description }}</h2>
        <h2>Category: {{ product.category.name }}</h2>
        <h2>Price: {{ product.price }} €</h2>
        <img :src="product.images[0]" alt="" />
        <!-- <h2>Role: {{ productRole }}</h2> -->

        <button @click="addElementToCart(product)" class="btn btn-success">
            Añadir al Carrito
        </button>
    </div>
    <div v-else>Loading...</div>
</template>

<script lang="ts">
import { useCart } from "@/composables/useCart";
import useProducts from "@/composables/useProducts";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true,
        },
        productRole: String,
    },
    setup(props) {
        const { addElementToCart } = useCart();
        const { product, fetchProductById, isLoading } = useProducts();

        fetchProductById(props.id);

        return {
            product,
            addElementToCart,
            isLoading,
        };
    },
});
</script>
