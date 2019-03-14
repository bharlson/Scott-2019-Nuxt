<template>
    <header>
        <div class="container">
            <div class="row">
                <logo></logo>
                <div class="col-md-12 col-lg-10">
                    <nav-list></nav-list>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>


</style>

<script>
import Logo from '@/components/Logo.vue'
import headerNav from '@/components/Nav.vue'
import navList from '@/components/NavList.vue'
export default {
    components: {
        Logo,
        headerNav,
        navList
    },
    props: {
        pageTitle: String
    }
}
</script>

