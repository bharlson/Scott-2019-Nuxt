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
        <section-press>
        </section-press>
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



