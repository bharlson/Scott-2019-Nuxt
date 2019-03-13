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
                        <h2>WHAT ARE THEY AND WHY ARE THEY SO COOL?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde repellat facere nisi ullam optio, numquam doloremque, obcaecati eos temporibus ipsum dolore nulla libero. Fugit officiis error tenetur ad suscipit?</p>
                    </div>
                </div>
                <section id="democracy-vouchers-explainer">
                    <div class="row">
                        <div class="col">
                            <h2>How do I give my democracy vouchers to Shaun?</h2>
                        </div>
                    </div>
                    <div class="row">
                        <article class="col-md-4">
                            <img src="@/assets/img/democracy-vouchers/online.jpg" alt="online">
                            <h3>online</h3>
                            <p>You can head over to the Democracy Voucher Online Portal to digitally assign your voucher funds to Shaun Scott.</p>
                        </article>
                        <article class="col-md-4">
                            <img src="@/assets/img/democracy-vouchers/in-person.jpg" alt="in person">
                            <h3>in person</h3>
                            <p>To hand over your vouchers in person, you can simply get in touch with the campaign.</p>
                        </article>
                        <article class="col-md-4">
                            <img src="@/assets/img/democracy-vouchers/by-mail.jpg" alt="By Mail">
                            <h3>By Mail</h3>
                            <p>Once you write Shaun Scott on the vouchers you can mail them back to the city using the pre-paid slip, or you can mail them directly to the campaign at: </p>
                            <div 
                                id="democracy-voucher-address-box" 
                                class="address-box">
                                People for Shaun Scott <br>
                                PO Box  45088 <br>
                                Seattle, WA 98145
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    layout: 'default',
    data(){
        return{
            pageTitle:'Democracy Vouchers'
        }
    },
    methods: {
        copyAddress() {
            //need to debug this 
            /* Get the text field */
            var copyText = document.getElementById("democracy-voucher-address-box")

            /* Select the text field */
            copyText.select()

            /* Copy the text inside the text field */
            document.execCommand("copy");
        }
    }
}
</script>
<style lang="scss" scoped>
    #democracy-vouchers-explainer{
        padding-left: 0;
        padding-right: 0;
        article{
            padding-top: 2rem;
        }
        img{
            margin-bottom: 2rem;
            width:90%;
        }
    }
</style>



