<template>
<article class="card endorsement-card">
    <!-- <blockquote>
        <p class="endorsement-card-text">
            "{{dataSrc.quote}}"
        </p>
    </blockquote> -->
    <cite class="endorsement-card-name">{{dataSrc.name}}</cite>
    <cite class="endorsement-card-credit">{{dataSrc.credit}}</cite>
</article>   
</template>
<script>
export default {
    props:{
        dataSrc:{
            type:String,
            default:'i'
        }
    }
}
</script>
