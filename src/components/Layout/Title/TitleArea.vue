<template>
<div>
    <!--====== APPIE PAGE TITLE PART START ======-->

    <div class="appie-page-title-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-page-title-item">
                        <h3 class="title">{{ heading }}</h3>
                        <nav aria-label="breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">    <b-icon icon="house-fill"></b-icon> Home</router-link>
                                    </li>
                                    <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item" :class="{ active: index === breadcrumbs.length - 1 }">
                                        <span>{{ crumb.label }}</span>
                                    </li>
                                </ol>
                            </nav>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!--====== APPIE PAGE TITLE PART ENDS ======-->
</div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbs: [],
        };
    },
    props: {
        heading: {
            type: String,
        },
        desk: {
            type: String,
        }
    },
    computed: {
        current() {
            // Assume you have a route name defined in your routes
            return this.$route.name || 'Unknown Page';
        },
    },
    created() {
        // Update breadcrumbs when the route changes
        this.updateBreadcrumbs();
    },
    watch: {
        $route: 'updateBreadcrumbs',
    },
    methods: {
        updateBreadcrumbs() {
            const matchedRoutes = this.$route.matched;

            this.breadcrumbs = matchedRoutes.map((route) => ({
                label: route.meta.breadcrumb || route.name,
                to: route.path,
            }));
        },
    },

}
</script>

<style>

</style>
