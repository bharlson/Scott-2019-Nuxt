<template>
<div>
    <div class="card loading-card loading-card-1" style="height:450px">
        <div class="loading-card-img" ></div>
    </div>
    <div class="card loading-card loading-card-2" style="height:500px">
    </div>
    <div class="card loading-card loading-card-3">
    </div>
    <div class="card loading-card loading-card-4">
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/partials/variables.scss';
.loading-card{
    width:100%;
    padding:2rem 1.5rem 1rem 1.5rem;
    height:400px;
    @media(min-width:$md){
        display: block;
        max-width: 80%;
        margin: 0 auto;
    }
    &-img{
        height:200px;
        width:330px;
        background-color:#f0f0f5;
        display: block;
        margin:0 auto;
        animation:cardImgAnimation 0.5s;
    }
    &-1{
        animation:cardAnimation 2s ease infinite;
    }
    &-2{
        animation:cardAnimation 2s ease infinite;
        animation-delay:0.5s;
    }
    &-3{
        animation:cardAnimation 2s ease infinite;
        animation-delay:2s;
    }
    
}
@keyframes cardAnimation{
    0%{opacity:0}
    50%{opacity:1}
    100%{opacity:0}
}
@keyframes cardImgAnimation{
    0%{opacity:0}
    100%{opacity:0}
}
</style>

