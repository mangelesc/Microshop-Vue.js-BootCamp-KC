<template>
    <div v-if="!isLoading" id="container">
        <div class="product-details">
            <h1>{{ user.name }}</h1>
            <p class="information">
                <ul>
                    <li><b>Email: </b>{{ user.email }}</li>
                    <li><b>Password: </b>{{ user.password }}</li>
                    <li><b>Role: </b>{{ user.Role }}</li>
                </ul> 
            </p>
        </div>
        <div class="product-image">
            <img :src="user.avatar" alt="Avatar" />
        </div>
        <!--  End product image  -->
    </div>
    <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useUsers from "@/composables/useUsers";

export default defineComponent({
    components: {},
    props: {},
    setup() {
        const { user, fetchUserById, isLoading } = useUsers();
        const idUser: number = parseInt(localStorage["idUser"]);
        fetchUserById(idUser);

        return {
            isLoading,
            user,
        };
    },
});
</script>
<style scoped>
/* D59C86 
    F4F2DF*/
#container {
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
    background: #F4F2DF;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    margin: 5em auto;
    height: 400px;
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
    font-size: 40pt;
    font-weight: bolder;
    color: #344055;
    margin-bottom: 15px;
}

#container .product-details > p {
    font-family: "Farsan", cursive;
    text-align: left;
    font-size: 20px;
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
</style>
