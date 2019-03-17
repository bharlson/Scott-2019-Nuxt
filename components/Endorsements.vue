<template>
    <div class="row">
        <div class="col-xl-8 offset-xl-4">
            <article v-for="i in endorsementItems" :key="i" class="endorsement-item">
                <q>
                    {{i.quote}}
                </q>
                <h2>{{i.name}}</h2>
                <h3>{{i.credit}}</h3>
            </article>
        </div>
    </div>
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
                        quote:'Shaun is so good at socialism he stole all of our toothbrushes and will only give them back on the condition we endorse him.',
                        name:'SEATTLE DSA',
                        credit:'SEATTLE CHAPTER OF THE DEMOCRATIC SOCIALISTS OF AMERICA'
                    },
                    endorsementItem3:{
                        quote:'Socialism is when the government does stuff, and the more stuff it controls and does, the more socialister it is.',
                        name:'Julia Salazar',
                        credit:'NY STATE SENATOR'
                    },
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '@/assets/scss/partials/variables.scss';
.endorsement-item{
    padding-bottom:2rem;
    text-align: center;
    h2{
        color:$red;
        text-transform: uppercase;
        font-family: $heading-font;
        font-size: 2.5rem;
        padding-top: 1rem;
    }
    h3{
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.25rem;
        font-size: 1.5rem;
    }
    q{
        font-size:1.3rem;
    }

}

</style>
