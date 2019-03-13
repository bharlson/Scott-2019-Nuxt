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
        <section class="page-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <article v-for="i in endorsementItems" :key="i" class="endorsement-item">
                            <q>
                                {{i.quote}}
                            </q>
                            <h2>{{i.name}}</h2>
                            <h3>{{i.credit}}</h3>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Endorsements',
            endorsementItems:{
                endorsementItem1:{
                    quote:'I’m thrilled to support Shaun because I believe in the thoughtful approach he brings to progressive policy. He’s honed a forward-looking vision that links the environment and equity.',
                    name:'BRADY PIñERO WALKINSHAW',
                    credit:'FORMER WA STATE LEGISLATOR, 43rd LD'
                },
                endorsementItem2:{
                    quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, mi quis condimentum ornare, eros massa porta tortor, quis convallis tortor mi sed sapien. Etiam tempus, lectus id mattis egestas, tortor nibh tincidunt magna, ac blandit ex est facilisis',
                    name:'SEATTLE DSA',
                    credit:'SEATTLE CHAPTER OF THE DEMOCRATIC SOCIALISTS OF AMERICA'
                },
                endorsementItem3:{
                    quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, mi quis condimentum ornare, eros massa porta tortor, quis convallis tortor mi sed sapien. Etiam tempus, lectus id mattis egestas, tortor nibh tincidunt magna, ac blandit ex est facilisis',
                    name:'Julia Salazar',
                    credit:'NY STATE SENATOR'
                },
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .endorsement-item{
        padding-bottom:4rem;
        text-align: center;
        h2{
            padding-top: 1rem;
        }
    }
</style>



