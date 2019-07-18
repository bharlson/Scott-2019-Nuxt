<template>
    <div class="col-md-4">
        <iframe class="fb-video" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FElectScott2019%2Fvideos%2F338478540397524%2F&show_text=0&width=476" 
        width="476" height="476"
        style="border:none;overflow:hidden" 
        scrolling="no" 
        frameborder="0" 
        allowTransparency="true" 
        allowFullScreen="true">
        </iframe>
        <h5>FREELANCER'S BILL OF RIGHTS</h5>
    </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            default:'i'
        }
    }
}
</script>

<style lang='scss'>
.fb-video{
    display: block;
    margin:0 auto;
}
</style>
