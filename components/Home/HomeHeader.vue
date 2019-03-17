<template>
     <header id="header">
        <img class="header-shaun" src="@/assets/img/header-shaun-mobile.png" alt="">
        <div class="container">
            <div class="row">
                <logo></logo>
                <div class="col-header-content">
                    <div class="row">
                        <div class="col-md-7 offset-md-5 col-lg-12 offset-lg-0 text-center">
                            <h1 class="text-header">Fighting for</h1>
                            <h1 class="text-header text-header-emphasis">our right</h1>
                            <h1 class="text-header">to the city!</h1>
                        </div>
                    </div>
                    <img src="@/assets/img/header-shaun-mobile.png" alt="Shaun Scott" class="header-shaun-mobile">
                    <div class="sign-up-form-row">
                        <div class="col">
                            <form action="https://scott2019.us19.list-manage.com/subscribe/post?u=e2e1dd70c08d354d226f2ee1e&amp;id=41265994f5"
                                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="sign-up-form validate"
                                target="_blank" novalidate>
                                <div class="row">
                                    <div class="col">
                                        <h5>Join Us!</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group mc-field-group">
                                            <input id="mce-FNAME" name="FNAME" type="text" class="form-text-input form-text-input-layered"
                                                placeholder="First Name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mc-field-group">
                                            <input id="mce-LNAME" name="LNAME" type="text" class="form-text-input form-text-input-layered"
                                                placeholder="Last Name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mc-field-group">
                                            <input id="mce-EMAIL" name="EMAIL" type="email" class="required form-text-input form-text-input-layered email"
                                                placeholder="Email Address">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div id="mce-responses" class="clear">
                                            <div class="response" id="mce-error-response" style="display:none"></div>
                                            <div class="response" id="mce-success-response" style="display:none"></div>
                                        </div>
                                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                                name="b_e2e1dd70c08d354d226f2ee1e_41265994f5" tabindex="-1" value=""></div>
                                        <div class="clear">
                                            <span class="sign-up-form-btn-emoji">
                                                <input type="submit" value="I'M IN!" name="subscribe"
                                                    id="mc-embedded-subscribe" class="button sign-up-form-btn">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <!--/sign up form row-->
                            </form>
                        </div>
                        <!--/col-->
                    </div>
                </div>
                <!--/col-md-6-->
            </div>
            <!--/row-->
        </div>
        <!--/container-->
    </header>
    <!--/header-->
</template>
<script>
import Logo from '@/components/Logo.vue';

export default {
    components: {
        Logo
    }
}
</script>

