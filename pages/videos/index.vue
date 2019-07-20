<template>
    <main>
        <section class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1>{{pageTitle}}</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <video-section class="mt-0 pt-0 pb-3"></video-section>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <a class="btn btn-purple btn-layered btn-block" href="https://www.facebook.com/pg/ElectScott2019/videos/" target="_blank">
                            <img src="@/assets/img/icons/video-camera-emoji.png" alt="video emoji" class="img-emoji">
                            More Videos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import VideoSection from '@/components/sections/VideoSection.vue'
export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Videos'
        }
    },
    components:{
        VideoSection
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/partials/variables.scss';
</style>



