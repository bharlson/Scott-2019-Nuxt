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
            <photo-gallery></photo-gallery>
        </section>
    </main>
</template>
<script>
import config from '@/config'
import PhotoGallery from '@/components/sections/PhotoGallery'

export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Photos',
        }
    },
    components:{
        PhotoGallery
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
            }
        }
    }

    .vgs{
        padding-top: 2rem;
    }

</style>



