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
                        <h2>A NEW VOICE FOR SEATTLE</h2>
                        <p>We can have a vibrant city where workers aren’t priced out and students don’t have to choose between textbooks and food.</p>
                        <p>We can have a safe city where our streets and workplaces are free from harassment.</p>
                        <p>We can have a welcoming city, where there is enough housing for those already here, and for those on the way.</p>
                        <p>As a labor organizer with the Campaign Workers Guild and a former Rep. Pramila Jayapal staffer, Shaun Scott understands what it takes to build holistic, welcoming cities.</p>
                        <p>Shaun Scott is an advocacy journalist and historian who has worked as the editor of Real Change News. Once a member of UAW 4121--the University of Washington’s union for academic and student employees–he has spent over a decade studying how cities can make good on the promise of economic equity, race, gender, and disability* fairness, and climate justice.</p>
                        <p>A vote for Shaun Scott is a vote for that vision.</p>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                        <img src="@/assets/img/meet-shaun.jpg" alt="Meet Shaun" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center mt-4">
                    <div class="col">
                        <h2>SHAUN IS A:</h2>
                        <h5>43RD LD DEMOCRAT</h5>
                        <h5>DEMOCRATIC SOCIALIST</h5>
                        <h5>LABOR ORGANIZER</h5>
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
    h5{
        color: $purple;
        font-family: $body-font;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.25rem;
        @media(min-width:$md){
            font-size:1.5rem;
            line-height: 2.5rem;
        }
    }
</style>



