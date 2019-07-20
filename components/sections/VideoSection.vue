<template>
    <section if="videos">
        <div class="container">
            <div class="row mb-lg-4">
                <div class="col">
                    <h1>{{title}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4" v-for="i in videos" :key="i">
                    <iframe class="fb-video" :src="i.videoSrc + '&' + videoWidth" 
                    :width="videoWidth" :height="videoWidth"
                    style="border:none;overflow:hidden" 
                    scrolling="no" 
                    frameborder="0" 
                    allowTransparency="true" 
                    allowFullScreen="true">
                    </iframe>
                    <h4 class="text-center mt-3 fb-video-caption">{{i.videoCaption}}</h4>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            videoWidth:325,
            videos:[
                {
                    videoSrc:'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FElectScott2019%2Fvideos%2F660891347657405%2F&show_text=0',
                    videoCaption:'PUBLIC HOUSING'
                },
                {
                    videoSrc:'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FElectScott2019%2Fvideos%2F461907931235608%2F&show_text=0',
                    videoCaption:'SEATTLE GREEN NEW DEAL'
                },
                {
                    videoSrc:'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FElectScott2019%2Fvideos%2F338478540397524%2F&show_text=0',
                    videoCaption:'FREELANCER\'S BILL OF RIGHTS'
                }
            ]
        }
    },
    props:{
        title:{
            type:String
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/partials/variables.scss';
.fb-video{
    display: block;
    margin:0 auto;
    margin-top: 1.5rem;
    @media(min-width:$lg){
        margin-top: 0;
    }
    &-caption{
        font-size:1.4rem;
    }
}
</style>
