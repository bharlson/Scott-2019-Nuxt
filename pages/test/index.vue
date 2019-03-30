<template>
    <main>
        <section class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1>{{testPage.title}}</h1>
                    </div>
                </div>
            </div>
        </section>
        <section id="test" class="page-content">
            <div class="container">
            </div>
        </section>
    </main>
</template>
<script>
export default {
    layout: 'default',
    // data(){
    //     return{
    //         pageTitle:'Test'
    //     }
    // },
    asyncData(context){
        // context.app : references vue instance
        // $storyapi: storyblok's API
        return context.app.$storyapi.get('cdn/stories',{
            version:'draft',
            starts_with:'test/'
        })
        .then(res => {
            console.log(res.data);
            return {testPage: res.data.stories.map(testContent => {
                    return{
                        id: testContent.slug,
                        title: testContent.content.title
                    }
                })
            };
            console.log('this is the' + testPage);
        });

    },
    components: {
    }
}
</script>
<style lang="scss" scoped>

</style>



