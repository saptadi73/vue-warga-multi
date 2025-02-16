<template>
    <div>
        <div class="flex">
            <SidebarJoss/>
            <div class="">
                <NavBarPreline/>
                <div><RouterView/></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBarPreline from '../components/NavBarPreline.vue';
import { RouterView } from 'vue-router';
import SidebarJoss from '../components/SidebarJoss.vue';

</script>

<style lang="scss" scoped>

</style>