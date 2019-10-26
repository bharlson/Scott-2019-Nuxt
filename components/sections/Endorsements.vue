<template>
    <div class="row">
        <div class="card-columns card-columns-endorsements">
            <endorsement-card
                :dataSrc="i"
                v-for="i in endorsementItems.slice(0,limit)"
                :key="i">
            </endorsement-card>
        </div>
    </div>
</template>
<script>
    import EndorsementCard from '@/components/Cards/EndorsementCard.vue'
    export default {
        layout: 'default',
        components:{
            EndorsementCard
        },
        props:{
            limit:{
                type:Number
            }
        },
        data(){
            return{
                pageTitle:'Endorsements',
                endorsementItems:[
                    {
                        quote:'',
                        name:'THE STRANGER',
                        credit:'The Stranger Election Control Board'
                    },
                    {
                        quote:'',
                        name:'Washington Bikes',
                        credit:''
                    },
                    {
                        quote:'',
                        name:'Kshama Sawant',
                        credit:'Seattle City Councilmember, District 3'
                    },
                    {
                        quote:'',
                        name:'Teresa Mosqueda',
                        credit:'Seattle City Councilmember'
                    },
                    {
                        quote:'',
                        name:'Mike O\'Brien',
                        credit:'Seattle City Councilmember, District 6'
                    },
                    {
                        quote:'',
                        name:'Nicole Macri',
                        credit:'Washington State Representative (43rd LD)'
                    },
                    {
                        quote:'',
                        name:'Rebecca Saldaña',
                        credit:'Washington State Senator (37th LD)'
                    },
                    {
                        quote:'',
                        name:'Jessyn Farrell',
                        credit:'former 46th District State Legislator'
                    },
                    {
                        quote:'',
                        name:'WSPC',
                        credit:'Washington State Progressive Caucus'
                    },
                    {
                        quote:'',
                        name:'UAW 1981',
                        credit:' The National Writers Union'
                    },
                    {
                        quote:'',
                        name:'WHAAF',
                        credit:'Washington Housing Alliance Action Fund'
                    },
                    {
                        quote:'',
                        name:'Our Revolution',
                        credit:'National Organization'
                    },
                    {
                        quote:'',
                        name:'Our Revolution',
                        credit:'King County '
                    },
                    {
                        quote:'',
                        name:'Our Revolution',
                        credit:'Washington Berniecrats Coalition'
                    },
                    {
                        quote:'',
                        name:'King County Democrats',
                        credit:''
                    },
                    {
                        quote:'',
                        name:'Transit Riders Union',
                        credit:''
                    },
                    {
                        quote:'',
                        name:'Seattle Subway',
                        credit:''
                    },
                    {
                        quote:'',
                        name:'The Sierra Club',
                        credit:'Sierra Club: Seattle Group'
                    },
                    {
                        quote:'',
                        name:'DSA',
                        credit:'Democratic Socialists of America (National Committee)'
                    },
                    {
                        quote:'',
                        name:'WAHSDA',
                        credit:'Washington State High School Democrats'
                    },
                    {
                        quote:'',
                        name:'Laura Loe',
                        credit:'Housing activist, former 43rd LD Precinct Committee Officer (PCO)'
                    },
                    {
                        quote:'I’m thrilled to support Shaun because I believe in the thoughtful approach he brings to progressive policy. He’s honed a forward-looking vision that links the environment and equity.',
                        name:'BRADY PIñERO WALKINSHAW',
                        credit:'Former Washington State Legislator, 43rd LD'
                    },
                    {
                        quote:'',
                        name:'SEATTLE DSA',
                        credit:'Seattle Chapter of the Democratic Socialists of America'
                    },
                    {
                        quote:'',
                        name:'Julia Salazar',
                        credit:'New York State Senator'
                    },
                    {
                        quote:'',
                        name:'Cary Moon',
                        credit:'Urban Planner and Transit Activist'
                    },
                    {
                        quote:'',
                        name:'Jim Street',
                        credit:'Former Seattle City Council Member'
                    },
                ]
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
