<template>
    <div></div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
// import { useRouter, useRoute } from 'vue-router'//引入路由
export default {
    name: '',
    setup() {
        // let router = useRouter(), route = useRoute();
        const data = reactive({

        })
        onBeforeMount(() => {
        })
        onMounted(() => {
        })
        const refData = toRefs(data);
        return {
            ...refData,
        }

    }
};
</script>
<style scoped>

</style>