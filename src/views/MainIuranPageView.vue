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
<<<<<<< HEAD
import SidebarJoss from '../components/SidebarJoss.vue';
=======
import SidebarJoss from './SidebarJoss.vue';
>>>>>>> a4394ce363169c84fbc1e7e250c77d2a721bc878
import NavBarPreline from '../components/NavBarPreline.vue';
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped>

</style>