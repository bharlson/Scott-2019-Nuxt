<template>
    <article class="card" :class="cardType + '-card'">
        <figure>
            <a :href="dataSrc.link" target="_blank">
                <img v-if="cardType === 'press'"
                    :src="dataSrc.imgSrc" 
                    :alt="dataSrc.srcName" 
                    :class="cardType + '-card-img'">
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

        <p :class="cardType + '-card-text'">
            {{dataSrc.blurb}}
        </p>
        <template v-if="cardType==='blog'">
            <div
                :class="cardType + '-description'" 
                v-html="cardType.description"
            ></div>
        </template>

        
        <a  v-if="cardType === 'press'" 
            :href="dataSrc.link"
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
            default:'press'
        }
    }
    
}
</script>

