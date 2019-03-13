<template>
    <footer>
        <div class="container">
            <div class="row">
                <logo></logo>
                <div class="col-md-12 col-lg-10">
                    <nav-list-secondary></nav-list-secondary>
                </div><!--/row-->
            </div>
        </div>

        <img class="img-paid-for-by" src="../assets/img/icons/paid-for-by.svg" alt="Paid for By th">
    </footer>
</template>
<script>
import Logo from '@/components/Logo.vue';
import NavList from '@/components/NavList.vue';
import NavListSecondary from '@/components/NavListSecondary.vue';

export default {
    components: {
        Logo,
        NavList,
        NavListSecondary
    }
}
</script>
