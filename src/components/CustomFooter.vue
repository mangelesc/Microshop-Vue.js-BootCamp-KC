<template>
    <div class="footer">
        <div class="leftFooter">
            <slot name="leftfootersection"></slot>
        </div>
        <div>
            <nav class="imgFooter">
                <a
                    href="https://github.com/mangelesc"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img class="RRSS" src="@/assets/imgs/github.png" />
                </a>
                <a
                    href="https://www.linkedin.com/in/mariaangelescordoba"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img class="RRSS" src="@/assets/imgs/github.png" />
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
