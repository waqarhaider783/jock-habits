<template>
  <div class="mainSection">
    <div class="fullBanner">
      <div class="banner">
        <figure class="banner__image">
          <img
            src="https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </figure>
      </div>
    </div>
    <div class="mainWrapper">
      <div class="container">
        <!-- Category Section  Starts here-->
        <div class="categoriesSection">
          <h2 class="title">Categories</h2>
          <div class="categories">
            <category-style-1
              v-for="(cat, index) in categories"
              :key="index"
              :title="cat && cat.name"
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
              v-for="(postCard, index) in recommendedBlogs"
              :key="index"
              :border="true"
              :url-link="postCard && postCard.slug"
              :title="postCard && postCard.title"
              :source-url="
                postCard && postCard.imageUrl && postCard.imageUrl.publicUrl
              "
              :date="$utilsFN.formatDate(postCard.createdAt)"
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
              v-for="(postCard, index) in posts.slice(0, 8)"
              :key="index"
              :border="true"
              :url-link="postCard && postCard.slug"
              :title="postCard && postCard.title"
              :date="$utilsFN.formatDate(postCard.createdAt)"
              :source-url="
                postCard && postCard.imageUrl && postCard.imageUrl.publicUrl
              "
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
              v-for="(coupon, index) in coupons"
              :key="index"
              :deal="coupon && coupon.type === 'deal' && true"
              :sale-text="coupon && coupon.customTitle"
              :btn-link="coupon && coupon.id"
              :title="coupon && coupon.title"
              :use-text="Number(1400)"
              :source-url="
                coupon &&
                coupon.logo &&
                coupon.logo.publicUrl &&
                coupon.logo.publicUrl
              "
            />
          </div>
        </div>
        <!-- Coupon Section  Ends here-->
      </div>
    </div>
  </div>
</template>

<script>
import {
  GET_ALL_POSTS_TOPICS,
  GET_CATEGORIES,
  GET_RECOMMENDED_BLOGS,
  GET_POSTS,
  GET_POPULAR_COUPON,
} from '~/store/types'
export default {
  name: 'IndexPage',
  layout: 'dark',
  middleware: 'authenticated',

  async asyncData({ store }) {
    const categories = await Promise.all([
      store.dispatch(`app/${GET_CATEGORIES}`),
    ])

    const posts = await Promise.all([store.dispatch(`app/${GET_POSTS}`)])

    const recommendedBlogs = await Promise.all([
      store.dispatch(`app/${GET_RECOMMENDED_BLOGS}`),
    ])

    const coupons = await Promise.all([
      store.dispatch(`app/${GET_POPULAR_COUPON}`),
    ])

    return {
      categories: categories[0],
      posts: posts[0],
      recommendedBlogs: recommendedBlogs[0],
      coupons: coupons[0],
    }
  },

  mounted() {
    this.$store.dispatch(`app/${GET_ALL_POSTS_TOPICS}`, {
      showLoader: true, // to show loader
      slug: 'abcd', // actual payload
    })
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
