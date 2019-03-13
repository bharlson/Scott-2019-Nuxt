<template>
  <div>
    <home-header></home-header>
    <nav-list></nav-list>
    <nuxt />
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '@/components/HomeHeader.vue'
import homeNav from '@/components/Nav.vue'
import navList from '@/components/NavList.vue'
import homeFooter from '@/components/Footer.vue'
export default {
    components: {
        homeFooter,
        homeNav,
        homeHeader,
        navList
    }
}
</script>
