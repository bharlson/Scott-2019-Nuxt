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
    @import '@/assets/scss/partials/variables.scss';
    header{
        background-color:$purple;
        padding-top: 1rem;
        nav{    
            padding-top: 0;
            @media(min-width:$lg){
                padding-top: 2rem;
            }
        }
    }

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

