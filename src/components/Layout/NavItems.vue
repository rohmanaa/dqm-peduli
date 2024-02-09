<template>
    <ul>
        <li v-for="(item, index) in menuItems" :key="index">
            <router-link v-if="item.path" :to="item.path" style="text-transform: capitalize;">{{ item.name }}</router-link>
            <a v-else href="#" style="text-transform: capitalize;">{{ item.name }} <i v-if="nasted" class="fal fa-angle-down"></i></a>
            <ul v-if="item.childrens && nasted" class="sub-menu">
                <li v-for="(subItem, subIndex) in item.childrens" :key="subIndex">
                    <router-link v-if="subItem.path" :to="subItem.path" style="text-transform: capitalize;">{{ subItem.name }}</router-link>
                    <a v-else href="#" style="text-transform: capitalize;">{{ subItem.name }}</a>
                </li>
            </ul>
        </li>
    </ul>

</template>

<script>
export default {
    props:{
        menuItems: {
            type:Array,
            required:true,
        },
         nasted:{
            type:Boolean,
            default:true
        }
    },

    

}
</script>

<style>

</style>