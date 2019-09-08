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
        </section>
    </main>
</template>
<script>
export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Photos'
        }
    },
    components:{
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/partials/variables.scss';
</style>



