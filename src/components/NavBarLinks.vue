<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'home' }">Microshop</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'profile' }">My Profile</router-link>
            </li>
            <!-- <li>
                <router-link :to="{ name: 'detail', params: { id: 1 } }"
                    >Detail</router-link
                >
            </li> -->
            <li>
                <router-link :to="{ name: 'about' }"
                    >About this App</router-link
                >
            </li>
            <li>
                <router-link :to="{ name: 'login' }">Log Out</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped>
nav {
    min-height: 50px;
    background-color: #d59c86;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    padding: 15px 17% 15px 17%;
}

ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

li {
    padding: 1rem;
    font-weight: bold;
}
a {
    color: white;
    text-decoration: none;
    font-size: 14pt;
    padding: 10px;
    text-shadow: #454851 1px 1px 2px;
}
a:hover {
    color: #454851;
    font-weight: bolder;
}
</style>
