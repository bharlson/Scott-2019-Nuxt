<template>
  <div>
    <notice></notice>
    <home-header></home-header>
    <header-nav></header-nav>
    <nuxt />
    <home-footer></home-footer>
  </div>
</template>

<script>
import Notice from '@/components/sections/Notice.vue'
import HomeHeader from '@/components/Home/HomeHeader.vue'
import HeaderNav from '@/components/Nav/HeaderNav.vue'
import HomeFooter from '@/components/Home/HomeFooter.vue'
export default {
    components: {
        Notice,
        HomeFooter,
        HomeHeader,
        HeaderNav
    }
}
</script>
