<template>
    <div class="product-item">
        <div class="product-avatar">
            <img :src="product.images[0]" :alt="product.title" />
        </div>
        <div class="product-info">
            <div class="product-name">{{ product.title }}</div>
            <div class="product-email">{{ product.price }} €</div>
            <div class="product-category">{{ product.category.name }}</div>
            <div class="buttons">
                <button
                    class="btn btn-sm btn-primary"
                    @click="$emit('addCart', product)"
                >
                    Al Carro
                </button>
                <button
                    class="btn btn-sm btn-success"
                    @click="$emit('goDetail', product)"
                >
                    Detalle
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Product } from "@/models/product";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true,
        },
    },
});
</script>

<style scoped>
.product-item {
    width: 300px;
    display: flex;
    border: 1px solid black;
}

.product-avatar {
    width: 50%;
}
.product-avatar > img {
    width: 100%;
    height: auto;
}
</style>
