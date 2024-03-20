<template>
<div>
    <sidebar-home-three :sidebar="sidebar" @toggleSidebar="toggleSidebar" :menuItems="navs" />
    <header-home-three @toggleSidebar="toggleSidebar" :menuItems="navs" />
</div>
</template>

<script>
import HeaderHomeThree from './HeaderHomeThree.vue';
import SidebarHomeThree from '../Sidebar/SidebarHomeThree.vue';

export default {
    components: {
        HeaderHomeThree,
        SidebarHomeThree
    },
    data() {
        return {
            sidebar: false,
            navs: [{
                    name: 'Donasi',
                    path: '/campaign'
                },
                {
                    name: 'Zakat',
                    childrens: [{
                            name: 'Maal',
                            path: '/zakat-maal'
                        },
                        {
                            name: 'Penghasilan',
                            path: '/zakat-penghasilan'
                        },
                        {
                            name: 'Fidyah',
                            path: '/zakat-fidyah'
                        },
                        {
                            name: 'Perak',
                            path: '/zakat-perak'
                        },
                        {
                            name: 'Emas',
                            path: '/zakat-emas'
                        },
                    ],
                },
                {
                    name: 'sedekah',
                    path: '/sedekah'
                },
                {
                    name: 'wakaf',
                    path: '/wakaf'
                },
                {
                    name: 'Qurban',
                    path: '/qurban'
                },

            ]
        }
    },
    mounted() {
        document.addEventListener('scroll', this.topToBottom)
    },

    methods: {
        topToBottom() {
            const result = document.querySelector('.back-to-top')
            if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
                result.style.display = "block";
            } else {
                result.style.display = "none";
            }
        },
        toggleSidebar() {
            this.sidebar = !this.sidebar
        },
    }

}
</script>
