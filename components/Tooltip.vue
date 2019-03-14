<template>
    <span class="custom-tooltip">
        <slot></slot>
    </span>
</template>
<script>
export default {
    data(){
        return{
            tooltipText:''
        }
    }

}
</script>

<style lang="scss">
    @import '@/assets/scss/partials/variables.scss';
    .custom-tooltip{
        position: absolute;
        display: inline;
        text-align: center;
        color:rgba($red,0.75);
        font-size: 0.75rem;
        padding: 0.1rem;
        width: 100%;
        bottom:-1.5rem;
        right:0;
        animation: tooltip-fade 1s ease 1;

        @keyframes tooltip-fade {
        0% {opacity:0;}
        100% {opacity: 1;}
        }
    }
</style>
