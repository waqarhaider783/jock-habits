<template>
  <div class="mainSection">
    <div class="mainWrapper">
      <div class="container">
        <!--Categories Sections Start -->
        <div class="categoriesSection">
          <div class="top">
            <h2 class="title">Laptop Reviews</h2>
          </div>
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

        <!--Categories Sections Ends -->

        <!--PCMAG Sections Start -->
        <div class="recentBlogs">
          <div class="top">
            <h2 class="title">LATEST PCMAG PICKS</h2>
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
        <!--PCMAG Sections Ends -->

        <!--Latest Review Sections Start -->
        <div class="latestReviews">
          <div class="top">
            <h2 class="title">LATEST Laptop Reviews</h2>
          </div>
          <div class="blogs">
            <blog-card-style1
              v-for="(postCard, index) in posts.slice(0, 8)"
              :key="index"
              :border="false"
              :url-link="postCard && postCard.slug"
              :title="postCard && postCard.title"
              :date="$utilsFN.formatDate(postCard.createdAt)"
              :source-url="
                postCard && postCard.imageUrl && postCard.imageUrl.publicUrl
              "
            />
          </div>
        </div>
        <!--Latest Review Sections Ends -->

        <!--Latest News Sections Start -->
        <div class="latestNews">
          <div class="top">
            <h2 class="title">LATEST News Laptop</h2>
          </div>
          <div class="blogs">
            <blog-card-style1
              v-for="(postCard, index) in posts.slice(0, 8)"
              :key="index"
              :border="false"
              :url-link="postCard && postCard.slug"
              :title="postCard && postCard.title"
              :date="$utilsFN.formatDate(postCard.createdAt)"
              :source-url="
                postCard && postCard.imageUrl && postCard.imageUrl.publicUrl
              "
            />
          </div>
        </div>
        <!--Latest News Sections Ends -->

        <!--How-TOS Sections Start -->
        <div class="howTos">
          <div class="top">
            <h2 class="title">LATEST Laptop how-tos</h2>
          </div>
          <div class="blogs">
            <blog-card-style1
              v-for="(postCard, index) in posts.slice(0, 8)"
              :key="index"
              :border="false"
              :url-link="postCard && postCard.slug"
              :title="postCard && postCard.title"
              :date="$utilsFN.formatDate(postCard.createdAt)"
              :source-url="
                postCard && postCard.imageUrl && postCard.imageUrl.publicUrl
              "
            />
          </div>
        </div>
        <!--How-TOS Sections Ends -->

        <!--Related Categories Sections Start -->
        <div class="catTags">
          <div class="top">
            <h2 class="title">Related Categories</h2>
          </div>
          <div class="cat">
            <post-tags-style1
              v-for="index in 8"
              :key="index"
              :background="false"
              cat-link="#_"
              cat-title="Laptop Accessories"
            />
          </div>
        </div>
        <!--Related Categories Sections Ends -->

        <!--Laptop Brands Sections Start -->
        <div class="brandTags">
          <div class="top">
            <h2 class="title">Popular Laptop Brands</h2>
          </div>
          <div class="brand">
            <post-tags-style1
              v-for="index in 10"
              :key="index"
              :background="false"
              cat-link="#_"
              cat-title="Laptop Accessories"
            />
          </div>
        </div>
        <!--Laptop Brands Sections Ends -->

        <!--Blog Style 2 Sections Start -->
        <div class="laptopStories">
          <div class="top">
            <h2 class="title">LATEST LAPTOP STORIES</h2>
          </div>
          <div class="blogs">
            <blog-card-style2
              v-for="(postCard, index) in posts"
              :key="index"
              :source-url="
                postCard && postCard.imageUrl && postCard.imageUrl.publicUrl
              "
              :title="postCard && postCard.title"
              :desc="postCard && postCard.excerpt"
              :time="$utilsFN.timeSince(postCard.createdAt)"
              :author="postCard && postCard.author && postCard.author.name"
              :store="postCard && postCard.brandName"
              :store-link="postCard && postCard.externalLinks"
              :read-link="postCard && postCard.slug"
            />
          </div>
          <!-- Pagination Section  Starts here-->
          <div class="pagination">
            <pagi-nation-style2
              :total-pages="11"
              :total="113"
              :per-page="10"
              :current-page="currentPage"
              @pagechanged="onPageChange"
            />
          </div>
          <!-- Pagination Section  Ends here-->
        </div>
        <!--Blog Style 2 Sections Ends -->

        <!-- Subscribe Section  Starts here-->
        <div class="subscribeSection">
          <div class="subscribe-box">
            <subscribe-style1 />
          </div>
        </div>
        <!-- Subscribe Section  Ends here-->

        <!--Coupons Sections Start -->
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
        <!--Coupons Sections Ends -->
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
  data() {
    return {
      currentPage: 1,
    }
  },
  mounted() {
    this.$store.dispatch(`app/${GET_ALL_POSTS_TOPICS}`, {
      showLoader: true, // to show loader
      slug: 'abcd', // actual payload
    })
  },
  methods: {
    onPageChange(page) {
      console.log(page)
      this.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
