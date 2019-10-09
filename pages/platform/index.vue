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
                {title:'PUBLIC HOUSING', text:'For too long, we’ve left our housing supply up to the whims of the market and they haven’t provided the housing our communities need. Housing should be treated as a social good, and not just a commodity to be bought and sold. <hr style="border:none;"> The city needs to pursue and implement the revenue options outlined in its “Progressive Revenue Taskforce on Housing and Homelessness” and also use its bonding capacity to get the funding we need for an ambitious investment in public housing. The revenue options we must pursue include a tax on mansion sales and on vacant luxury real estate developments. With political courage and fiscal clarity, we can build the housing we need for working families, students, renters, and people of color at risk of being displaced.'},
                {title:'SEATTLE GREEN NEW DEAL', text:'In the summer months, Seattleites breathe in a toxic haze of smog and forest fire smoke. Working people who can’t find affordable housing near their jobs drive long distances to work and back, pumping carbon emissions into the air. Seattleites of color who live near freeways and major arterials inhale most of the exhaust. Meanwhile, rising sea levels threaten to displace residents of South Seattle, who will then join long-distance motorists in an atmosphere-killing climate loop. Environmental decay shapes the material reality of millions in our region. Citizens need a friend in government to fight back. <hr style="border:0"> The Seattle City Council could correct our current zoning code, which makes apartment buildings illegal in 75 percent of the city, and build public housing developments that comply with green LEED certifications. Ending our relationship with Puget Sound Energy, one of the biggest polluters in the region, would be a step toward bringing our energy portfolio under public control. And if we gave everyone free public transit—or at least gave employers “climate passes” to fund transit passes for working Seattleites—we could decrease our carbon emissions by getting people out of cars. <hr style="border:0"> Why not implement the comprehensive bike network that both Mayor Durkan (and Mayoral runner-up Cary Moon) both campaigned on in 2017? Couldn’t we create car-free eco-districts with loads of social housing and low-carbon footprints in low-income neighborhoods? What about additional public restrooms, signs, and streetlights to encourage more people to explore the city on foot? We could partner with organized labor to do it all with well-paying union jobs. But to do that, we’ll need revenue. <hr style="border:0"> One reason it’s called the Green New Deal is because you need money to make it happen. Seattle should implement congestion pricing, following the city of London, which raised $1.6 billion of revenue with tolls in ten years. We should institute land value taxes and a tax on real estate speculation to discourage developers from building luxury apartments that lay empty but still use energy. The City Council should have the city go into debt to build affordable housing, and also to buy land, then redistribute parcels to non-profit housing providers at a discount. <hr style="border:0"> Seattle should raise taxes on privately owned golf courses, like the 55-acre Sandpoint Country Club, which are unfairly taxed an infinitesimally smaller rates than the property taxes working families have to pay on their homes. Let’s dip into our Rainy Day Fund, as we did during the Great Recession, knowing that the climate crisis presents as much of a threat to our well being as a downturn in the business cycle. <hr style="border:0"> More than anything, we should tax the rich. Our biggest corporations—Amazon, Boeing, Microsoft—also happen to be our biggest polluters. State law may prohibit the city from enacting a tax on large polluters; but nothing but a lack of courage and political will is stopping us from enacting a new Employee Head Tax, or from raising the B&O tax on our largest corporations. <hr style="border:0"> Climate change is not “coming.” Climate change is here. Already, people in Africa, Asia, and Latin America are being displaced due to rising sea levels and catastrophic weather events. Into the next century, climate refugees will be the new face of immigration to cities like Seattle. They’ll find a city that did what was possible, did what was necessary, and—as a result—seemed to do the impossible. If we implement a Seattle Green New Deal, those on the way, and those already here, will find a city that is a true sanctuary from the ravages of climate change.'},
                {title:'A FAIR TAX CODE', text:'According to Mayor Jenny Durkan’s 2019-2020 <a href="http://www.seattle.gov/financedepartment/19proposedbudget/documents/2019-2020proposedbudget.pdf" target="_blank">proposed budget</a>, “Seattle’s strong rebound from the recession has been supported by the growth of Amazon, other technology businesses, and professional service firms.” Unfortunately, too many Seattleites have not seen a return on the wealth that we have helped create. I agree with Elizabeth Warren, Bernie Sanders, and Alexandria Ocasio-Cortez, all of whom have called for a more progressive tax code federally. At the local level, we must follow their lead. As a city councilmember, I would work to raise the marginal tax rate on our biggest corporations, tax luxury real estate units with a Land Value Tax and a real- estate speculation tax. <hr style="border:none;"> I would also work to rebuild the political will for a revamped payroll tax (“Employee Head Tax”) that could be used to fund affordable housing. At the same time that we seek to build worker power by supporting unionized workers and our city’s labor community, Seattle should be able to share in the prosperity created by our biggest corporations. Regressive sales and property taxes should not be our main go-to for funding our city’s safety net.'},
                {title:'FREELANCER’S BILL OF RIGHTS', 
                text:'Shaun Scott has been a union member for almost his entire adult life, with UAW 4121, SEIU 775NW, and the Campaign Workers Guild. We need city policies that provide worker protections to unionized full-time employees, as well as precarious part-time workers in tech, the arts, and journalism. <hr style="border:none;"> In this campaign we’ve called for a Freelancer’s Bill of Rights that includes mandatory pay after 30 days, mandatory contracts for work over $600 in net value, a ban on non- compete clauses that restrict worker movement, and portable benefits. Following the work that Seattle’s labor community and Councilmember Teresa Mosqueda have put into crafting a Domestic Worker’s Bill of Rights, we must build on those successes to win even more material gains for workers in the gig economy.'},
                {title:'SAFE CONSUMPTION SITES', text:'For an entire generation, the “War on Drugs” has treated substance abuse as an issue of criminalization, and not one of care. In Seattle, this approach has combined with the failed policy of “sweeps” of homeless encampments to criminalize our homeless residents. For years, the Seattle Police Department has used Naloxone to treat people suffering from overdoses. That principle should be expanded to the establishment of safe consumption sites that allow residents to get the treatment they need. These sites also help clean up neighborhood streets littered by needles and other unsightly drug paraphernalia.'},
                {title:'Universal Childcare', text:'Childcare is a full-on crisis for many in Seattle — for both consumers and service providers. On average, working mothers in the state spend over 50% of median income on childcare for infant children. Meanwhile, as District 4 primary election candidate and fellow labor organizer Emily Myers noted in a policy statement about childcare, “childcare workers, many of whom are womxn, immigrants, and womxn of color, are some of the lowest paid workers, earning 40% less than the median wage of all occupations.” My plan to make childcare more accessible includes offering childcare at City meetings, more public restrooms and lactation spaces, increasing funding to afterschool programs with an Excess Compensation Tax on big businesses, and comprehensive zoning reform <a href="https://medium.com/@ElectScott2019/solving-seattles-childcare-crisis-3a8f050a4608">Read More</a>'},
                {title:'MUNICIPAL BROADBAND INTERNET', 
                text:'A recently released <a href="https://public.tableau.com/profile/city.of.seattle.information.technology#!/vizhome/2018_SeattleTechSurvey_0/MainPage" target="_blank">tech survey</a> shows that the residents of District 4 pay an average of $147 a month for internet service. But if we had city-owned broadband internet, the average cost could be as low as $45 a month. As a resident of Eastlake, I was proud to join the 43rd LD Democrats in September 2018 for the expressed purpose of voting to have the membership body adopt municipally-owned broadband internet into <a href="https://www.upgradeseattle.com/events/2018/9/12/municipal-broadband-vote-by-the-43rd-district-democrats" target="_blank">its official platform</a>. Measures like these have been historically resisted, even by “progressives,” because of the stranglehold that corporations like Comcast and CenturyLink have on our democracy via <a href="https://motherboard.vice.com/en_us/article/d3dz7z/comcast-and-centurylink-spent-dollar50k-in-seattle-to-support-a-mayoral-candidate-who-opposes-community-owned-internet" target="_blank">lucrative campaign contributions</a>. Because I am not taking corporate campaign contributions, I will be able to push back against giant corporations, and press for municipal internet.'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/partials/variables.scss';
    article{
        padding-bottom: 2rem;
        hr{
            border: 0 0 0 0;
            border-color:transparent;
        }
    }
</style>



