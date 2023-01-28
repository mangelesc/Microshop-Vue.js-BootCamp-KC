<template>
    <div class="footer">
        <div class="leftFooter">
            <slot name="leftfootersection"></slot>
        </div>
        <div>
            <nav class="imgFooter" v-if="links">
                <a
                    v-for="link in links"
                    :key="link.label"
                    :href="link.link"
                    :class="link.style"
                    target="_blank"
                >
                    <img class="RRSS" :src="link.img" />
                </a>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Link } from "@/interfaces/link";

export default defineComponent({
    name: "CustomFooter",
    props: {
        links: {
            type: Array as PropType<Link[]>,
            default(): Link[] {
                return [
                    {
                        label: "",
                        link: "https://linkedin.com/in/mariaangelescordoba/",
                        img: "scr/assets/imgs/linkedin.png",
                    },
                    {
                        label: "",
                        link: "https://www.github.com/mangelesc",
                        img: "scr/assets/imgs/github.png",
                    },
                ];
            },
        },
    },
});
</script>

<style scoped>
.footer {
    background: #454851;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-height: 120px;
    padding: 50px 0;
}

.imgFooter {
    display: flex;
    justify-content: space-between;
}

.RRSS {
    margin: 0px 10px;
    height: 2em;
}
.leftfootersection {
    color: #ffffff;
}
</style>
