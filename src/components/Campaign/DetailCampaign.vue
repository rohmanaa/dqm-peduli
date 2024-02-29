<template>
<div>
    <div class="single-post-area">
        <div class="post-thumb">
            <img :src="gambar" alt="" class="w-100 rounded">
        </div>
         <h4 class="article-title"> {{ judul }} </h4>
        <p>{{ deskripsi }}</p>
    </div>
</div>
</template>

<script>
export default {
    props: {
        judul: {
            type: String,
        },
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
