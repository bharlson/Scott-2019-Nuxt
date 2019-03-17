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
                        <article v-for="i in platformItems" :key="i">
                            <h2>{{i.title}}</h2>
                            <p>{{i.text}}</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Platform',
            platformItems:[
                {title:'PUBLIC HOUSING', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, mi quis condimentum ornare, eros massa porta tortor, quis convallis tortor mi sed sapien. Etiam tempus, lectus id mattis egestas, tortor nibh tincidunt magna, ac blandit ex est facilisis nulla. In vitae consectetur neque. Aenean laoreet tortor vel varius tempor. Morbi libero nibh, efficitur a aliquam nec, rhoncus non massa. Sed suscipit, tortor at finibus consectetur, augue quam consectetur lectus, imperdiet scelerisque leo ipsum ac massa. Suspendisse vel nibh et est mollis rutrum eget a velit. Sed fringilla dolor ut sapien iaculis aliquet ac nec ex.'},
                {title:'100% CLEAN ENERGY BY 2025', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, mi quis condimentum ornare, eros massa porta tortor, quis convallis tortor mi sed sapien. Etiam tempus, lectus id mattis egestas, tortor nibh tincidunt magna, ac blandit ex est facilisis nulla. In vitae consectetur neque. Aenean laoreet tortor vel varius tempor. Morbi libero nibh, efficitur a aliquam nec, rhoncus non massa. Sed suscipit, tortor at finibus consectetur, augue quam consectetur lectus, imperdiet scelerisque leo ipsum ac massa. Suspendisse vel nibh et est mollis rutrum eget a velit. Sed fringilla dolor ut sapien iaculis aliquet ac nec ex.'},
                {title:'TAX THE RICH', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, mi quis condimentum ornare, eros massa porta tortor, quis convallis tortor mi sed sapien. Etiam tempus, lectus id mattis egestas, tortor nibh tincidunt magna, ac blandit ex est facilisis nulla. In vitae consectetur neque. Aenean laoreet tortor vel varius tempor. Morbi libero nibh, efficitur a aliquam nec, rhoncus non massa. Sed suscipit, tortor at finibus consectetur, augue quam consectetur lectus, imperdiet scelerisque leo ipsum ac massa. Suspendisse vel nibh et est mollis rutrum eget a velit. Sed fringilla dolor ut sapien iaculis aliquet ac nec ex.'},
                {title:'UNIVERSAL CHILDCARE', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, mi quis condimentum ornare, eros massa porta tortor, quis convallis tortor mi sed sapien. Etiam tempus, lectus id mattis egestas, tortor nibh tincidunt magna, ac blandit ex est facilisis nulla. In vitae consectetur neque. Aenean laoreet tortor vel varius tempor. Morbi libero nibh, efficitur a aliquam nec, rhoncus non massa. Sed suscipit, tortor at finibus consectetur, augue quam consectetur lectus, imperdiet scelerisque leo ipsum ac massa. Suspendisse vel nibh et est mollis rutrum eget a velit. Sed fringilla dolor ut sapien iaculis aliquet ac nec ex.'},
                {title:'FREE PUBLIC TRANSIT', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, mi quis condimentum ornare, eros massa porta tortor, quis convallis tortor mi sed sapien. Etiam tempus, lectus id mattis egestas, tortor nibh tincidunt magna, ac blandit ex est facilisis nulla. In vitae consectetur neque. Aenean laoreet tortor vel varius tempor. Morbi libero nibh, efficitur a aliquam nec, rhoncus non massa. Sed suscipit, tortor at finibus consectetur, augue quam consectetur lectus, imperdiet scelerisque leo ipsum ac massa. Suspendisse vel nibh et est mollis rutrum eget a velit. Sed fringilla dolor ut sapien iaculis aliquet ac nec ex.'},
                {title:'SAFE CONSUMPTION SITES', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, mi quis condimentum ornare, eros massa porta tortor, quis convallis tortor mi sed sapien. Etiam tempus, lectus id mattis egestas, tortor nibh tincidunt magna, ac blandit ex est facilisis nulla. In vitae consectetur neque. Aenean laoreet tortor vel varius tempor. Morbi libero nibh, efficitur a aliquam nec, rhoncus non massa. Sed suscipit, tortor at finibus consectetur, augue quam consectetur lectus, imperdiet scelerisque leo ipsum ac massa. Suspendisse vel nibh et est mollis rutrum eget a velit. Sed fringilla dolor ut sapien iaculis aliquet ac nec ex.'},
                {title:'MUNICIPAL BROADBAND INTERNET', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, mi quis condimentum ornare, eros massa porta tortor, quis convallis tortor mi sed sapien. Etiam tempus, lectus id mattis egestas, tortor nibh tincidunt magna, ac blandit ex est facilisis nulla. In vitae consectetur neque. Aenean laoreet tortor vel varius tempor. Morbi libero nibh, efficitur a aliquam nec, rhoncus non massa. Sed suscipit, tortor at finibus consectetur, augue quam consectetur lectus, imperdiet scelerisque leo ipsum ac massa. Suspendisse vel nibh et est mollis rutrum eget a velit. Sed fringilla dolor ut sapien iaculis aliquet ac nec ex.'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    article{
        padding-bottom: 2rem;
    }
</style>



