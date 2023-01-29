<template>
    <CustomHeader></CustomHeader>
    <router-view />
    <custom-footer>
        <template v-slot:leftfootersection>
            <div>
                <h5>Práctica Vue.js</h5>
                <h4><n>Mª Ángeles Córdoba</n></h4>
            </div>
        </template>
    </custom-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomHeader from "@/components/CustomHeader.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default defineComponent({
    name: "AppComponent",
    components: {
        CustomHeader,
        CustomFooter,
    },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap");

* {
    padding: 0;
    margin: 0;
    font-family: Arvo;
}

router-view {
    background-color: #dddddd;
}

#app {
    font-family: Arvo;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #454851;
}
</style>
