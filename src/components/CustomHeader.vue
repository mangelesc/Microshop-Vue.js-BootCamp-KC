<template>
    <NavBarLinks></NavBarLinks>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarLinks from "@/components/NavBarLinks.vue";

export default defineComponent({
    name: "CustomHeader",
    components: {
        NavBarLinks,
    },
});
</script>
