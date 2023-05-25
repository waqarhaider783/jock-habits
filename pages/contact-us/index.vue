<template>
  <div class="mainSection">
    <div class="mainWrapper">
      <div class="container">
        <div class="pageTitle">
          <h2 class="contact">Contact</h2>
        </div>
        <!-- Page Top Section  Starts here-->
        <div class="desc">
          <p class="text">Get In Touch With Us</p>
          <div class="title">
            <h2 class="one">Make</h2>
            &nbsp;
            <h2 class="two">Online Enquiry</h2>
          </div>
          <subscribe-style2 />
        </div>
        <!-- Page Top Section  Ends here-->
        <!-- Subscribe Section  Starts here-->
        <div class="subscribeSection">
          <div class="subscribe-box">
            <subscribe-style1 />
          </div>
        </div>
        <!-- Subscribe Sectio  Starts here-->
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ALL_POSTS_TOPICS } from '~/store/types'
export default {
  name: 'IndexPage',
  middleware: 'authenticated',

  mounted() {
    this.$store.dispatch(`app/${GET_ALL_POSTS_TOPICS}`, {
      showLoader: true, // to show loader
      slug: 'abcd', // actual payload
    })
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
