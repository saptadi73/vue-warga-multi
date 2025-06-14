<template>
    <div>
        <div class="flex">
            <SidebarJoss/>
            <div class="">
                <NavBarPreline/>
                <div><AchievementList/></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SidebarJoss from '../components/SidebarJoss.vue';
import NavBarPreline from '../components/NavBarPreline.vue';
import { RouterView } from 'vue-router';
import AchievementList from '../components/AchievementList.vue';

</script>

<style lang="scss" scoped>

</style>