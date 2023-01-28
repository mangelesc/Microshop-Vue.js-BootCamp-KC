<template>
    <div class="home">
        <SeachBar msg="MicroShop App" />
    </div>
    <div class="home">
        <div v-if="isLoading">Cargando...</div>
        <div class="user-list" v-else>
            <UserItem
                v-for="user in users"
                :key="user.id"
                :user="user"
                @addCart="addElementToCart"
                @goDetail="goDetail"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SeachBar from "@/components/SeachBar.vue";
import useUsers from "@/composables/useUsers";
import UserItem from "@/components/UserItem.vue";
import { useCart } from "@/composables/useCart";
import { User } from "@/models/user";
import { useRouter } from "vue-router"; // @ is an alias to /src

export default defineComponent({
    name: "HomeView",
    components: {
        SeachBar,
        UserItem,
    },
    setup() {
        const { users, isLoading, fetchUsers } = useUsers();
        const { addElementToCart } = useCart();
        const router = useRouter();

        fetchUsers();

        return {
            users,
            isLoading,
            addElementToCart,
            goDetail: (user: User) =>
                router.push({ name: "detail", params: { id: user.id } }),
        };
    },
});
</script>
