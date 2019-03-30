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
                        <article v-for="i in platformItems" :key="i">
                            <h2>{{i.title}}</h2>
                            <p v-html="i.text"></p>
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
            pageTitle:'Platform',
            platformItems:[
                {title:'PUBLIC HOUSING', text:'For too long, we’ve left our housing supply up to the whims of the market and they haven’t provided the housing our communities need. Housing should be treated as a social good, and not just a commodity to be bought and sold. Imagine if the city of Seattle invested in deeply affordable homes and housing for the residents already here, and for the thousands of people on the way. The city needs to tax our biggest corporations and use our bonding capacity to create the revenue needed to build housing for working families, students, renters, and people of color at risk of being displaced.'},
                {title:'100% CLEAN ENERGY BY 2025', text:'Because of our beautiful trees and waterways, Seattle has a national reputation as a leader on climate justice. It’s time we turn that reputation into reality. The city needs to discontinue its relationship with Puget Sound Energy (one of the biggest polluters in this area), and bring its energy portfolio under full municipal control. We must use revenue from a “Seattle Green New Deal” funding package to provide energy credits that will allow big businesses, developers, landlords, universities, and other institutions with large economic footprints to transition out of dirty sources of energy. We must partner with organized labor to ensure that the implementation of this green transition creates union jobs that do not leave working families behind. Currently, 90% of our city school bus fleet are run on fossil fuels. If we’re to avoid subjecting the next generation to the ravages of climate change, we must convert those buses to electric.'},
                {title:'TAX THE RICH', text:'According to Mayor Jenny Durkan’s 2019-2020 <a href="http://www.seattle.gov/financedepartment/19proposedbudget/documents/2019-2020proposedbudget.pdf" target="_blank">proposed budget</a>, “Seattle’s strong rebound from the recession has been supported by the growth of Amazon, other technology businesses, and professional service firms.” Unfortunately, working Seattleites have not seen a return on the wealth that we have helped create. I agree with national politicians like Elizabeth Warren, Bernie Sanders, and Alexandria Ocasio-Cortez, all of whom have called for a more progressive tax code federally. At the local level, we can follow their lead. As a city councilmember, I would work to raise the marginal tax rate on our biggest corporations. I would also work to rebuild the political will for a new Employee Head Tax that could be used for affordable housing. Seattle should be able to share in the prosperity of our biggest corporations.'},
                {title:'FREE PUBLIC TRANSIT', text:'If we’re serious about reducing our carbon emissions and becoming a climate leader, Seattle will need to make transit as accessible as possible. Ridership in the city should be free. Alternatively, the city should provide “eco-credits” to employers in the city so that they can give their employees free ORCA cards.'},
                {title:'SAFE CONSUMPTION SITES', text:'For an entire generation, the “War on Drugs” has treated substance abuse as an issue of criminalization, and not one of care. In Seattle, this approach has combined with the failed policy of “sweeps” of homeless encampments to criminalize our homeless residents. For years, the Seattle Police Department has used Naloxone to treat people suffering from overdoses. That principle should be expanded to the establishment of safe consumption sites that allow residents to get the treatment they need. These sites also help clean up neighborhood streets littered by needles and other unsightly drug paraphernalia.'},
                {title:'MUNICIPAL BROADBAND INTERNET', 
                text:'A recently released <a href="https://public.tableau.com/profile/city.of.seattle.information.technology#!/vizhome/2018_SeattleTechSurvey_0/MainPage" target="_blank">tech survey</a> shows that the residents of District 4 pay an average of $147 a month for internet service. But if we had city-owned broadband internet, the average cost could be as low as $45 a month. As a resident of Eastlake, I was proud to join the 43rd LD Democrats in September 2018 for the expressed purpose of voting to have the membership body adopt municipally-owned broadband internet into <a href="https://www.upgradeseattle.com/events/2018/9/12/municipal-broadband-vote-by-the-43rd-district-democrats" target="_blank">its official platform</a>. Measures like these have been historically resisted, even by “progressives,” because of the stranglehold that corporations like Comcast and CenturyLink have on our democracy via <a href="https://motherboard.vice.com/en_us/article/d3dz7z/comcast-and-centurylink-spent-dollar50k-in-seattle-to-support-a-mayoral-candidate-who-opposes-community-owned-internet" target="_blank">lucrative campaign contributions</a>. Because I am not taking corporate campaign contributions, I will be able to push back against giant corporations, and press for municipal internet.'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    article{
        padding-bottom: 2rem;
    }
</style>



