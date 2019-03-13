<template>
    <main>
        <section class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1>{{pageTitle}}</h1>
                    </div>
                </div>
            </div>
        </section>
        <section-press></section-press>
        <section class="page-content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2>heading</h2>
                        <h3>subhead</h3>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import SectionPress from '@/components/sections/Press.vue'
export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Press'
        }
    },
    components: {
        SectionPress
    }
}
</script>
<style lang="scss" scoped>

</style>



