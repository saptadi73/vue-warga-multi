<template>
    <div>
        <div class="flex">
            <SidebarMain/>
            <div class="">
                <NavBarPreline/>
                <div><CardWidthFull/></div>
                <div><CardTwoFormSample/></div>
                <div><DataTableSinglePage/></div>
               
            </div>
        </div>
    </div>
</template>

<script setup>
import SidebarMain from '../components/SidebarMain.vue';
import NavBarPreline from '../components/NavBarPreline.vue';
import CardWidthFull from '../components/CardWidthFull.vue';
import CardGridView from '../components/CardGridView.vue';
import CardTwoFormSample from '../components/CardTwoFormSample.vue';
import DataTableSinglePage from '../components/DataTableSinglePage.vue';


</script>

<style lang="scss" scoped>

</style>