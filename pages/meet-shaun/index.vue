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
                    <div class="col-lg-6 order-2 order-lg-1">
                        <h2 class='mt-lg-4'>BACKGROUND</h2>
                        <p>Shaun Scott is an advocacy journalist and historian who has worked as the editor of Real Change News. While an undergraduate at the University of Washington, he was a member of UAW 4121 and worked with the Seattle Civil Rights and Labor History project to delve into exclusionary practices in Seattle land use decisions. As a member of SEIU 775NW, he wrote about issues facing homecare aides for the union paper Insight Magazine.</p>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                        <img src="@/assets/img/MeetShaun3.jpg" alt="Meet Shaun" class="img-fluid">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-6"><img src="@/assets/img/MeetShaun2.jpg" alt="" class="img-fluid"></div>
                    <div class="col-lg-6">
                     <h2 class="mt-4">EXPERIENCE</h2>
                        <p>As a field staffer for Pramila Jayapal and organizer with Campaign Workers Guild in 2018, Shaun led the first ever unionization of a congressional incumbent’s campaign staff. From 2016-2017, Shaun spearheaded the Seattle Office of Arts &amp; Cultural Affairs’ $5.6 million renovation of King Street Station.</p>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                        <img src="@/assets/img/MeetShaun.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-lg-6 order-2 order-lg-1">
                        <h2 class="mt-lg-3">VISION</h2>
                        <p>For over a decade, Shaun was a documentary filmmaker who received numerous city and county grants for his visionary documentaries about Seattle history and politics, including his 2009 documentary Seat of Empire: Seattle Since 1909. He is the author of the book Millennials and the Moments That Made Us: A Cultural History of the U.S. from 1982-Present. A 43rd LD Democrat and member of Seattle DSA, he lives in Roosevelt near the soon-to- be-built light rail station.</p>
                    </div>
                </div>
                <div class="row text-center mt-4">
                    <div class="col">
                        <h2>SHAUN IS A:</h2>
                        <h3>43RD LD DEMOCRAT</h3>
                        <h3>DEMOCRATIC SOCIALIST</h3>
                        <h3>LABOR ORGANIZER</h3>
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
            pageTitle:'Meet Shaun'
        }
    }
}
</script>
<style lang="scss" scoped>
   @import '@/assets/scss/partials/variables.scss';
    h3{
        text-align: center;
    }
</style>



