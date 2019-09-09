<template>
    <div class="container">
        <div class="row">
            <div class="card-columns">
                <div class="card photo-gallery-card" v-for="(photo, i) in photos.slice(0,limit)" :key="photo">
                    <img class="img img-fluid photo-gallery-card-img" 
                        :src="photo" 
                        @click="onClick(i)" 
                        >
                    <vue-gallery-slideshow :images="photos.slice(0,limit)" :index="index" @close="index = null"></vue-gallery-slideshow>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <a class="btn btn-purple btn-layered btn-block" href="https://www.facebook.com/pg/ElectScott2019/photos/" target="_blank">
                    <img src="@/assets/img/icons/camera-emoji.png" alt="video emoji" class="img-emoji">
                    More Photos
                </a>
            </div>
        </div>
    </div>    
</template>

<script>
import config from '@/config'
import axios from 'axios'
import VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
    data(){
        return{
            pageTitle:'Photos',
            images:[],
            photos:[],
            index: null
        }
    },
    props:{
        limit:{
            type:Number
        }
    },
    methods:{
      onClick(i) {
        this.index = i;
      }
    },
    beforeMount(){
        axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d6598b7978d9906252bcf688fb5a250d&user_id=184320423%40N05&format=json&nojsoncallback=1')
            .then(res=>{
                const data = res.data.photos.photo
                // const posts = data.filter(item => item.categories.length > 0)
                for(let i of data){
                    this.photos.push('https://live.staticflickr.com/' + i.server + '/' + i.id + '_' + i.secret+'.jpg' )     
                }
            })
            .catch(error=>console.log(error))
    },
    components:{
        'vue-gallery-slideshow' : VueGallerySlideshow
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/partials/variables.scss';
    .photo-gallery{
        &-card{
            background-color: transparent;
            text-align: center;
            &-img{
                margin: 0 auto;
                cursor:pointer;
            }
        }
    }

    .vgs{
        padding-top: 2rem;
        background-color:$purple;
        &__container{
            background: transparent;
        }
    }

</style>
