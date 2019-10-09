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
                    <div class="col">
                        <h2>THE STAKES ARE HIGH</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <p class="text-demand text-purple">
                            PUBLIC HOUSING
                        </p>
                        <p class="text-demand text-purple">
                            A FAIR TAX CODE
                        </p>
                        <p class="text-demand text-purple">
                        A FREELANCER’S BILL OF RIGHTS
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <p class="text-demand text-purple">
                            SEATTLE GREEN NEW DEAL
                        </p>
                        <p class="text-demand text-purple">
                            HOUSE THE HOMELESS 
                        </p>
                        <p class="text-demand text-purple">
                        MUNICIPAL BROADBAND INTERNET
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2 class="text-purple">Major corporations and big polluters count on us to sit out of local elections.<br> We can’t let them win.</h2>
                    </div>
                </div>
                <section id="what-to-do">
                    <div class="row mt-4 mb-2">
                        <div class="col">
                            <h2>What to Do</h2>
                        </div>
                    </div>
                    <div class="row">
                        <article class="col-md-4">
                            <h3>STEP #1: REGISTER</h3>
                            <p>Go to <a href="http://votewa.gov" target="_blank">VoteWa.gov</a> to register to vote in Seattle. It’s easy and it only takes a few minutes. You just need a Washington State license or ID card. If you don’t have those, there are options at the website to register in person or by mail. <b>REGISTER TODAY</b>.</p>
                        </article>
                        <article class="col-md-4">
                            <h3>STEP #2: RESEARCH</h3>
                            <p>Before the November 5th election, check out newspaper endorsements like <a href="https://www.thestranger.com/archive/stranger-election-control-board" target="_blank">The Stranger </a> and <a href="https://www.theurbanist.org/category/politics-and-government/elections-and-endorsements/" target="_blank">The Urbanist</a>, or progressive voter guides like <a href="https://www.capecampaigns.com/2019ratings" target="_blank">CAPE</a> and <a href="https://progressivevotersguide.com/washington/2019/primary/city/seattle" target="_blank">Fuse Washington</a> to see which candidates and initiatives are strongest on the issues you care about.</p>
                        </article>
                        <article class="col-md-4">
                            <h3>STEP #3: VOTE!</h3>
                            <p>Register to vote TODAY. You’ll get your ballot in the mail in late October. Fill it out and send it back in the mail. Or drop it in a ballot drop box. VOTE by November 5th!</p>
                        </article>
                    </div>
                </section>
                <section id="faq">
                    <div class="row">
                        <div class="col">
                            <h2>FAQs</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-xl-7">
                            <p class="text-faq">
                                You can be registered to vote in two separate places.
                            </p>
                            <p class="text-faq">
                                Register to vote at
                                <a href="http://votewa.gov" target="_blank">VoteWa.gov</a>
                            </p>
                            <p class="text-faq">
                            Election Day is <br> Tuesday, November 5th.
                            </p>
                            <p class="text-faq">
                                You don’t need a stamp to mail your ballot.
                            </p>
                            <p class="text-faq">
                            You can register &amp; vote at <a href="https://goo.gl/maps/mNAdpLMuUoZrxpWm7">919 SW Grady Way, Renton WA 98057</a>
                            </p>
                            <p class="text-faq">
                            There is a ballot drop-off box at <a href="https://goo.gl/maps/2zexFPLhUUZ3RWGN8">Schmitz Hall</a>.
                            </p>
                        </div>
                        <div class="col-lg-4 col-xl-5">
                            <img src="@/assets/img/ballot-hand-square.jpg" class="img-fluid" >
                        </div>
                    </div>
                </section>
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <a class="btn btn-purple btn-layered btn-block" href="https://votewa.gov" target="_blank">
                            <img src="@/assets/img/icons/ballot-emoji.png" alt="video emoji" class="img-emoji">
                            REGISTER TODAY!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import Tooltip from '@/components/Tooltip.vue'
export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Register to Vote',
            address:'People for Shaun Scott, PO Box  45088, Seattle, WA 98145',
            tooltipShown: false
        }
    },
    components:{
        Tooltip
    },
    methods: {
        copyAddress() {
            /* Get the text field */
            var copyText = document.getElementById("democracy-voucher-address-box")
            // /* Select the text field */
            copyText.select()
            // /* Copy the text inside the text field */
            document.execCommand("copy");
        },
        showTooltip(){
            this.tooltipShown = !this.tooltipShown;
        },
        hideTooltip(){
            this.tooltipShown = !this.tooltipShown;
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/partials/variables.scss';
    a{
        color:$red;
        font-weight: 600;
        &:hover{
            text-decoration: underline;
        }
        &.btn{
            color:$white;
            text-decoration: none;
        }
    }
    #what-to-do{
        padding: 0;
    }
    #faq{
        padding-top: 0;
        padding-left: 0;
        padding-right: 0;
    }
</style>



