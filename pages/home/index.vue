<template>
  <div class="mainSection">
    <banner-style1
      url-link="#_"
      source-url="https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    />
    <div class="mainWrapper">
      <div class="container">
        <!-- Category Section  Starts here-->
        <div class="categoriesSection">
          <h2 class="title">Categories</h2>
          <div class="categories">
            <category-style-1
              v-for="index in 12"
              :key="index"
              title="laptop"
              cat-link="#_"
              source-url="https://www.transparentpng.com/thumb/laptop/kWJXbS-laptops-png-images-notebook-png-image-laptop.png"
            />
          </div>
        </div>
        <!-- Category Section  Ends here-->

        <!-- Recommended Blogs Section  Starts here-->
        <div class="recommendedBlogs">
          <div class="top">
            <h2 class="title">Recommended Blogs</h2>
            <nuxt-link to="#_" class="viewBtn">View All</nuxt-link>
          </div>
          <div class="blogs">
            <blog-card-style1
              v-for="index in 5"
              :key="index"
              :border="true"
              url-link="#_"
              title="Nike KD 14 Performance Review"
              date="Septemeber 28, 2020"
              source-url="https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </div>
        </div>

        <!-- Recommended Blogs Section  Ends here-->

        <!-- Subscribe Section  Starts here-->
        <div class="subscribeSection">
          <div class="subscribe-box">
            <subscribe-style1 />
          </div>
        </div>
        <!-- Subscribe Section  Ends here-->

        <!-- Recent Blogs Section  Starts here-->
        <div class="recentBlogs">
          <div class="top">
            <h2 class="title">Recent Blogs</h2>
            <nuxt-link to="#_" class="viewBtn">View All</nuxt-link>
          </div>
          <div class="blogs">
            <blog-card-style1
              v-for="index in 8"
              :key="index"
              :border="true"
              url-link="#_"
              title="Nike KD 14 Performance Review"
              date="Septemeber 28, 2020"
              source-url="https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </div>
        </div>
        <!-- Recent Blogs Section  Ends here-->

        <!-- Coupon Section  Starts here-->
        <div class="couponSection">
          <div class="top">
            <h2 class="title">Popular Deals and Coupons</h2>
            <nuxt-link to="#_" class="viewBtn">View All</nuxt-link>
          </div>
          <div class="coupons">
            <coupon-card-style1
              v-for="index in 2"
              :key="index"
              :deals="true"
              sale-text="Sale"
              btn-link="#_"
              title="15% Off Sitewide + Free Shipping on $75+ Authentic Product"
              :use-text="Number(1400)"
              source-url="https://germainmaureau.com/app/uploads/2020/05/Amazon-logo.png"
            />
            <coupon-card-style1
              v-for="index in 2"
              :key="index"
              :codes="true"
              sale-text="Sale"
              btn-link="#_"
              title="15% Off Sitewide + Free Shipping on $75+ Authentic Product"
              :use-text="Number(1400)"
              source-url="https://germainmaureau.com/app/uploads/2020/05/Amazon-logo.png"
            />
          </div>
        </div>
        <!-- Coupon Section  Ends here-->
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
