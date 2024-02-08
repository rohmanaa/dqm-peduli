<template>
    <ul>
        <li v-for="(item, index) in menuItems" :key="index">
            <b-link style="text-transform: capitalize;" v-if="item.path" :href="item.path">{{item.name}}</b-link>
            <a v-else href="#" style="text-transform: capitalize;">{{item.name}} <i v-if="nasted" class="fal fa-angle-down"></i></a>
            <ul v-if="item.childrens && nasted" class="sub-menu">
                <li v-for="(subItem, index) in item.childrens" :key="index">
                    <b-link style="text-transform: capitalize;" :to="subItem.path?subItem.path:'#'">{{subItem.name}}</b-link>
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
    }

}
</script>

<style>

</style>