<template>
    <div class="wsk-cp-product">
        <div class="wsk-cp-img">
            <img
                :src="product.images[0]"
                :alt="product.title"
                class="img-responsive"
            />
        </div>
        <div class="wsk-cp-text">
            <div class="category">
                <span>{{ product.category.name }}</span>
            </div>
            <div class="title-product">
                <h3>{{ product.title }}</h3>
            </div>
            <div class="description-prod">
                <p>{{ product.description }}</p>
            </div>
            <div class="card-footer">
                <div class="wcf-left">
                    <span class="price"> {{ product.price }} €</span>
                </div>
                <div class="wcf-right">
                    <a @click="$emit('goDetail', product)" class="buy-btn">
                        +
                    </a>
                </div>
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
@import url("https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i");
body {
    font-family: "Muli", sans-serif;
    background: #ddd;
}
.shell {
    padding: 80px 0;
}
.wsk-cp-product {
    width: 300px;
    background: #f5f3e0;
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    position: relative;
    margin: 20px auto;
}
.wsk-cp-img {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -khtml-transform: translate(-50%);
    width: 100%;
    padding: 15px;
    transition: all 0.2s ease-in-out;
}
.wsk-cp-img img {
    width: 100%;
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
}
.wsk-cp-product:hover .wsk-cp-img {
    top: -40px;
}
.wsk-cp-product:hover .wsk-cp-img img {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
.wsk-cp-text {
    padding-top: 80%;
}
.wsk-cp-text .category {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    margin-bottom: 45px;
    position: relative;
    transition: all 0.2s ease-in-out;
}
.wsk-cp-text .category > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -khtml-transform: translate(-50%, -50%);
}
.wsk-cp-text .category > span {
    padding: 15px 40px;
    font-size: 12pt;
    border: 1px solid #858080;
    background: #d59c86;
    color: #fff;
    box-shadow: 0 19px 38px rgba(146, 143, 143, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 27px;
    transition: all 0.05s ease-in-out;
}
.wsk-cp-product:hover .wsk-cp-text .category > span {
    border-color: #ddd;
    box-shadow: none;
    padding: 11px 28px;
}
.wsk-cp-product:hover .wsk-cp-text .category {
    margin-top: 0px;
}
.wsk-cp-text .title-product {
    text-align: center;
}
.wsk-cp-text .title-product h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 15px auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
}
.wsk-cp-text .description-prod p {
    margin: 0;
}
/* Truncate */
.wsk-cp-text .description-prod {
    text-align: center;
    width: 100%;
    height: 62px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 15px;
}
.card-footer {
    padding: 25px 0 5px;
    border-top: 1px solid #ddd;
}
.card-footer:after,
.card-footer:before {
    content: "";
    display: table;
}
.card-footer:after {
    clear: both;
}

.card-footer .wcf-left {
    float: left;
}

.card-footer .wcf-right {
    float: right;
}

.price {
    font-size: 18px;
    font-weight: bold;
    padding-left: 15px;
}
a {
    text-decoration: none;
}
a.buy-btn {
    display: block;
    color: #d59c86;
    text-align: center;
    font-size: 18px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;
    border: 1px solid #212121;
    transition: all 0.2s ease-in-out;
    font-size: 25pt;
    border-color: #d59c86;
    background: #d59c86;
    color: #fff;
    text-decoration: none;
}
a.buy-btn:hover,
a.buy-btn:active,
a.buy-btn:focus {
    border-color: #d59c86;
    background: #ffffff;
    color: #d59c86;
    text-decoration: none;
    cursor: pointer;
}
@media screen and (max-width: 991px) {
    .wsk-cp-product {
        margin: 40px auto;
    }
    .wsk-cp-product .wsk-cp-img {
        top: -40px;
    }
    .wsk-cp-product .wsk-cp-img img {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
    .wsk-cp-product .wsk-cp-text .category > span {
        border-color: #ddd;
        box-shadow: none;
        padding: 11px 28px;
    }
    .wsk-cp-product .wsk-cp-text .category {
        margin-top: 0px;
    }
    a.buy-btn {
        border-color: #d59c86;
        background: #d59c86;
        color: #fff;
    }
}
</style>
