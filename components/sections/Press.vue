<template>
    <div class="row">
        <div class="card-columns">
            <press-card 
                v-for="i in pressItems.slice(0,limit)"
                :key="i"
                :dataSrc="i"
                >
            </press-card>
        </div>
    </div>
    <!--/Press-->
</template>
<script>
import PressCard from '@/components/Cards/PressCard.vue'
export default {
    props:{
        limit:{
            type:Number
        }
    },
    data(){
        return{
            pressItems:[
                {
                    srcName:'The Stranger',
                    imgSrc:require('@/assets/img/stranger.png'),
                    caption:'Op-Ed',
                    captionOffset:'0',
                    blurb:'"Into the next century, climate refugees will be the new face of immigration to cities like Seattle. They’ll find a city that did what was possible, did what was necessary, and—as a result—seemed to do the impossible. If we implement a Seattle Green New Deal, those on the way, and those already here, will find a city that is a true sanctuary from the ravages of climate change."',
                    link:'https://www.thestranger.com/slog/2019/03/28/39751396/its-time-for-seattles-green-new-deal',
                    btnText:'FULL ARTICLE'
                },
                {
                    srcName:'The Guardian',
                    imgSrc:require('@/assets/img/The_Guardian.svg'),
                    caption:'OP-ED With JULIA SALAZAR',
                    captionOffset:'1rem',
                    blurb:'"We can live in cities that marshal public space and resources for the common good. To do so, we’ll have to band together. We’ll have to resist forfeiting the public trust for the private gain of a few."',
                    link:'https://www.theguardian.com/commentisfree/2019/feb/26/cities-america-unite-against-big-corporations',
                    btnText:'FULL ARTICLE'
                },
                {
                    srcName:'Delete Your Account',
                    imgSrc:require('@/assets/img/delete-ur-account.jpg'),
                    caption:'Podcast',
                    captionOffset:'1rem',
                    blurb:'"Shaun, a member of Seattle DSA, also talks about how he is going about building his campaign and remaining accountable to the organizers that will be necessary to get him elected. We discuss how one can build a winning coalition made up of a broad range of working-class constituents while not compromising one\'s principles for the sake of expediency."',
                    link:'https://player.fm/series/1020333/223581241',
                    btnText:'LISTEN HERE'
                },
                {
                    srcName:'The Urbanist',
                    imgSrc:require('@/assets/img/urbanist-logo.png'),
                    caption:'article',
                    captionOffset:'0',
                    blurb:'"Scott brings a depth and breadth of perspective that is rare among Seattle City Council candidates. His work demonstrates he has also spent a lot of time considering what qualities and attributes make a city succeed (or fail) its residents. For Scott, using city policy to reduce carbon emissions and address the climate crisis is a matter of urgency."',
                    link:'https://www.theurbanist.org/2018/12/06/district-4-city-council-candidate-shaun-scott-wants-seattle-to-live-up-to-its-urbanist-credo/',
                    btnText:'FULL ARTICLE'
                },
                {
                    srcName:'The Stranger',
                    imgSrc:require('@/assets/img/stranger.png'),
                    caption:'Op-Ed',
                    captionOffset:'0',
                    blurb:'"My vision for my city cannot be compromised, because it was created in the cauldron of activism, of advocacy journalism, of anti-racist and anti-capitalist scholarship and organizing. Seattle’s greatest export has always been its ideas, and this campaign will be an example of what can happen when we make the political process work for those it has historically ignored."',
                    link:'https://www.thestranger.com/slog/2018/11/23/36072893/shaun-scott-talks-housing-equity-and-money-in-politics',
                    btnText:'FULL ARTICLE'
                },
                {
                    srcName:'The Stranger',
                    imgSrc:require('@/assets/img/stranger.png'),
                    caption:'Interview',
                    captionOffset:'0',
                    blurb:'"There is a very large part of the district that is not used to having visible council leadership. I’m interested in talking about the things that are going to make them want  to get involved so we have a city that’s actually representing where young people are at, what our anxieties are, where comparatively less well-off poor people are at, what’s going to make it so we can see ourselves actually reflected in government."',
                    link:'https://www.thestranger.com/slog/2018/11/23/36072893/shaun-scott-talks-housing-equity-and-money-in-politics',
                    btnText:'FULL ARTICLE'
                },
            ]
        }
    },
    components:{
        PressCard
    }
}
</script>

