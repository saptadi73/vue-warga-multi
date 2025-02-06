<template>
    <div>
        <div class="flex">
            <SidebarMain/>
            <div class="">
                <NavBarPreline/>
                <div><RouterView/></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SidebarMain from '../components/SidebarMain.vue';
import NavBarPreline from '../components/NavBarPreline.vue';
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped>

</style>