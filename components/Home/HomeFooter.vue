<template>
    <footer>
        <div class="container">
            <div class="row">
                <logo></logo>
                <div class="col-md-12 col-lg-10">
                    <footer-nav></footer-nav>
                </div><!--/row-->
                
            </div>
        </div>
        <textarea  v-model="address" id="democracy-voucher-address-box" >
        </textarea>
        <div class="tooltip-area">
            <tooltip v-if="tooltipShown" mode="top">Click to copy address</tooltip>
            <img 
            @click="copyAddress"
            @mouseover="showTooltip"
            @mouseleave="hideTooltip"
            class="img-paid-for-by" 
            src="@/assets/img/icons/paid-for-by.svg" :alt="address">
        </div>

        
    </footer>
</template>
<script>
import Logo from '@/components/Logo.vue';
import FooterNav from '@/components/Nav/FooterNav.vue';
import Tooltip from '@/components/Tooltip.vue'; 

export default {
    data(){
        return{
            address:'People for Shaun Scott, PO Box  45088, Seattle, WA 98145',
            tooltipShown: false
        }
    },
    components: {
        Logo,
        FooterNav,
        Tooltip
    },
    methods: {
        copyAddress() {
            /* Get the text field */
            var copyText = document.getElementById("democracy-voucher-address-box")
            // /* Select the text field */
            copyText.select()
            // /* Copy the text inside the text field */
            document.execCommand("copy");
        },
        showTooltip(){
            this.tooltipShown = !this.tooltipShown;
            console.log('show' + this.tooltipShown);
        },
        hideTooltip(){
            this.tooltipShown = !this.tooltipShown;
            console.log('hide' + this.tooltipShown);
        }
    }
}
</script>
<style lang="scss" scoped>
    #democracy-voucher-address-box{
        position: absolute;
        height:0;
        width:0;
        opacity: 0;
    }
</style>

