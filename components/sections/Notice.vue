<template>
<div class="notice">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-lg-2">
                <p>Vote Scott</p>
                <p>Aug. 6th</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/partials/variables.scss';
.notice{
    background-color: $red;
    padding:1rem 0 0 0 ;
    @media(min-width:$md){
        padding-top: 2rem;
    }
    p{
        margin:0;
        padding:0;
        font-size:1.5rem;
        text-transform: uppercase;
        color:$white;
        font-family:$serif;
        line-height:1.5rem;
        text-align: center;
    }

}
</style>
