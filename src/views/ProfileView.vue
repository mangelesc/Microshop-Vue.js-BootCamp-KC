<template>
    <CustomHeader></CustomHeader>
    <div v-if="!isLoading">
        <h1>Nombre: {{ user.name }}</h1>
        <h2>Email: {{ user.email }}</h2>
        <img :src="user.avatar" alt="" />
        <h2>Role: {{ user.Role }}</h2>
    </div>
    <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useUsers from "@/composables/useUsers";
import CustomHeader from "@/components/CustomHeader.vue";
import { User } from "@/models/user";

export default defineComponent({
    components: {
        CustomHeader,
    },
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
