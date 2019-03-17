<template>
  <div class="default">
    <default-header></default-header>
    <nuxt />
    <default-outreach></default-outreach>
    <default-footer></default-footer>
  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/partials/variables.scss';
  .default{
    header{
        background-color:$purple;
        padding-top: 1rem;
        @media(min-width:$lg){
            padding-top: 2rem;
        }
        nav{    
            padding-top: 0;
            @media(min-width:$md){
                padding-top: 2rem;
            }
            @media(min-width:$xl){
                padding-top: 4rem;
            }
        }
    }

    main{
      min-height:calc(100vh - 436px);
      background-color:$light-gray;
    }
    
    .page-title{
        background-color: $purple;
        padding-top: 0;
        padding-bottom: 2rem;
        @media(min-width:$md){
          padding-top:1.5rem;
        }
        @media(min-width:$lg){
          padding:2rem 0 2rem 0;
        }
        @media(min-width:$xl){
          padding:4rem 0 2rem 0;
        }

      h1{
        text-align: left;
        font-size: 2.5rem;
        color:$white;
        @media(min-width:$md){
          font-size:3rem;
        }
        @media(min-width:$lg){
          font-size:4rem;
        }
      }
    }

    h2{
      color:$red;
      text-transform: uppercase;
      font-family: $heading-font;
      font-size: 2.5rem;
    }
    h3{
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.25rem;
      font-size: 1.5rem;
    }
  }
</style>

<script>
import DefaultHeader from '@/components/Default/DefaultHeader.vue'
import DefaultOutreach from '@/components/Default/DefaultOutreach.vue'
import DefaultFooter from '@/components/Default/DefaultFooter.vue'
export default {
  components: {
    DefaultHeader,
    DefaultOutreach,
    DefaultFooter
  }
}
</script>

