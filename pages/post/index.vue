<template>
  <div class="mainSection">
    <div class="mainWrapper">
      <div class="container">
        <div class="categoriesSection">
          <div class="top">
            <h2 class="title">Picks the Best Products</h2>
            <p class="desc">
              The KD 14’s traction has been amazing if I contrast it to Nike Air
              Zoom GT Cut although cushion covering in Air Zoom GT Cut was on
              next level of ease with three layers. The shoe performed extremely
              well outdoors as well as indoors. They are my go-to shoe, at least
              until I get my new Puma Clyde All Pro.
            </p>
          </div>
          <div class="categories">
            <category-style-1
              v-for="(cat, index) in categories"
              :key="index"
              :title="cat && cat.name"
              :cat-link="cat && cat.slug"
              :source-url="cat && cat.imageUrl && cat.imageUrl.publicUrl"
            />
          </div>
        </div>

        <!-- Recent Blog Section  Starts here-->
        <div class="recentBlogs">
          <!-- <div class="top">
            <h2 class="title">Recent Blogs</h2>
            <nuxt-link to="#_" class="viewBtn">View All</nuxt-link>
          </div> -->
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

        <!-- Recent Blog Section  Ends here-->

        <!-- Subscribe Section  Starts here-->
        <div class="subscribeSection">
          <div class="subscribe-box">
            <subscribe-style1 />
          </div>
        </div>
        <!-- Subscribe Section  Ends here-->

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
      </div>
    </div>
  </div>
</template>

<script>
import {
  GET_ALL_POSTS_TOPICS,
  GET_CATEGORIES,
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
    const coupons = await Promise.all([
      store.dispatch(`app/${GET_POPULAR_COUPON}`),
    ])

    return { categories: categories[0], posts: posts[0], coupons: coupons[0] }
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
