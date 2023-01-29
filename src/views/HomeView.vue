<template>
    <ProductSection></ProductSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductSection from "@/components/ProductsSection.vue";

export default defineComponent({
    name: "HomeView",
    components: {
        ProductSection,
    },
});
</script>
<style scoped></style>
