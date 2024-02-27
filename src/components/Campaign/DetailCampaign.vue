<template>
<div>

    <div class="single-post-area">
        <div class="post-thumb">
            <img :src="gambar" alt="" class="w-100 rounded">
        </div>
        <p>{{ deskripsi }}</p>
    </div>
</div>
</template>

<script>
export default {
    props: {
        deskripsi: {
            type: String,
        },
        gambar: {
            type: Boolean,
        }
    }

}
</script>

<style></style>
