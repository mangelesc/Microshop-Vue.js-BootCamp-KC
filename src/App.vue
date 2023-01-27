<template>
    <NavBarLinks></NavBarLinks>
    <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBarLinks from "./components/NavBarLinks.vue";

export default defineComponent({
    name: "AppComponent",
    components: {
        NavBarLinks,
    },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap");

* {
    padding: 0;
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
