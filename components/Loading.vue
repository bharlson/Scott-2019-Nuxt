<template>
 <div class="loader" v-if="loading">
     <!-- <div class="loader-spinner"></div> -->
 </div>
</template>
<script>
export default {
    data(){
        return{
            loading:false
        }
    },
    methods:{
        start(){
            this.loading = true
        },
        finish(){
            this.loading = false
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/partials/variables.scss';
    // .loader-spinner{
    //     position: absolute;
    //     top:0;
    //     z-index:10000;
    //     height:100px;
    //     width:100px;
    //     border-radius:100%;
    //     border:2px 20px solid $white;
    //     background-color: $purple;
    //     animation: loader-spin linear 2s infinite;
    // }
    .loader{
        position:absolute;
        height: 100vh;
        width: 100vw;
        z-index:10000;
        background-color: $red;
        opacity:1;
        animation: loader-opacity 2s ease-in alternate infinite;
    }

    @keyframes loader-opacity {
        to{
            opacity:0;
        }
    }
    @keyframes loader-spin {
        to{
            transform:rotate(360deg);
            border:20px solid $white;
        }
    }
</style>
