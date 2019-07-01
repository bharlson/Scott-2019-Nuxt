<template>
<div id="app">
    <nuxt-link to="/democracy-vouchers" tag="a" class="front">
        <img src="@/assets/img/voucher-hand.png" class="democracy-voucher-alert">
    </nuxt-link>
    <section id="about">
        <!-- <p style="position:fixed; color:green">{{windowWidth}}</p> -->
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="text-intro">
                        I’M <span class="text-red">SHAUN SCOTT</span>: <br>
                        43RD LD DEMOCRAT, DEMOCRATIC SOCIALIST, 
                        ADVOCACY JOURNALIST, AND 26-YEAR RESIDENT OF SEATTLE
                    </h2>
                </div>
                <div class="col-lg-6">
                    <p>I’m running to represent Seattle City Council District 4 because I have a vision for Seattle
                        that is rooted in addressing and alleviating the conditions of our most vulnerable residents. As
                        a former student at the University of Washington, a renter in District 4, and a labor organizer
                        with the Campaign Workers Guild, I’m intimately familiar with how struggles for affordable
                        housing and economic justice weigh on the residents of our district. Join me in making Seattle a
                        fair city. Let’s create a future for us all.</p>
                </div>
            </div>
            <!--/row-->
            <div class="row mt-4">
                <div class="col-lg-6">
                    <p class="text-demand">
                        PUBLIC HOUSING
                    </p>
                    <p class="text-demand">
                        Tax the Rich
                    </p>
                    <p class="text-demand">
                        Free Public transit
                    </p>
                </div>
                <div class="col-lg-6">
                    <p class="text-demand">
                        SEATTLE GREEN NEW DEAL
                    </p>
                    <p class="text-demand">
                        Municipal broadband internet
                    </p>
                    <p class="text-demand">
                        Safe consumption sites
                    </p>
                </div>
            </div>
            <!--/row-->
            <div class="row mt-4">
                <div class="col-about-btn">
                    <nuxt-link class="about-btn" to="/platform">
                        <img class="img-emoji" src="@/assets/img/icons/rose-emoji.png">FULL PLATFORM
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
    <section id="press">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>In the news</h1>
                </div>
            </div>
            <!--/row-->
            <press-cards :limit="pressCardLimit"></press-cards>
            <!--/row-->
            <div class="row mt-4">
                <div to="press" class="col-md-4 offset-md-4">
                    <nuxt-link class="press-btn" to="/press">
                        <img src="@/assets/img/icons/newspaper-emoji.png" alt="news emoji" class="img-emoji">
                        More Press
                    </nuxt-link>
                </div>
            </div>
            <!--/row-->
        </div>
        <!--/container-->
    </section>
    <!--/Press-->
    <section id="endorsements">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Endorsements</h1>
                </div>
            </div>
            <endorsements></endorsements>
        </div>
    </section>
    <section id="outreach">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>
                        A new vision for City Hall
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="outreach-btn-row">
                        <div class="col-md-4 offset-md-2 col-lg-6 offset-lg-0">
                            <a href="https://scott2019.us19.list-manage.com/subscribe/post?u=e2e1dd70c08d354d226f2ee1e&amp;id=f854738314"
                                class="btn btn-white btn-block btn-layered">
                                <img src="@/assets/img/icons/wave.png" alt="wave emoji" class="img-emoji">
                                VOLUNTEER
                            </a>
                        </div>
                        <div class="col-md-4 mt-4 mt-md-0 col-lg-6">
                            <a href="https://donorbox.org/shaun-scott-2019" class="btn btn-white btn-block btn-layered">
                                <img src="@/assets/img/icons/money-emoji.png" alt="money emoji" class="img-emoji">
                                DONATE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Endorsements from '~/components/sections/Endorsements.vue'
import PressCards from '~/components/sections/Press.vue'

export default {
  components: {
    Endorsements,
    Logo,
    PressCards
  },
  layout: 'home_layout',
  data(){
      return{
          windowWidth : '',
          pressCardLimit: 3
      }
  },
  beforeMount(){
      window.onresize = ()=>{
          this.windowWidth = window.innerWidth
      }
  }
}
</script>

<style scoped>
    h1{
        margin-bottom: 2rem;
    }
</style>
