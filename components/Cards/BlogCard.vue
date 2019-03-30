<template>
    <article class="card" :class="cardType + '-card'">
        <figure>
            <a :href="dataSrc.link" target="_blank">
                <img
                    :src="dataSrc.thumbnail" 
                    :class="cardType + '-card-img'">
            </a>
            <h3 :class="cardType + '-card-title'">
                {{dataSrc.title}}
            </h3>
            <figcaption :style="'margin-top:' + dataSrc.captionOffset">
                {{dataSrc.caption}}
                {{dataSrc.pubDate | moment("dddd, MMMM Do YYYY") }}
            </figcaption>
        </figure>

            <div
                :class="cardType + '-card-description'" 
                v-html="dataSrc.description"
            >
            
            </div>

        
        <a  v-if="cardType === 'press'" 
            :href="dataSrc.link"
            target="_blank"
            class="btn" :class="cardType + '-card-btn'">
            {{dataSrc.btnText}}
        </a>
        <a  v-if="cardType ==='blog'"
            :href="dataSrc.link"
            target="_blank"
            class="btn blog-card-btn">FULL ARTICLE
        </a>
    </article>   
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        dataSrc:{
            type:String,
            default:'i'
        },
        cardType:{
            type:String,
            default:'blog'
        }
    }
    
}
</script>

