<template>
    <div>
        <!--====== APPIE PAGE TITLE PART START ======-->

        <div class="zakat-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="zakat-title-item">
                            
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

<style></style>
