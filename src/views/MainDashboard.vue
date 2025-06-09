<template>
    <div>
        <div class="flex">
            <SidebarJoss/>
            <div class="">
                <NavBarPreline/>
                <div><DashboardBarisPertama/></div>
                <div><DashboardBarisKedua/></div>
                <div><DashboardBarisKetiga/></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBarPreline from '../components/NavBarPreline.vue';
import SidebarJoss from '../components/SidebarJoss.vue';
import DashboardBarisPertama from '../components/DashboardBarisPertama.vue';
import DashboardBarisKedua from '../components/DaboardBarisKedua.vue';
import DashboardBarisKetiga from '../components/DashboardBarisKetiga.vue';


</script>

<style lang="scss" scoped>

</style>