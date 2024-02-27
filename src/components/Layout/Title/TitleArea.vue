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
                                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                    <li class="breadcrumb-item active" aria-current="page">{{ current }}</li>
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
    props: {
        heading: {
            type: String,
        },
        desk: {
            type: String,
        }
    }

}
</script>

<style>

</style>
