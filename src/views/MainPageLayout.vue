<template>
    <div>
        <div class="flex">
            <SidebarMain/>
            <div class="">
                <NavBarPreline/>
                <div><CardWidthFull/></div>
                <div><CardGridView/></div>
                <div><CardColTiga/></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SidebarMain from '../components/SidebarMain.vue';
import NavbarMain from '../components/NavbarMain.vue';
import NavBarPreline from '../components/NavBarPreline.vue';
import CardWidthFull from '../components/CardWidthFull.vue';
import CardGridView from '../components/CardGridView.vue';
import CardColTiga from '../components/CardColTiga.vue';

</script>

<style lang="scss" scoped>

</style>