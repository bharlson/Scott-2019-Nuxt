<template>
<div id="app">
    <nuxt-link to="/democracy-vouchers" tag="a" class="front">
        <img src="../assets/img/voucher-hand.png" class="democracy-voucher-alert">
    </nuxt-link>
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="text-intro">
                        I’M <span class="text-red">SHAUN SCOTT</span>: <br>
                        AN ORGANIZER, ADVOCACY
                        JOURNALIST, DEMOCRATIC
                        SOCIALIST, AND 26-YEAR
                        RESIDENT OF SEATTLE.
                    </h2>
                </div>
                <div class="col-lg-6">
                    <p>I’m running to represent Seattle City Council District 4 because I have a vision for Seattle
                        that is rooted in addressing and alleviating the condition of our most vulnerable citizens. As
                        a former student at the University of Washington, a renter in District 4, and a labor organizer
                        with the Campaign Workers Guild, I’m intimately familiar with how struggles for affordable
                        housing and economic justice weigh on residents of my district. Join me in making Seattle a
                        fair city. Let’s imagine a future for us all.</p>
                </div>
            </div>
            <!--/row-->
            <div class="row mt-4">
                <div class="col-lg-6">
                    <p class="text-demand">
                        PUBLIC HOUSING
                    </p>
                    <p class="text-demand">
                        Progressive Taxation
                    </p>
                    <p class="text-demand">
                        Free Public transit
                    </p>
                </div>
                <div class="col-lg-6">
                    <p class="text-demand">
                        100% Clean Energy by 2025
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
                        <img class="img-emoji" src="../assets/img/icons/rose-emoji.png">FULL PLATFORM
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
    <section id="press">
        <div class="container">
            <div class="row mb-4">
                <div class="col">
                    <h1>In the news</h1>
                </div>
            </div>
            <!--/row-->
            <div class="card-columns">
                <article class="card press-card">
                    <figure>
                        <a href="https://player.fm/series/1020333/223581241">
                            <img src="../assets/img/delete-ur-account.jpg" alt="Delete Your Account Logo" class="press-card-img"
                                style="max-width:100px">
                        </a>
                        <figcaption>PODCAST</figcaption>
                    </figure>
                    <p class="press-card-text">"Shaun, a member of Seattle DSA, also talks about how he is going about
                        building his campaign and remaining accountable to the organizers that will be
                        necessary to get him elected. We discuss how one can build a winning coalition made up
                        of a broad range of working-class constituents while not compromising one's principles
                        for the sake of expediency.</p>
                    <a href="https://player.fm/series/1020333/223581241" class="btn press-card-btn">LISTEN HERE</a>
                </article>
                <article class="card press-card">
                    <figure>
                        <a href="https://www.theurbanist.org/2018/12/06/district-4-city-council-candidate-shaun-scott-wants-seattle-to-live-up-to-its-urbanist-credo/">
                            <img src="../assets/img/urbanist-logo.png" alt="The Urbanist" class="press-card-img">
                        </a>
                        <!-- <figcaption>INTERVIEW</figcaption> -->
                    </figure>
                    <p class="press-card-text">"Scott brings a depth and breadth of perspective that is rare among
                        Seattle
                        City Council candidates. His work demonstrates he has also spent a lot of time
                        considering what qualities and attributes make a city succeed (or fail) its residents.
                        For Scott, using city policy to reduce carbon emissions and address the climate crisis
                        is a matter of urgency."</p>
                    <a href="https://www.theurbanist.org/2018/12/06/district-4-city-council-candidate-shaun-scott-wants-seattle-to-live-up-to-its-urbanist-credo/"
                        class="btn press-card-btn">FULL ARTICLE</a>
                </article>
                <!--/press card-->
                <article class="card press-card">
                    <figure>
                        <a href="https://www.thestranger.com/slog/2018/11/23/35978962/democratic-socialist-shaun-scott-is-running-for-seattle-city-council">
                            <img src="../assets/img/stranger.png" alt="The Stranger" class="press-card-img">
                        </a>
                        <figcaption>OP-ED</figcaption>
                    </figure>
                    <p class="press-card-text">"My vision for my city cannot be compromised, because it was created in
                        the cauldron of
                        activism, of advocacy journalism, of anti-racist and anti-capitalist scholarship and
                        organizing. Seattle’s greatest export has always been its ideas, and this campaign will
                        be an example of what can happen when we make the political process work for those it
                        has historically ignored"</p>
                    <a href="https://www.thestranger.com/slog/2018/11/23/35978962/democratic-socialist-shaun-scott-is-running-for-seattle-city-council"
                        class="btn press-card-btn">FULL ARTICLE
                    </a>
                </article>
                <!--/press card-->
            </div>
            <!--/row-->
            <div class="row mt-4">
                <div to="press" class="col-md-4 offset-md-4">
                    <nuxt-link class="press-btn" to="/press">
                        <img src="../assets/img/icons/newspaper-emoji.png" alt="news emoji" class="img-emoji">
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
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <a href="https://seattledsa.org/"><img class="img-fluid" src="../assets/img/SDSA-square.svg" alt="Seattle DSA logo"></a>
                    <!-- <figcaption>SEATTLE DEMOCRATIC SOCIALISTS OF AMERICA</figcaption>                 -->
                </div>
            </div>
        </div>
    </section>
    <section id="outreach">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 offset-lg-7">
                    <div class="row">
                        <div class="col">
                            <h1 class="outreach-heading">
                                LET’S NOT LET HIGH RENTS
                                DEFINE OUR CITY.
                            </h1>
                        </div>
                    </div>
                    <div class="outreach-btn-row">
                        <div class="col-md-4 offset-md-2 col-lg-6 offset-lg-0">
                            <a href="https://scott2019.us19.list-manage.com/subscribe/post?u=e2e1dd70c08d354d226f2ee1e&amp;id=f854738314"
                                class="btn btn-white btn-block btn-layered">
                                <img src="../assets/img/icons/wave.png" alt="wave emoji" class="img-emoji">
                                VOLUNTEER
                            </a>
                        </div>
                        <div class="col-md-4 mt-4 mt-md-0 col-lg-6">
                            <a href="https://donorbox.org/shaun-scott-2019" class="btn btn-white btn-block btn-layered">
                                <img src="../assets/img/icons/money-emoji.png" alt="money emoji" class="img-emoji">
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

export default {
  components: {
    Logo
  },
  layout: 'home_layout'
}
</script>

<style>
</style>
