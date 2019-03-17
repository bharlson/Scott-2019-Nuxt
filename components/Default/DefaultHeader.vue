<template>
    <header>
        <div class="container">
            <div class="row">
                <logo></logo>
                <div class="col-md-12 col-lg-10">
                    <header-nav></header-nav>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>


</style>

<script>
import Logo from '@/components/Logo.vue'
import HeaderNav from '@/components/Nav/HeaderNav.vue'
export default {
    components: {
        Logo,
        HeaderNav
    },
    props: {
        pageTitle: String
    }
}
</script>

