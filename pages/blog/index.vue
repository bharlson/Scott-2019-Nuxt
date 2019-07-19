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
                        <p>Check out Shaun's posts on <a href="https://medium.com/@ElectScott2019" target="_blank">Medium</a></p>
                    </div>
                </div>
                <div class="row">
                    <div class="card-columns card-columns-blog" style="">
                        <!-- <loading-cards></loading-cards> -->
                        <loading-cards v-if='showLoader'></loading-cards>
                        <blog-card
                            v-for="i in blogPosts"
                            :key="i.id"
                            :dataSrc="i"
                            :cardType="blog"
                        ></blog-card>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-4 offset-md-4">
                        <a class="blog-btn" href="https://medium.com/@ElectScott2019" target="_blank">
                            <img src="@/assets/img/icons/newspaper-emoji.png" alt="news emoji" class="img-emoji">
                            More Articles
                        </a>
                    </div>
                </div>
            <!--/row-->
            </div>
        </section>
    </main>
</template>
<script>
import axios from 'axios'
import BlogCard from '@/components/Cards/BlogCard.vue'
import LoadingCards from '@/components/Cards/LoadingCards.vue'
export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Blog',
            postTitle:'',
            postLink:'',
            postImg:'',
            blogPosts:[
            ]

        }
    },
    computed:{
        showLoader(){
            if(this.blogPosts.length > 0){
                return false
            }
            else{
                return true
            }
        }
    },
    created(){
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ElectScott2019')
            .then(res=>{
                const data = res.data.items
                const posts = data.filter(item => item.categories.length > 0)
                this.blogPosts = posts
            })
            .catch(error=>console.log(error))
    },
    components: {
        BlogCard,
        LoadingCards
    }
}
</script>
<style lang="scss" scoped>

</style>



