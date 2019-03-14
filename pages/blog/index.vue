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
                    <div class="card-columns">
                        <article
                            v-for="blogPost in blogPosts" :key="blogPost.id" 
                            class="card blog-card blog-post">
                            <figure>
                                <img :src="blogPost.thumbnail" class="blog-card-img">
                                <!-- <h3 class="blog-post-title">{{blogPost.title}}</h3> -->
                            </figure>
                            <h3 class="blog-post-title">{{blogPost.title}}</h3>
                             <figcaption>{{blogPost.pubDate | moment("dddd, MMMM Do YYYY") }}</figcaption>
                            <div class="blog-post-description" v-html="blogPost.description"></div>
                            <a :href="blogPost.link"
                                target="_blank"
                                class="btn blog-card-btn">FULL ARTICLE
                            </a>
                        </article>
                        <!--/press card-->
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import SectionPress from '@/components/sections/Press.vue'
import axios from 'axios'
export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Blog',
            postTitle:'',
            postLink:'',
            postImg:'',
            blogPosts:[]

        }
    },
    components: {
        SectionPress
    },
    created(){
        // console.log('Created!!');
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ElectScott2019')
            // .then((res) => res.json())
            .then(res=>{
                console.log(res)
                const data = res.data.items
                console.log('data')
                console.log(data)
                const posts = data.filter(item => item.categories.length > 0)
                console.log('posts')
                console.log(posts)
                this.postTitle = posts[0].title
                this.postLink = posts[0].link
                this.postImg = posts[0].thumbnail
                this.blogPosts = posts
                console.log('Now we\'re really bloggin')
                console.log(this.blogPosts[2].title)
            })
            .catch(error=>console.log(error))
    }
}
</script>
<style lang="scss" scoped>

</style>



