<template>
    <main>
        <section class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1>404</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-content">
            <div class="container  my-4">
                <div class="row">
                    <div class="col">
                        <h2> We're Sorry</h2>
                        <p class="intro text-center">
                            We couldn't find the page you were looking for
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <nuxt-link exact to="/" class="btn btn-white btn-block btn-layered">
                            <img src="@/assets/img/icons/house-emoji.png" alt="" class="img-emoji">
                            Go Home
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
  props:['error']
}
</script>
<style scoped>
    .page-content{
        text-align: center;
    }
</style>

