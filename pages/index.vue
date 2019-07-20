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
                    <p>Seattle’s prosperity should benefit us all. Let’s build a fair city, where renters aren’t priced out by rising costs of living, and homeowners aren’t stressed out by rising property taxes. A caring city, where the homeless get connected to housing and services, and young people don’t have to choose between textbooks and food. An inclusive city, where there is public housing for those here, and for those on the way. A vote for Shaun Scott is a vote for this vision</p>
                </div>
            </div>
            <!--/row-->
            <div class="row mt-4">
                <div class="col-lg-6">
                    <p class="text-demand">
                        PUBLIC HOUSING
                    </p>
                    <p class="text-demand">
                        A FAIR TAX CODE
                    </p>
                    <p class="text-demand">
                       A FREELANCER’S BILL OF RIGHTS
                    </p>
                </div>
                <div class="col-lg-6">
                    <p class="text-demand">
                        SEATTLE GREEN NEW DEAL
                    </p>
                    <p class="text-demand">
                        HOUSE THE HOMELESS 
                    </p>
                    <p class="text-demand">
                       MUNICIPAL BROADBAND INTERNET
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
    <video-section title="VISION FOR THE CITY"></video-section>
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
import VideoSection from '~/components/sections/VideoSection.vue'

export default {
  components: {
    Endorsements,
    Logo,
    PressCards,
    VideoSection
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
