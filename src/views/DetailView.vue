<template>
    <div v-if="!isLoading" id="container">
        <div class="product-details">
            <h1>{{ product.title }}</h1>
            <p class="information">
                <ul>
                    <li><b>Category: </b>{{ product.category.name }}</li>
                    <li><b>Description: </b>{{ product.description }}</li>
                </ul> 
            </p>
            <div class="control">
                <button class="btn">
                <span class="price"> {{ product.price }} €</span>
            </button>

	
</div>
        </div>
        <div class="product-image">
            <img :src="product.images[0]" alt="Avatar" />
        </div>
        <!--  End product image  -->
    </div>
    <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useProducts from "@/composables/useProducts";

export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true,
        },
        productRole: String,
    },
    setup(props) {
        const { product, fetchProductById, isLoading } = useProducts();

        fetchProductById(props.id);

        return {
            product,
            isLoading,
        };
    },
});
</script>
<style scoped>

.btn {
    padding: 5px 15px;
    background-color: #d59c86;
    color: #454851;
    font-weight: bolder;
    font-size: 18pt;

    text-shadow: #b39f9f 1px 1px 2px;
}
.btn:hover {
    color: #ffffff;
    font-weight: bolder;
    text-shadow: #454851 1px 1px 2px;
}

#container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    background: #F4F2DF;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    margin: 5em auto;
    min-height: 200px;
    width: 900px;
}

.product-details {
    position: relative;
    text-align: center;
    overflow: hidden;
    padding: 35px;
    height: 100%;
    float: left;
    width: 50%;
}

#container .product-details h1 {
    display: inline-block;
    position: relative;
    font-size: 22pt;
    font-weight: bolder;
    color: #344055;
    margin-bottom: 15px;
}

#container .product-details > p {
    font-family: "Farsan", cursive;
    text-align: left;
    font-size: 18px;
    color: #7d7d7d;
}

.product-image {
    transition: all 0.3s ease-out;
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: 100%;
    float: right;
    width: 50%;
}

#container img {
    width: 100%;
    height: 100%;
}

.product-image:hover .info {
    transform: translateX(0);
}

.product-image:hover img {
    transition: all 0.3s ease-out;
}
.product-image:hover img {
    transform: scale(1.2, 1.2);
}



/* buy */
.btn .buy {z-index: 3; font-weight: bolder;}

.btn:hover .price {transform: translateX(-110%);}

.btn:hover .shopping-cart {transform: translateX(0%);}

</style>
